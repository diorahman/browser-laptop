BloodhoundDropdown=function(a,b,c,d){TypeaheadDropdown.call(this,a,null,d);b.datumTokenizer=b.datumTokenizer||Bloodhound.tokenizers.whitespace;b.queryTokenizer=b.queryTokenizer||Bloodhound.tokenizers.whitespace;b.remote=b.remote||{};b.remote.transport=function(a,b,c){LPPlatform.ajax($.extend(a,{success:function(a){b(a)},error:function(a,b,d){c(d)}}))};this.bloodhound=new Bloodhound(b);this.optionLabel=LPTools.getOption(c,"optionLabel",null);this.elementTemplate=LPTools.getOption(c,"elementTemplate",
null);this.getValueFromDatum=LPTools.getOption(this.elementTemplate,"value",null);this.ignoreDatum=LPTools.getOption(c,"ignore",null);this.focused=!1;var g=this;a=$(a);a.unbind("focus");a.bind("focus",function(){g.focused=!0});a.bind("blur",function(){g.focused=!1})};BloodhoundDropdown.prototype=Object.create(TypeaheadDropdown.prototype);BloodhoundDropdown.constructor=BloodhoundDropdown;
(function(){BloodhoundDropdown.prototype.fireOnChange=function(a){if(null!==this.onChangeCallback&&this.options&&this.options[a])this.onChangeCallback(this.options[a].datum,a)};BloodhoundDropdown.prototype.getInputValue=function(a){if(this.getValueFromDatum)return this.getValueFromDatum(a.datum);TypeaheadDropdown.prototype.getInputValue.apply(this,arguments)};BloodhoundDropdown.prototype.processBloodhoundResponse=function(a,b){if(this.focused&&0<a.length){for(var c=[],d=0,g=a.length;d<g;++d){var f=
a[d],e=this.bloodhound.identify(f);if(null===this.ignoreDatum||!this.ignoreDatum(e,f))e={value:e,label:this.optionLabel(f),datum:f},this.elementTemplate&&(e.element=this.elementTemplate.template(f)),c.push(e),0===d&&this.queryMatches(e,b)&&this.setHint(b,e)}this.setOptions(c);b&&this.show()}else this.hide(),this.clearHint()};BloodhoundDropdown.prototype.updateDropdown=function(a){var b=this,c=function(c){b.processBloodhoundResponse(c,a)};b.bloodhound.search(a,c,c)}})();
