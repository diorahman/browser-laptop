LPDialog=function(f){var g="",j=[],k={},r=["newvaultGlobal.css","dialog.css","buttons.css"],s=["dialog.js","dialogFields.js"],n,e=null,p=function(a,c){for(var b=0,t=a.length;b<t;++b){var h=a[b].getAttribute(c);if(h){var d=h.indexOf("?");-1!==d&&(h=h.substring(0,d));e[h]=!0}}};n={loadFile:function(a,c){null===e&&n.initialize();var b=g+a.name;void 0===e[b]?(e[b]=!0,k[b]=[c],a.load(function(){var a=k[b];delete k[b];for(var c=0,d=a.length;c<d;++c)a[c]()})):k[b]?k[b].push(c):c()},initialize:function(){null===
e&&(e={},p(f.getElementsByTagName("link"),"href"),p(f.getElementsByTagName("script"),"src"))}};var d=function(){this.files=[];this.addedFiles={}};d.prototype.load=function(a){var c=0,b=this.files,d=function(){++c;c===b.length?a&&a():n.loadFile(b[c],d)};0===c&&0<b.length&&n.loadFile(b[0],d)};d.prototype.addFile=function(a){void 0===this.addedFiles[a.name]&&(this.files.push(a),this.addedFiles[a.name]=!0)};d.prototype.addFiles=function(a){if(a){a=[].concat(a);for(var c=0,b=a.length;c<b;++c)this.addFile(a[c])}};
var u=function(a){this.name=LPPlatform.getResourceName(a);this.load=function(c){var b=f.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",g+LPPlatform.getResourcePath(a));LPPlatform.addEventListener(b,"load",c);f.body.appendChild(b)}},v=function(a){this.name=a;this.load=function(c){var b=f.createElement("link");b.setAttribute("type","text/css");b.setAttribute("rel","stylesheet");b.setAttribute("href",g+LPPlatform.getResourcePath(a));LPPlatform.addEventListener(b,
"load",c);f.body.appendChild(b)}},l=function(a){d.call(this);a=r.concat(a);for(var c=0,b=a.length;c<b;++c)this.addFile(a[c])};l.prototype=Object.create(d.prototype);l.prototype.constructor=l;l.prototype.addFile=function(a){d.prototype.addFile.call(this,new v(a))};var m=function(a){d.call(this);a=s.concat(a);for(var c=0,b=a.length;c<b;++c)this.addFile(a[c])};m.prototype=Object.create(d.prototype);m.prototype.constructor=m;m.prototype.addFile=function(a){d.prototype.addFile.call(this,new u(a))};return{DialogLoader:function(a){var c=
!1,b=null;this.parentElementID=a.parentElementID;this.type=a.type;this.extend=function(b){b.htmlSource&&(a.htmlSource=[].concat(a.htmlSource).concat(b.htmlSource));a.css.addFiles(b.css);a.js.addFiles(b.js);b.type&&(a.type=b.type)};this.loadedJS=function(){return c};this.getID=function(){return a.id};var d,h=this;d=function(d){b=new window[a.type](h);c=!0;d(b)};this.loadJS=function(b){"undefined"!==typeof a.js?(Topics.get(Topics.DIALOG_LOADING).publish(),a.js.load(function(){d(b)})):d(b)};var f=function(b,
c,d,q){d<c.length?LPPlatform.getHTML(g+a.htmlSource[d],function(a){a=$(a);a.find("[dialogsection]").addBack("[dialogsection]").each(function(){var a=this.getAttribute("dialogsection"),a=b.find("[dialogsection="+a+"]");a.before(this);a.remove()});a.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var a=this.getAttribute("dialogsectionbefore");b.find("[dialogsection="+a+"]").before(this)});a.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var a=
this.getAttribute("dialogsectionafter");b.find("[dialogsection="+a+"]").after(this)});a.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var a=this.getAttribute("dialogsectionappend");b.find("[dialogsection="+a+"]").append(this)});a.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var a=this.getAttribute("dialogsectionprepend");b.find("[dialogsection="+a+"]").prepend(this)});f(b,c,++d,q)}):q()},e=function(b,c){var d=function(){var a=b.find("img");
if(0<a.length){var d,f=0;d=function(){++f;f===a.length&&c()};for(var e=0,g=a.length;e<g;++e)$(a[e]).bind("load",d)}else c()};a.htmlSource instanceof Array?LPPlatform.getHTML(g+a.htmlSource[0],function(c){b.html(c);f(b,a.htmlSource,1,d)}):LPPlatform.getHTML(g+a.htmlSource,function(a){b.html(a);d()})};this.load=function(b,c){a.css?a.css.load(function(){e(b,c)}):e(b,c)};this.open=function(){this.loadedJS()?b.open.apply(b,arguments):(j.push(this),this.loadJS(function(a,c){return function(){b.open.apply(b,
c);for(var d=0,e=j.length;d<e;++d)j[d]===a&&j.splice(d,1)}}(this,arguments)))};this.close=function(){b&&b.close.apply(b,arguments)};this.getDialog=function(){return b}},JSFileSet:m,CSSFileSet:l,getPendingCount:function(){return j.length},getDialogs:function(){var a=[],c;for(c in dialogs)a.push(dialogs[c]);return a},setBaseURL:function(a){g=a}}}(document);
dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","siteDialog.css","passwordMeter.css"]),js:new LPDialog.JSFileSet("selectDropdown.js typeaheadDropdown.js dialog.js dialogWithGroupInput.js editableFieldsDialog.js siteDialog.js passwordMeter.js bloodhound.js bloodhoundDropdown.js".split(" ")),type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:new LPDialog.CSSFileSet(["buttons.css",
"dialog.css","noteDialog.css"]),js:new LPDialog.JSFileSet(["selectDropdown.js","typeaheadDropdown.js","dialog.js","dialogWithGroupInput.js","noteDialog.js"]),type:"NoteDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","formFillDialog.css"]),js:new LPDialog.JSFileSet(["selectDropdown.js","typeaheadDropdown.js","dialog.js","formFillDialog.js","phoneFormatDropdown.js"]),type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",
htmlSource:"acceptRejectShareDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","acceptRejectShareDialog.css"]),js:new LPDialog.JSFileSet(["selectDropdown.js","typeaheadDropdown.js","dialog.js","dialogWithGroupInput.js","acceptRejectShareDialog.js"]),type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","shareDialog.css","containerSelectionDialog.css","vaultItem.css"]),js:new LPDialog.JSFileSet("selectDropdown.js typeaheadDropdown.js dialog.js shareDialog.js bloodhound.js bloodhoundDropdown.js vaultItemTypeahead.js sharingModel.js".split(" ")),
type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","containerSelectionDialog.css","identityDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","containerSelectionDialog.js","identityDialog.js"]),type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css",
"containerSelectionDialog.css","sharedFolderAccessDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","containerSelectionDialog.js","sharedFolderAccessDialog.js"]),type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","sharedFolderDialog.css"]),js:new LPDialog.JSFileSet("dialog.js sharedFolderDialog.js bloodhound.js selectDropdown.js typeaheadDropdown.js bloodhoundDropdown.js".split(" ")),
type:"SharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","dialogWithGroupInput.js","folderDialog.js"]),type:"CreateSharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css",
"createCreditMonitoringDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","createCreditMonitoringDialog.js"]),type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","generatePasswordDialog.css","passwordMeter.css"]),js:new LPDialog.JSFileSet(["dialog.js","generatePasswordDialog.js","selectDropdown.js","passwordMeter.js"]),type:"GeneratePasswordDialog"}),
login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:new LPDialog.CSSFileSet(["loginDialog.css"]),js:new LPDialog.JSFileSet(["loginDialog.js","capslockstate.js"]),type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:new LPDialog.CSSFileSet(["repromptDialog.css"]),js:new LPDialog.JSFileSet(["repromptDialog.js"]),type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",
css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","createAccountDialog.css","passwordMeter.css"]),js:new LPDialog.JSFileSet(["dialog.js","createAccountDialog.js","selectDropdown.js","passwordMeter.js"]),type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","selectDropdown.js","typeaheadDropdown.js","dialogWithGroupInput.js","folderDialog.js"]),htmlSource:"folderDialog.html"}),
fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","fieldHistoryDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","fieldHistoryDialog.js"]),type:"FieldHistoryDialog"}),linkAccount:new LPDialog.DialogLoader({id:"linkAccountDialog",htmlSource:"linkAccountDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","linkAccountDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","linkAccountDialog.js"]),
type:"LinkAccountDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","confirmationDialog.js"]),type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",htmlSource:"alertDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","confirmationDialog.js"]),type:"AlertDialog"}),
enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","enterpriseTrialDialog.js"]),type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","denyEmergencyAccessDialog.js"]),
type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","verifyEmailDialog.js"]),type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","passwordMeter.css"]),js:new LPDialog.JSFileSet("dialog.js dialogWithGroupInput.js editableFieldsDialog.js passwordMeter.js applicationDialog.js selectDropdown.js typeaheadDropdown.js".split(" ")),
type:"ApplicationDialog"}),chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","chooseProfileDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","chooseProfileDialog.js"]),type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","vaultItem.css"]),js:new LPDialog.JSFileSet(["dialog.js",
"vaultItemSelectDialog.js"]),type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","inviteFriendsDialog.js"]),type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js",
"addEmergencyAccessDialog.js"]),type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","upgradePremiumDialog.js"]),type:"UpgradePremiumDialog"}),sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),js:new LPDialog.JSFileSet(["dialog.js",
"sharingKeyDialog.js"]),type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:new LPDialog.JSFileSet(["dialog.js","dialogWithGroupInput.js","editableFieldsDialog.js"]),type:"AddFormFieldDialog"}),wait:new LPDialog.DialogLoader({id:"waitDialog",htmlSource:"waitDialog.html",js:new LPDialog.JSFileSet(["dialog.js","waitDialog.js"]),css:new LPDialog.CSSFileSet(["dialog.css"]),type:"WaitDialog"})};
$.extend(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","notificationDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","notificationDialog.js"]),type:"NotificationDialog"}),duplicatePassword:new LPDialog.DialogLoader({id:"duplicatePasswordDialog",htmlSource:"duplicatePasswordDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","duplicatePasswordDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js",
"duplicatePasswordDialog.js"]),type:"DuplicatePasswordDialog"}),weakPassword:new LPDialog.DialogLoader({id:"weakPasswordDialog",htmlSource:"weakPasswordDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","weakPasswordDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","weakPasswordDialog.js"]),type:"WeakPasswordDialog"}),vaultToggleDialog:new LPDialog.DialogLoader({id:"vaultToggleDialog",htmlSource:"vaultToggleDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css"]),
js:new LPDialog.JSFileSet(["dialog.js","vaultToggleDialog.js"]),type:"VaultToggleDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:new LPDialog.CSSFileSet(["buttons.css","dialog.css","preferencesDialog.css"]),js:new LPDialog.JSFileSet(["dialog.js","preferencesDialog.js"]),type:"PreferencesDialog"})});
dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog.css",js:["extensionLoginDialog.js","selectDropdown.js","typeaheadDropdown.js"],type:"ExtensionLoginDialog"});
