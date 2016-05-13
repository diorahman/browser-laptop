function LP_objectSize(a){var b,c=0;if(null==a||"undefined"==typeof a)return 0;if("function"!=typeof a.hasOwnProperty&&"undefined"!=typeof a.length)return a.length;for(b in a)a.hasOwnProperty(b)&&c++;return c}function LP_getComputedStyle(a,b){var c=null;return!b||!a?null:c="undefined"!=typeof a.getComputedStyle?g_isfirefox?a.getComputedStyle(b,null):a.getComputedStyle(b):b.currentStyle}
function LP_getloggedin(){return g_isie?init_LPfn()&&LPfn?LPfn.get_loginstate():!1:"undefined"!=typeof g_isloggedin?g_isloggedin:lploggedin}function LP_setloggedin(a){"string"==typeof a&&"0"===a&&(a=!1);if(g_isie)return init_LPfn()&&LPfn?LPfn.set_loginstate(a):!1;if("undefined"!=typeof g_isloggedin)g_isloggedin=a?!0:!1;else if("undefined"!=typeof lploggedin)lploggedin=a?!0:!1;else return!1;return!0}function get_win_self(a){return"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk?a:a.self}
function LP_get_live_style(a){if(!a||!a.ownerDocument||!g_isie&&!a.ownerDocument.defaultView)return null;var b;if(g_isie&&a.currentStyle)b=a.currentStyle;else try{b=a.ownerDocument.defaultView.getComputedStyle(a,"")}catch(c){"undefined"!=typeof a.currentStyle&&(b=a.currentStyle)}return b}function LP_elt_get_text(a){return!a?"":"undefined"!=typeof g_isfirefox&&g_isfirefox?null==a.textContent?"":a.textContent:"undefined"!=typeof a.textContent&&null!=a.textContent?a.textContent:get_innertext(a)}
function LP_elt_set_text(a,b){if(!a)return!1;"undefined"!=typeof g_isfirefox&&g_isfirefox?a.textContent=b:set_innertext(a,b);return!0}function parse_zindex(a){if("string"==typeof a&&-1!=a.indexOf("e")){a=""+parseFloat(a);for(var b="",c=a.length-1;0<=c&&"0"==a.charAt(c);c--)b+="9";a=a.substring(0,c+1)+b}return parseInt(a)}
function LP_getAbsolutePos(a,b,c,d){LPCTR("getAbsolutePos");if(!a||!b)return null;if("undefined"==typeof c||null===c)c=!1;if("undefined"==typeof d||null===d)d=!1;var g=null;try{g=typeof b.getBoundingClientRect}catch(f){g=null}if(!g||"undefined"==g)return null;try{var h=b.getBoundingClientRect(),j,e;j="undefined"==typeof h.width?h.right-h.left:h.width;e="undefined"==typeof h.height?h.bottom-h.top:h.height;var k=LP_get_cached_body_rect(a),g=b=0,l=LP_get_cached_body_style(a);g_bodystyle_relative&&(k&&
l&&"relative"==l.position)&&!d&&(b=k.left,g=k.top);l=d=0;if(!c){var n="undefined"!=typeof window&&window?window:a.defaultView;if("pageXOffset"in n)var p=n.pageXOffset,q=n.pageYOffset;else{var m;c=1;"undefined"!=typeof g_isie&&g_isie&&"undefined"!=typeof a.querySelector&&"undefined"==typeof a.addEventListener?m=1:(k&&(c=Math.round(100*((k.right-k.left)/a.body.offsetWidth))/100),m=c);p=Math.round(a.documentElement.scrollLeft/m);q=Math.round(a.documentElement.scrollTop/m)}d=p;l=q}return{left:h.left+
d-b,top:h.top+l-g,width:j,height:e}}catch(r){return"undefined"!=typeof write_error_to_history&&write_error_to_history(a,"getAbsolutePos",r),null}}
function LP_measureText(a,b,c,d,g){var f=LP_measureTextCacheGet(a,b,d);if(null!=f)return f;var f=a.createElement("span"),h=null;if(null==d&&null==c)return h;null==g&&(g=a.body);null==g&&(g=a.getElementById("hiddenel"));g&&(g.appendChild(f),null!=d&&(f.style.cssText=d),null!=c&&(f.style.fontSize=""+c+"px"),f.style.position="absolute",f.style.left="-1000px",f.style.top="-1000px",LP_elt_set_text(f,b),h={width:f.clientWidth,height:f.clientHeight},LP_measureTextCacheSet(a,b,d,h),g.removeChild(f));return h}
function lp_url_is_lastpass(a){if(null==a)return!1;var b="https://lastpass.com/";"undefined"!=typeof base_url&&(b=base_url);return 0==a.indexOf(b)||0==a.indexOf("https://lastpass.com/")||0==a.indexOf("https://lastpass.eu/")?!0:"undefined"!=typeof g_loosebasematching?(a=lp_gettld_url(a),RegExp(a+"/$").test(base_url)):/^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i.test(a)}
function LP_getElementByIdOrName(a,b,c,d){"document"==a&&(a=document);a||(a=LP_derive_doc());if(null==a||null==b||0==b.length||"undefined"==typeof a.getElementsByTagName)return null;c=c?c.toUpperCase():"INPUT";c.toLowerCase();for(var g=[],g=c&&"INPUT"!=c&&!g_isie?LP_getElementsByXPath(a,sprintf("*[@id='%s' or @name='%s']",b,b)):LP_getAllInputsByIdOrName(a,b,!0),f=[],h=0;h<g.length;h++)f[f.length]=g[h];var h=f.length,j=a.getElementById(b);if(null!=j){if(0==h||1==h&&(g[0]==j||null==g[0]))return j;f[f.length]=
j}if(LP_name_is_inputidx(a,b)&&(b=LP_getinputidx_from_name(a,b),null!==b&&(j=LP_getElementByIdx(a,b),null!=j)))return j;if(1==h)return f[0];if(0==h)return null;b=[];g=0;h=-1;if("undefined"==typeof Math)return null;for(var j=Math.floor(1E4*Math.random()),e=0;e<f.length;e++)b[e]=0,f[e].tagName.toUpperCase()==c&&(b[e]+=20,f[e]&&(f[e].tagName&&"INPUT"==f[e].tagName.toUpperCase())&&"hidden"!=f[e].type&&(b[e]+=10)),null!=f[e].style&&"none"!=f[e].style.display&&checkIsDisplayed(a,f[e],0,null,j,!0)&&(b[e]+=
5),f[e]&&(f[e].tagName&&"INPUT"==f[e].tagName.toUpperCase())&&inputHasLPBackground(f[e])&&(b[e]+=7),null!=f[e].style&&"hidden"!=f[e].style.visibility&&(b[e]+=3),f[e]==g_popupfill_parent&&null!=g_popupfill_parent?b[e]+=5:f[e]==a.g_popupfill_parent&&null!=a.g_popupfill_parent&&(b[e]+=5),d&&(f[e].form&&LP_getname(f[e].form)==d)&&(b[e]+=20),b[e]>g&&(g=b[e],h=e);return 0<=h?f[h]:null}
function LP_getAllInputsByIdOrName(a,b,c){if(null==a||null==b||0==b.length||"undefined"==typeof a.getElementsByTagName)return null;var d=!0;null!==c&&(d=c);var g=a.getElementsByName(b);c=[];for(var f=0;f<g.length;f++)c[c.length]=g[f];if(d){a=a.getElementsByTagName("input");g=a.length;g>MAX_INPUTS_SOFT&&(g=MAX_INPUTS_SOFT);for(d=0;d<g;d++)a[d].id==b&&c.push(a[d])}else(b=LP_getElementByIdOrName(a,b))&&c.push(b);return c}
function isEmptyObject(a){if("undefined"==typeof Object.keys){var b=Object,c=Object.prototype.hasOwnProperty,d=!{toString:null}.propertyIsEnumerable("toString"),g="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),f=g.length;b.keys=function(a){if("object"!==typeof a&&("function"!==typeof a||null===a))throw new TypeError("Object.keys called on non-object");var b=[],e;for(e in a)c.call(a,e)&&b.push(e);if(d)for(e=0;e<f;e++)c.call(a,g[e])&&b.push(g[e]);
return b}}return 0===Object.keys(a).length}function LP_getname(a,b){if("undefined"!=typeof a&&null!=a){if(b&&"string"==typeof a.id&&""!=a.id)return a.id;if("string"==typeof a.name&&""!=a.name)return a.name;if("string"==typeof a.id)return a.id}return""}
function LP_getWindowWidth(a,b){LPCTR("windowWidth");if(!a)return 0;if(a===LP_derive_doc())return console_warn("ERROR: expected win, got doc"),0;var c=a.innerWidth;if("undefined"==typeof c||null===c||isNaN(c))try{var d=a.document.documentElement;if(!d||!d.clientWidth)d=a.document.body;d.clientWidth&&(c=parseInt(d.clientWidth),isNaN(c)&&(c=0))}catch(g){c=0}var d=c,f=a.document;if(!f)return 0;var h=LP_get_body_reference(f),j=LP_get_cached_body_style(f);g_bodystyle_relative&&(j&&"relative"==j.position)&&
(h=f.documentElement);j=f.getElementById("_lpinvis");null==j&&(j=f.createElement("div"),j.id="_lpinvis",j.style.left="0px",j.style.right="0px",j.style.top="0px",j.style.height="0px",j.style.visibility="hidden",j.style.position="absolute",h.appendChild(j));var e=LP_getComputedStyle("undefined"!=typeof window&&window?window:f.defaultView,h);if(!e)return 0;f=parseInt(e.marginLeft);e=parseInt(e.marginRight);0<j.offsetWidth&&4*j.offsetWidth<c&&(d=(0<f||0<e)&&!isNaN(f)&&!isNaN(e)?j.offsetWidth+e+f:j.offsetWidth);
b||h.removeChild(j);return d}function LP_getWindowHeight(a,b){null==b&&LP_derive_doc();if(!a)return 0;try{var c=parseInt(a.innerHeight);if("undefined"==typeof c||null===c||isNaN(c)||0>=c){if("undefined"!=typeof a.jQuery)return $(a).height();var d=a.document.documentElement;if(!d||!d.clientHeight)d=a.document.body;return d.clientHeight?(c=parseInt(d.clientHeight),isNaN(c)&&(c=0),c):0}}catch(g){return verbose_log("getWindowHeight failed, "+g.message),0}0>c&&(c=0);return c}
function LP_pos_viewport(a){if(!a)return[0,0];var b=0,c=0,d=null;a.document&&(d=a.document.documentElement,d||(d=a.document.body));c=a.pageYOffset?parseInt(a.pageYOffset):d&&d.scrollTop?parseInt(d.scrollTop):0;a.pageXOffset?b=parseInt(a.pageXOffset):d&&d.scrollLeft&&(b=parseInt(d.scrollLeft));isNaN(b)&&(b=0);isNaN(c)&&(c=0);return[b,c]}
function LP_getname_or_idx(a,b,c){if(!a&&(a=document,!a))return"";c=LP_getname(b,c);if(""===c||null===c)if("INPUT"==b.tagName||"input"==b.tagName)c=LP_inputidx_to_name(a,LP_getinputidx(a,b));return c}function LP_getinputidx(a,b){if(!a&&(a=document,!a))return"";for(var c=a.getElementsByTagName("INPUT"),d=0,d=0;d<c.length;d++)if(c[d]==b)return d;return""}var LPMAGICINPUTIDX="input_idx_";function LP_inputidx_to_name(a,b){if(null!==b&&is_valid_input_indexes(a))return LPMAGICINPUTIDX+b}
function LP_name_is_inputidx(a,b){return b&&0==b.indexOf(LPMAGICINPUTIDX)&&b.length>LPMAGICINPUTIDX.length?!0:!1}function LP_getinputidx_from_name(a,b){return is_valid_input_indexes(a)&&0==b.indexOf(LPMAGICINPUTIDX)?b.substr(LPMAGICINPUTIDX.length):null}function LP_getElementByIdx(a,b){var c=null;is_valid_input_indexes(a)&&(c=a.getElementsByTagName("INPUT")[b]);return c}function invalidate_input_indexes(a){if(!a&&(a=document,!a))return;a.g_need_to_recompute_input_index=!0}
function validate_input_indexes(a){if(!a&&(a=document,!a))return;a.g_need_to_recompute_input_index=!1}function is_valid_input_indexes(){return!0}function LP_get_body_reference(a){if(!a)return null;var b=null;return b="undefined"!=typeof a.body?a.body:a.getElementById("main")?a.getElementById("main"):a.documentElement}
function LP_get_cached_body_style(a){if(!a)return null;var b=LP_get_body_reference(a),c=null;"undefined"==typeof a.g_posbodystyle_cache?b&&(c=(c="undefined"!=typeof window&&window?window:a.defaultView)&&"undefined"!=typeof c.getComputedStyle?c.getComputedStyle(b,null):b.currentStyle,a.g_posbodystyle_cache=c):c=a.g_posbodystyle_cache;return c}
function LP_get_cached_body_rect(a){if(!a)return null;var b;b=LP_get_body_reference(a);"undefined"==typeof a.g_posbodyrect_cache&&b?(b=b.getBoundingClientRect(),a.g_posbodyrect_cache=b):b=a.g_posbodyrect_cache;return b}function LP_derive_doc(){var a=null,a="undefined"!=typeof g_isfirefox&&g_isfirefox&&LP?LP.getBrowser().contentDocument:document;return!a?null:a}
function LP_is_inframe(a){if(!a)return!1;try{var b="undefined"!=typeof window&&window?window:a.defaultView;return get_win_self(b)!==b.top}catch(c){return!1}}function LP_pickFieldName(a,b){return!a||!b?null:LP_getname_or_idx(a,b,LP_GETNAME_FAVOR_ID_OVER_NAME)}
function LP_fieldGetWidth(a){if(!a)return 0;var b={},c=0;if("undefined"!=typeof g_isie&&g_isie){if("undefined"!=typeof a.offsetWidth&&(c=parseInt(a.offsetWidth)),!c)if("undefined"!=typeof a.currentStyle)(b=a.currentStyle)&&(c=parseInt(b.width));else return 0}else if(c=a.style.width.replace(/px/,""),0<c.indexOf("%")&&(c=c.replace(/%/,"")),""==c)try{b=a.ownerDocument.defaultView.getComputedStyle(a,""),c=b.width.replace(/px/,"")}catch(d){"undefined"!=typeof a.currentStyle&&(b=a.currentStyle,c=b.width.replace(/px/,
""))}if("NaN"==c||""===c)c=0;return c}function LP_getActiveElement(a){return!a?null:a.activeElement}function LP_docHasFocus(a){return!a?null:!0}function is_page_JSON(a){if(!a)return null;if("undefined"!=typeof a.lp_is_page_json)return a.lp_is_page_json;var b=a.body;return b&&(b=b.innerHTML,(b="undefined"!=typeof b.trim?b.trim():b.replace(/^\s*/,""))&&2<b.length&&("{"==b.charAt(0)||"("==b.charAt(0)))?a.lp_is_page_json=!0:a.lp_is_page_json=!1}
function normalize_opacity(a){if("undefined"==typeof a||null===a||"undefined"==typeof Math)return 0;var b=0;0<a&&1>=a?b=Math.floor(100*a):1<a&&100>=a&&(b=a);return b}function set_can_xref(a,b,c){if(!a||!b)return!1;g_isfirefox?a.setAttribute("can_xref_"+b,c):g_can_xref[b]=c;return!0}function get_can_xref(a,b){if(!a||!b)return!1;if(g_isfirefox){var c=a.getAttribute("can_xref_"+b);return"undefined"==typeof c||null===c?!0:c}c=g_can_xref[b];return"undefined"==typeof c||null===c?g_can_xref[b]=!0:c}
function compare_puny_urls(a,b){"undefined"!=typeof punycode&&("string"==typeof a&&-1==a.indexOf("xn--")&&(a=punycode.URLToASCII(a)),"string"==typeof b&&-1==b.indexOf("xn--")&&(b=punycode.URLToASCII(b)));"undefined"!=typeof g_iscasper&&g_iscasper&&("string"==typeof a&&(a=a.replace(/\\/g,"%5C")),"string"==typeof b&&(b=b.replace(/\\/g,"%5C")));"string"==typeof a&&(a="undefined"!=typeof a.trim?a.trim():a.replace(/^\s*/,""),0<=a.indexOf("#")&&(a=a.replace(/#$/,"")));"string"==typeof b&&(b="undefined"!=
typeof b.trim?b.trim():b.replace(/^\s*/,""),0<=b.indexOf("#")&&(b=b.replace(/#$/,"")));return a===b}function LP_getFormSubmit(a){if(!a||"FORM"!=a.tagName.toUpperCase())return null;var b=null;if("function"==typeof a.lpsubmitorig2)return a.lpsubmitorig2;try{b=Object&&"undefined"!=typeof Object.getPrototypeOf?Object.getPrototypeOf(a).submit:a.constructor.prototype.submit}catch(c){verbose&&alert(c.message),b=null}return b}
function LP_set_float(a,b){if(!a||null===b||"undefined"==typeof b)return!1;var c=a.ownerDocument;c||(c=document);var d=0;"undefined"!=typeof g_isie&&g_isie&&("undefined"!=typeof LPfn&&LPfn&&init_LPfn()&&LPfn.getDocumentMode?d=LPfn.getDocumentMode(c):"undefined"!=typeof d&&(d=getDocumentMode(c)));"undefined"!=typeof g_isie&&g_isie&&8>=d?a.style.styleFloat=b:a.style.cssFloat=b;return!0}
function LP_get_float(a){if(!a)return"";var b=a.ownerDocument;b||(b=document);var c=0;"undefined"!=typeof g_isie&&g_isie&&("undefined"!=typeof LPfn&&LPfn&&init_LPfn()&&LPfn.getDocumentMode?c=LPfn.getDocumentMode(b):"undefined"!=typeof c&&(c=getDocumentMode(b)));a=LP_get_live_style(a);return"undefined"!=typeof g_isie&&g_isie&&8>=c?a.styleFloat:a.cssFloat}
function LP_set_style_attr(a,b){if(!a||null===b||"undefined"==typeof b)return!1;var c="undefined"!=typeof document?document:a.ownerDocument,d=0;"undefined"!=typeof g_isie&&g_isie&&("undefined"!=typeof LPfn&&LPfn&&init_LPfn()&&LPfn.getDocumentMode?d=LPfn.getDocumentMode(c):"undefined"!=typeof d&&(d=getDocumentMode(c)));"undefined"!=typeof g_isie&&g_isie&&8>=d?a.style.cssText=b:a.setAttribute("style",b);return!0}
function LP_capitalize(a){if(!a)return"";"number"==typeof a&&"undefined"!=typeof a.toString&&(a=a.toString());return"string"!=typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)}function LP_gettime(){return"undefined"!=typeof Date?(new Date).getTime():0}function LP_set_image_src(a,b){if(!a||"undefined"==typeof b)return!1;g_isie?a.src=b:a.setAttribute("src",b);return!0}
function LP_has_highdef_display(a){if("undefined"!=typeof document&&a===document||null===a)if("undefined"!=typeof window)a=window;else{var b=LP_derive_doc();b&&(a=b.defaultView)}if(!a)return!1;a=a.devicePixelRatio;return"undefined"==typeof a?!1:1.5<=a}function LP_is_browser_url(a){return!a||"string"!=typeof a?!1:a.toLowerCase().match(/^(about|chrome|safari|chrome-extension|safari-extension|moz-extension|resource|opera|vivaldi):/)?!0:!1};
