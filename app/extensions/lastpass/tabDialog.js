(function(){Topics.get(Topics.DIALOG_OPEN).subscribe(function(a){$("title").text(a.getTitle())});Topics.get(Topics.DIALOG_CLOSE).subscribe(function(){if(0===Dialog.prototype.getDialogCount()&&0===LPDialog.getPendingCount())LPPlatform.closeTab();else{var a=Dialog.prototype.getCurrentDialog();a&&$("title").text(a.getTitle())}});Topics.get(Topics.ESCAPE).subscribe(function(){Dialog.prototype.getCurrentDialog().close()});Topics.get(Topics.REPROMPT).subscribe(function(a){dialogs.reprompt.open({successCallback:a})});
Topics.get(Topics.CONFIRM).subscribe(function(a){dialogs.confirmation.open(a)});Topics.get(Topics.ITEM_SHARE).subscribe(function(a){LPTools.openShareDialog(a)});var e=function(a,c,b){LPProxy.initializeModel();b&&b.dialogWindow&&Dialog.prototype.setIsDialogWindow(!0);dialogs[a].open.call(dialogs[a],c)};window.openDialog=function(a,b,d){a&&(LPPlatform.initialized()?(e(a,b,d),window.openDialog=function(){}):window.openDialog=function(){e(a,b,d)})};var b=null;LPPlatform.addEventListener(document.body,
"click",function(){LPTools.hideContextMenu(b);b=null});Topics.get(Topics.CONTEXT_MENU).subscribe(function(a,c){b=LPTools.displayContextMenu(a,c)});Topics.get(Topics.CONTEXT_CLOSE).subscribe(function(){LPTools.hideContextMenu(b);b=null})})();LPPlatform.addEventListener(window,"unload",function(){Topics.get(Topics.CLEAR_DATA).publish()});LPPlatform.addEventListener(document,"DOMContentLoaded",function(){Notifications.initialize()});
