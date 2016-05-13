Dialog=function(e,j){this.dialogConfig=e;this.options=$.extend(e.dialogOptions,j);this.previousFocus=this.previousDialog=this.dialogContent=this.$element=this.element=this.headerElement=this.titleElement=this.title=null;this.maximized=this.pendingRefresh=!1;this.currentMenuElement=this.currentViewElement=null;this.keyboardShown=!1;this.inputFields={};this.hiddenFields={};this.errorFields={};this.originalData={};this.containers={};this.passwordInputs=[];this.leftMenu=null;this.dynamicHeight=LPTools.getOption(this.options,
"dynamicHeight",!1);this.responsive=LPTools.getOption(this.options,"responsive",!0);this.title=LPTools.getOption(this.options,"title",null);this.overlayDialog=LPTools.getOption(this.options,"overlayDialog",!1);this.backButton=this.nextButton=this.actionButtonContainer=this.buttonContainer=this.blurOverlay=this.inProcessOverlay=null;this.buttonHeight=this.headerHeight=0;this.excludedActions={};for(var d=LPTools.getOption(this.options,"excludedActions",[Constants.ACTION_EDIT]),k=0,g=d.length;k<g;++k)this.excludedActions[d[k]]=
!0;this.setupComplete=!1;var l=this;l.checkViewPasswordHandler=function(d){l.checkViewPassword(d)}};
(function(e){var j=!1,d=[],k=!1,g={},l=e.body,m=!1,h=$(e.body);Dialog.prototype.DIALOG_FIELD="dialogField";Dialog.prototype.RIGHT_ALIGN=0;Dialog.prototype.CENTER_ALIGN=1;Dialog.prototype.LEFT_ALIGN=2;e.body.appendChild(LPTools.createElement("div",{id:"dialogLoadingOverlay","class":"overlay"}));e.body.appendChild(function(){var a=LPTools.createElement("div",{id:"dialogOverlay","class":"overlay"});$(a).bind("click",function(){Dialog.prototype.closeAllDialogs()});return a}());Topics.get(Topics.ENTER).subscribe(function(a){0<
d.length&&("TEXTAREA"!==a.target.nodeName&&"BUTTON"!==a.target.nodeName)&&d[d.length-1].submit()});Topics.get(Topics.REQUEST_START).subscribe(function(a){if(0<d.length&&LPTools.getOption(a,"dialogRequest",!0)){var b=d[d.length-1];b.showInProcessOverlay();g[a.requestID]=b}});Topics.get(Topics.REQUEST_SUCCESS).subscribe(function(a){if(LPTools.getOption(a,"dialogRequest",!0)){var b=g[a.requestID];b&&(b.hideInProcessOverlay(),LPTools.getOption(a.requestSuccessOptions,"closeDialog",!0)&&b.closeOnSuccess(),
delete g[a.requestID])}});Topics.get(Topics.REQUEST_ERROR).subscribe(function(a){if(LPTools.getOption(a,"dialogRequest",!0)){var b=g[a.requestID];b&&(b.hideInProcessOverlay(),delete g[a.requestID])}});var n=null;Topics.get(Topics.DIALOG_LOADING).subscribe(function(){m=!0;clearTimeout(n);n=setTimeout(function(){h.addClass("dialogLoading")},250)});Topics.get(Topics.DIALOG_LOADED).subscribe(function(){m=!1;h.removeClass("dialogLoading");clearTimeout(n)});Dialog.prototype.closeAllDialogs=function(a){for(;0<
d.length&&d[d.length-1].close(a););};Dialog.prototype.getCurrentDialog=function(){return 0<d.length?d[d.length-1]:null};Dialog.prototype.closeInProcessDialogs=function(){for(var a in g)g[a].close(!0)};Dialog.prototype.refreshOpenDialogs=function(){for(var a=[],b=0,c=d.length;b<c;++b){var f=d[b],p=!1,e;for(e in g)if(g[e]===f){p=!0;break}p||(f=f.refresh())&&a.push(f)}LPTools.openAlerts(a)};Dialog.prototype.getDialogCount=function(){return d.length};Dialog.prototype.setIsDialogWindow=function(a){j=a};
Dialog.prototype.isDialogWindow=function(){return j};Dialog.prototype.closeOnSuccess=function(){this.close(!0)};Dialog.prototype.refresh=function(){for(var a in this.inputFields){var b=this.inputFields[a];"function"===typeof b.refresh&&b.refresh()}};Dialog.prototype.showInProcessOverlay=function(){null===this.inProcessOverlay&&(this.inProcessOverlay=LPTools.createElement("div","dialogInProcessOverlay"),this.element.appendChild(this.inProcessOverlay));this.$element.addClass("inProcess")};Dialog.prototype.hideInProcessOverlay=
function(){this.$element.removeClass("inProcess")};Dialog.prototype.showBlurOverlay=function(){null===this.blurOverlay&&(this.blurOverlay=LPTools.createElement("div","dialogBlurOverlay"),this.element.appendChild(this.blurOverlay));this.$element.addClass("blurred")};Dialog.prototype.hideBlurOverlay=function(){this.$element.removeClass("blurred")};Dialog.prototype.addHeaderButton=function(a,b,c){void 0===this.headerButtons&&(this.headerButtons=LPTools.createElement("div","dialogHeaderButtons"),a.append(this.headerButtons),
a.addClass("dialogHeaderButtonsEnabled"));$(b).addClass("dialogHeaderButton");LPPlatform.addEventListener(b,"click",c);this.headerButtons.appendChild(b)};Dialog.prototype.maximize=function(){this.$element.addClass("maximized");this.maximizeButton.setAttribute("title",Strings.Vault.MINIMIZE);this.maximized=!0};Dialog.prototype.minimize=function(){this.$element.removeClass("maximized");this.maximizeButton.setAttribute("title",Strings.Vault.MAXIMIZE);this.maximized=!1;this.setDynamicHeight()};Dialog.prototype.loadDialog=
function(a){var b=this.dialogConfig.getID()+"Title";this.element=LPTools.createElement("div",{"class":function(a){var b=["dialog"];j&&!a.isOverlay()&&b.push("dialogWindow");a.responsive&&b.push("responsive");return b}(this),role:"dialog","aria-labelledby":b});this.$element=$(this.element);var c=["dialogHeader"],c=c.concat(LPTools.getOption(this.options,"additionalHeaderClasses",[]));this.headerElement=LPTools.createElement("div",c);c=LPTools.createElement("div","dialogHeaderInner");this.titleElement=
LPTools.createElement("span",{"class":"dialogHeaderTitle",id:b});c.appendChild(this.titleElement);this.headerElement.appendChild(c);this.element.appendChild(this.headerElement);this.titleElement=$(this.titleElement);this.headerElement=$(this.headerElement);if((this.isOverlay()||!j)&&LPTools.getOption(this.options,"maximizeButtonEnabled",!1))this.maximizeButton=LPTools.createElement("button",{title:Strings.Vault.MAXIMIZE,"class":"dialogMaximizeButton"}),this.addHeaderButton(this.headerElement,this.maximizeButton,
this.createHandler(function(){this.maximized?this.minimize():this.maximize()}));(this.isOverlay()||!j)&&LPTools.getOption(this.options,"closeButtonEnabled",!1)&&this.addHeaderButton(this.headerElement,LPTools.createElement("button",{title:Strings.Vault.CLOSE,"class":"dialogCloseButton"}),this.createHandler(this.close));this.dialogContent=LPTools.createElement("div",LPTools.getOption(this.options,"buttonsInsideContent",!1)?"dialogContent":"dialogContent dialogContentFixed");this.element.appendChild(this.dialogContent);
this.dialogContent=$(this.dialogContent);this.dialogConfig.parentElementID?e.getElementById(this.dialogConfig.parentElementID).appendChild(this.element):l.appendChild(this.element);this.element.setAttribute("id",this.dialogConfig.getID());this.dialogConfig.load(this.dialogContent,a)};Dialog.prototype.getNextViewButton=function(){return this.nextButton};Dialog.prototype.setupButtons=function(a){if(0===a.find(".buttons").length){a=["buttons"];LPTools.getOption(this.options,"buttonsInsideContent",!1)||
(a=a.concat(["buttonsFixed"]));this.buttonContainer=LPTools.createElement("div",a);this.buttonContainer=$(this.buttonContainer);a=["nbtn"];LPTools.getOption(this.options,"largeButtons",!1)||a.push("btn_midi");this.nextButton=LPTools.createElement("button",a.concat("rbtn"),LPTools.getOption(this.options,"nextButtonText",Strings.Vault.SAVE));this.nextButton=$(this.nextButton);var b=LPTools.getOption(this.options,"views",null);b&&(this.views=b,this.currentViewIndex=0,b=this.getNextViewButton(),b!==this.nextButton&&
b.bind("click",this.createHandler(this.showNextView)));this.nextButton.bind("click",this.createHandler(this.submit));this.backButton=LPTools.createElement("button",a.concat("wbtn"),LPTools.getOption(this.options,"backButtonText",Strings.Vault.CANCEL));this.backButton=$(this.backButton);this.backButton.bind("click",this.createHandler(this.close));a=LPTools.getOption(this.options,"buttonAlign",this.CENTER_ALIGN);this.buttonContainer.append(this.backButton);this.buttonContainer.append(this.nextButton);
a===this.RIGHT_ALIGN?this.buttonContainer.addClass("rightButtons"):a===this.CENTER_ALIGN&&this.buttonContainer.addClass("centerButtons");LPTools.getOption(this.options,"buttonsInsideContent",!1)?this.dialogContent.append(this.buttonContainer):this.$element.append(this.buttonContainer)}else this.buttonContainer=$()};Dialog.prototype.applyToContainers=function(a){for(var b in this.containers){var c=this.containers[b];if(c)switch(typeof a){case "string":c[a].apply(c);break;case "function":a.call(this,
c)}}};Dialog.prototype.destroyContainers=function(){this.applyToContainers("destruct");for(var a in this.containers)this.containers[a]=null};Dialog.prototype.createHandler=function(a){for(var b=[],c=1,f=arguments.length;c<f;++c)b.push(arguments[c]);var d=this;return function(){a.apply(d,b)}};Dialog.prototype.createDynamicHandler=function(a){var b=this;return function(){a.apply(b,arguments)}};Dialog.prototype.resetScroll=function(){this.$element.find(".dialogRightPane").scrollTop(0)};Dialog.prototype.leftMenuChange=
function(){};Dialog.prototype.setupLeftMenu=function(a){this.leftMenu=a.find(".dialogLeftMenu");if(0<this.leftMenu.length){var b=function(a,b,c){return function(){a.currentViewElement&&a.currentViewElement.removeClass("selected");a.currentMenuElement&&a.currentMenuElement.removeClass("selected");a.currentViewElement=c;a.currentMenuElement=b;a.currentViewElement.addClass("selected");a.currentMenuElement.addClass("selected");a.resetScroll();a.leftMenuChange(b)}};a=a.find(".dialogLeftMenuView");for(var c=
this.leftMenu.get(0).children,f=0,d=c.length;f<d;++f){var e=$(c[f]),g=b(this,e,$(a[f]));e.bind("click",g)}}};Dialog.prototype.selectFirstLeftMenuItem=function(){this.leftMenu&&this.leftMenu.find(":visible").first().trigger("click")};Dialog.prototype.addZebraStriping=function(a){a=a.find(".settings");for(var b=0,c=a.length;b<c;++b)LPTools.addZebraStriping(a[b])};Dialog.prototype.show=function(){this.$element.show()};Dialog.prototype.hide=function(){this.$element.hide()};Dialog.prototype.initialize=
function(a){this.setupButtons(a);this.addZebraStriping(a);this.setupLeftMenu(a);var b=this,c=a.find(".advancedOptionsLabel");c.length&&(c.attr("aria-expanded","false"),b.advancedOptionsLabel=c,b.advancedOptionsShown=!1);c.bind("click",b.createHandler(b.toggleAdvancedOptions));a.bind("click",function(){b.applyToContainers("clearSelected")});a.find(".help").bind("click",function(a){bg.openhelp(a.target.getAttribute("help-section"))});this.initializeInputObjects(a);this.intializeFocusHandlers(a);this.show();
LPTools.getOption(this.options,"buttonsInsideContent",!1)||(this.buttonHeight=this.buttonContainer.outerHeight(),this.dialogContent.css("bottom",this.buttonHeight));this.headerHeight=this.headerElement?this.headerElement.outerHeight():0;this.responsiveTextAreas=[];this.responsiveTextAreasSelector=this.$element.find(".responsiveTextArea");a=q(this.responsiveTextAreasSelector);for(var c=0,f=this.responsiveTextAreasSelector.length;c<f;++c){var d=$(this.responsiveTextAreasSelector[c]);this.responsiveTextAreas.push({element:d,
ratio:100*(d.outerHeight()/a)})}this.hide()};Dialog.prototype.toggleKeyboard=function(){this.keyboardShown?this.disableVirtualKeyboard():this.enableVirtualKeyboard()};var r=function(){this.focus();this.$element.addClass("keyboard");VirtualKeyboard.show(e.activeElement,l);this.keyboardShown=!0};Dialog.prototype.enableVirtualKeyboard=function(){if("undefined"===typeof VirtualKeyboard){var a=LPTools.createElement("script",{type:"text/javascript",src:LPPlatform.getBaseURL()+"/js/virtualkeyboard/vk_loader.js?vk_layout=US%20US&vk_skin=air_small"});
e.head.appendChild(a);var b=setInterval(this.createHandler(function(){"undefined"!==typeof VirtualKeyboard&&(r.call(this),this.$element.find(".dialogInput").bind("focus",function(a){VirtualKeyboard.attachInput(a.target)}),clearInterval(b))}),100)}else r.call(this)};Dialog.prototype.disableVirtualKeyboard=function(){"undefined"!==typeof VirtualKeyboard&&(VirtualKeyboard.hide(),this.$element.removeClass("keyboard"),this.keyboardShown=!1)};var s=function(a){a=a.find(".dialogInput,button");return 2<a.length?
a:null};Dialog.prototype.intializeFocusHandlers=function(a){var b=LPTools.createElement("button","focusCycler");LPPlatform.addEventListener(b,"focus",function(){var b=s(a);b&&b[1].focus()});a.append(b);b=LPTools.createElement("button","focusCycler");LPPlatform.addEventListener(b,"focus",function(){var b=s(a);b&&b[b.length-2].focus()});a.prepend(b)};Dialog.prototype.toggleAdvancedOptions=function(){this.advancedOptionsShown?this.hideAdvancedOptions():this.showAdvancedOptions()};Dialog.prototype.showAdvancedOptions=
function(){this.advancedOptionsLabel.attr("aria-expanded","true");this.advancedOptionsLabel.addClass("open");this.advancedOptionsLabel.next().show();this.setDynamicHeight();this.advancedOptionsShown=!0};Dialog.prototype.hideAdvancedOptions=function(){this.advancedOptionsLabel.attr("aria-expanded","false");this.advancedOptionsLabel.removeClass("open");this.advancedOptionsLabel.next().hide();this.setDynamicHeight();this.advancedOptionsShown=!1};Dialog.prototype.showNextView=function(){var a=this.getData();
this.performValidate(a)&&this.setNextView(this.currentViewIndex+1)};Dialog.prototype.setNextView=function(a){if(0<=a&&a<this.views.length&&a!==this.currentViewIndex){var b=this.views[a],c=this.views[this.currentViewIndex];void 0===c.title&&(c.title=this.getTitle());void 0===c.cancelButtonText&&(c.cancelButtonText=this.backButton.text());$(c.selector).hide();this.setTitle(b.title);this.backButton.text(void 0===b.cancelButtonText?Strings.translateString("Back"):b.cancelButtonText);$(b.selector).show();
0===a?(this.backButton.unbind("click"),this.backButton.bind("click",this.createHandler(this.close))):(this.backButton.unbind("click"),this.backButton.bind("click",this.createHandler(this.showPreviousView)));this.currentViewIndex=a;LPTools.getOption(b,"dynamicHeight",!0)&&this.setDynamicHeight();this.focus()}};Dialog.prototype.showPreviousView=function(){this.setNextView(this.currentViewIndex-1)};Dialog.prototype.initializeInputFields=function(a,b){for(var c=0,f=a.length;c<f;++c){var d=a[c],e=d.getAttribute(this.DIALOG_FIELD),
g=this.inputFields[e];void 0===g?this.inputFields[e]=b.call(this,d,e):"radio"===d.getAttribute("type")&&(e=d.getAttribute("name"))&&g.addRadioInput(e,d)}};var t=function(a){var b=LPTools.createTimezoneSelect();a.parentElement.insertBefore(b,a);a.parentElement.removeChild(a);return new DialogInput.Input(b)},u=function(a,b){var c={};$(a).hasClass("monthYearDate")&&(c.includeDay=!1);c=new DialogInput.NumericDateInput(b,c);a.parentElement.insertBefore(c.buildInput(),a);a.parentElement.removeChild(a);
return c};Dialog.prototype.initializeInputObjects=function(a){this.initializeInputFields(a.find("input.selectDropdown"),function(a){return new DropdownInput(a)});this.initializeInputFields(a.find(".typeaheadDropdown"),function(a){return new TypeaheadDropdown(a)});this.initializeInputFields(a.find(".timezoneDropdown"),t);this.initializeInputFields(a.find(".dateInput"),u);this.initializeInputFields(a.find("select["+this.DIALOG_FIELD+"]"),function(a){return new DialogInput.NativeSelect(a,this)});this.initializeInputFields(a.find("input["+
this.DIALOG_FIELD+"],textarea["+this.DIALOG_FIELD+"]"),function(a){a=new DialogInput.Input(a,this);var c=a.getElement();c.hasClass("passwordToggle")&&c.LP_addPasswordEye({checkPermissionHandler:this.checkViewPasswordHandler,includeGenerateButton:c.hasClass("generate")});return a})};Dialog.prototype.checkViewPassword=function(a){a()};Dialog.prototype.close=function(a){if(LPTools.getOption(this.options,"confirmOnClose",!0)&&(void 0===a||!a)&&this.isModified())return dialogs.confirmation.open({title:Strings.translateString("Close"),
text:Strings.translateString("Changes you have made have not been saved. Are you sure you want to close?"),handler:this.createHandler(this.close,!0)}),!1;"INPUT"===e.activeElement.nodeName.toUpperCase()&&"password"===e.activeElement.type&&e.activeElement.blur();this.clearFields();this.destroyContainers();this.hide();a=0;for(var b=d.length;a<b;++a)if(this===d[a]){d.splice(a,1);break}this.disableVirtualKeyboard();0<d.length?this.focusPreviousDialog():(h.removeClass("dialogState"),h.css("min-width",
""));this.previousFocus&&this.previousFocus.focus();this.hideBlurOverlay();this.hideInProcessOverlay();this.setupComplete=!1;"function"===typeof this.data.onClose&&this.data.onClose.apply(this);Topics.get(Topics.DIALOG_CLOSE).publish(this);return!0};Dialog.prototype.differs=function(a,b){if(a&&b){for(var c in a){var f=a[c];if("object"===typeof f){if(this.differs(f,b[c]))return!0}else if(f!==b[c])return!0}for(var d in b)if(void 0===a[d])return!0;return!1}return!0};Dialog.prototype.getChanges=function(a){var b=
{},c;for(c in a){var f=this.originalData[c],d=a[c];"object"===typeof f?(f=this.getChanges(f,d),LPTools.hasProperties(f)&&(b[c]=f)):f!==d&&(b[c]=d)}return b};Dialog.prototype.isModified=function(){var a=this.getData(),b=this.getOriginalData();return this.differs(b,a)};Dialog.prototype.getOriginalData=function(){return this.originalData};Dialog.prototype.clearFields=function(){for(var a in this.inputFields)this.inputFields[a].clear();this.clearErrors();this.originalData={};this.originalFormData={};
this.hiddenFields={}};Dialog.prototype.addError=function(a,b){var c=this.inputFields[a];this.errorFields[a]=c;c.addError(this,b)};Dialog.prototype.populateFields=function(a){for(var b in a){var c=this.inputFields[b],d=a[b];c?c.setValue(d):this.hiddenFields[b]=d}};Dialog.prototype.getData=function(){var a={},b;for(b in this.inputFields)a[b]=this.inputFields[b].getValue();for(var c in this.hiddenFields)a[c]=this.hiddenFields[c];return a};Dialog.prototype.initFunction=function(a){var b=this;return function(){Strings.translate(b.dialogContent.get(0));
b.initialize(b.$element);b.preSetup(a);b.setup(b.$element,a);b.postSetup(a)}};Dialog.prototype.open=function(a){d.push(this);this.data=a=a||{};null===this.element?this.loadDialog(this.initFunction(a)):(this.preSetup(a),this.setup(this.$element,a),this.postSetup(a))};Dialog.prototype.preSetup=function(a){a=LPTools.getOption(a,"preSetup",null);"function"===typeof a&&a(this)};Dialog.prototype.postSetup=function(a){this.setupComplete=!0;this.originalData=this.getData();a.virtualKeyboard&&this.enableVirtualKeyboard();
a=LPTools.getOption(a,"postSetup",null);"function"===typeof a&&a(this);this.adjustView()};Dialog.prototype.adjustView=function(){for(var a in this.inputFields){var b=this.inputFields[a];"function"===typeof b.adjustView&&b.adjustView()}};Dialog.prototype.getZIndex=function(){var a=this.$element.css("z-index");return"auto"===a?0:parseInt(a)};Dialog.prototype.useDynamicHeignt=function(a){this.dynamicHeight&&!a&&this.element.removeAttribute("style");this.dynamicHeight=a};var q=function(a){for(var b=0,
c=0,d=a.length;c<d;++c)b+=$(a[c]).outerHeight();return b},v=window.outerHeight-window.innerHeight,w=window.outerWidth-window.innerWidth;Dialog.prototype.setDynamicHeight=function(){if(this.dynamicHeight){this.show();this.dialogContent.css("position","static");this.$element.css(this.responsive?"max-height":"height",this.dialogContent.outerHeight()+this.headerHeight+this.buttonHeight);for(var a=this.dialogContent.height()-q(this.responsiveTextAreasSelector),b=0,c=this.responsiveTextAreas.length;b<c;++b){var d=
this.responsiveTextAreas[b];d.element.css("height","calc("+d.ratio+"% - "+a+"px)")}this.dialogContent.css("position","")}!this.responsive&&(j&&!this.isOverlay())&&(h.css("overflow","hidden"),window.resizeTo(this.$element.outerWidth()+w,this.$element.outerHeight()+v),h.css("overflow",""));"function"===typeof this.data.onResize&&this.data.onResize.call(this,this.$element.outerHeight(),this.$element.outerWidth())};Dialog.prototype.isOverlay=function(){return this.overlayDialog&&(0<d.length&&d[0]!==this||
k)};Dialog.prototype.blurPreviousDialog=function(){this.previousDialog&&(this.isOverlay()?this.previousDialog.showBlurOverlay():this.previousDialog.hide())};Dialog.prototype.focusPreviousDialog=function(){this.previousDialog&&(this.isOverlay()?this.previousDialog.hideBlurOverlay():(this.previousDialog.show(),this.previousDialog.setMinWidth()),this.previousDialog.setDynamicHeight(),this.previousDialog=null)};Dialog.prototype.focus=function(){var a=this.$element.find(".dialogInput:visible").first();
0<a.length?a.focus():this.nextButton&&this.nextButton.focus()};Dialog.prototype.setup=function(a,b){LPTools.getOption(this.options,"hideHeader",!1)?(this.headerElement.hide(),this.dialogContent.css("top","")):(this.dialogContent.css("top",this.headerHeight),this.headerElement.LP_removeAttr("style"));var c=l;this.dialogConfig.parentElementID&&(c=e.getElementById(this.dialogConfig.parentElementID));this.element.parentElement!==c&&c.appendChild(this.element);this.defaultFields(b);"undefined"!==typeof LPProxy&&
LPTools.parseUserSpecificMenu(a.get(0),LPProxy.getAccountClass());this.setTitle(b.title||this.title);this.views&&(this.views[0].title=b.title,this.setNextView(0));this.setDynamicHeight();this.previousFocus=e.activeElement;1<d.length&&(this.previousDialog=d[d.length-2],c=this.previousDialog.getZIndex(),a.css("z-index",c+1),this.blurPreviousDialog());1===d.length&&h.addClass("dialogState");LPTools.getOption(b,"show",!0)&&a.show();this.focus();this.setMinWidth();this.resetScroll();this.selectFirstLeftMenuItem();
m&&Topics.get(Topics.DIALOG_LOADED).publish();Topics.get(Topics.DIALOG_OPEN).publish(this)};Dialog.prototype.setMinWidth=function(){var a=parseInt(this.$element.css("min-width"));0<a?h.css("min-width",a+40):h.css("min-width","")};Dialog.prototype.clearErrors=function(){for(var a in this.inputFields)this.inputFields[a].clearErrors();this.errorFields={};this.leftMenu&&this.leftMenu.children().removeClass("error")};Dialog.prototype.performValidate=function(a){this.clearErrors();a=this.validate(a);if(!a&&
(this.setDynamicHeight(),0<this.leftMenu.length))for(var b in this.errorFields){var c=this.errorFields[b].getElement().closest(".dialogLeftMenuView");if(0<c.length)for(var c=c.get(0),d=c.parentElement,e=0,g=d.children.length;e<g;++e)d.children[e]===c&&this.leftMenu.children().eq(e).addClass("error")}return a};Dialog.prototype.validate=function(a){var b=!0,c;for(c in this.inputFields)b=this.inputFields[c].validate(this,c,a[c])&&b;return b};Dialog.prototype.submit=function(){try{if(this.getNextViewButton()===
this.nextButton&&this.views&&this.currentViewIndex<this.views.length-1)this.showNextView();else{var a=this.getData();if(this.performValidate(a)){var b=LPTools.getOption(this.data,"handleSubmit",null);"function"===typeof b?b(a,this.data):this.handleSubmit(a,this.data)}}}catch(c){LPPlatform.logException(c)}};Dialog.prototype.getTitle=function(){return this.title};Dialog.prototype.setTitle=function(a){a&&(this.title=a,this.titleElement&&!LPTools.getOption(this.options,"hideHeaderTitle",!1)&&this.titleElement.text(a),
this.titleElement.text().trim()?this.headerElement.addClass("titleEnabled"):this.headerElement.removeClass("titleEnabled"))};Dialog.prototype.defaultFields=function(a){for(var b in this.inputFields){var c=this.inputFields[b];"function"===typeof c.default?c.default():c.setValue("")}this.populateFields(LPTools.getOption(a,"defaultData",{}))};VaultItemDialog=function(a,b){Dialog.call(this,a,b);var c=this;c.itemButtonHandler=function(a){a=LPTools.getAttribute(c.actionButtonContainer.get(0),a.target,"vaultaction");
c.vaultItem.handleClickEvent(a,{itemsForAction:[c.vaultItem]})}};VaultItemDialog.prototype=Object.create(Dialog.prototype);VaultItemDialog.prototype.constructor=VaultItemDialog;VaultItemDialog.prototype.refresh=function(){Dialog.prototype.refresh.apply(this,arguments);if(this.data.vaultItem&&!this.pendingRefresh){if(this.data.vaultItem.removed){this.pendingRefresh=!0;var a=this;return{type:"alert",title:Strings.translateString("Deleted"),text:Strings.translateString("%1 has been deleted. This dialog will be closed.",
a.data.vaultItem.toString()),handler:function(){a.close(!0);a.pendingRefresh=!1}}}var b=DialogInput.getProperties(this.inputFields),c=this.data.vaultItem.getFormData(b);if(this.differs(this.originalFormData,c)){this.pendingRefresh=!0;var d=this;return{type:"confirmation",title:Strings.translateString("Updated"),text:Strings.translateString("%1 has been updated. Would you like to update this dialog with the latest data?",d.data.vaultItem.toString()),handler:function(){d.populateFields(c);d.originalData=
d.getData();d.pendingRefresh=!1}}}}};VaultItemDialog.prototype.open=function(a){a=a||{};if("string"===typeof a.vaultItem&&"function"===typeof a.sourceFunction&&(a.vaultItem=a.sourceFunction(a.vaultItem),void 0===a.dialogActions)){var b=a.vaultItem.newDisplayObject();a.dialogActions=b.getDialogActions()}a.vaultItem&&(a.actions=this.getItemButtonActions(a));a.vaultItem?(k=!0,a.vaultItem.passwordProtect(this.createHandler(function(){k=!1;Dialog.prototype.open.call(this,a)}))):Dialog.prototype.open.call(this,
a)};VaultItemDialog.prototype.getItemButtonActions=function(a){if(a.dialogActions){for(var b=[],c=0,d=a.dialogActions.length;c<d;++c){var e=a.dialogActions[c];void 0===this.excludedActions[e]&&b.push(e)}return b}};VaultItemDialog.prototype.handleSubmit=function(a){this.vaultItem?this.isModified()?this.save(this.vaultItem,a):this.close(!0):this.add(a)};VaultItemDialog.prototype.save=function(a,b){a.saveFromDialog(b,null,this.data.saveOptions)};VaultItemDialog.prototype.setup=function(a,b){Dialog.prototype.setup.apply(this,
arguments);if(this.vaultItem=LPTools.getOption(b,"vaultItem",void 0))this.originalFormData=this.vaultItem.getFormData(DialogInput.getProperties(this.inputFields)),this.populateFields(this.originalFormData);this.buildActionButtons(LPTools.getOption(b,"actions",null))};VaultItemDialog.prototype.buildActionButtons=function(a){this.actionButtonContainer&&(this.actionButtonContainer.unbind("click"),this.actionButtonContainer.empty());if(a){null===this.actionButtonContainer&&(this.actionButtonContainer=
LPTools.createElement("div","dialogItemButtons"),this.actionButtonContainer=$(this.actionButtonContainer),this.buttonContainer.prepend(this.actionButtonContainer));this.actionButtonContainer.bind("click",this.itemButtonHandler);for(var b=0,c=a.length;b<c;++b)this.actionButtonContainer.append(LPTools.buildItemButton(a[b]))}};VaultItemDialog.prototype.add=function(){throw"This should be overridden in the child class";}})(document);
