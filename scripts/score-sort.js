!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=94)}({11:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSongProperties=n.buildSongPropsMap=void 0;const r=t(9),o=/\bdx\s*:\s*([0-9]+)/,i=/\blv\s*:\s*(\[.+?\])/,c=/\bv\s*:\s*([0-9]+)/,s=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,a=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function l(e){const n=e.match(o),t=e.match(i),r=e.match(c),l=e.match(s),u=e.match(a);if(n&&t&&r&&l)return{dx:parseInt(n[1]),lv:JSON.parse(t[1]),debut:parseInt(r[1]),name:(f=l[1],"D✪N’T  ST✪P  R✪CKIN’"===f?"D✪N’T ST✪P R✪CKIN’":f.replace(/" \+ '/g,"").replace(/' \+ "/g,"")),nickname:u&&u[1]};var f}function u(e,n){e.has(n.name)||e.set(n.name,[]);e.get(n.name).push(n)}n.buildSongPropsMap=function(e){const n=e.split("\n"),t=new Map;for(const e of n){const n=l(e);n&&u(t,n)}return t},n.getSongProperties=function(e,n,t,o){let i=e.get(n);if(i&&i.length>0){if(i.length>1){const e=function(e){return"DX"===e}(o)?1:0;if(i=i.filter(n=>n.dx===e),i.length>1){const e=r.getSongNickname(n,t);i=i.filter(n=>n.nickname===e)}}if(i.length)return i.length>1&&(console.warn(`Found multiple song properties for ${n} ${o}`),console.warn(i)),i[0]}return console.warn(`Could not find song properties for ${n} ${o}`),null}},12:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDefaultLevel=n.getOfficialLevel=void 0;n.getOfficialLevel=function(e){const n=Math.floor(e);return e-n>.6?n+"+":n.toString()},n.getDefaultLevel=function(e){if(!e)return 1;const n=parseInt(e);return e.endsWith("+")?n+.7:n}},15:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.iWantSomeMagic=void 0;const o=t(4),i=[105,117,117,113,116,59,48,48,104,106,116,117,47,104,106,117,105,118,99,118,116,102,115,100,112,111,117,102,111,117,47,100,112,110,48,110,122,107,106,98,111,48,100,51,52,54,98,49,50,52,49,58,57,103,56,102,101,99,100,52,98,53,55,98,54,49,53,57,98,53,100,52,58,57,48,115,98,120,48],c=[105,117,117,113,116,59,48,48,116,104,106,110,102,115,98,47,104,106,117,105,118,99,47,106,112,48,110,98,106,96,83,98,117,106,111,104,66,111,98,109,122,123,102,115,48,116,100,115,106,113,117,116,96,110,98,106,110,98,106,48,110,98,106,101,121,96,106,111,96,109,119,96,116,113,109,98,116,105,47,107,116];n.iWantSomeMagic=function(e){return r(this,void 0,void 0,(function*(){let n=i;switch(e){case o.DX_SPLASH_GAME_VERSION:n=c}const t=n.map(e=>e-1),r=yield fetch(String.fromCharCode(...t));return yield r.text()}))}},2:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((r=r.apply(e,n||[])).next())}))};function o(e){return r(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0,n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io"],n.handleError=function(e){alert(e)},n.fetchPage=o,n.fetchGameVersion=function e(n){return r(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?t.value:e(n=yield o("/maimai-mobile/record/musicVersion/"))}))},n.getPostMessageFunc=function(e,n){return(t,r)=>{const o={action:t,payload:r};e.postMessage(o,n)}}},4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.DX_SPLASH_GAME_VERSION=n.DX_PLUS_GAME_VERSION=n.DX_GAME_VERSION=n.SSSPLUS_MIN_ACHIEVEMENT=n.DIFFICULTY_CLASSNAME_MAP=n.DIFFICULTIES=void 0,n.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],n.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),n.SSSPLUS_MIN_ACHIEVEMENT=100.5,n.DX_GAME_VERSION=13,n.DX_PLUS_GAME_VERSION=14,n.DX_SPLASH_GAME_VERSION=15},5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.fetchPlayerGrade=n.getPlayerName=n.getChartType=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0,n.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){e.classList.contains("pointer")||(e=e.querySelector(".pointer"));const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getChartType=function(e){return e.id?e.id.includes("sta_")?"STANDARD":"DX":e.querySelector("img:nth-child(2)").src.includes("_standard")?"STANDARD":"DX"},n.getPlayerName=function(e){var n;return null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},n.fetchPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},9:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=void 0;const o=t(2);n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,n,t){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),t?e+" [DX]":e};let i={};n.isNicoNicoLink=function(e){return r(this,void 0,void 0,(function*(){if(i.nico===e)return!0;if(i.original===e)return!1;const n=(yield o.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?i.nico=e:i.original=e,n}))}},94:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(4),i=t(5),c=t(12),s=t(15),a=t(11),l=t(9),u=t(2);!function(e){const n=["1","2","3","4","5","6","7","7+","8","8+","9","9+","10","10+","11","11+","12","12+","13","13+","14","14+","15"],t=["SSS+","SSS","SS+","SS","S+","S","AAA","AA","A","BBB","BB","B",null],f=["AP+","AP","FC+","FC",null],d={};function g(e){const n=e-Math.floor(e);return n>.95?1:n>.65&&n<.69?.7:0}function p(e){const n=g(e);return n?n<1?"UNKNOWN LEVEL "+Math.floor(e)+"+":"UNKNOWN LEVEL "+e.toFixed(0):"INTERNAL LEVEL "+e.toFixed(1)}function _(e,n){const t=new Map;n&&e.reverse();for(const n of e)t.set(n,[]);return n&&e.reverse(),t}function h(n,t,r){let o=[];return n.forEach((n,i)=>{if(n.length){const c=e.createElement("div");c.className="screw_block m_15 f_15",c.innerText=function(e,n,t,r){let o="◖";return o+=e&&n?e+" "+n:e?"NO "+e:n||" --- ",o+"◗　　　"+t+"/"+r}(t,i,n.length,r),o.push(c),o=o.concat(n)}}),o}function m(e){return e.getElementsByClassName("music_lv_block")[0]}function v(e,n="lv"){return m(e).dataset[n]}function S(e,n){const t=m(e);if(!t.dataset.inlv){const e=g(n);t.dataset.inlv=n.toFixed(2);const r=(e?"*":"")+n.toFixed(1);r.length>4&&(t.classList.remove("f_14"),t.classList.add("f_13")),t.innerText=r}}function y(e,n,t){let r=0;return t&&(r=t.lv[n],"number"!=typeof r?r=0:r<0&&(r=Math.abs(r)-.02)),r||c.getDefaultLevel(v(e))-.02}function E(e,n){const t=v(e,"inlv");if(t)return parseFloat(t);const r=i.getSongName(e),c=i.getChartType(e),s=o.DIFFICULTIES.indexOf(i.getChartDifficulty(e));let u;if("Link"===r){const t=l.getSongIdx(e);d.nicoLinkIdx===t?u=a.getSongProperties(n,r,"niconico",c):d.originalLinkIdx===t&&(u=a.getSongProperties(n,r,"",c)),console.log(u)}else u=a.getSongProperties(n,r,"",c);return y(e,s,u)}function b(e,n){const t=E(e,d.songProps),r=E(n,d.songProps);return t<r?-1:r<t?1:0}function A(e,t){const r=_(n,t);return e.forEach(e=>{const n=v(e);r.get(n).push(e)}),d.songProps&&r.forEach(e=>{e.sort(b),t&&e.reverse()}),h(r,"LEVEL",e.length)}function P(e){const n=e.querySelector(".music_score_block.w_120");return n?parseFloat(n.innerText):n}function N(e,n){const t=P(e),r=P(n);return null===t&&null===r?0:null===r?-1:null===t?1:t>r?-1:t<r?1:0}function L(e,n){const r=_(t,n);return e.forEach(e=>{const n=function(e){const n=e.children[0].querySelectorAll("img");if(n.length<5)return null;const t=n[n.length-1].src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf(".");return t.substring(r+1,o).replace("p","+").toUpperCase()}(e);r.get(n).push(e)}),r.forEach(e=>{e.sort(N),n&&e.reverse()}),h(r,"RANK",e.length)}function I(e,n){const t=_(f,n);return e.forEach(e=>{const n=function(e){const n=e.children[0].querySelectorAll("img");if(n.length<5)return null;const t=n[n.length-2].src.replace(/\?ver=.*$/,""),r=t.lastIndexOf("_"),o=t.lastIndexOf("."),i=t.substring(r+1,o);return"back"===i?null:i.replace("ap","AP").replace("p","+").toUpperCase()}(e);t.get(n).push(e)}),h(t,"",e.length)}function x(e,n){const t=new Map,r=[];for(const n of Array.from(e)){const e=E(n,d.songProps);t.set(e,!0),r.push(e)}const o=Array.from(t.keys()).sort((e,n)=>e>n?-1:e<n?1:0);n&&o.reverse();const i=new Map;return o.forEach(e=>{i.set(p(e),[])}),Array.from(e).forEach((e,n)=>{i.get(p(r[n])).push(e)}),h(i,"",e.length)}function M(){return e.body.querySelectorAll(".main_wrapper.t_c .w_450.m_15.f_0")}function k(n,t,r){let o=e.getElementsByClassName("option_"+t)[0];return o||(o=e.createElement("option"),o.className="option_"+t,o.innerText=n,o.value=t),r?o.classList.add("d_n"):o.classList.remove("d_n"),o}e.querySelectorAll("div.w_450.m_15.p_r.f_0[id]").forEach(e=>{var n,t;e.style.removeProperty("display"),e.style.removeProperty("margin-top"),e.id.includes("sta_")?null===(n=e.querySelector(".music_kind_icon_dx"))||void 0===n||n.remove():null===(t=e.querySelector(".music_kind_icon_standard"))||void 0===t||t.remove();const r=e.querySelector("img:nth-child(2)");r.onclick=null,r.className="music_kind_icon"}),Array.from(e.getElementsByClassName("music_lv_block")).forEach(e=>{e.dataset.lv||(e.dataset.lv=e.innerText)});const w=e.body.querySelector(".main_wrapper.t_c .screw_block");w&&(w.insertAdjacentElement("beforebegin",function(){const n="scoreSortContainer";let t=e.getElementById(n);if(t)return t;t=e.createElement("div"),t.id=n,t.className="w_450 m_15";const r=e.createElement("select");return r.className="w_300 m_10",r.addEventListener("change",n=>{!function(n){const t=M(),r=Array.from(e.body.querySelectorAll(".main_wrapper.t_c .screw_block"));let o=null;switch(n){case"level_des":o=A(t,!0);break;case"level_asc":o=A(t,!1);break;case"rank_des":o=L(t,!1);break;case"rank_asc":o=L(t,!0);break;case"apfc_des":o=I(t,!1);break;case"apfc_asc":o=I(t,!0);break;case"inlv_des":o=x(t,!1);break;case"inlv_asc":o=x(t,!0);break;default:return}for(let e=1;e<r.length;e++)r[e].remove();const i=r[0];for(let e=o.length-1;e>=1;e--)i.insertAdjacentElement("afterend",o[e]);i.innerText=o[0].innerText}(n.target.value)}),r.append(k("-- Choose Sort Option --","none")),r.append(k("Level (high → low)","level_des")),r.append(k("Level (low → high)","level_asc")),r.append(k("Internal Level (high → low)","inlv_des",!0)),r.append(k("Internal Level (low → high)","inlv_asc",!0)),r.append(k("Rank (high → low)","rank_des")),r.append(k("Rank (low → high)","rank_asc")),r.append(k("AP/FC (AP+ → FC)","apfc_des")),r.append(k("AP/FC (FC → AP+)","apfc_asc")),t.append(r),t}()),function(){r(this,void 0,void 0,(function*(){const n=parseInt(yield u.fetchGameVersion(e.body)),t=a.buildSongPropsMap(yield s.iWantSomeMagic(n)),r=Array.from(M());for(const e of r){const n=i.getSongName(e);if("Link"===n){const r=l.getSongIdx(e),c=o.DIFFICULTIES.indexOf(i.getChartDifficulty(e));try{let o;(yield l.isNicoNicoLink(r))?(d.nicoLinkIdx=r,o=a.getSongProperties(t,n,"niconico","STANDARD")):(d.originalLinkIdx=r,o=a.getSongProperties(t,n,"","STANDARD")),S(e,y(e,c,o))}catch(n){S(e,y(e,c))}}else{S(e,E(e,t))}}console.log("enabling internal level sort"),k("Internal Level (high → low)","inlv_des",!1),k("Internal Level (low → high)","inlv_asc",!1),d.songProps=t}))}())}(document)}});