(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STANDARD"}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"];function o(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.DIFFICULTY_CLASSNAME_MAP=new Map([[0,"basic"],[1,"advanced"],[2,"expert"],[3,"master"],[4,"remaster"]]),t.getDifficultyName=function(e){return n[e]},t.getDifficultyByName=o,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return o(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function o(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=o,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[r,i]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=r/i,c=o(a),s=`✦${c} (${(100*a).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),c}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(8642),r=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,r.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,o.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),r=o.lastIndexOf("_"),i=o.lastIndexOf("."),a=o.substring(r+1,i);return"back"===a?null:a.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),r=o.lastIndexOf("_"),i=o.lastIndexOf("."),a=o.substring(r+1,i);return"back"===a?null:a.replace("sd","DX").replace("p","+").toUpperCase()}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const r=n(9099),i=n(271),a=n(2347),c=n(9268),s=n(6991);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,o=n[n.length-1],r=o instanceof Text?o.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==r.length)return null;try{const e=parseInt(r[0]),t=parseInt(r[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(r)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,i.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,o){const i=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)return o.genre=e.innerText,null;if(s){const i=(0,a.getAchievement)(e);if(!i)return;const s=(0,a.getSongName)(e),l=(0,r.getChartType)(e),u=n.getSongProperties(s,o.genre,l);let d=u?u.lv[t]:0;const f=d>0;return d||(d=(0,c.getDefaultLevel)((0,a.getChartLevel)(e))),{songName:s,genre:o.genre,difficulty:t,level:d,levelIsPrecise:f,chartType:l,achievement:i}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,r){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;o=yield(0,s.fetchPage)(r),n.set(e,o)}const i=o.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:""};return Array.from(i).map((t=>u(t,e,r,a))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,r){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;o=yield(0,s.fetchPage)(r),n.set(e,o)}const i=o.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},d=Array.from(i).map((t=>function(e,t,n,o){const r=u(e,t,n,o);if(null==r)return null;const i=n.getSongProperties(r.songName,o.genre,r.chartType);return Object.assign(Object.assign({},r),{fcap:(0,a.getApFcStatus)(e),sync:(0,a.getSyncStatus)(e),dxscore:l(e),version:i?i.debut:-1})}(t,e,r,c)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.LATEST_VERSION=20,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],t.validateGameVersion=function(e,n,o=t.LATEST_VERSION){const r="string"==typeof e?parseInt(e):e;return!e||isNaN(r)?o:r>=n&&r<=o?r:o},t.getVersionName=function(e){return n[e]}},8080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const o=n(5990);t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"],t.saveLanguage=function(e){(0,o.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch((0,o.loadUserPreference)("MaiToolsLang")){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)}},6685:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadMagic=void 0;const r=n(8642),i=n(134),a=n(472),c="magicExpire",s=["dxLv15","dxLv16","dxLv17","dxLv18","dxLv19","dxLv20"],l={13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz"},u=/\bdx\s*:\s*([0-9]+)/,d=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,m=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,g=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function p(e){const t=e.match(u),n=e.match(d),o=e.match(f),i=e.match(m),c=e.match(g);if(t&&n&&o&&i){let e=JSON.parse(n[1]);if(e.length>r.DIFFICULTIES.length){const t=e.pop();e[r.DIFFICULTIES.length-1]=t}const s={dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(o[1])),name:(0,a.normalizeSongName)(i[1])};return c&&(s.nickname=c[1]),s}}function h(e){return"magicVer"+e}t.loadMagic=function(e){return o(this,void 0,void 0,(function*(){const t=function(e){const t=parseInt(window.localStorage.getItem(c));if(isNaN(t)||Date.now()>t){for(const e of s)window.localStorage.removeItem(e);for(const e of i.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(h(e));return null}const n=h(e),o=window.localStorage.getItem(n);return console.log(`Found cache: ${n}=${o}`),JSON.parse(o)}(e);if(t)return t;console.log("Magic happening...");const n=yield function(e){return o(this,void 0,void 0,(function*(){const t=l[e]||l[18],n=yield fetch(atob(t));return n.ok?(yield n.text()).split("\n").map(p).filter((e=>null!=e)):[]}))}(e);return n.length&&function(e,t){const n=h(e);window.localStorage.setItem(n,JSON.stringify(t)),window.localStorage.setItem(c,String(Date.now()+864e5)),console.log(`Updated cache for ${n}`)}(e,n),n}))}},6991:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const r=n(8642),i="MaiToolsGameVer",a="MaiToolsGameVerExpire",c=6e4*((new Date).getTimezoneOffset()+540);function s(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=s,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(a));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(i));if(!isNaN(e))return e}const o=t.querySelector("select[name=version] option:last-of-type");if(o instanceof HTMLOptionElement){const e=parseInt(o.value);return window.localStorage.setItem(i,String(e)),window.localStorage.setItem(a,String(Date.now()+864e5)),e}return e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/);return new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5])).getTime()-c},t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()},t.addLvToSongTitle=function(e,t,n){return o(this,void 0,void 0,(function*(){const o=e.querySelector(".basic_block.break"),i=o.querySelector("img");i&&i.remove();const a=document.createElement("div");a.className="f_r",a.append("Lv "+n),a.style.color=(0,r.getDifficultyTextColor)(t),o.append(a)}))}},6358:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=t.compareNumber=void 0,t.compareNumber=function(e,t){return e>t?1:e<t?-1:0},t.sum=function(e){let t=0;for(const n of e)t+=n;return t},t.roundFloat=function(e,t,n){return Math[t](e/n)*n},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},7991:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcRecommendedLv=t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=t.SSSPLUS_MIN_ACHIEVEMENT=void 0;const o=n(9268),r=n(6358);t.SSSPLUS_MIN_ACHIEVEMENT=100.5;const i=[{minAchv:100.5,factor:22.4,title:"SSS+"},{minAchv:100,factor:21.6,title:"SSS"},{minAchv:99.5,factor:21.1,title:"SS+"},{minAchv:99,factor:20.8,title:"SS"},{minAchv:98,factor:20.3,title:"S+"},{minAchv:97,factor:20,title:"S"},{minAchv:94,factor:16.8,title:"AAA"},{minAchv:90,factor:15.2,title:"AA"},{minAchv:80,factor:13.6,title:"A"},{minAchv:75,factor:12,title:"BBB"},{minAchv:70,factor:11.2,title:"BB"},{minAchv:60,factor:9.6,title:"B"},{minAchv:50,factor:8,title:"C"}];function a(){return i}function c(e){return i.findIndex((t=>e>=t.minAchv))}function s(e){const t=c(e);return t<0?"D":i[t].title}t.getRankDefinitions=a,t.getRankIndexByAchievement=c,t.getRankByAchievement=function(e){const t=c(e);return t<0?null:a()[t]},t.getRankTitle=s,t.getFinaleRankTitle=function(e){return s(e).replace("SSS+","SSS")},t.calcRecommendedLv=function(e,t){const n=(0,r.roundFloat)(100*e/t.factor/t.minAchv,"ceil",.1);return n>o.MAX_LEVEL?-1:n}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={zh_TW:{bscStart:"匯入綠譜成績中…",bscDone:"✔",advStart:"匯入黃譜成績中…",advDone:"✔",expStart:"匯入紅譜成績中…",expDone:"✔",masStart:"匯入紫譜成績中…",masDone:"✔",remStart:"匯入白譜成績中…",remDone:"✔"},en_US:{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},ko_KR:{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,o){const r=n[e];switch(t){case 4:return o?r.remDone+"\n":r.remStart;case 3:return o?r.masDone+"\n":r.masStart;case 2:return o?r.expDone+"\n":r.expStart;case 1:return o?r.advDone+"\n":r.advStart;case 0:return o?r.bscDone+"\n":r.bscStart}return""}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const o=n(6162),r="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return r},t.getMaiToolsBaseUrl=function(){return(0,o.isMaimaiNetOrigin)(window.location.origin)?r:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const r=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,o){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+t.DX_SONG_NAME_SUFFIX:e};let i={};t.isNiconicoLink=function(e){return o(this,void 0,void 0,(function*(){if(i.nico===e)return!0;if(i.original===e)return!1;const t=(yield(0,r.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?i.nico=e:i.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.filterSongsByVersion=t.loadSongDatabase=t.SongDatabase=void 0;const r=n(134),i=n(6685),a=n(6689),c=n(4313),s=n(472);class l{constructor(e=!0){this.dxMap=new Map,this.standardMap=new Map,this.verbose=!0,this.verbose=e}insertOrUpdateSong(e,t){const n=1===e.dx?this.dxMap:this.standardMap;if(this.updateSong(e))return;e.debut||0===e.debut||(e.debut=t);const o="Link"===e.name?e.nickname:e.name;if(n.has(o))return console.warn(`Found existing song properties for ${o} ${e.dx}: ${JSON.stringify(n.get(o))}`),void console.warn(`Will ignore ${e}`);n.set(o,e)}updateSong(e){const t=1===e.dx?this.dxMap:this.standardMap,n=t.has(e.name)?e.name:e.nickname,o=t.get(n);if(!o)return!1;let r=o.lv;return e.lv instanceof Array&&(r=o.lv.map(((t,n)=>{const o=e.lv[n];return!isNaN(o)&&o>0?o:t}))),t.set(n,Object.assign(Object.assign(Object.assign({},o),e),{lv:r})),!0}deleteSong(e){this.dxMap.delete(e),this.standardMap.delete(e)}validate(){for(const e of[this.dxMap,this.standardMap])e.forEach((e=>{console.assert(null!=e.debut),console.assert(e.debut>=0&&e.debut<=r.LATEST_VERSION),console.assert(e.lv.length>=4)}))}hasDualCharts(e,t){if("Link"===e)return!0;if(this.dxMap.has(e)&&this.standardMap.has(e))return!0;const n=(0,s.getSongNickname)(e,t,0);return!!n&&this.dxMap.has(n)&&this.standardMap.has(n)}getSongProperties(e,t,n=0){if(null==e)return;const o=1===n?this.dxMap:this.standardMap;let r=o.get(e);if(r)return r;const i=(0,s.getSongNickname)(e,t,0);if(r=o.get(i),r)return r;this.verbose&&console.warn(`Could not find song properties for ${e} ${n}`)}getSongsByVersion(e){const t=[];return this.dxMap.forEach((n=>{n.debut===e&&t.push(n)})),this.standardMap.forEach((n=>{n.debut===e&&t.push(n)})),t}toString(){return String({dxMap:this.dxMap,standardMap:this.standardMap})}}function u(e){return o(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}t.SongDatabase=l,t.loadSongDatabase=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield(0,i.loadMagic)(e),r=new l;for(const t of n)r.insertOrUpdateSong(t,e);const s=yield function(e){return o(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield u(t),o=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const r of Object.keys(n[e]))o.push({name:r,dx:t,lv:n[e][r]})})),o}))}(e);console.log("chartLevelOverrides",s);for(const t of s)r.insertOrUpdateSong(t,e);if("https://maimaidx-eng.com"===t){const e=yield function(){return o(this,void 0,void 0,(function*(){const e=(0,c.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",t=yield u(e),n=[];return["standard","dx"].forEach(((e,o)=>{if(t[e])for(const r of Object.keys(t[e])){const i=t[e][r],a=parseInt(r);for(const e of i)n.push({name:e,dx:o,debut:a})}})),n}))}();console.log("debutVersionOverrides",e);for(const t of e)r.updateSong(t)}const d=(0,a.getRemovedSongs)(t);for(const e of d)r.deleteSong(e);return r.validate(),r}))},t.filterSongsByVersion=function(e,t,n,o){const r=[];for(const i of e){const e=t.getSongProperties(i.name,"",i.dx)||t.getSongProperties(i.nickname,"",i.dx);e?(0===o&&e.debut===n||1===o&&e.debut<n)&&r.push(e):console.warn("Could not find song properties for",i)}return r}},5990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const r=n(9099),i=n(2347),a=n(6510),c=n(6991),s=n(472);function l(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),o=(0,i.getSongName)(e),a=(0,r.getChartType)(e);let c;"Link"===o&&(c=(yield(0,s.isNiconicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:o,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield(0,c.fetchPage)(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,c.fetchPage)(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const r={action:n,payload:o};e.postMessage(r,t)}}},7913:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(9099),i=n(8642),a=n(6510),c=n(6162),s=n(134),l=n(8080),u=n(9268),d=n(6991),f=n(7991),m=n(4468),g=n(87);!function(e){var t;const n=(0,l.getInitialLanguage)(),p={zh_TW:{achievement:"達成率",chartConstant:"定數",chartType:"譜面",copied:"已複製到剪貼簿",copy:"複製成績",difficulty:"難度",dxScore:"DX 分數",exclude:"不包含",fetch:"下載所有成績",genre:"分類",include:"包含",level:"等級",rank:"Rank",songName:"歌曲",version:"版本",allDone:"✅ 已匯入全部成績到文字框，請按「複製成績」把資料複製到剪貼簿。複製後可於 Excel 或 Google 試算表內貼上。"},en_US:{achievement:"Achv",chartConstant:"Chart Constant",chartType:"Chart",copied:"Copied to clipboard",copy:"Copy",difficulty:"Difficulty",dxScore:"DX Score",exclude:"Exclude",fetch:"Load all scores",genre:"Genre",include:"Include",level:"Level",rank:"Rank",songName:"Song",version:"Version",allDone:'✅ All scores are loaded into text box. Click "Copy" to copy scores to clipboard. You can paste it in Excel or Google Sheets.'},ko_KR:{achievement:"정확도",chartConstant:"상수",chartType:"사양",copied:"클립보드에 복사되었습니다",copy:"복사",difficulty:"난이도",dxScore:"DX 점수",exclude:"제외",fetch:"모든 기록 불러오기",genre:"장르",include:"포함",level:"레벨",rank:"등급",songName:"노래",version:"버전",allDone:'✅ 모든 기록이 로드되었습니다. "복사"를 눌러 클립보드로 복사하고 엑셀이나 구글 시트에 붙여 넣으세요.'}}[n],h={div:null,scores:null},S={SongName:p.songName,Genre:p.genre,Version:p.version,ChartType:p.chartType,Difficulty:p.difficulty,Level:p.level,InternalLevel:p.chartConstant,Achievement:p.achievement,Rank:p.rank,FcAp:"FC/AP",Sync:"Sync",DxScore:p.dxScore,DxRatio:"DX %",DxStar:"DX ✦"},v={SongName:e=>e.songName,Genre:e=>e.genre,Version:e=>e.version<0?"?":(0,s.getVersionName)(e.version),ChartType:e=>(0,r.getChartTypeName)(e.chartType),Difficulty:e=>(0,i.getDifficultyName)(e.difficulty),Level:e=>(0,u.getOfficialLevel)(Math.abs(e.level)),InternalLevel:e=>e.level>0?e.level.toFixed(1):"?",Achievement:e=>e.achievement.toFixed(4)+"%",Rank:e=>(0,f.getRankByAchievement)(e.achievement).title,FcAp:e=>e.fcap||"-",Sync:e=>e.sync||"-",DxScore:e=>`${e.dxscore.player}/${e.dxscore.max}`,DxRatio:e=>(100*e.dxscore.ratio).toFixed(1)+"%",DxStar:e=>e.dxscore.star.toFixed(0)},y=["DxScore","InternalLevel"],_=Object.keys(S).filter((e=>!y.includes(e)));function x(t){const n=e.createElement("label");n.className="f_14 d_ib p_r p_5 m_5",n.style.borderRadius="4px",n.style.border="1px solid #333";const o=e.createElement("input");return o.name=t,o.type="checkbox",o.addEventListener("change",(()=>{n.parentElement.classList.contains("excluded")?h.div.querySelector(".included").append(n):n.parentElement.classList.contains("included")&&h.div.querySelector(".excluded").append(n)})),n.append(o,S[t]),n}function b(t){return o(this,void 0,void 0,(function*(){t.preventDefault();const o=yield(0,d.fetchGameVersion)(e.body),r=(0,c.getGameRegionFromOrigin)(e.location.origin),i=yield(0,g.loadSongDatabase)(o,r),s=document.getElementById("outputText");if(null==h.scores){s.value="",h.scores=[];for(const e of a.SELF_SCORE_URLS.keys())s.value+=(0,m.statusText)(n,e,!1)+"\n",h.scores=h.scores.concat(yield(0,a.fetchScoresFull)(e,new Map,i))}const l=function(){const e=h.div.querySelectorAll(".included input");return Array.from(e).map((e=>e instanceof HTMLInputElement?e.name:null)).filter((e=>null!=e))}();s.value=function(e){return e.map((e=>S[e])).join("\t")}(l)+"\n"+h.scores.map((e=>function(e,t){return t.map((t=>v[t](e))).join("\t")}(e,l))).join("\n"),document.querySelector(".fetchStatus").innerText=p.allDone}))}(0,c.isMaimaiNetOrigin)(e.location.origin)&&(null===(t=e.getElementById("outputArea"))||void 0===t||t.remove(),function(t){const n=e.createElement("div");n.id="outputArea",n.style.position="relative",n.style.marginBottom="16px",h.div=n;const o=e.createElement("button");o.className="m_r_5",o.style.color="#1477e6",o.append(p.fetch),o.addEventListener("click",b),n.append(o);const r=e.createElement("div");r.className="included p_10 m_10",r.append(p.include),r.style.textAlign="left",r.style.backgroundColor="#ffdd00",r.style.borderRadius="5px";for(const e of _)r.append(x(e));n.append(r);const i=e.createElement("div");i.className="excluded p_10 m_10",i.append(p.exclude),i.style.textAlign="left",i.style.backgroundColor="gray",i.style.borderRadius="5px";for(const e of y)i.append(x(e));n.append(i);const a=e.createElement("textarea");a.className="f_12",a.id="outputText",a.style.whiteSpace="pre",n.append(a);const c=e.createElement("button");c.innerText=p.copy;for(let e of[o,c])e.style.backgroundColor="#9f51dc",e.style.border="2px solid black",e.style.borderRadius="5px",e.style.color="white",e.style.fontWeight="700",e.style.padding="8px 12px";n.append(c),c.addEventListener("click",(()=>{a.select(),c.disabled=!0,c.style.cursor="default",c.style.filter="grayscale(1.0)",document.execCommand("copy"),c.innerText=p.copied,setTimeout((()=>{c.disabled=!1,c.style.cursor="",c.style.filter="",c.innerText=p.copy}),3e3)}));const s=document.createElement("div");s.className="fetchStatus f_16 m_t_10",s.style.fontWeight="700",s.style.color="white",s.style.textShadow="1px 1px 2px black",n.append(s),t.insertAdjacentElement("afterend",n)}(e.querySelector(".see_through_block")))}(document)}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(7913)})();