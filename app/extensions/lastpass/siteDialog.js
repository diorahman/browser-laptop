var SiteDialog=function(j){EditableFieldsDialog.call(this,j,{closeButtonEnabled:!0,maximizeButtonEnabled:!0,dynamicHeight:!0,type:Account});this.changePasswordButton=null};SiteDialog.prototype=Object.create(EditableFieldsDialog.prototype);SiteDialog.prototype.constructor=SiteDialog;
(function(){var j=function(b){var a=b.domain;""!==b.a&&(a=b.a+" ("+b.domain+")");return a};SiteDialog.prototype.initialize=function(b){EditableFieldsDialog.prototype.initialize.apply(this,arguments);this.changePasswordButton=$("#autoChangePassword");this.inputFields.password.getElement().LP_addPasswordMeter(this.inputFields.unencryptedUsername.getElement());this.inputFields.url=new BloodhoundDropdown(document.getElementById("siteDialogURL"),{identify:function(a){return a.domain},remote:{url:LPProxy.getBaseURL()+
"typeahead_addsite.php?q=%QUERY",wildcard:"%QUERY"}},{optionLabel:function(a){return j(a)},elementTemplate:{template:function(a){var b=""!==a.favicon?a.favicon:"R0lGODlhEAAQAIcAAAAAAExnf1BpgWR0iHZ6hHeBkX+GkYiOmpeaopucoaSlqqWmqrm9w7q+xL+/wry/xcXGyc3Oz9HS1NPU1tnZ2d/h4+Di5OLj5uPl5+Tk5OXm6O7u7+7v8O/w8e/w8vDw8fHx8vLy8/Pz8/Pz9PT09fX19fX29vb29vf39/f3+Pj4+Pj4+fn5+vr6+/v7/Pz8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAiQAAEIHEiw4MAFCBEmQCjBIIAFMiLK8CBjA4QIBiFu2Fgh4oYJDgpq5Chxw4KCCiqSlKigIAKVGyowYNDgAYGCB2BWsHABgwYDBQvA/CCiBAoVBQoOUNlBhAkVLV4MKCigIgenK1zAiCGgYICKIEhAhRExgFcZHEKcYEG27NkOI1K0aCvDLMEAePPqteuwr8CAADs=",
h=LPTools.createElement("li","siteTypeaheadOption"),c=LPTools.createElement("div","itemIcon"),b=LPTools.createElement("img",{src:"data:image/gif;base64,"+b});h.appendChild(c);h.appendChild(LPTools.createElement("span","siteTypeaheadOptionText",j(a)));c.appendChild(b);return h},value:function(a){return a.url},hint:function(a){return j(a)}}});this.addFavButton().appendChild(this.editFormFieldsButton.get(0));var a=this;a.inputFields.url.onChange(function(b){b=LPProxy.getDomain(b.domain);var e=b.indexOf("."),
e=b.charAt(0).toUpperCase()+b.substring(1,0<e?e:b.length);a.inputFields.name.setValue(e);bg.siteCats&&bg.siteCats[b]&&a.inputFields.group.setValue(bg.siteCats[b])});b.find("#siteDialogPasswordHistory").bind("click",function(){a.vaultItem.canViewPassword()?LPRequest.makeRequest(LPProxy.getPasswordHistory,{parameters:[a.vaultItem.getID(),a.vaultItem.getShareID()],success:function(b){k(b,a.vaultItem,Constants.HISTORY_TYPES.PASSWORD)},requestSuccessOptions:{closeDialog:!1}}):Topics.get(Topics.ERROR).publish(Strings.translateString("This is a shared site. You are not permitted to view the password."))});
b.find("#siteDialogUsernameHistory").bind("click",function(){LPRequest.makeRequest(LPProxy.getUsernameHistory,{parameters:[a.vaultItem.getID(),a.vaultItem.getShareID()],success:function(b){k(b,a.vaultItem,Constants.HISTORY_TYPES.USERNAME)},requestSuccessOptions:{closeDialog:!1}})});b.find("#siteDialogNoteHistory").bind("click",function(){LPRequest.makeRequest(LPProxy.getNoteHistory,{parameters:[a.vaultItem.getID(),a.vaultItem.getShareID()],success:function(b){k(b,a.vaultItem,Constants.HISTORY_TYPES.NOTE)},
requestSuccessOptions:{closeDialog:!1}})});a.changePasswordButton.bind("click",function(){var b=function(){LPProxy.autoChangePassword(a.vaultItem.getID());a.close(!0)};a.isModified()?dialogs.confirmation.open({title:Strings.translateString("Auto Change Password"),text:Strings.translateString("Changes you have made have not been saved. Are you sure you want to continue?"),handler:b}):b()})};var k=function(b,a,d){dialogs.fieldHistory.open({history:b,vaultItem:a,type:d})};SiteDialog.prototype.open=function(b){b=
b||{};b.sourceFunction=LPProxy.getSiteModel;EditableFieldsDialog.prototype.open.call(this,b)};SiteDialog.prototype.setup=function(b,a){if(a.saveAllData){var d=a.saveAllData;delete a.saveAllData;a.defaultData={url:d.url,save_all:!0};l(d.formdata,a.defaultData)}else a.defaultData&&a.defaultData.formdata&&(l(a.defaultData.formdata,a.defaultData),delete a.defaultData.formdata);a.defaultData&&a.defaultData.url&&(d=LPProxy.getDomain(a.defaultData.url),void 0===a.defaultData.group&&bg.siteCats[d]&&(a.defaultData.group=
bg.siteCats[d]),void 0===a.defaultData.name&&(a.defaultData.name=d));a.title=a.vaultItem?Strings.translateString("Edit Site"):Strings.translateString("Add Site");EditableFieldsDialog.prototype.setup.call(this,b,a);this.changePasswordButton.hide();this.vaultItem?(b.find(".history").show(),"1"===this.vaultItem._data.pwch&&this.changePasswordButton.show(),this.inputFields.url.disableDropdown()):(b.find(".history").hide(),this.inputFields.url.enableDropdown())};SiteDialog.prototype.validate=function(b){var a=
EditableFieldsDialog.prototype.validate.apply(this,arguments);""===b.name&&(this.addError("name","Name is required."),a=!1);return a};var l=function(b,a){a.fields=[];for(var d=b.split("\n"),e=0,h=d.length;e<h;++e){var c=d[e].split("\t"),g=decodeURIComponent(c[0]),j=decodeURIComponent(c[1]),f=decodeURIComponent(c[2]),c=decodeURIComponent(c[3]);if("action"===c)a.action=f;else if("method"===c)a.method=f;else if(j)switch(c){case "email":case "text":case "url":case "tel":case "password":case "checkbox":case "radio":case "select":case "select-one":g=
{formname:g,name:j,type:c,value:f};if("checkbox"===c)g.value="-1"===f.substring(f.length-2),g.valueAttribute=f.substring(0,f.length-2);else if("radio"===c)if("-1"===f.substring(f.length-2))g.value=f.substring(0,f.length-2);else continue;a.fields.push(g)}}};SiteDialog.prototype.add=function(b){if(this.data.saveOptions&&this.data.saveOptions.checkForReplacement){for(var a=LPProxy.getDomain(b.url),d=[],e=LPProxy.getSiteModels(),h=0,c=e.length;h<c;++h){var g=e[h];LPProxy.getDomain(g.getURL())===a&&b.unencryptedUsername===
g.getUsername()&&d.push(g)}0<d.length?dialogs.vaultItemSelect.open({title:Strings.translateString("Replace Site"),nextButtonText:Strings.translateString("Replace"),backButtonText:Strings.Vault.NO,text:Strings.translateString("Would you like to replace an existing entry you have for %1?",a),items:d,closeHandler:this.createDynamicHandler(function(){EditableFieldsDialog.prototype.add.call(this,b)}),handler:this.createDynamicHandler(function(a){dialogs.vaultItemSelect.close(!0);this.save(a[0],b)}),buildOptions:{multiSelect:!1}}):
EditableFieldsDialog.prototype.add.call(this,b)}else EditableFieldsDialog.prototype.add.call(this,b)}})();
