!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=89)}({2:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((i=i.apply(e,t||[])).next())}))};function o(e){return i(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0,t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io"],t.handleError=function(e){alert(e)},t.fetchPage=o,t.fetchGameVersion=function e(t){return i(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?n.value:e(t=yield o("/maimai-mobile/record/musicVersion/"))}))},t.getPostMessageFunc=function(e,t){return(n,i)=>{const o={action:n,payload:i};e.postMessage(o,t)}}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlayerGrade=t.getPlayerName=t.getChartType=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0,t.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){e.classList.contains("pointer")||(e=e.querySelector("pointer"));const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getChartType=function(e){return e.id?e.id.includes("sta_")?"STANDARD":"DX":e.querySelector("img:nth-child(2)").src.includes("_standard")?"STANDARD":"DX"},t.getPlayerName=function(e){var t;return null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},t.fetchPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},89:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(6),r=n(9);!function(){i(this,void 0,void 0,(function*(){console.log(yield function(){return i(this,void 0,void 0,(function*(){const e=Array.from(document.querySelectorAll(".w_450.m_15.p_r.f_0")),t=[];for(const n of e){const e=r.getSongIdx(n);let i=o.getSongName(n);const c=o.getChartDifficulty(n);let u=o.getChartLevel(n);const a=o.getChartType(n);"Link"===i?i=(yield r.isNicoNicoLink(e))?"Link(nico)":"Link(orig)":"+♂"!==i&&"39"!==i||(i="'"+i),"DX"===a&&(i+=" [dx]"),u.includes("+")||(u="'"+u),t.push([i,c,u].join("\t"))}}))}())}))}()},9:function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=void 0;const o=n(2);t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,t,n){return"Link"===e?t.includes("niconico")?"Link(nico)":"Link(org)":n?e+"[dx]":e};let r={};t.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield o.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e}))}}});