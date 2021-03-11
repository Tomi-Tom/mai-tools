!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=96)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const o=new URLSearchParams(document.location.search);let r="en";o.get("hl")?r=o.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(r="zh"),t.LANG=r},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const o={zh:{advStart:"🕓 下載黃譜成績中…",advDone:"✔ 黃譜成績下載完畢！",expStart:"🕓 下載紅譜成績中…",expDone:"✔ 紅譜成績下載完畢！",masStart:"🕓 下載紫譜成績中…",masDone:"✔ 紫譜成績下載完畢！",remStart:"🕓 下載白譜成績中…",remDone:"✔ 白譜成績下載完畢！"},en:{advStart:"🕓 Downloading Advanced scores…",advDone:"✔ Advanced scores downloaded!",expStart:"🕓 Downloading Expert scores…",expDone:"✔ Expert scores downloaded!",masStart:"🕓 Downloading Master scores…",masDone:"✔ Master scores downloaded!",remStart:"🕓 Downloading Re:Master scores…",remDone:"✔ Re:Master scores downloaded!"}}[n(1).LANG];t.statusText=function(e,t){switch(e){case"Re:MASTER":return t?o.remDone:o.remStart;case"MASTER":return t?o.masDone:o.masStart;case"EXPERT":return t?o.expDone:o.expStart;case"ADVANCED":return t?o.advDone:o.advStart}return""}},2:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchNewSongs=t.fetchAllSongs=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0;const r=n(3),i=n(6),a=n(4);function c(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}function s(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=a.getSongIdx(e),o=r.getSongName(e),i=r.getChartType(e);let c;"Link"===o&&(c=(yield a.isNicoNicoLink(t))?"Link(nico)":"Link(orig)"),n.push({dx:i,name:o,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchPage=c,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?n.value:e(t=yield c("/maimai-mobile/record/musicVersion/"))}))},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=i.SELF_SCORE_URLS.get("MASTER");e=yield c(t)}return yield s(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield c(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield s(t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const r={action:n,payload:o};e.postMessage(r,t)}}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPlayerGrade=t.getPlayerName=t.getChartType=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0,t.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},t.getPlayerName=function(e){var t;return null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},t.fetchPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},4:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=void 0;const r=n(2);t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,t,n){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),n?e+" [DX]":e};let i={};t.isNicoNicoLink=function(e){return o(this,void 0,void 0,(function*(){if(i.nico===e)return!0;if(i.original===e)return!1;const t=(yield r.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?i.nico=e:i.original=e,t}))}},6:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const r=n(3),i=n(2);t.SELF_SCORE_URLS=new Map([["Re:MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],["MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],["EXPERT","/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],["ADVANCED","/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"]]),t.fetchScores=function(e,n){return o(this,void 0,void 0,(function*(){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;const a=yield i.fetchPage(o),c=a.querySelectorAll(".main_wrapper.t_c .m_15"),s={genre:"",scoreList:n};return c.forEach(t=>function(e,t,n){const o=e.classList.contains("screw_block"),i=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(o)n.genre=e.innerText;else if(i){const o=r.getSongName(e),i=r.getChartLevel(e),a=1===r.getChartType(e)?"DX":"STANDARD",c=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!c)return;n.scoreList.push([o,n.genre,t,i,a,c].join("\t"))}}(t,e,s)),a}))}},96:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),i=n(6),a=n(1),c=n(12),s=n(2);!function(){const e={zh:{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating"},en:{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating"}}[a.LANG],t=location.pathname.includes("friend");!function(){const n=document.location.host;if("maimaidx-eng.com"!==n&&"maimaidx.jp"!==n)return void s.handleError(e.pleaseLogIn);let a="https://myjian.github.io/mai-tools/rating-calculator/";const u=new URLSearchParams,l=t?null:r.getPlayerName(document.body);l&&u.set("playerName",l);const d=u.toString();let f;d&&(a+="?"+d),navigator.userAgent.startsWith("Mozilla/5.0 (iP")?function(t){const n=document.body.querySelector(".basic_block.p_10.f_0");if(!n)return;const o=n.querySelector(".basic_block > .p_l_10");let r=n.querySelector(".analyzeLink");r&&r.remove(),r=document.createElement("a"),r.className="analyzeLink f_r f_14",r.style.color="#1477e6",r.target="selfRating",r.innerText=e.analyze,r.href=t,o.append(r)}(a):window.open(a,"selfRating"),self.ratingCalcMsgListener&&window.removeEventListener("message",self.ratingCalcMsgListener),self.ratingCalcMsgListener=e=>{if(console.log(e.origin,e.data),s.ALLOWED_ORIGINS.includes(e.origin)){const n=s.getPostMessageFunc(e.source,e.origin);"ready"===e.data?f=function(e){return o(this,void 0,void 0,(function*(){let n;const o=yield s.fetchGameVersion(document.body);e("gameVersion",o);const a=t?null:r.fetchPlayerGrade(document.body);a&&e("playerGrade",a);const u=[];for(const t of i.SELF_SCORE_URLS.keys()){e("appendPlayerScore",c.statusText(t,!1));const o=yield i.fetchScores(t,u);"MASTER"===t&&(n=o),e("appendPlayerScore",c.statusText(t,!0))}return e("replacePlayerScore",""),e("appendPlayerScore",u.join("\n")),e("calculateRating",""),n}))}(n):"fetchNewSongs"===e.data.action?s.fetchNewSongs(e.data.payload).then(e=>n("newSongs",e)):"fetchAllSongs"===e.data.action&&f.then(e=>s.fetchAllSongs(e).then(e=>n("allSongs",e)))}},window.addEventListener("message",self.ratingCalcMsgListener)}()}()}});