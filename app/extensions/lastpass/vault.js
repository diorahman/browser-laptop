LPVault={};
(function(d,c,ya){var za=Strings.translateString("Folder (a-z)"),Aa=Strings.translateString("Folder (z-a)"),w=Strings.translateString("Name (a-z)"),x=Strings.translateString("Name (z-a)"),N=Strings.translateString("Most Recent"),Ba=Strings.translateString("Sender (a-z)"),Ca=Strings.translateString("Sender (z-a)"),Da=Strings.translateString("Recipient (a-z)"),Ea=Strings.translateString("Recipient (z-a)"),G=[za,Aa,w,x,N],gb=[w,x],hb=[w,x,Da,Ea,N],ib=[w,x,Ba,Ca,N],jb=[w,x],kb=[w,x],l=function(a){this.options=a};
l.prototype.getAddElement=function(){void 0===this.addElement&&(this.addElement=LPTools.createElement("div","addMenuItem"),this.build(this.addElement,this.options.icon?this.options.icon:"images/vault_4.0/Add.png"));return this.addElement};l.prototype.build=function(a,b){a.appendChild(LPTools.createElement("span",null,Strings.Vault[this.options.text]));var c=LPTools.createElement("div"),g=LPTools.createElement("div"),q=LPTools.createElement("img",{src:b});a.appendChild(c);c.appendChild(g);g.appendChild(q);
$(a).bind("click",this.options.func)};l.prototype.getMenuElement=function(){void 0===this.menuElement&&(this.menuElement=LPTools.createElement("li","addMenuItem"),this.build(this.menuElement,this.options.additionalIcon));return this.menuElement};var mb=new l({text:"ADD_SITE",icon:"images/vault_4.0/Sites_Active.png",func:function(){c.openSiteDialog()}}),ea=new l({text:"ADD_NOTE",icon:"images/vault_4.0/Notes_Active.png",additionalIcon:"images/vault_4.0/Add_Secure_Note.png",func:function(){c.openNoteDialog()}}),
nb=new l({text:"ADD_FORM_FILL",icon:"images/vault_4.0/Form_Fills_Active.png",func:function(){c.openFormFillDialog()}}),ob=new l({text:"ADD_SHARED_FOLDER",func:function(){c.openCreateSharedFolderDialog()}}),pb=new l({text:"ADD_IDENTITY",func:function(){c.openIdentityDialog()}}),qb=new l({text:"GIVE_EMER_ACCESS",func:function(){dialogs.addEmergencyAccess.open()}}),rb=new l({text:"ADD_CREDIT_MON",func:function(){c.openCreateCreditMonitoringDialog()}}),Fa=new l({text:"ADD_FOLDER",additionalIcon:"images/vault_4.0/Add_Folder.png",
func:function(){c.openFolderDialog()}}),H=new l({text:"SHARE_ITEMS",additionalIcon:"images/vault_4.0/Add_Share.png",func:function(){c.openShareDialog()}}),sb=Strings.translateString("search my vault"),m=null,fa=$("#advacedOptionsOverlay"),tb=$("#inProgressOverlay"),O=$("#tools"),ub=$("#options"),n=$("#mainScroll"),t=$("#addMenu"),Ga=$("#addMenuItems"),Ha=$("#addMenuButton"),Ia=$("#addMenuButtonCustom"),Ja=$("#gridButton"),Ka=$("#listButton"),P=$("#collapseAllToggle"),Q=$("#sizeToggle"),La=$("#orderOption"),
Ma=$("#sortOrderMenu"),vb=$("#sortOrderOption"),ga=$("#userMenuItems"),D=$("#leftMenuMinimizeButton"),Na=$("#moreActions"),Oa=d.getElementById("contextMenu").parentElement,h=$(d.body),ha=$("#advancedMenuItem"),ia=d.getElementById("sortOrderMenu").children[0],p=$("#vaultSearch"),Pa=$("#userMenuContainer"),wb=$("#pageTitle"),R=null,y=null,S=!0,u=null,r=null,f=null,Qa=function(a,b){f.getContainer()===b&&(f.removeBodyState(),f.addBodyState())},e=function(a){a=a||{};this.state=a.bodyState;this.menuElement=
a.menuElement||null;this.groupMenuElement=a.groupMenuElement||null;this.emptyState=this.state+"Empty";this.container=null;this.sortOptions=a.sortOptions||null;this.persistent=LPTools.getOption(a,"persistent",!0);this.searchPlaceholder=LPTools.getOption(a,"searchPlaceholder",sb);this.title=a.title||"";this.addMenu=a.addMenu;this.additionalOptionButtons=a.additionalOptionButtons;this.scrollParent=a.scrollParent;var b=this;Topics.get(Topics.CLEAR_DATA).subscribe(function(){b.clear()});a.menuElement&&
a.menuElement.bind("click",function(a){return a?function(){c[a].apply(c)}:function(){b.show()}}(a.viewFunction))};e.prototype.applyContainerFunction=function(a){var b=this.getContainer();if(null!==b)switch(typeof a){case "string":var c=[];if(1<arguments.length)for(var g=1,q=arguments.length;g<q;++g)c.push(arguments[g]);return b[a].apply(b,c);case "function":return a(b)}};e.prototype.getSortOptions=function(){return this.sortOptions};e.prototype.getContainer=function(){return this.container};e.prototype.setContainer=
function(a,b){if(this.container=a)a._buildOptions.stateChangeCallback=Qa,LPTools.getOption(b,"checkForStateChange",!0)&&f===this&&Qa(a.isEmpty(),a),f===this&&""!==p.val()&&c.search(p.val())};e.prototype.openAll=function(){this.applyContainerFunction("openAll")};e.prototype.collapseAll=function(){this.applyContainerFunction("collapseAll")};e.prototype.createSelectionContextMenu=function(){return this.applyContainerFunction("createSelectionContextMenu")};e.prototype.isEmpty=function(){return this.applyContainerFunction("isEmpty")};
e.prototype.search=function(a){var b=this.applyContainerFunction("applySearch",a);a&&null===b&&!this.isEmpty()?h.addClass("searchEmpty"):h.removeClass("searchEmpty")};e.prototype.clearSelected=function(){this.applyContainerFunction("clearSelected")};e.prototype.getSelectedItems=function(){return this.applyContainerFunction("getSelectedItems")};e.prototype.getSortOrder=function(){void 0===this.sortOrder&&(this.sortOrder=LPProxy.getPreference(this.state+"SortOrder",this.sortOptions?this.sortOptions[0]:
null));return this.sortOrder};e.prototype.setSortOrder=function(a){this.sortOrder=a;LPProxy.setPreferences(this.state+"SortOrder",a)};e.prototype.addBodyState=function(){h.addClass(this.getState());var a=this.getContainer();null!==a&&a.isEmpty()?h.addClass("empty"):h.removeClass("empty")};e.prototype.removeBodyState=function(){h.removeClass(this.emptyState);h.removeClass(this.state)};e.prototype.hide=function(){null!==this.menuElement&&this.menuElement.removeClass("selected");null!==this.groupMenuElement&&
this.groupMenuElement.removeClass("selected");this.removeBodyState();if(this.additionalOptionButtons)for(var a=0,b=this.additionalOptionButtons.length;a<b;++a)this.additionalOptionButtons[a].detach();this.persistent?this.applyContainerFunction("hide"):this.clear()};e.prototype.getAddMenuItems=function(){var a=[];if(this.addMenu&&0<this.addMenu.length)for(var b=0,c=this.addMenu.length;b<c;++b){var g=this.addMenu[b];if(g!==H||LPFeatures.allowIndividualSharing())(g!==ea||LPFeatures.allowNotes())&&a.push(g)}return a};
e.prototype.show=function(){if(f!==this){null!==f&&(p.val(""),z(),f.hide());p.attr("placeholder",this.searchPlaceholder);null!==this.menuElement&&this.menuElement.addClass("selected");null!==this.groupMenuElement&&this.groupMenuElement.addClass("selected");wb.text(this.title);this.addBodyState();this.scrollParent.scrollTop(0);var a=this.getSortOptions();if(null===f||f.getSortOptions()!==a)if(null!==a){LPTools.removeDOMChildren(ia);for(var b=0,lb=a.length;b<lb;++b){var g=d.createElement("li"),q=a[b];
g.textContent=q;LPPlatform.addEventListener(g,"click",xb(q));ia.appendChild(g)}La.show()}else La.hide();f=this;(a=this.getSortOrder())&&c.sort(a);this.additionalOptionButtons&&ub.append(this.additionalOptionButtons);Ga.children().detach();Ia.children().detach();a=this.getAddMenuItems();if(0<a.length){Ia.append(a[0].getAddElement());for(b=a.length-1;0<b;--b)Ga.append(a[b].getMenuElement());Ha.show()}else Ha.hide()}};e.prototype.getState=function(){return this.isEmpty()?this.emptyState:this.state};
e.prototype.clear=function(){this.container&&(this.container.destruct(),this.container=null)};var k=function(a){a.bodyState=a.bodyState||a.contentID;e.call(this,a);this.contentElement=d.getElementById(a.contentID);this.containerType=a.containerType;this.dataSource=a.dataFunction;this.buildOptions=a.buildOptions;this.filter=a.filter;var b=this;Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(a){b.refresh(a)});b.initializeCallback=function(a,c){var q=new b.containerType(a,b.buildOptions);q.initialize(b.contentElement,
b.scrollParent);b.filter&&q.applyFilter(b.filter,{checkForStateChange:!1});b.setContainer(q,{checkForStateChange:LPTools.getOption(c,"checkForStateChange",!1)});Topics.get(Topics.DIALOG_LOADED).publish()}};k.prototype=Object.create(e.prototype);k.prototype.constructor=k;k.prototype.makeDataRequest=function(a,b){b.error=function(){Topics.get(Topics.DIALOG_LOADED).publish()};LPRequest.makeDataRequest(a,b)};k.prototype.initialize=function(a,b){if(null===this.container&&null!==this.containerType&&null!==
this.dataSource){var c=this,g=a;a=g?function(a,b){c.initializeCallback(a,b);g()}:c.initializeCallback;Topics.get(Topics.DIALOG_LOADING).publish();this.dataSource.call(this,a,b)}};k.prototype.show=function(a){if(null===this.container){var b=this;b.initialize(function(){a&&a();e.prototype.show.apply(b)})}else e.prototype.show.apply(this),a&&a()};k.prototype.refresh=function(a){null!==this.container&&(this.container.destruct(),this.container=null,this.initialize(null,{identity:a,checkForStateChange:!0}))};
var A=function(a){e.call(this,a);this.setContainer(a.container||null);this.filter=a.filter};A.prototype=Object.create(e.prototype);A.prototype.constructor=A;A.prototype.show=function(){this.container.applyFilter(this.filter,{checkForStateChange:!1});e.prototype.show.apply(this,arguments)};var s=new A({filter:{showEmptyGroups:!0,func:function(a){return a instanceof AccountBaseDisplay||a instanceof ApplicationDisplay||a instanceof GroupDisplay}},sortOptions:G,menuElement:$("#vaultMenuItem"),bodyState:"site",
scrollParent:n,title:Strings.translateString("Sites"),addMenu:[mb,ea,H,Fa]}),Ra=new A({filter:{showEmptyGroups:!1,func:function(a){return a instanceof NoteDisplay||a instanceof GroupDisplay}},sortOptions:G,menuElement:$("#notesMenuItem"),bodyState:"note",scrollParent:n,title:Strings.translateString("Secure Notes"),addMenu:[ea,H,Fa]}),Sa=new A({filter:{showEmptyGroups:!1,multiSelect:!1,hasFolderView:!1,func:function(a){return a instanceof FormFillDisplay}},sortOptions:gb,menuElement:$("#formFillMenuItem"),
bodyState:"formFill",scrollParent:n,title:Strings.translateString("Form Fills"),addMenu:[nb]}),Ta=new k({containerType:IdentityContainer,dataFunction:function(a){for(var b=[],c=0,g=m._identities.length;c<g;++c)b.push(m._identities[c].newDisplayObject());a(b)},sortOptions:kb,contentID:"identityContent",bodyState:"identity",scrollParent:n,searchPlaceholder:Strings.translateString("search my identities"),buildOptions:{multiSelect:!1},title:Strings.translateString("Identities"),addMenu:[pb]}),T=new k({containerType:CreditMonitoringContainer,
dataFunction:function(a,b){this.makeDataRequest(LPProxy.getCreditMonitoringData,{success:function(c){for(var g=!0,d=[],e=0,f=c.length;e<f;++e){var j=c[e];"1"!==j.premium&&(g=!1);d.push(new CreditMonitoringProfile(j))}c=$("#creditMonitoring .viewExplanation");g?(c.hide(),T.title=Strings.translateString("Premium Credit Monitoring")):(c.show(),T.title=Strings.translateString("Credit Monitoring"));a(d,b)}})},persistent:!1,contentID:"creditMonitoring",scrollParent:n,title:Strings.translateString("Credit Monitoring"),
addMenu:[rb]}),yb=GridListContainer,zb=Strings.translateString("search my deleted items"),Ab={allowDrag:!1,stickyFolders:!0,stickyFolderParent:d.getElementById("main")},Bb=Strings.translateString("Deleted Items"),Ua,Va=LPTools.createElement("div",{"class":"optionButton optionButtons",id:"purgeAllButton"},Strings.Vault.PURGE_ALL);LPPlatform.addEventListener(Va,"click",function(){var a=ja.getContainer();a&&(a=a.getItemModelChildren(),0<a.length&&a[0].purge({itemsForAction:a}))});Ua=$(Va);var ja=new k({containerType:yb,
dataFunction:function(a){this.makeDataRequest(LPProxy.getDeletedItems,{success:a})},filter:{showEmptyGroups:!1},sortOptions:G,contentID:"deletedItems",scrollParent:n,persistent:!1,searchPlaceholder:zb,buildOptions:Ab,title:Bb,additionalOptionButtons:[Ua]});ja.refresh=function(){};var U=new k({containerType:EmergencyAccessRecipientContainer,dataFunction:function(a){this.makeDataRequest(LPProxy.getEmergencyAccessRecipientInfo,{success:a})},filter:{showEmptyGroups:!1},sortOptions:G,menuElement:$("#emergencyTrustedMenuItem"),
groupMenuElement:$("#emergencyAccessMenuItem"),viewFunction:"openEmergencyAccessTrusted",contentID:"emergencyTrustedContainer",bodyState:"emergencyTrusted",scrollParent:n,persistent:!1,searchPlaceholder:Strings.translateString("search people I trust"),buildOptions:{allowDrag:!1},title:Strings.translateString("People I Trust"),addMenu:[qb]}),ka=new k({containerType:EmergencyAccessSharerContainer,dataFunction:function(a){this.makeDataRequest(LPProxy.getEmergencyAccessSharerInfo,{success:a})},filter:{showEmptyGroups:!1},
sortOptions:G,menuElement:$("#emergencyTrustingMenuItem"),groupMenuElement:$("#emergencyAccessMenuItem"),viewFunction:"openEmergencyAccessTrusting",contentID:"emergencyTrusting",bodyState:"emergencyTrusting",scrollParent:n,persistent:!1,searchPlaceholder:Strings.translateString("search people who trust me"),buildOptions:{allowDrag:!1},title:Strings.translateString("People Who Trust Me")}),Cb=IndividualShareContainer,Db=$("#receivedSharesMenuItem"),Eb=$("#sharingMenuItem"),Fb=Strings.translateString("search my received shares"),
Gb=Strings.translateString("Shared with Me"),la=new k({containerType:Cb,sortOptions:ib,menuElement:Db,groupMenuElement:Eb,viewFunction:"openReceivedShareCenter",contentID:"receivedSharesContent",bodyState:"receivedShares",scrollParent:n,persistent:!1,searchPlaceholder:Fb,buildOptions:{multiSelect:!1},filter:{showEmptyGroups:!1,multiSelect:!1},title:Gb,addMenu:[H],dataFunction:function(a){this.makeDataRequest(LPProxy.getReceivedShareData,{success:function(b){for(var c=LPProxy.getAllModelItems(),g=
[],d=0,e=c.length;d<e;++d){var f=c[d],j=b[f.getID()];j&&("1"===j.state&&f instanceof AccountBase)&&g.push(new AcceptedReceivedSharedItem(f,j))}c=LPProxy.getPendingRecievedShares();d=!1;e=0;for(f=c.length;e<f;++e){var j=c[e],h=b[j._model.getID()];h?j._model._shareData=h:d=!0}d&&LPProxy.refreshSites();a(g.concat(c))}})}}),Hb=IndividualShareContainer,Ib=$("#sentSharesMenuItem"),Jb=$("#sharingMenuItem"),Kb=Strings.translateString("search my sent shares"),Lb=Strings.translateString("Shared with Others"),
V=new k({containerType:Hb,sortOptions:hb,menuElement:Ib,groupMenuElement:Jb,viewFunction:"openSentShareCenter",contentID:"sentSharesContent",bodyState:"sentShares",scrollParent:n,persistent:!1,searchPlaceholder:Kb,buildOptions:{multiSelect:!1},filter:{showEmptyGroups:!1,multiSelect:!1},title:Lb,addMenu:[H],dataFunction:function(a,b){this.makeDataRequest(LPProxy.getSentShareData,{success:function(c){for(var g=LPProxy.getAllModelItems(),d=[],e=0,f=g.length;e<f;++e)var j=g[e],d=d.concat(LPTools.buildSentShareItems(j,
c[j.getID()]));a(d,b)}})}}),Mb=SharedFolderContainer,Nb=$("#sharedFoldersMenuItem"),Ob=$("#sharingMenuItem"),Pb=Strings.translateString("search my shared folders"),Qb=Strings.translateString("Shared Folders"),Rb=[ob],W=$(LPTools.buildCheckbox(null,{text:Strings.translateString("View Deleted Shared Folders")}));W.attr("id","showDeletedSharedFoldersButton");W.addClass("optionButtons");W.bind("click",function(){I?ma():na()});var B=new k({containerType:Mb,dataFunction:function(a){this.makeDataRequest(LPProxy.getSharedFolderData,
{success:function(b){for(var c=LPProxy.getAllSharedGroupModelsByID(),g=[],d=0,e=b.length;d<e;++d){var f=b[d];f.sharedata&&g.push(new SharedFolderItem(c[f.shareid],f))}a(g)}})},sortOptions:jb,menuElement:Nb,groupMenuElement:Ob,viewFunction:"openSharedFolderCenter",contentID:"sharedFoldersContent",bodyState:"sharedFolders",scrollParent:n,searchPlaceholder:Pb,buildOptions:{multiSelect:!1},title:Qb,addMenu:Rb,additionalOptionButtons:[W]});B.initialize=function(a,b){var c=a;k.prototype.initialize.call(this,
c?function(){var a={checkForStateChange:!1};I?na(a):ma(a);c()}:function(){var a={checkForStateChange:!1};I?na(a):ma(a)},b)};var J=function(){LPTools.hideContextMenu(r);r=null},E=function(a){a.preventDefault();a.stopPropagation()},pa=function(){J();ga.hide();Pa.removeClass("selected");oa();Wa()},z=function(){f&&f.clearSelected()},xb=function(a){return function(b){J();c.sort(a);E(b)}},oa=function(){ha.removeClass("selected");O.hide();fa.hide()},Xa=function(){t.addClass("open")},Wa=function(){t.removeClass("open")},
Ya=!1;c.initialize=function(a){try{if(!Ya){Strings.translate(d.body);Strings.translateStrings(Strings.Vault);if(LPFeatures.canBackgroundOpenPopover()){var b=d.getElementById("vaultLoadingOverlay"),e=LPTools.createElement("button",{"class":"nbtn btn_midi gbtn",id:"loginButton"},Strings.translateString("Login"));LPPlatform.addEventListener(e,"click",function(){bg.open_login()});b.children[0].appendChild(LPTools.createElement("div"));b.children[0].appendChild(e)}Ya=!0}Topics.get(Topics.CLEAR_DATA).publish();
LPProxy.initializeModel();d.body.removeAttribute("class");Topics.get(Topics.REFRESH_PREFERENCES).publish();$(".leftMenuItem").removeClass("selected");LPProxy.getPreference("gridView",!0)||c.displayAsList();LPProxy.getPreference("compactView",!1)&&c.displayCompact();m=LPProxy.getUser();m.initialize(ga,$("#userMenuText"));VaultState.setIdentities(m._identities);LPProxy.enableCurrentIdentity(m._identities);m.isFree()&&this.showAdPane();LPTools.parseUserSpecificMenu(d.getElementById("tools"),m._accountClass);
LPTools.parseUserSpecificMenu(d.getElementById("more"),m._accountClass);qa();ra();LPProxy.getSecurityChallengeScore(Sb);D.attr("title","Maximize Menu");LPProxy.getPreference("seenVault4.0",!1)?Za():C.show();if(LPFeatures.allowGift()){var g=$("#specialOfferMenu");g.show();g.bind("click",function(){bg.openURL(LPProxy.getBaseURL()+"gift.php")})}p.focus();var f=LPProxy.getAccountClass(),k=d.getElementById("sharedFoldersMenuItem").parentElement;f===Constants.USER_FREE&&($("#emptySharedFoldersIcon .tourText").append(LPTools.createElement("a",
{"class":"nbtn rbtn dynamicWidth",href:LPProxy.getBaseURL()+"go-premium",target:"_blank"},Strings.translateString("Upgrade to Premium"))),k.parentElement.appendChild(k));$(k.parentElement).children().last().addClass("last");$a()}catch(l){LPPlatform.logException(l)}finally{var j=$("#vaultLoadingOverlay");LPTools.getOption(a,"fadeIn",!1)?(j.addClass("fadeIn"),setTimeout(function(){j.addClass("loaded")},500)):j.addClass("loaded");h.addClass("loaded")}};var Za=function(){LPProxy.getPreference("leftMenuMaximize",
!0)&&ab()},$a,Tb=function(a){c.openReceivedShareCenter(function(){var b=LPProxy.getPendingRecievedShare(a);b&&c.openAcceptShareDialog(b)})},Ub=function(a){c.openReceivedShareCenter(function(){var b=LPProxy.getPendingRecievedShare(a);b&&b.reject()})};$a=function(){var a={},b=d.location.href.split("?");if(2===b.length)for(var b=b[1].split("&"),e=0;e<b.length;++e){var g=b[e].split("=");2===g.length&&(a[g[0]]=g[1])}for(var h in a)switch(b=a[h],"cmd"===h&&(h=b),h){case "opengoogleauth":case "opensettings":Topics.get(Topics.EDIT_SETTINGS).publish();
break;case "openhistory":LPProxy.openHistory();break;case "openbookmarklets":LPProxy.openBookmarklets();break;case "linkpersonal":c.openLinkAccountDialog();break;case "unlinkpersonal":c.unlinkAccount();break;case "sharedfolder":case "sf":c.openSharingCenter();break;case "addidentity":c.openManageIdentities();c.openIdentityDialog();break;case "showdeleted":c.openDeletedItems();break;case "viewcreditmon":c.openCreditMonitoring();break;case "share":for(var e=[],b=b.split(","),g=0,k=b.length;g<k;++g){var l=
b[g],j=LPProxy.getSiteModel(l);j||(j=LPProxy.getNoteModel(l));j&&e.push(j)}0<e.length&&c.openShareDialog(e);break;case "edit":LPProxy.getSiteModel(b)?c.openSiteDialog({vaultItem:b}):LPProxy.getNoteModel(b)&&c.openNoteDialog({vaultItem:b});break;case "acceptshare":Tb(b);break;case "rejectshare":Ub(b)}if(null===f)switch(a.view){case "emergencyAccess":U.show();break;case "emergencyAccessOthers":ka.show();break;default:s.show()}};var bb=function(a){if(a){a=a.getAllSubGroupsIncludingFavorites(!0);for(var b=
[],c=0,d=a.length;c<d;++c){var e=a[c];e.isExpanded()&&b.push(e._model.getName())}LPPlatform.setOpenGroups(b)}},Sb=function(a){$("#securityScore").text(null!==a?Math.round(a)+"%":"")};c.toggleInProgressOverlay=function(){tb.toggle()};var X=function(a,b){0<b?(a.text(b),a.show()):a.hide()},qa=function(){var a=bg.g_pendings.length;X($("#sharingMenuItem .notificationBubble"),a);X($("#pendingItemCount"),a);if(bg.g_emer_sharers){for(var a=K=0,b=bg.g_emer_sharers.length;a<b;++a)"0"===bg.g_emer_sharers[a].accepted&&
++K;X($("#emergencyAccessMenuItem .notificationBubble"),K);X($("#pendingEmergencyCount"),K)}},ra,cb=!1;ra=function(){if(!cb)for(var a=LPProxy.getEmergencyAccessRecipientModels(),b=0,c=a.length;b<c;++b){var d=a[b];if(d.allowedAccess()||d.hasRequestedAccess()){dialogs.denyEmergencyAccess.open({sharee:d});cb=!0;break}}};c.openVault=function(){s.show()};c.openNotes=function(){Ra.show()};c.openFormFills=function(){Sa.show()};c.toggleAdvancedMenu=function(a){ha.toggleClass("selected");O.toggle("fast");
fa.toggle();E(a)};c.clear=function(){m&&(m.destruct(),m=null);d.body.setAttribute("class","loggedout");$("#vaultLoadingOverlay").removeClass("loaded fadeIn");p.val("");z();r=u=y=R=f=null};var ab=function(){h.hasClass("maximized")?(h.removeClass("maximized"),D.removeClass("opened"),D.attr("title","Maximize Menu"),LPProxy.setPreferences("leftMenuMaximize",!1)):(h.addClass("maximized"),D.addClass("opened"),D.attr("title","Minimize Menu"),LPProxy.setPreferences("leftMenuMaximize",!0))};c.openSiteDialog=
function(a){dialogs.site.open(a)};c.openNoteDialog=function(a){dialogs.note.open(a)};c.openFormFillDialog=function(a){dialogs.formFill.open(a)};c.openFolderDialog=function(a,b){dialogs.folder.open({vaultItem:a,defaultData:{groupParent:b?b.getName():""},groups:s.getContainer().getAllSubGroups()})};c.openCreateSharedFolderDialog=function(a,b){LPProxy.getAccountClass()===Constants.USER_FREE?dialogs.upgradePremium.open({upgradeText:[LPTools.createElement("h1","upgradeDialogHeader",Strings.translateString("Need to share passwords with family or friends?")),
LPTools.createElement("p","dialogText",Strings.translateString("Go Premium now to create a Shared Folder, invite family or friends, and fill the folder with passwords and notes. Give up to 5 people access to the Shared Folder. Changes are synced automatically, and you can assign read-only access. Go Premium now to create a Shared Folder!"))]}):dialogs.createSharedFolder.open({group:a,children:b})};c.openSettingsDialog=function(){null===R&&(AccountSettingsService.call(function(a){R=a;c.openSettingsDialog()},
function(){Notifications.displayErrorMessage("Could not retrieve account settings!")}),Topics.get(Topics.DIALOG_LOADING).publish());dialogs.settings.open(R)};c.openLinkAccountDialog=function(){LPProxy.callAcctsIFrameCommand("linkpersonal")};c.unlinkAccount=function(){var a=LPProxy.getLinkedAccount();a&&a.unlink()};var sa=!1;Topics.get(Topics.ALL_COLLAPSED).subscribe(function(){sa=!0;P.addClass("selected");P.attr("title",Strings.Vault.EXPAND_ALL)});Topics.get(Topics.ALL_EXPANDED).subscribe(function(){sa=
!1;P.removeClass("selected");P.attr("title",Strings.Vault.COLLAPSE_ALL)});c.toggleCollapseAll=function(){sa?(Topics.get(Topics.EXPAND_ALL).publish(),Topics.get(Topics.ALL_EXPANDED).publish()):(Topics.get(Topics.COLLAPSE_ALL).publish(),Topics.get(Topics.ALL_COLLAPSED).publish())};var ta=!1;c.displayLarge=function(){Topics.get(Topics.DISPLAY_LARGE).publish();ta=!1;Q.removeClass("selected");Q.attr("title",Strings.Vault.COMPACT_VIEW);LPProxy.setPreferences("compactView",!1)};c.displayCompact=function(){Topics.get(Topics.DISPLAY_COMPACT).publish();
ta=!0;Q.addClass("selected");Q.attr("title",Strings.Vault.LARGE_VIEW);LPProxy.setPreferences("compactView",!0)};c.toggleSize=function(){ta?(c.displayLarge(),bg.lpevent(S?"v_grd_lrg":"v_lst_lrg")):(c.displayCompact(),bg.lpevent(S?"v_grd_cmp":"v_lst_cmp"))};c.displayAsGrid=function(){Topics.get(Topics.DISPLAY_GRID).publish();Ja.addClass("selected");Ka.removeClass("selected");LPProxy.setPreferences("gridView",!0);S=!0};c.displayAsList=function(){Topics.get(Topics.DISPLAY_LIST).publish();Ka.addClass("selected");
Ja.removeClass("selected");LPProxy.setPreferences("gridView",!1);S=!1};c.search=function(a){f&&f.search(a)};var db=function(a,b){switch(b){case w:a.sortByName(!0);break;case x:a.sortByName(!1);break;case za:a.sortByFolder(!0);break;case Aa:a.sortByFolder(!1);break;case N:a.sortItemsByMostRecent();break;case Ba:case Da:a.sortByEmail(!0);break;case Ca:case Ea:a.sortByEmail(!1)}};c.sort=function(a){vb.text(a);db(f.getContainer(),a);f.setSortOrder(a)};c.showMoreOptionsMenu=function(){Na.show("fast")};
c.hideMoreOptionsMenu=function(){Na.hide("fast")};var K=0,Y=null,ua=function(a){f!==a&&(a.show(),Y=a)};c.openEmergencyAccess=function(){null===Y&&(Y=0<K?ka:U);ua(Y)};c.openEmergencyAccessTrusted=function(){ua(U)};c.openEmergencyAccessTrusting=function(){ua(ka)};var eb,L=null,Z=function(a,b){f!==a&&(a.show(b),L=a)};eb=function(){L=null};c.openSharingCenter=function(){null===L&&(L=bg.g_pendings.length?la:LPProxy.getAccountClass()===Constants.USER_FREE?V:LPFeatures.allowSharedFolders()?B:la);Z(L)};c.openReceivedShareCenter=
function(a){Z(la,a)};c.openSentShareCenter=function(a){Z(V,a)};c.openSharedFolderCenter=function(a){Z(B,a)};var I=!1,ma=function(a){B.getContainer().applyFilter({showEmptyGroups:!1,multiSelect:!1,func:function(a){return!a._model.isDeleted()}},a);I=!1},na=function(a){B.getContainer().applyFilter({showEmptyGroups:!1,multiSelect:!1,func:function(){return!0}},a);I=!0};c.openAcceptShareDialog=function(a){dialogs.acceptShare.open({vaultItem:a,groups:s.getContainer().getAllSubGroups()})};c.openShareDialog=
function(a){LPTools.openShareDialog(a)};c.openSharedFolderDialog=function(a,b){dialogs.sharedFolder.open(a,b)};c.openSharedFolderAccessDialog=function(a){dialogs.sharedfolderAccess.open(a)};c.openManageIdentities=function(){Ta.show()};c.openIdentityDialog=function(a){dialogs.identity.open(a)};c.enableIdentity=function(a){null!==y&&y!==a&&(y.disable(),LPProxy.enableIdentity(a));y=a;a=u?u._filter:null;null!==u&&(bb(u),u.destruct());var b=LPProxy.getAllItems({identity:y}),b=new GridListContainer(b,{separateItems:!0,
separateFavorites:!0,stickyFolders:!0,ignoreFilterOnSearch:!0,keyboardNavigation:!0,stickyFolderParent:d.getElementById("main"),folderStateChange:bb}),c=LPPlatform.getOpenGroups();if(null!==c){for(var e=!0,f=b.getAllSubGroupsIncludingFavorites(!0),h=0,k=f.length;h<k;++h){var j=f[h];c[j._model.getName()]?(j.expand(),e=!1):j.collapse()}e&&Topics.get(Topics.ALL_COLLAPSED).publish()}db(b,s.getSortOrder());b.initialize(d.getElementById("vaultContent"),n);b.applyFilter(a);s.setContainer(b);Ra.setContainer(b);
Sa.setContainer(b);u=b};c.openCreditMonitoring=function(){T.show()};c.openCreateCreditMonitoringDialog=function(){dialogs.createCreditMonitoring.open()};c.openDeletedItems=function(){ja.show()};var C,F=0,M=null,v=null,Vb=d.getElementById("tourItems"),aa=$("#tourLeft"),va=$("#tourRight");aa.hide();aa.bind("click",function(){C.reverse()});va.bind("click",function(){C.advance()});for(var Wb=function(a){return function(){C.goTo(a)}},v=d.getElementById("tourSteps").children,ba=0,Xb=v.length;ba<Xb;++ba)LPPlatform.addEventListener(v[ba],
"click",Wb(ba));v[0].setAttribute("class","tourStep selected");var ca=function(a){if(a!==F&&0<=a&&a<v.length){v[F].setAttribute("class","tourStep");var b="tour"+(a+1);Vb.setAttribute("class",b);h.addClass(b);M&&h.removeClass(M);M=b;F=a;v[F].setAttribute("class","tourStep selected");0===a?aa.hide():aa.show();a===v.length-1?va.hide():va.show()}},wa=function(){ca(F+1)},xa=function(){ca(F-1)};C={advance:wa,reverse:xa,goTo:function(a){ca(a)},hide:function(){h.removeClass("tourState");h.removeClass(M);
M=null;Topics.get(Topics.RIGHT_ARROW).unsubscribe(wa);Topics.get(Topics.LEFT_ARROW).unsubscribe(xa)},show:function(){ca(0);h.addClass("tourState");Topics.get(Topics.RIGHT_ARROW).subscribe(wa);Topics.get(Topics.LEFT_ARROW).subscribe(xa)}};c.showAdPane=function(){var a=d.getElementById("ad"),b=d.createElement("iframe");b.setAttribute("src",ya.getPartnerURL(LPProxy.getBaseURL()+"ads.php?nobr=1&noga=1&rand="+Math.floor(1E3*Math.random())+"&v="+LPProxy.getVersion()));a.appendChild(b);h.addClass("freeUser");
setInterval(function(){b.setAttribute("src",ya.getPartnerURL(LPProxy.getBaseURL()+"ads.php?v=4.0&nobr=1&noga=1&rand="+Math.floor(1E3*Math.random())+"&v="+LPProxy.getVersion()))},3E5)};h.bind("click",function(){pa()});$("#vault").bind("click",function(){z();pa()});LPPlatform.addEventListener(window,"unload",function(){Topics.get(Topics.CLEAR_DATA).publish()});p.LP_addSearchHandlers("inputLight",function(a){c.search(a)});p.bind("keydown",function(a){if(40===(a.keyCode||a.which)){var b=f.getContainer();
b&&(b=b.getAllChildrenOrdered(),0<b.length&&(b[0].focus(),a.preventDefault(),a.stopPropagation()))}});$("#orderOption").bind("click",function(a){Ma.toggle();r=Ma;LPTools.addKeyBoardNavigation(ia.children);E(a)});$("#actions").bind("click",function(a){if(null===r||r.get(0).parentElement!==Oa){var b=f.createSelectionContextMenu();Oa.appendChild(b);b.removeAttribute("style");r=$(b);r.show()}else J();E(a)});$("#sharingMenuItem").bind("click",function(){c.openSharingCenter()});ha.bind("click",c.toggleAdvancedMenu);
fa.bind("click",oa);D.bind("click",ab);LPPlatform.addEventListener(d.getElementById("settingsMenuItem"),"click",function(){Topics.get(Topics.EDIT_SETTINGS).publish()});$("#linkAccountMenuItem").bind("click",function(){c.openLinkAccountDialog()});O.on("click",".toolsMenuItem.subMenuOption",function(){return!1});O.on("click",".toolsMenuItem",oa);t.bind("mouseenter",Xa);t.bind("mouseleave",Wa);t.bind("touchstart",function(a){t.unbind("mousenter");t.unbind("mouseleave");t.hasClass("open")||(Xa(),a.preventDefault())});
LPPlatform.addEventListener(d.getElementById("collapseAllToggle"),"click",function(){c.toggleCollapseAll()});LPPlatform.addEventListener(d.getElementById("sizeToggle"),"click",function(){c.toggleSize()});LPPlatform.addEventListener(d.getElementById("gridButton"),"click",function(){c.displayAsGrid()});LPPlatform.addEventListener(d.getElementById("listButton"),"click",function(){c.displayAsList()});LPPlatform.addEventListener(d.getElementById("userMenuContainer"),"click",function(a){Pa.toggleClass("selected");
ga.toggle();E(a)});var fb=function(){C.hide();LPProxy.getPreference("seenVault4.0",!1)||(LPPlatform.showVaultToggleDialog(),LPProxy.setPreferences("seenVault4.0",!0));Za()};LPPlatform.addEventListener(d.getElementById("skipTour"),"click",fb);LPPlatform.addEventListener(d.getElementById("tourOpenMyVault"),"click",fb);LPPlatform.addEventListener(d.getElementById("manageIdentitiesMenuItem"),"click",function(){c.openManageIdentities()});LPPlatform.addEventListener(d.getElementById("creditMonitoringMenuItem"),
"click",function(){c.openCreditMonitoring()});LPPlatform.addEventListener(d.getElementById("openTourMenuItem"),"click",function(){C.show()});$(".toolsMenuItem.subMenuOption").bind("click",function(a){$(a.target.parentElement.nextElementSibling).toggle();$(a.target).toggleClass("selected");E(a)});LPPlatform.addEventListener(d.getElementById("toolsImport"),"click",function(){LPProxy["import"]()});LPPlatform.addEventListener(d.getElementById("toolsExport"),"click",function(){LPProxy["export"]()});LPPlatform.addEventListener(d.getElementById("toolsOpenFavorites"),
"click",function(){LPProxy.openAllFavorites()});LPPlatform.addEventListener(d.getElementById("bookmarkletsMenuItem"),"click",function(){LPProxy.openBookmarklets()});LPPlatform.addEventListener(d.getElementById("historyMenuItem"),"click",function(){LPProxy.openHistory()});LPPlatform.addEventListener(d.getElementById("deletedMenuItem"),"click",function(){c.openDeletedItems()});LPPlatform.addEventListener(d.getElementById("generateSharingKeys"),"click",function(){bg.lpevent("v_gsk");dialogs.sharingKey.open()});
$("#generateSharingKeys").hide();LPPlatform.addEventListener(d.getElementById("generatePasswordMenuItem"),"click",function(){dialogs.generatePassword.open({fillGenerated:!1})});$("#generatePasswordMenuItem").hide();$("#removedLinkedAccountMenuItem").bind("click",function(){c.unlinkAccount()});$("#tryEnterprise").bind("click",function(){dialogs.enterpriseTrial.open()});$("#emergencyAccessMenuItem").bind("click",function(){c.openEmergencyAccess()});Topics.get(Topics.ITEMS_DESELECTED).subscribe(function(){c.hideMoreOptionsMenu()});
Topics.get(Topics.ITEMS_SELECTED).subscribe(function(){c.showMoreOptionsMenu()});Topics.get(Topics.SELECT_COUNT_CHANGE).subscribe(function(a){0<a&&$("#selectedItemCounter").text(a+" selected")});Topics.get(Topics.CONTEXT_MENU).subscribe(function(a,b){b.parentElement!==d.body&&d.body.appendChild(b);r=LPTools.displayContextMenu(a,b)});Topics.get(Topics.CONTEXT_CLOSE).subscribe(function(){J()});Topics.get(Topics.ITEM_SHARE).subscribe(function(a){c.openShareDialog(a)});Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(a){c.enableIdentity(a)});
Topics.get(Topics.CLEAR_DATA).subscribe(function(){c.clear();Dialog.prototype.closeAllDialogs(!0);LPProxy.closeIFrame()});Topics.get(Topics.LOGIN).subscribe(function(a){c.initialize(a);Dialog.prototype.closeAllDialogs()});Topics.get(Topics.REQUEST_SUCCESS).subscribe(function(a){LPTools.getOption(a,"incrementAccountsVersion",!1)&&z()});var da=function(a,b,c){p.val("");z();u.addChild(a.newDisplayObject(),b,c)};Topics.get(Topics.SITE_ADDED).subscribe(da);Topics.get(Topics.NOTE_ADDED).subscribe(da);Topics.get(Topics.FORM_FILL_ADDED).subscribe(da);
Topics.get(Topics.APPLICATION_ADDED).subscribe(da);Topics.get(Topics.EDIT_SHARED_FOLDER_ACCESS).subscribe(function(a){c.openSharedFolderAccessDialog(a)});Topics.get(Topics.EDIT_SITE).subscribe(function(a){c.openSiteDialog(a)});Topics.get(Topics.EDIT_NOTE).subscribe(function(a){c.openNoteDialog(a)});Topics.get(Topics.EDIT_FORM_FILL).subscribe(function(a){c.openFormFillDialog(a)});Topics.get(Topics.EDIT_APPLICATION).subscribe(function(a){dialogs.application.open(a)});Topics.get(Topics.EDIT_SETTINGS).subscribe(function(){LPProxy.callAcctsIFrameCommand("settings")});
Topics.get(Topics.EDIT_IDENTITY).subscribe(function(a){c.openIdentityDialog(a)});Topics.get(Topics.ACCEPT_SHARE).subscribe(function(a){c.openAcceptShareDialog(a)});Topics.get(Topics.RENAME_FOLDER).subscribe(function(a){c.openFolderDialog(a)});Topics.get(Topics.CREATE_SUB_FOLDER).subscribe(function(a){c.openFolderDialog(null,a)});Topics.get(Topics.GROUP_ADDED).subscribe(function(a,b){p.val("");z();s.getContainer().addChild(a.newDisplayObject(),b);if(a instanceof SharedGroup){var c=B.getContainer();
if(null!==c){var d=new SharedFolderItem(a);c.addChild(d)}}});Topics.get(Topics.ESCAPE).subscribe(function(){var a=Dialog.prototype.getCurrentDialog();a&&a.close();z();pa()});Topics.get(Topics.EDIT_SHARED_FOLDER).subscribe(function(a,b){c.openSharedFolderDialog(a,b)});Topics.get(Topics.IDENTITY_ADDED).subscribe(function(a){Ta.getContainer().addChild(a.newDisplayObject())});Topics.get(Topics.REFRESH_DATA).subscribe(function(){LPProxy.initializeModel();qa();ra();Topics.get(Topics.IDENTITY_ENABLE).publish(y);
Dialog.prototype.closeInProcessDialogs();VaultItemDialog.prototype.refreshOpenDialogs();Topics.get(Topics.REFRESH_PREFERENCES).publish();J()});Topics.get(Topics.REFRESH_NOTIFICATIONS).subscribe(function(){qa()});Topics.get(Topics.ACCOUNT_LINKED).subscribe(function(){$("#linkAccountMenuItem").LP_hide();$("#removedLinkedAccountMenuItem").LP_show()});Topics.get(Topics.ACCOUNT_UNLINKED).subscribe(function(){$("#linkAccountMenuItem").LP_show();$("#removedLinkedAccountMenuItem").LP_hide()});Topics.get(Topics.CREATE_SHARED_FOLDER).subscribe(function(a,
b){c.openCreateSharedFolderDialog(a,b)});Topics.get(Topics.REPROMPT).subscribe(function(a){dialogs.reprompt.open({successCallback:a})});Topics.get(Topics.CONFIRM).subscribe(function(a){dialogs.confirmation.open(a)});Topics.get(Topics.EMERGENCY_RECIPIENT_ADDED).subscribe(function(a){U.getContainer().addChild(a.newDisplayObject())});Topics.get(Topics.EDIT_EMERGENCY_RECIPIENT).subscribe(function(a){dialogs.addEmergencyAccess.open({vaultItem:a})});Topics.get(Topics.REAPPLY_SEARCH).subscribe(function(a,
b){var c=p.val();c&&a.applySearch(c,b)});Topics.get(Topics.ENROLLED_CREDIT_MONITORING).subscribe(function(){T.refresh()});Topics.get(Topics.ITEM_SHARED).subscribe(function(){V.refresh()});Topics.get(Topics.REFRESH_PREFERENCES).subscribe(function(){LPFeatures.updateFeatures({"import":!0,noexport:!1,share:!0,share_onlyfolders:!1,show_notes:!0,bookmarklets:!0,hideidentities:!1,showcredmon:!0,link_personal:!0});LPProxy.hasReceivedShares()?h.removeClass("noReceivedShares"):h.addClass("noReceivedShares");
switch(f){case V:LPFeatures.allowIndividualSharing()||(eb(),s.show(),dialogs.alert.open({title:Strings.translateString("Policy Update"),text:Strings.translateString("Your enterprise has prohibited individual sharing.")}));break;case B:LPFeatures.allowSharedFolders()||(s.show(),dialogs.alert.open({title:Strings.translateString("Policy Update"),text:Strings.translateString("Your enterprise has prohibited sharing.")}))}});LPPlatform.addEventListener(d,"DOMContentLoaded",function(){Notifications.initialize()})})(document,
LPVault,BuildVariables);
