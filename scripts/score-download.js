(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STANDARD"}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"];function o(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.DIFFICULTY_CLASSNAME_MAP=new Map([[0,"basic"],[1,"advanced"],[2,"expert"],[3,"master"],[4,"remaster"]]),t.getDifficultyName=function(e){return n[e]},t.getDifficultyByName=o,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return o(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(8642),i=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,i.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,o.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const i=n(9099),r=n(2347),a=n(9268),c=n(6991),s=n(87);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n,l){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const i=t.SELF_SCORE_URLS.get(e);if(!i)return;o=yield(0,c.fetchPage)(i),n.set(e,o)}const u=o.querySelectorAll(".main_wrapper.t_c .m_15"),f={genre:""},d=Array.from(u).map((t=>function(e,t,n,o){const c=e.classList.contains("screw_block"),l=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(c)return o.genre=e.innerText,null;if(l){const c=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!c)return;const l=(0,r.getSongName)(e),u=(0,i.getChartType)(e),f=(0,s.getSongProperties)(n,l,o.genre,u);let d=f?f.lv[t]:0;const m=d>0;return d||(d=(0,a.getDefaultLevel)((0,r.getChartLevel)(e))),{songName:l,genre:o.genre,difficulty:t,level:d,levelIsPrecise:m,chartType:u,achievement:parseFloat(c)}}}(t,e,l,f)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.LATEST_VERSION=20,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],t.validateGameVersion=function(e,n,o=t.LATEST_VERSION){const i="string"==typeof e?parseInt(e):e;return!e||isNaN(i)?o:i>=n&&i<=o?i:o},t.getVersionName=function(e){return n[e]}},8080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const o=n(5990);t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"],t.saveLanguage=function(e){(0,o.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch((0,o.loadUserPreference)("MaiToolsLang")){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e){if(!(e<0))return e.toFixed(1);const t=Math.abs(e),n=Math.floor(t);return n===t?n.toFixed(0):n.toFixed(0)+"+"}},6991:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const o="MaiToolsGameVer",i="MaiToolsGameVerExpire",r=6e4*((new Date).getTimezoneOffset()+540);function a(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=a,t.fetchGameVersion=function e(t){return n(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(i));if(!isNaN(n)&&n>=Date.now())return parseInt(window.localStorage.getItem(o));const r=t.querySelector("select[name=version] option:last-of-type");if(r instanceof HTMLOptionElement){const e=parseInt(r.value);return window.localStorage.setItem(o,String(e)),window.localStorage.setItem(i,String(Date.now()+864e5)),e}return e(t=yield a("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/);return new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5])).getTime()-r},t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={zh_TW:{bscStart:"匯入綠譜成績中…",bscDone:"✔",advStart:"匯入黃譜成績中…",advDone:"✔",expStart:"匯入紅譜成績中…",expDone:"✔",masStart:"匯入紫譜成績中…",masDone:"✔",remStart:"匯入白譜成績中…",remDone:"✔"},en_US:{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},ko_KR:{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,o){const i=n[e];switch(t){case 4:return o?i.remDone+"\n":i.remStart;case 3:return o?i.masDone+"\n":i.masStart;case 2:return o?i.expDone+"\n":i.expStart;case 1:return o?i.advDone+"\n":i.advStart;case 0:return o?i.bscDone+"\n":i.bscStart}return""}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const o=n(6162),i="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return i},t.getMaiToolsBaseUrl=function(){return(0,o.isMaimaiNetOrigin)(window.location.origin)?i:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const i=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,o){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+t.DX_SONG_NAME_SUFFIX:e};let r={};t.isNicoNicoLink=function(e){return o(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield(0,i.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSongsByVersion=t.filterSongsByVersion=t.getSongProperties=t.buildSongPropsMap=void 0;const i=n(8642),r=n(134),a=n(6689),c=n(4313),s=n(472),l=/\bdx\s*:\s*([0-9]+)/,u=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,d=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,m=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function g(e){return o(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}function p(e){const t=e.match(l),n=e.match(u),o=e.match(f),r=e.match(d),a=e.match(m);if(t&&n&&o&&r){let e=JSON.parse(n[1]);if(e.length>i.DIFFICULTIES.length){const t=e.pop();e[i.DIFFICULTIES.length-1]=t}return{dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(o[1])),name:(0,s.normalizeSongName)(r[1]),nickname:a&&a[1]}}}function h(e,t){if(!e.has(t.name))return!1;const n=e.get(t.name),o=n.findIndex((e=>t.dx===e.dx));return!(o<0||n[o].nickname!=t.nickname||(n[o]=function(e,t){let n=e.lv;return t.lv instanceof Array&&(n=e.lv.map(((e,n)=>isNaN(t.lv[n])?e:t.lv[n]))),Object.assign(Object.assign(Object.assign({},e),t),{lv:n})}(n[o],t),0))}function S(e,t,n){h(e,t)||(t.debut||0===t.debut||(t.debut=n),e.has(t.name)||e.set(t.name,[]),e.get(t.name).push(t))}t.buildSongPropsMap=function(e,t,n){return o(this,void 0,void 0,(function*(){const i=n.split("\n"),s=new Map;for(const t of i){const n=p(t);n&&S(s,n,e)}const l=yield function(e){return o(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield g(t),o=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const i of Object.keys(n[e]))o.push({name:i,dx:t,lv:n[e][i]})})),o}))}(e);console.log("chartLevelOverrides",l);for(const t of l)S(s,t,e);if("https://maimaidx-eng.com"===t){const e=yield function(){return o(this,void 0,void 0,(function*(){const e=(0,c.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",t=yield g(e),n=[];return["standard","dx"].forEach(((e,o)=>{if(t[e])for(const i of Object.keys(t[e])){const r=t[e][i],a=parseInt(i);for(const e of r)n.push({name:e,dx:o,debut:a})}})),n}))}();console.log("debutVersionOverrides",e);for(const t of e)h(s,t)}const u=(0,a.getRemovedSongs)(t);for(const e of u)s.delete(e);return s.forEach((e=>{for(const t of e)console.assert(null!=t.debut),console.assert(t.debut>=0&&t.debut<=r.LATEST_VERSION),console.assert(t.lv.length>=4)})),s}))},t.getSongProperties=function(e,t,n,o){let i=e.get(t);if(i&&i.length>0){if(i.length>1&&(i=i.filter((e=>e.dx===o)),i.length>1)){const e=(0,s.getSongNickname)(t,n,o);i=i.filter((t=>t.nickname===e))}if(i.length)return i.length>1&&(console.warn(`Found multiple song properties for ${t} ${o}`),console.warn(i)),i[0]}console.warn(`Could not find song properties for ${t} ${o}`)},t.filterSongsByVersion=function(e,t,n,o){const i=[];for(const r of e){const{dx:e,name:a,nickname:c}=r;let s=t.get(a);s&&s.length>0&&(s.length>1&&(s=s.filter((t=>t.dx===e)),s.length>1&&(s=s.filter((e=>e.nickname===c)))),s.length)?(s.length>1&&(console.warn(`Found multiple song properties for ${a} ${e?"[DX]":""}`),console.warn(s)),(0===o&&s[0].debut===n||1===o&&s[0].debut<n)&&i.push(s[0])):console.warn(`Could not find song properties for ${a} ${e?"[DX]":""}`)}return i},t.getSongsByVersion=function(e,t){const n=[];return e.forEach((e=>e.forEach((e=>{e.debut===t&&n.push(e)})))),n}},5990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const i=n(9099),r=n(2347),a=n(6510),c=n(6991),s=n(472);function l(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),o=(0,r.getSongName)(e),a=(0,i.getChartType)(e);let c;"Link"===o&&(c=(yield(0,s.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:o,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield(0,c.fetchPage)(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,c.fetchPage)(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const i={action:n,payload:o};e.postMessage(i,t)}}},7913:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(9099),r=n(8642),a=n(6510),c=n(6162),s=n(8080),l=n(9268),u=n(4468),f=n(6420);!function(){const e=(0,s.getInitialLanguage)(),t={zh_TW:{pleaseLogIn:"請登入 maimai NET",fetch:"下載所有成績",copy:"複製成績",copied:"已複製到剪貼簿",allDone:"✅ 已匯入全部成績到文字框，請按「複製成績」把資料複製到剪貼簿。複製後可於 Excel 或 Google 試算表內貼上。"},en_US:{pleaseLogIn:"Please log in to maimai DX NET.",fetch:"Load all scores",copy:"Copy",copied:"Copied to clipboard",allDone:'✅ All scores are loaded into text box. Click "Copy" to copy scores to clipboard. You can paste it in Excel or Google Sheets.'},ko_KR:{pleaseLogIn:"maimai DX NET에 로그인 해 주세요.",fetch:"모든 기록 불러오기",copy:"복사",copied:"클립보드에 복사되었습니다",allDone:'✅ 모든 기록이 로드되었습니다. "복사"를 눌러 클립보드로 복사하고 엑셀이나 구글 시트에 붙여 넣으세요.'}}[e];function n(n){n.preventDefault(),function(n){o(this,void 0,void 0,(function*(){if(!(0,c.isMaimaiNetOrigin)(document.location.origin))return void n(t.pleaseLogIn);const o=document.getElementById("outputText");let s=[];for(const t of a.SELF_SCORE_URLS.keys())o.value+=(0,u.statusText)(e,t,!1)+"\n",s=s.concat(yield(0,a.fetchScores)(t,new Map,new Map));o.value=s.map((e=>[e.songName,e.genre,(0,r.getDifficultyName)(e.difficulty),(0,l.getOfficialLevel)(e.level),(0,i.getChartTypeName)(e.chartType),e.achievement].join("\t"))).join("\n"),document.querySelector(".fetchStatus").innerText=t.allDone}))}(f.handleError)}!function(e){const o=document.createElement("div");o.id="outputArea",o.style.position="relative",o.style.marginBottom="16px";const i=document.createElement("textarea");i.className="f_10",i.id="outputText",o.append(i);const r=document.createElement("button");r.className="m_r_5",r.style.color="#1477e6",r.append(t.fetch),r.addEventListener("click",n);const a=document.createElement("button");a.innerText=t.copy;for(let e of[r,a])e.style.backgroundColor="#9f51dc",e.style.border="2px solid black",e.style.borderRadius="5px",e.style.color="white",e.style.fontWeight="700",e.style.padding="8px 12px";o.append(r,a),a.addEventListener("click",(()=>{i.select(),a.disabled=!0,a.style.cursor="default",a.style.filter="grayscale(1.0)",document.execCommand("copy"),a.innerText=t.copied,setTimeout((()=>{a.disabled=!1,a.style.cursor="",a.style.filter="",a.innerText=t.copy}),3e3)}));const c=document.createElement("div");c.className="fetchStatus f_16 m_t_10",c.style.fontWeight="700",c.style.color="white",c.style.textShadow="1px 1px 2px black",o.append(c),e.insertAdjacentElement("afterend",o)}(document.querySelector(".see_through_block"))}()}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(7913)})();