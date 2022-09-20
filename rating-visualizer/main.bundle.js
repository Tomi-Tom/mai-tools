(()=>{"use strict";var e={745:(e,t,a)=>{var n=a(1533);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.DxVersion=void 0;const a=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL"];var n;!function(e){e[e.SPLASH=15]="SPLASH",e[e.SPLASH_PLUS=16]="SPLASH_PLUS",e[e.UNIVERSE=17]="UNIVERSE",e[e.UNIVERSE_PLUS=18]="UNIVERSE_PLUS",e[e.FESTiVAL=19]="FESTiVAL"}(n=t.DxVersion||(t.DxVersion={})),t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[n.SPLASH,n.SPLASH_PLUS,n.UNIVERSE,n.UNIVERSE_PLUS,n.FESTiVAL],t.validateGameVersion=function(e,t=n.UNIVERSE_PLUS){const a="string"==typeof e?parseInt(e):e;return!e||isNaN(a)?t:a>=n.SPLASH&&a<=n.UNIVERSE_PLUS?a:t},t.getVersionName=function(e){return a[e]}},5215:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useLanguage=t.LangContext=void 0;const n=a(7363),i=a(8080);t.LangContext=(0,n.createContext)((0,i.getInitialLanguage)()),t.useLanguage=function(){return(0,n.useContext)(t.LangContext)}},8080:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0,t.SUPPORTED_LANGUAGES=["en_US","zh_TW"];const a="MaiToolsLang";t.saveLanguage=function(e){window.localStorage.setItem(a,e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search);return function(){switch(window.localStorage.getItem(a)){case"en_US":return"en_US";case"zh_TW":return"zh_TW"}return null}()||(e.get("hl")?e.get("hl").startsWith("zh")?"zh_TW":"en_US":navigator.language.startsWith("zh")?"zh_TW":"en_US")}},7991:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=void 0;const n=a(134),i=[{minAchv:100.5,factor:14,title:"SSS+"},{minAchv:100,factor:13.5,title:"SSS"},{minAchv:99.5,factor:13.2,title:"SS+"},{minAchv:99,factor:13,title:"SS"},{minAchv:98,factor:12.7,title:"S+"},{minAchv:97,factor:12.5,title:"S"},{minAchv:94,factor:10.5,title:"AAA"},{minAchv:90,factor:9.5,title:"AA"},{minAchv:80,factor:8.5,title:"A"},{minAchv:75,factor:7.5,title:"BBB"},{minAchv:70,factor:7,title:"BB"},{minAchv:60,factor:6,title:"B"},{minAchv:50,factor:5,title:"C"}],l=[{minAchv:100.5,factor:22.4,title:"SSS+"},{minAchv:100,factor:21.6,title:"SSS"},{minAchv:99.5,factor:21.1,title:"SS+"},{minAchv:99,factor:20.8,title:"SS"},{minAchv:98,factor:20.3,title:"S+"},{minAchv:97,factor:20,title:"S"},{minAchv:94,factor:16.8,title:"AAA"},{minAchv:90,factor:15.2,title:"AA"},{minAchv:80,factor:13.6,title:"A"},{minAchv:75,factor:12,title:"BBB"},{minAchv:70,factor:11.2,title:"BB"},{minAchv:60,factor:9.6,title:"B"},{minAchv:50,factor:8,title:"C"}];function r(e){return e>n.DxVersion.SPLASH?l:i}function o(e){return l.findIndex((t=>e>=t.minAchv))}function s(e){const t=o(e);return t<0?"D":l[t].title}t.getRankDefinitions=r,t.getRankIndexByAchievement=o,t.getRankByAchievement=function(e,t){const a=o(e);return a<0?null:r(t)[a]},t.getRankTitle=s,t.getFinaleRankTitle=function(e){return s(e).replace("SSS+","SSS")}},1499:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IntervalLines=void 0;const i=n(a(7363));class l extends i.default.PureComponent{render(){const{interval:e,heightUnit:t,onClick:a}=this.props,n=e[0]===e[1];let l,r;const o={bottom:(l=(e[0]-.5)*t-1)+"px"},s={bottom:(r=(e[1]+.5)*t)+"px"};n?l+=4:r-l<14&&(r+=2,l-=5);const c={bottom:l+"px"},m={bottom:r+"px"};return i.default.createElement("div",{onClick:a},i.default.createElement("div",{className:"intervalBoundary",style:s}),i.default.createElement("div",{className:"intervalBoundary",style:o}),i.default.createElement("div",{className:"intervalLabel",style:c},i.default.createElement("span",{className:"intervalLabelText axisLabelText"},e[0])),!n&&i.default.createElement("div",{className:"intervalLabel",style:m},i.default.createElement("span",{className:"intervalLabelText axisLabelText"},e[1])))}}t.IntervalLines=l},1919:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvLabel=void 0;const i=n(a(7363));class l extends i.default.PureComponent{render(){const{canZoomIn:e,onClick:t,title:a}=this.props;return i.default.createElement("div",{className:"lvLabel"},i.default.createElement("div",{className:"lvLabelButtonContainer"},i.default.createElement("button",{className:"lvLabelButton",disabled:!e,onClick:t},a)))}}t.LvLabel=l},2330:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvRankRatingSegment=void 0;const i=n(a(7363));class l extends i.default.PureComponent{constructor(){super(...arguments),this.minRt=0,this.maxRt=0,this.handleClick=()=>{this.props.highlightInterval(this.minRt,this.maxRt)}}render(){const{minLv:e,minAchv:t,rankFactor:a,maxLv:n,maxAchv:l,heightUnit:r,title:o}=this.props;this.minRt=Math.floor(e*t*a/100),this.maxRt=Math.floor(n*l*a/100);const s={bottom:(this.minRt-.5)*r+"px",height:(this.maxRt-this.minRt+1)*r+"px"},c="ratingSegment segment"+o.replace("+","P");return i.default.createElement("div",{className:c,style:s,title:this.hoverText(),tabIndex:0,onClick:this.handleClick},i.default.createElement("div",{className:"ratingSegmentLabel"},o))}hoverText(){return this.minRt<this.maxRt?`${this.minRt} - ${this.maxRt}`:this.maxRt.toString()}}t.LvRankRatingSegment=l},8758:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvRatingContainer=void 0;const i=n(a(7363)),l=a(1919),r=a(2330);class o extends i.default.PureComponent{constructor(){super(...arguments),this.handleLabelClick=()=>{const{lvTitle:e}=this.props;this.props.onZoomIn(e,e)}}render(){const{canZoomIn:e,lvTitle:t,minLv:a,maxLv:n,heightUnit:o,containerHeight:s,ranks:c}=this.props,m={height:s+"px"};return i.default.createElement("div",{className:"lvRatingContainer",style:m},i.default.createElement(l.LvLabel,{title:t,onClick:this.handleLabelClick,canZoomIn:e}),o?c.map(((e,t)=>{const l=0===t?e.minAchv:c[t-1].minAchv-1e-4;return i.default.createElement(r.LvRankRatingSegment,{key:e.title,minLv:a,maxLv:n,minAchv:e.minAchv,maxAchv:l,rankFactor:e.factor,heightUnit:o,title:e.title,highlightInterval:this.props.highlightInterval})})):null)}}t.LvRatingContainer=o},2977:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiplierTable=void 0;const i=n(a(7363)),l=a(5215),r=a(7991),o=["qlRankTitleCell","qlThresholdCell"],s={en_US:{rankFactorTable:"Rank Factor Table",rank:"Rank",achievement:"Achievement",factor:"Factor",multiplier:"Multiplier (Factor × Achievement)"},zh_TW:{rankFactorTable:"Rank 係數表",rank:"Rank",achievement:"達成率",factor:"係數",multiplier:"倍率 (係數 × 達成率)"}},c=e=>{const{isHeading:t}=e;return i.default.createElement("tr",null,e.values.map(((e,a)=>{let n="qlRankFactorCell";return a<o.length&&(n+=" "+o[a]),t||0===a?i.default.createElement("th",{key:a,className:n},e):i.default.createElement("td",{key:a,className:n},e)})))};t.MultiplierTable=({gameVer:e})=>{const t=(0,r.getRankDefinitions)(e),a=t.findIndex((e=>"A"===e.title))+1,n=s[(0,l.useLanguage)()];return i.default.createElement("div",{className:"quickLookup"},i.default.createElement("h2",{className:"quickLookupHeading"},n.rankFactorTable),i.default.createElement("table",{className:"lookupTable"},i.default.createElement("thead",{className:"lookupTableHead"},i.default.createElement(c,{values:[n.rank,n.achievement,n.factor,n.multiplier],isHeading:!0})),i.default.createElement("tbody",null,t.slice(0,a).map(((e,t,a)=>{const n=e.minAchv*e.factor/100,l=t>0?(a[t-1].minAchv-1e-4)*e.factor/100:n,r=n.toFixed(3),o=l.toFixed(3),s=r!==o?`${r} - ${o}`:r;return i.default.createElement(c,{key:t,values:[e.title,e.minAchv,e.factor,s]})})))))}},3828:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsInput=void 0;const i=n(a(7363)),l=a(134),r=a(6729);class o extends i.default.PureComponent{constructor(){super(...arguments),this.handleSetGameVer=e=>{const t=e.currentTarget.value;this.props.onSetGameVer(parseInt(t))},this.handleChangeMinLv=e=>{const t=e.currentTarget.value,a=(0,r.getLvIndex)(t),n=(0,r.getLvIndex)(this.props.maxLv);this.props.onSetRange(t,r.DX_LEVELS[Math.max(a,n)].title)},this.handleChangeMaxLv=e=>{const t=e.currentTarget.value,a=(0,r.getLvIndex)(this.props.minLv),n=(0,r.getLvIndex)(t);this.props.onSetRange(r.DX_LEVELS[Math.min(a,n)].title,t)},this.handleChangeHeightUnit=e=>{console.log(e.target);const t=parseInt(e.currentTarget.value);this.props.onChangeUnit(t)}}render(){const{heightUnit:e,gameVer:t,minLv:a,maxLv:n,onFocus:r,onBlur:o}=this.props;return i.default.createElement("div",{className:"optionsContainer"},i.default.createElement("div",{className:"container",onFocus:r,onBlur:o,tabIndex:-1},i.default.createElement("label",{className:"optionGroup"},"Ver: ",i.default.createElement("select",{onChange:this.handleSetGameVer,value:t},i.default.createElement("option",{value:l.DxVersion.SPLASH},"Splash (and older)"),i.default.createElement("option",{value:l.DxVersion.SPLASH_PLUS},"Current version"))),i.default.createElement("label",{className:"optionGroup"},"Scale: ",i.default.createElement("select",{onChange:this.handleChangeHeightUnit,value:e.toFixed(0)},i.default.createElement("option",{value:"0"},"Hide"),i.default.createElement("option",{value:"3"},"3x"),i.default.createElement("option",{value:"4"},"4x"),i.default.createElement("option",{value:"5"},"5x"),i.default.createElement("option",{value:"8"},"8x"),i.default.createElement("option",{value:"12"},"12x"))),i.default.createElement("span",{className:"lvRangeLabelContainer"},i.default.createElement("label",{className:"optionGroup"},"Min Level: ",i.default.createElement("select",{onChange:this.handleChangeMinLv,value:a},this.renderLvOptions())),i.default.createElement("label",{className:"optionGroup"},"Max Level: ",i.default.createElement("select",{onChange:this.handleChangeMaxLv,value:n},this.renderLvOptions())))))}renderLvOptions(){const e=[];for(let t=r.DX_LEVELS.length-1;t>=0;t--){const a=r.DX_LEVELS[t];e.push(i.default.createElement("option",{key:t,value:a.title},a.title))}return e}}t.OptionsInput=o},2343:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingAxis=void 0;const i=n(a(7363));t.RatingAxis=({step:e,maxRating:t,heightUnit:a,containerHeight:n,onClick:r})=>{const o={height:n+"px"},s=[];for(let a=0;a<t+e;a+=e)s.push(a);return i.default.createElement("div",{className:"axisLabelContainer",style:o,onClick:r},s.map((e=>i.default.createElement(l,{key:e,value:e,heightUnit:a}))))};const l=({value:e,heightUnit:t})=>{const a={bottom:e*t+"px"};return i.default.createElement("div",{className:"axisLabel",style:a},i.default.createElement("span",{className:"axisLabelText"},e))}},9731:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingTable=void 0;const i=n(a(7363));class l extends i.default.PureComponent{render(){const{levels:e}=this.props;let{ranks:t}=this.props;const a=t.findIndex((e=>"AAA"===e.title));return t=t.slice(0,a+1),i.default.createElement("table",{className:"lookupTable"},i.default.createElement("thead",{className:"lookupTableHead"},i.default.createElement("tr",null,i.default.createElement("th",{className:"lookupTopLeftCell"}),t.map(((e,t)=>i.default.createElement("th",{key:t},e.title))))),i.default.createElement("tbody",{className:"lookupTableBody"},e.map(((e,a)=>i.default.createElement("tr",{key:a},i.default.createElement("th",null,e.title),t.map(((a,n)=>{const l=0===n?a.minAchv:t[n-1].minAchv-1e-4,r=Math.floor(e.minLv*a.minAchv*a.factor*.01),o=Math.floor(e.maxLv*l*a.factor*.01),s=r===o?r:`${o} - ${r}`;return i.default.createElement("td",{key:n},s)})))))))}}t.RatingTable=l},3003:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingVisualizer=void 0;const i=n(a(7363)),l=a(134),r=a(8080),o=a(5215),s=a(7991),c=a(1499),m=a(6729),u=a(8758),h=a(2977),v=a(3828),d=a(2343),g=a(9731);class f extends i.default.PureComponent{constructor(e){super(e),this.removeIntervalTimeout=0,this.handleChangeHeightUnit=e=>{this.setState({heightUnit:e}),0===e&&this.removeHighlightInterval()},this.handleSetGameVer=e=>{this.setState((({maxLv:t})=>{const a=m.DX_LEVELS.find((e=>e.title===t));return{gameVer:e,maxRating:L(a.maxLv,e)}}))},this.handleSetRange=(e,t)=>{const a=m.DX_LEVELS.find((e=>e.title===t));this.setState((({gameVer:n})=>({minLv:e,maxLv:t,maxRating:L(a.maxLv,n)})))},this.highlightInterval=(e,t)=>{const a=this.state.highlightInterval;a&&a[0]===e&&a[1]===t?this.removeHighlightInterval():this.setState({highlightInterval:[e,t]})},this.removeHighlightInterval=()=>{this.removeIntervalTimeout=window.setTimeout((()=>{this.setState({highlightInterval:void 0}),this.removeIntervalTimeout=0}),0)},this.cancelRemoveHighlightInterval=()=>{this.removeIntervalTimeout&&(clearTimeout(this.removeIntervalTimeout),this.removeIntervalTimeout=0)};const t=new URLSearchParams(location.search),a=(0,l.validateGameVersion)(t.get("gameVer"))===l.DxVersion.SPLASH?l.DxVersion.SPLASH:l.DxVersion.SPLASH_PLUS,n=(0,r.getInitialLanguage)();p(n),this.state={lang:n,gameVer:a,minLv:"10",maxLv:"14",width:30,heightUnit:5,maxRating:L(15,a),topPadding:60,axisLabelStep:5}}componentDidUpdate(e,t){this.state.lang!==t.lang&&p(this.state.lang)}render(){const{lang:e,gameVer:t,heightUnit:a,maxRating:n,axisLabelStep:l,highlightInterval:r,minLv:m,maxLv:f}=this.state,L=this.getLevels(),p=(0,s.getRankDefinitions)(t).slice(0,9),S=this.getContainerHeight(),E=f!==m;return i.default.createElement(o.LangContext.Provider,{value:e},i.default.createElement("div",{className:"ratingVisualizer"},i.default.createElement(v.OptionsInput,{heightUnit:a,gameVer:t,onChangeUnit:this.handleChangeHeightUnit,onSetGameVer:this.handleSetGameVer,onSetRange:this.handleSetRange,minLv:m,maxLv:f,onBlur:this.removeHighlightInterval,onFocus:this.cancelRemoveHighlightInterval}),i.default.createElement("div",{className:"container",onBlur:this.removeHighlightInterval,onFocus:this.cancelRemoveHighlightInterval,tabIndex:-1},i.default.createElement("div",{className:"ratingContainer"},a?i.default.createElement(d.RatingAxis,{maxRating:n,heightUnit:a,containerHeight:S,step:l,onClick:this.removeHighlightInterval}):null,L.map(((e,t)=>i.default.createElement(u.LvRatingContainer,{key:t,canZoomIn:E,lvTitle:e.title,minLv:e.minLv,maxLv:e.maxLv,heightUnit:a,containerHeight:S,ranks:p,onZoomIn:this.handleSetRange,highlightInterval:this.highlightInterval}))),r&&i.default.createElement(c.IntervalLines,{interval:r,heightUnit:a,onClick:this.removeHighlightInterval}))),i.default.createElement("div",{className:"container"},i.default.createElement(g.RatingTable,{ranks:p,levels:L}),i.default.createElement("hr",{className:"sectionSep"}),i.default.createElement(h.MultiplierTable,{gameVer:t}),i.default.createElement("footer",{className:"footer"},i.default.createElement("hr",{className:"sectionSep"}),i.default.createElement("span",null,"Made by "),i.default.createElement("a",{className:"authorLink",href:"https://github.com/myjian",target:"_blank"},"myjian"),i.default.createElement("span",null,".")))))}getDetailLevels(e,t){const a=[],n=m.DX_LEVELS[t].maxLv;let i=m.DX_LEVELS[e].minLv;for(;i<=n;)a.push({title:i.toFixed(1),minLv:i,maxLv:i}),i+=.1;return a}getLevels(){const{minLv:e,maxLv:t}=this.state,a=(0,m.getLvIndex)(e),n=(0,m.getLvIndex)(t);return n-a<2?this.getDetailLevels(a,n):m.DX_LEVELS.slice(a,n+1)}getContainerHeight(){const{axisLabelStep:e,maxRating:t,heightUnit:a,topPadding:n}=this.state;return(t+e)*a+n}}function L(e,t){const a=(0,s.getRankDefinitions)(t)[0];return Math.floor(a.minAchv*a.factor*e/100)}function p(e){switch(e){case"en_US":document.title="maimai DX Rating Lookup Table & Visualization";break;case"zh_TW":document.title="maimai DX R值圖表"}}t.RatingVisualizer=f},6729:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLvIndex=t.DX_LEVELS=void 0,t.DX_LEVELS=[{title:"8",minLv:8,maxLv:8.6},{title:"8+",minLv:8.7,maxLv:8.9},{title:"9",minLv:9,maxLv:9.6},{title:"9+",minLv:9.7,maxLv:9.9},{title:"10",minLv:10,maxLv:10.6},{title:"10+",minLv:10.7,maxLv:10.9},{title:"11",minLv:11,maxLv:11.6},{title:"11+",minLv:11.7,maxLv:11.9},{title:"12",minLv:12,maxLv:12.6},{title:"12+",minLv:12.7,maxLv:12.9},{title:"13",minLv:13,maxLv:13.6},{title:"13+",minLv:13.7,maxLv:13.9},{title:"14",minLv:14,maxLv:14.6},{title:"14+",minLv:14.7,maxLv:14.9},{title:"15",minLv:15,maxLv:15}],t.getLvIndex=function(e){return t.DX_LEVELS.findIndex((t=>t.title===e))}},9875:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(a(7363)),l=n(a(745)),r=a(3003);l.default.createRoot(document.getElementById("root")).render(i.default.createElement(r.RatingVisualizer,null))},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},t={};!function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}(9875)})();