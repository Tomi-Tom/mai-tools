(()=>{"use strict";var e={236:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BookmarkItem=void 0;const n=o(a(3804));class l extends n.default.PureComponent{render(){const{itemTitle:e,feature:t,howTo:a,screenshotUrl:o}=this.props;return n.default.createElement("div",{className:"bookmarklet"},n.default.createElement("div",{className:"bookmarkletText"},n.default.createElement("h3",{className:"bookmarkletTitle"},e),n.default.createElement("ul",null,n.default.createElement("li",null,t),n.default.createElement("li",null,"string"==typeof a?a:a()))),n.default.createElement("div",{className:"bookmarkletImage"},n.default.createElement("a",{href:o},n.default.createElement("img",{className:"screenshot",alt:"screenshot",src:o}))))}}t.BookmarkItem=l},7988:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileCreateManual=void 0;const n=o(a(3804)),l=a(1735),r=a(8294),i={zh:{title:"在手機上怎麼新增書籤？",desc:"最簡單的方式，是先在電腦上新增書籤，再同步到手機上。如果不方便用電腦，請使用 Google Chrome 瀏覽器並執行以下步驟。",chrome1:"複製連結 (點我！)",chrome2:"打開瀏覽器右上角的選單，按星星把此頁加入書籤",chrome3:"畫面下方會顯示「已加入書籤」，點右邊「編輯」",chrome4:"把網址完全刪除，並貼上剛才複製的連結",chrome5:`把書籤的名稱設成「${r.LINK_NAME}」（MMBL 是 MaiMai BookmarkLets 的縮寫，我們接下來會用到）`,chrome6:"返回上一頁，書籤即建立完成",chrome7:"書籤建立之後可以重複使用，不需要再回到這個網頁複製連結"},en:{title:"How to create bookmarklet on phone?",desc:"Easiest way is to create the bookmarklet on PC and sync it to the phone. If it does not work, try the following steps for your browser.",chrome1:"Copy the bookmarklet link (click me!)",chrome2:"Tap the browser menu and tap the star to add current page to bookmarks.",chrome3:'Screen bottom will show "Bookmarked". Tap the "Edit" link next to it.',chrome4:"Replace the URL with what you copied earlier.",chrome5:`Set the bookmarklet name to "${r.LINK_NAME}".`,chrome6:"Go back to previous page and the bookmarklet should be ready to use.",chrome7:"Once you set up the bookmarklet, you can use them repeatedly. You don't need to come back to this page to copy links."}}[l.LANG];class s extends n.default.PureComponent{constructor(){super(...arguments),this.inputRef=n.default.createRef(),this.copyLink=e=>{e.preventDefault(),this.inputRef.current&&(this.setPageTitle(),this.inputRef.current.select(),document.execCommand("copy"))}}render(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("h3",null,"● ",i.title),n.default.createElement("div",null,n.default.createElement("p",null,i.desc),n.default.createElement("ol",null,n.default.createElement("li",null,n.default.createElement("a",{href:"javascript:void(0)",onClick:this.copyLink,onTouchStart:this.setPageTitle,onContextMenu:this.setPageTitle},i.chrome1),n.default.createElement("input",{className:"bookmarkletScript",ref:this.inputRef,value:r.BOOKMARKLET_LINK,readOnly:!0})),n.default.createElement("li",null,i.chrome2),n.default.createElement("li",null,i.chrome3),n.default.createElement("li",null,i.chrome4),n.default.createElement("li",null,i.chrome5),n.default.createElement("li",null,i.chrome6),n.default.createElement("li",null,i.chrome7))))}setPageTitle(){document.title=r.LINK_NAME}}t.MobileCreateManual=s},2936:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MobileUseManual=void 0;const n=o(a(3804)),l={zh:{title:"在手機上怎麼使用書籤？",step1:"打開 Chrome，登入 maimai NET",step2:"進入想要使用書籤的頁面（例如：想要使用「分析自己 DX Rating」，就打開玩家資料的頁面）",step3:"點網址欄",chrome4:"把原本的網址刪除，再輸入「MMBL」",chrome5:"找到剛才新增的書籤（網址開頭會是 javascript），點下去",chrome6:"書籤執行完成後，網頁的內容應該會有小小的改變，也可能會開新分頁（例如 R 值分析）"},en:{title:"How to execute bookmarklet on mobile?",step1:"Open Chrome and log in to maimai DX NET",step2:"Open the page on which you want to use the bookmarklet (e.g. if you want to analyze self DX Rating, open your Player's Data page)",step3:"Tap the URL field",chrome4:'Delete the original URL and input "MMBL" into the URL field',chrome5:'Find and tap the bookmarklet you created earlier. The URL of the bookmarklet should start with "javascript".',chrome6:"You should notice the page has changed or new tab is opened (for rating analysis)."}}[a(1735).LANG];t.MobileUseManual=()=>n.default.createElement(n.default.Fragment,null,n.default.createElement("h3",null,"● ",l.title),n.default.createElement("div",null,n.default.createElement("ol",null,n.default.createElement("li",null,l.step1),n.default.createElement("li",null,l.step2),n.default.createElement("li",null,l.step3),n.default.createElement("li",null,l.chrome4),n.default.createElement("li",null,l.chrome5),n.default.createElement("li",null,l.chrome6))))},1217:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PCManual=void 0;const n=o(a(3804)),l=a(1735),r=a(8294),i={zh:{title:"在電腦上怎麼新增和使用書籤？",showBookmarksBar:"顯示瀏覽器的書籤列。",create:"把下方連結拖曳到書籤列，書籤小工具就建立完成了。",use:"使用時，先登入 maimai NET 並進入要使用書籤的頁面後，再點擊書籤。"},en:{title:"How to create and execute bookmarklets on PC?",showBookmarksBar:"Show bookmarks bar (or favorites bar) in browser.",create:"Drag the link into the bookmarks bar to save the bookmarklet. (MMBL stands for MaiMai BookmarkLets)",use:"To use the bookmarklet, log in to maimai DX NET and open the page you want to use the bookmarklet on, and then click the bookmarklet in bookmarks bar."}}[l.LANG];t.PCManual=()=>n.default.createElement(n.default.Fragment,null,n.default.createElement("h3",null,"● ",i.title),n.default.createElement("div",null,n.default.createElement("p",null,i.showBookmarksBar),n.default.createElement("p",null,i.create,n.default.createElement("br",null),n.default.createElement("a",{className:"bookmarkletCopy",href:r.BOOKMARKLET_LINK},r.LINK_NAME)),n.default.createElement("p",null,i.use)))},414:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const n=o(a(3804)),l=a(1735),r=a(236),i=a(8294),s=a(3577),c=a(7988),u=a(2936),m=a(1217),d={zh:{intro1:"如果想在 maimai DX NET 使用以下功能，請參照 ",howto:"使用教學",intro2:" 設定書籤小工具。",features:"功能介紹"},en:{intro1:"If you want to use the following features, follow ",howto:"Instructions",intro2:" to set up the bookmarklet.",features:"Features"}}[l.LANG];t.RootComponent=()=>n.default.createElement(n.default.Fragment,null,n.default.createElement("h2",null,s.PAGE_TITLE),n.default.createElement("p",null,d.intro1,n.default.createElement("a",{href:"#howto"},d.howto),d.intro2),n.default.createElement("div",{className:"bookmarkletList"},n.default.createElement(r.BookmarkItem,Object.assign({},i.recentPlaySummary)),n.default.createElement(r.BookmarkItem,Object.assign({},i.albumDownloadHelper)),n.default.createElement(r.BookmarkItem,Object.assign({},i.ratingAnalyzer)),n.default.createElement(r.BookmarkItem,Object.assign({},i.analyzeFriendRating)),n.default.createElement(r.BookmarkItem,Object.assign({},i.scoreSorter)),n.default.createElement(r.BookmarkItem,Object.assign({},i.scoreConverter)),n.default.createElement(r.BookmarkItem,Object.assign({},i.scoreDownloader)),n.default.createElement("br",null),n.default.createElement("div",null,n.default.createElement("h2",{id:"howto"},d.howto),n.default.createElement(m.PCManual,null),n.default.createElement(c.MobileCreateManual,null),n.default.createElement(u.MobileUseManual,null))),n.default.createElement("div",{className:"footer credit"},n.default.createElement("hr",null),"Made by"," ",n.default.createElement("a",{href:"https://github.com/myjian",target:"_blank"},"myjian"),"."))},8294:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.albumDownloadHelper=t.scoreDownloader=t.analyzeFriendRating=t.ratingAnalyzer=t.recentPlaySummary=t.scoreSorter=t.scoreConverter=t.LINK_NAME=t.BOOKMARKLET_LINK=void 0;const n=o(a(3804)),l=a(1735);t.BOOKMARKLET_LINK="javascript:void (\n  function(d) {\n    if (['maimaidx-eng.com','maimaidx.jp'].indexOf(d.location.host) >= 0) {\n      vars = d.createElement('script');\n      s.src='https://myjian.github.io/mai-tools/scripts/all-in-one.js?t=' + Math.floor(Date.now() / 60000);\n      d.body.append(s);\n    }\n  }\n)(document)".replace(/[\n ]/g,"").replace("vars","var s"),t.LINK_NAME={zh:"maimai 書籤小工具合集 (MMBL)",en:"maimai bookmarklets (MMBL)"}[l.LANG],t.scoreConverter={itemTitle:{zh:"換算成舊版達成率 & 分析",en:"Convert DX score to old score system"}[l.LANG],feature:{zh:"功能：可轉換 DX 達成率為舊版 (maimai FiNALE) 計分方式，以及分析各指令扣分比例。",en:"Feature: Convert DX achievement to old achievement (maimai FiNALE & older), and analyze score penalty by note type."}[l.LANG],howTo:{zh:"使用方式：登入 maimai NET，點選最近遊玩的其中一筆紀錄後執行。執行後會開啟新分頁，顯示舊版成績以及相關數據。點擊地點（Cafe MiLK）可切換計分方式，點擊達成率可切換詳細顯示。",en:'Usage: Log in to maimai NET. Open a recent song record and execute the bookmarklet. New tab will open and display score in old achievement system. You can click on "Cafe MiLK" to switch to DX achievement, and click on the achievement % to see how much percentage was lost per note type.'}[l.LANG],screenshotUrl:"./screenshots/convert-to-finale-score-20200718.jpg"},t.scoreSorter={itemTitle:{zh:"排序成績",en:"Sort scores"}[l.LANG],feature:{zh:"功能：可依照達成率、AP/FC 成就、Sync 進度或譜面等級，排序自己或好友的成績。",en:"Feature: Sort scores by rank, AP/FC status, sync status, or level. You can sort friend's scores too."}[l.LANG],howTo:{zh:"使用方式：如果要排序自己的成績，請先到於查詢成績頁，先按照自己想要的篩選方式（曲風、等級、遊戲版本等等）列出成績，再執行書籤。如果是要排序朋友的成績，請先使用對戰功能，按照自己想要的篩選方式（曲風、等級）列出對戰結果，再執行書籤。執行完後畫面上會出現選單，可按喜歡的方式排序。",en:"Usage: For sorting own scores, open historical scores (by genre, level, song title, version, etc.) and execute the bookmarklet. For sorting friend's scores, use Friend VS feature to list scores (by genre or level), and then execute the bookmarklet."}[l.LANG],screenshotUrl:"./screenshots/score-sort-20200630.png"},t.recentPlaySummary={itemTitle:{zh:"整理最近遊玩紀錄",en:"Recent play summary"}[l.LANG],feature:{zh:"功能：以表格方式整理最近的遊玩紀錄，並將遊戲時間修正為當地時間。",en:"Feature: Organize recent game records into a condensed table."}[l.LANG],howTo:{zh:"使用方式：於最近成績列表執行。執行後會在頁面中產生表格，可以選取日期和排序。",en:"Usage: Open the recent game records list and execute the bookmarklet."}[l.LANG],screenshotUrl:"./screenshots/recent-play-summary-20200704.png"},t.ratingAnalyzer={itemTitle:{zh:"分析自己 DX Rating",en:"Analyze Self DX Rating"}[l.LANG],feature:{zh:"功能：可分析自己的 DX Rating 組成。",en:"Feature: Analyze your DX Rating composition."}[l.LANG],howTo:{zh:"使用方式：於 maimai NET 首頁或個人檔案頁面執行。執行時會開新分頁，載入成績並進行分析。",en:"Usage: Execute the bookmarklet on maimai NET home page or player data page."}[l.LANG],screenshotUrl:"./screenshots/rating-analyzer-20200702.png"},t.analyzeFriendRating={itemTitle:{zh:"分析好友 DX Rating",en:"Analyze Friend's DX Rating"}[l.LANG],feature:{zh:"功能：可分析朋友的 DX Rating 組成。",en:"Feature: Analyze your favorite friend's DX Rating composition."}[l.LANG],howTo:{zh:"使用方式：於朋友清單頁面，先將想分析的好友加入最愛（ADD to FAVORITE），再執行書籤。設成最愛的好友檔案中會出現「分析 Rating」的連結，點擊後會分析該玩家的 R 值。",en:'Usage: Open friend list. Add the friend you want to analyze to FAVORITE. Execute the bookmarklet. There will have an "Analyze Rating" link for each favorite friend. Click on one of the links to analyze rating for that player.'}[l.LANG],screenshotUrl:"./screenshots/analyze-friend-rating-20200725.png"};const r={en:{part1:'Usage: Execute the bookmarklet on maimai NET home page. After several seconds, a "Copy" button will appear on screen. Click the Copy button to copy scores. You can paste them in Excel, Google Sheets, or ',ratingAnalyzer:"Rating Analyzer",part2:"."},zh:{part1:"使用方式：於 maimai NET 首頁執行。執行完後點下畫面上的「複製」按鈕就能複製所有成績。複製後可貼到 Excel、Google 試算表，或是 ",ratingAnalyzer:"R 值分析工具",part2:"。"}}[l.LANG];t.scoreDownloader={itemTitle:{zh:"下載所有歌曲成績",en:"Download all scores"}[l.LANG],feature:{zh:"功能：下載所有白譜、紫譜、紅譜、黃譜的成績。可用於個人紀錄或是 R 值分析。",en:"Feature: Download all ADVANCED, EXPERT, MASTER, and Re:MASTER scores."}[l.LANG],howTo:()=>n.default.createElement(n.default.Fragment,null,r.part1,n.default.createElement("a",{href:"../rating-calculator/",target:"_blank"},r.ratingAnalyzer),r.part2),screenshotUrl:"./screenshots/score-download-20200630.png"},t.albumDownloadHelper={itemTitle:{zh:"相簿照片命名",en:"Album Download Helper"}[l.LANG],feature:{zh:'功能：把相簿內的照片以 "日期 曲名 難度.jpg" 方式命名，並且可以直接點擊照片下載。',en:'Feature: Make photos in the album downloadable with filenames like "Date Songname Difficulty.jpg"'}[l.LANG],howTo:{zh:"使用方式：進入 PHOTOS 頁面後執行書籤，執行完後點擊想要下載的照片，就能存到手機或電腦上。",en:"Usage: Open PHOTOS page and execute this bookmarklet. Photos on the page will be clickable and have proper filenames."}[l.LANG],screenshotUrl:"./screenshots/album-download-helper-20210216.png"}},3577:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PAGE_TITLE=void 0;const o=a(1735);t.PAGE_TITLE={en:"maimai Bookmarklets (Features & How to use)",zh:"maimai 書籤小工具介紹與設定教學"}[o.LANG]},687:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(a(3804)),l=o(a(7196)),r=a(1735),i=a(3577),s=a(414);document.children[0].lang="zh"===r.LANG?"zh-Hant":"en-US",document.title=i.PAGE_TITLE,l.default.render(n.default.createElement(s.RootComponent,null),document.getElementById("root"))},1735:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LANG=void 0;const a=new URLSearchParams(location.search);let o="en";a.get("hl")?o=a.get("hl").startsWith("zh")?"zh":"en":navigator.language.startsWith("zh")&&(o="zh"),t.LANG=o},3804:e=>{e.exports=React},7196:e=>{e.exports=ReactDOM}},t={};!function a(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}(687)})();