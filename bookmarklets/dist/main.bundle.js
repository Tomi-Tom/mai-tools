!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=17)}([function(e,t){e.exports=React},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UIString=t.LANG=void 0;const n=new URLSearchParams(document.location.search);let r="en";n.get("hl")?r=n.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(r="zh"),t.LANG=r;t.UIString={en:{gameVer:"Game version:",innerLvHeading:"Chart Inner Level Data",manualLv:"Manual input",autoLv:"Automatic",scoreInputHeading:"Player Score",scoreInputDescPrefix:'Please use "Analyze DX Rating" or "Download all scores" from ',bookmarketLinkLabel:"maimai bookmarklets",scoreInputDescSuffix:" to fill in this field.",computeRating:"Calculate Rating",analysisResult:"Analysis Result",newChartsRating:"New Charts Rating",oldChartsRating:"Old Charts Rating",grade:"Grade",ratingTargetDistribution:"Levels and Difficulties of Rating Targets",column:":",subtotal:"Subtotal",newChartsRatingTargets:"New Charts Rating Targets (best 15):",oldChartsRatingTargets:"Old Charts Rating Targets (best 25):",newChartsRatingCandidates:"New Charts Rating Candidates:",oldChartsRatingCandidates:"Old Charts Rating Candidates:",num:"#",song:"Song",difficulty:"Difficulty",level:"Level",rankFactor:"Rank Factor",rating:"Rating",nextGoal:"Next Goal",nextRating:"Next Rating",rankFactorTable:"Rank Factor Table",rank:"Rank",achievement:"Achievement",achievementAbbr:"Achv",factor:"Factor",multiplier:"Multiplier (Factor × Achievement)",otherToolsHeading:"Other Tools",ratingVisualizer:"Rating Visualizer (Interactive Page)",bookmarketList:"Bookmarklets list",scoreConverter:"Convert DX score to old score system"},zh:{gameVer:"遊戲版本：",innerLvHeading:"譜面定數",manualLv:"手動輸入",autoLv:"自動代入",scoreInputHeading:"玩家成績輸入",scoreInputDescPrefix:"請用 ",bookmarketLinkLabel:"maimai 書籤小工具",scoreInputDescSuffix:" 中的「分析 DX Rating」或「下載所有歌曲成績」填入此欄。",computeRating:"計算 Rating 值",analysisResult:"分析結果",newChartsRating:"新譜面 Rating",oldChartsRating:"舊譜面 Rating",grade:"段位",ratingTargetDistribution:"Rating 對象曲等級與成績分布",column:"：",subtotal:"小計",newChartsRatingTargets:"新譜面 Rating 對象曲目 (取最佳 15 首)：",oldChartsRatingTargets:"舊譜面 Rating 對象曲目 (取最佳 25 首)：",newChartsRatingCandidates:"新譜面 Rating 候選曲目：",oldChartsRatingCandidates:"舊譜面 Rating 候選曲目：",num:"#",song:"歌曲",difficulty:"難度",level:"等級",rankFactor:"Rank 係數",rating:"R 值",nextGoal:"下個\n目標",nextRating:"下個\nR 值",rankFactorTable:"Rank 係數表",rank:"Rank",achievement:"達成率",achievementAbbr:"達成率",factor:"係數",multiplier:"倍率 (係數 × 達成率)",otherToolsHeading:"其他工具",ratingVisualizer:"R 值視覺化互動式網頁",bookmarketList:"書籤小工具列表",scoreConverter:"新舊版分數轉換 & 分析"}}[t.LANG]},function(e,t){e.exports=ReactDOM},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAGE_TITLE=t.LANG=void 0;const n=new URLSearchParams(document.location.search);let r="en";n.get("hl")?r=n.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(r="zh"),t.LANG=r,t.PAGE_TITLE={en:"maimai Bookmarklets",zh:"maimai 書籤小工具"}[t.LANG]},,,,,,,,,,,function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(a(0)),l=n(a(2)),o=a(6),i=a(18);document.children[0].lang="zh"===o.LANG?"zh-Hant":"en-US",document.title=o.PAGE_TITLE,l.default.render(r.default.createElement(i.RootComponent,null),document.getElementById("root"))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const r=n(a(0)),l=a(1),o=a(19),i=a(20),s=a(6),c=a(21),u=a(22),m=a(23),d={zh:{intro1:"以下各標題的連結都是書籤小工具，必須在 maimai NET 上打開才有效果。如果沒使用過書籤小工具，請先閱讀 ",faq:"常見問題",intro2:"。"},en:{intro1:"The link for each section title is a bookmarklet. Bookmarklet works only when they are opened on maimai NET. If you never used bookmarklets before, read ",faq:"FAQ",intro2:" first."}}[l.LANG];t.RootComponent=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement("h2",null,s.PAGE_TITLE),r.default.createElement("p",null,d.intro1,r.default.createElement("a",{href:"#faq"},d.faq),d.intro2),r.default.createElement("div",{className:"bookmarkletList"},r.default.createElement(o.BookmarkItem,Object.assign({},i.recentPlaySummary)),r.default.createElement(o.BookmarkItem,Object.assign({},i.scoreConverter)),r.default.createElement(o.BookmarkItem,Object.assign({},i.scoreSorter)),r.default.createElement(o.BookmarkItem,Object.assign({},i.ratingAnalyzer)),r.default.createElement(o.BookmarkItem,Object.assign({},i.scoreDownloader)),r.default.createElement("br",null),r.default.createElement("div",null,r.default.createElement("h2",{id:"faq"},d.faq),r.default.createElement(m.PCManual,null),r.default.createElement(c.MobileCreateManual,null),r.default.createElement(u.MobileUseManual,null))),r.default.createElement("div",{className:"footer credit"},r.default.createElement("hr",null),"Made by"," ",r.default.createElement("a",{href:"https://github.com/myjian",target:"_blank"},"myjian"),"."))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BookmarkItem=void 0;const r=n(a(0));t.BookmarkItem=({itemTitle:e,feature:t,howTo:a,screenshotUrl:n,scriptUrl:l})=>r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"bookmarklet"},r.default.createElement("div",{className:"bookmarkletText"},r.default.createElement("h3",{className:"bookmarkletTitle"},r.default.createElement("a",{href:l},e)),r.default.createElement("ul",null,r.default.createElement("li",null,t),r.default.createElement("li",null,"string"==typeof a?a:a()))),r.default.createElement("div",{className:"bookmarkletImage"},r.default.createElement("a",{href:n},r.default.createElement("img",{className:"screenshot",alt:"screenshot",src:n})))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.scoreDownloader=t.ratingAnalyzer=t.recentPlaySummary=t.scoreSorter=t.scoreConverter=void 0;const r=n(a(0)),l=a(6);function o(e,t,a){return`javascript:void (function(d){if (\n['maimaidx-eng.com','maimaidx.jp'].indexOf(d.location.host)>=0\n${t?a?" && d.location.pathname==='"+t+"'":" && d.location.pathname.indexOf('"+t+"')>=0":""}\n){var s=d.createElement('script');\ns.src='${e}?t='+Math.floor(Date.now()/60000);\nd.body.append(s);\n}})(document)`}t.scoreConverter={itemTitle:{zh:"新舊版分數轉換 & 分析",en:"Convert DX score to old score system"}[l.LANG],feature:{zh:"功能：可轉換 DX 達成率為舊版計分方式，以及分析各指令扣分比例。",en:"Feature: Convert DX achievement to old achievement (maimai FiNALE & older), and analyze score penalty by note type."}[l.LANG],howTo:{zh:"使用方式：登入 maimai NET，點選最近遊玩的其中一筆紀錄後執行。執行後會開啟新分頁，顯示舊版成績以及相關數據。",en:"Usage: Log in to maimai NET. Open a recent song record and execute the bookmarklet."}[l.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-converter.js","/maimai-mobile/record/playlogDetail/"),screenshotUrl:"./screenshots/convert-to-finale-score-20200718.jpg"},t.scoreSorter={itemTitle:{zh:"排序成績",en:"Sort scores"}[l.LANG],feature:{zh:"功能：可依照等級、Rank、AP/FC 狀態排序成績。",en:"Feature: Sort scores by level, rank, or AP/FC status."}[l.LANG],howTo:{zh:"使用方式：於分類查詢成績頁執行。執行完後畫面上會出現選單，可按自己喜歡的方式排序。",en:"Usage: Open historical scores (by genre, level, song title, version, etc.) and execute the bookmarklet."}[l.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-sort.js","/maimai-mobile/record/music"),screenshotUrl:"./screenshots/score-sort-20200630.png"},t.recentPlaySummary={itemTitle:{zh:"整理最近遊玩紀錄",en:"Recent play summary"}[l.LANG],feature:{zh:"功能：以表格方式整理最近的遊玩紀錄，並將遊戲時間修正為當地時間。",en:"Feature: Organize recent game records into a condensed table."}[l.LANG],howTo:{zh:"使用方式：於最近成績列表執行。執行後會在頁面中產生表格，可以選取日期和排序。",en:"Usage: Open the recent game records list and execute the bookmarklet."}[l.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/recent-play-downloader.js","/maimai-mobile/record/",!0),screenshotUrl:"./screenshots/recent-play-summary-20200704.png"},t.ratingAnalyzer={itemTitle:{zh:"分析 DX Rating",en:"Analyze DX Rating"}[l.LANG],feature:{zh:"功能：可分析玩家的 DX Rating 組成。",en:"Feature: Analyze player's DX Rating composition."}[l.LANG],howTo:{zh:"使用方式：於 maimai NET 首頁或個人檔案頁面執行。執行時會開新分頁，載入成績並進行分析。",en:"Usage: Execute the bookmarklet on maimai NET home page or player data page."}[l.LANG],scriptUrl:o("https://myjian.github.io/mai-tools/scripts/analyze-rating-in-newtab.js"),screenshotUrl:"./screenshots/rating-analyzer-20200702.png"};const i={en:{part1:'Usage: Execute the bookmarklet on maimai NET home page. After several seconds, a "Copy" button will appear on screen. Click the Copy button to copy scores. You can paste them in Excel, Google Sheets, or ',ratingAnalyzer:"Rating Analyzer",part2:"."},zh:{part1:"使用方式：於 maimai NET 首頁執行。執行完後點下畫面上的「複製」按鈕就能複製所有成績。複製後可貼到 Excel、Google 試算表，或是 ",ratingAnalyzer:"R 值分析工具",part2:"。"}}[l.LANG];t.scoreDownloader={itemTitle:{zh:"下載所有歌曲成績",en:"Download all scores"}[l.LANG],feature:{zh:"功能：下載所有白譜、紫譜、紅譜、黃譜的成績。可用於個人紀錄或是 R 值分析。",en:"Feature: Download all ADVANCED, EXPERT, MASTER, and Re:MASTER scores."}[l.LANG],howTo:()=>r.default.createElement(r.default.Fragment,null,i.part1,r.default.createElement("a",{href:"/mai-tools/rating-calculator/",target:"_blank"},i.ratingAnalyzer),i.part2),scriptUrl:o("https://myjian.github.io/mai-tools/scripts/score-download.js"),screenshotUrl:"./screenshots/score-download-20200630.png"}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileCreateManual=void 0;const r=n(a(0)),l={zh:{title:"在手機上怎麼新增書籤？",desc:"最簡單的方式，是先在電腦上新增書籤，再同步到手機上。如果不方便用電腦，請依照你使用的瀏覽器參考以下步驟。",chrome1:"長按並複製連結網址",chrome2:"打開瀏覽器右上角的選單，按星星把此頁加入書籤",chrome3:"畫面下方會顯示「已加入書籤」，點右邊「編輯」",chrome4:"把網址完全刪除，並貼上剛才複製的連結",fx1:"長按連結",fx2:"選取「將鏈結加入書籤」"},en:{title:"How to create bookmarklet on phone?",desc:"Easiest way is to create the bookmarklet on PC and sync it to the phone. If it does not work, try the following steps for your browser.",chrome1:"Long press and copy the bookmarklet link",chrome2:"Tap the browser menu and tap the star to add current page to bookmarks.",chrome3:'Screen bottom will show "Bookmarked". Tap the "Edit" link next to it.',chrome4:"Replace the URL with what you copied earlier.",fx1:"Long press the bookmarklet.",fx2:'Select "Bookmark Link"'}}[a(6).LANG];t.MobileCreateManual=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement("h3",null,"● ",l.title),r.default.createElement("div",null,r.default.createElement("p",null,l.desc),r.default.createElement("p",null,"Chrome:"),r.default.createElement("ol",null,r.default.createElement("li",null,l.chrome1),r.default.createElement("li",null,l.chrome2),r.default.createElement("li",null,l.chrome3),r.default.createElement("li",null,l.chrome4)),r.default.createElement("p",null,"Firefox:"),r.default.createElement("ol",null,r.default.createElement("li",null,l.fx1),r.default.createElement("li",null,l.fx2))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileUseManual=void 0;const r=n(a(0)),l={zh:{title:"在手機上怎麼使用書籤？",step1:"登入 maimai NET 並進入指定的頁面後",step2:"點網址欄",chrome3:"把原本的網址刪除，再輸入書籤名稱的開頭前幾個字",chrome4:"找到剛才新增的書籤（網址開頭應該要是 javascript），點下去",fx3:"選「行動書籤」",fx4:"找到剛才新增的書籤，點下去。"},en:{title:"How to execute bookmarklet on phone?",step1:"Log in to maimai NET and open the specific page for the bookmarklet.",step2:"Tap the URL field.",chrome3:"Input the first few characters of the bookmarklet name.",chrome4:'Find and tap the bookmarklet you created earlier. The URL of the bookmarklet should start with "javascript".',fx3:'Tap "BOOKMARKS".',fx4:"Find the bookmarklet you created earlier and tap it."}}[a(6).LANG];t.MobileUseManual=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement("h3",null,"● ",l.title),r.default.createElement("div",null,r.default.createElement("p",null,"Chrome:"),r.default.createElement("ol",null,r.default.createElement("li",null,l.step1),r.default.createElement("li",null,l.step2),r.default.createElement("li",null,l.chrome3),r.default.createElement("li",null,l.chrome4)),r.default.createElement("p",null,"Firefox:"),r.default.createElement("ol",null,r.default.createElement("li",null,l.step1),r.default.createElement("li",null,l.step2),r.default.createElement("li",null,l.fx3),r.default.createElement("li",null,l.fx4))))},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PCManual=void 0;const r=n(a(0)),l={zh:{title:"在電腦上怎麼新增和使用書籤？",create:"直接把連結拖曳到書籤列就能新增書籤。",use:"使用時，先登入 maimai NET 並進入指定的頁面後，再點擊書籤。"},en:{title:"How to create and execute bookmarklets on PC?",create:"Show bookmarks bar (or favorites bar) in browser. Drag the link into the bookmarks bar to save the bookmarklet. ",use:"To use the bookmarklet, log in to maimai DX NET and open the specific page for the bookmarklet, and then click the bookmarklet in bookmarks bar."}}[a(6).LANG];t.PCManual=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement("h3",null,"● ",l.title),r.default.createElement("div",null,r.default.createElement("p",null,l.create),r.default.createElement("p",null,l.use)))}]);