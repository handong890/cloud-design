import{r as e,N as t,m as n,a0 as o}from"./index.54491fbe.js";import{q as r}from"./styled-components.browser.esm.6105e56a.js";const l=r.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{type:"atm"});return e.createElement(l,null,n)}});const a=["xxs","xs","small","medium","large","xl","xxl","xxxl"],c=t.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js"});const s=r.div`
  .icon-list-2 i {
    margin: 0 10px;
  }
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement("div",{className:"icon-list-2"},e.createElement(c,{type:"icon-store"}),e.createElement(c,{type:"icon-pic"}),e.createElement(c,{type:"icon-gift"})),e.createElement("br",null),e.createElement("ul",{className:"icon-sizes"},a.map(((t,n)=>e.createElement("li",{key:n},e.createElement(c,{type:"icon-pic",size:t}),e.createElement("span",null,t))))));return e.createElement(s,null,t)}});const u=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,"button: ",e.createElement("br",null),e.createElement(t,{type:"atm",role:"button","aria-label":"icon atm",style:{margin:"5px"}}),e.createElement(t,{type:"smile",role:"button","aria-label":"icon smile",style:{margin:"5px"}}),e.createElement("br",null),"decoration: ",e.createElement("br",null),e.createElement(t,{type:"success","aria-hidden":!0,style:{margin:"5px"}}));return e.createElement(u,null,n)}});const d=["xxs","xs","small","medium","large","xl","xxl","xxxl"];const y=r.div`
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("ul",{className:"icon-sizes"},d.map(((n,o)=>e.createElement("li",{key:o},e.createElement(t,{type:"smile",size:n}),e.createElement("span",null,n))))),e.createElement("span",null,"inherit"),e.createElement("h4",null,"Shall I compare thee to a summer's day?"," ",e.createElement(t,{type:"smile",size:"inherit"})," ",e.createElement(t,{type:"set",size:"inherit"})),e.createElement("h3",null,"Thou art more lovely and more temperate."," ",e.createElement(t,{type:"smile",size:"inherit"})," ",e.createElement(t,{type:"set",size:"inherit"})),e.createElement("h2",null,"Rough winds do shake the darling buds of May,"," ",e.createElement(t,{type:"smile",size:"inherit"})," ",e.createElement(t,{type:"set",size:"inherit"})),e.createElement("h1",null,"And summer's lease hath all too short a date."," ",e.createElement(t,{type:"smile",size:"inherit"})," ",e.createElement(t,{type:"set",size:"inherit"})));return e.createElement(y,null,n)}});const g=r.div`
  .icon-style-demo {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("div",{className:"icon-style-demo"},e.createElement(t,{type:"success",style:{color:"#1DC11D",marginRight:"10px"}}),"This is a success message!"),e.createElement("div",{className:"icon-style-demo"},e.createElement(t,{type:"warning",style:{color:"#FFA003",marginRight:"10px"}}),"This is a warning message!"),e.createElement("div",{className:"icon-style-demo"},e.createElement(t,{type:"error",style:{color:"#FF3333",marginRight:"10px"}}),"This is a failure message!"));return e.createElement(g,null,n)}}),h={"text/plain":"Text","text/html":"Url",default:"Text"};var x=function(e,t){var n,o,r,l,i,a,c=!1;t||(t={}),n=t.debug||!1;try{if(r=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}(),l=document.createRange(),i=document.getSelection(),(a=document.createElement("span")).textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=h[t.format]||h.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(a),l.selectNodeContents(a),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),a&&document.body.removeChild(a),r()}return c},E=n((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var o=l(e),r=l(x);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){var e,n;s(this,t);for(var l=arguments.length,i=new Array(l),a=0;a<l;a++)i[a]=arguments[a];return f(d(n=u(this,(e=m(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,l=t.text,i=t.onCopy,a=t.children,c=t.options,s=o.default.Children.only(a),p=(0,r.default)(l,c);i&&i(l,p),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)})),n}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(l=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&p(n.prototype,l),i&&p(n,i),t}(o.default.PureComponent);n.CopyToClipboard=g,f(g,"defaultProps",{onCopy:void 0,options:void 0})})).CopyToClipboard;E.CopyToClipboard=E;var v=E;const w=["smile","cry","success","warning","prompt","error","help","clock","success-filling","delete-filling","favorites-filling","add","minus","arrow-up","arrow-down","arrow-left","arrow-right","arrow-double-left","arrow-double-right","switch","sorting","descending","ascending","select","semi-select","loading","search","close","ellipsis","picture","calendar","ashbin","upload","download","set","edit","refresh","filter","attachment","account","email","atm","copy","exit","eye","eye-close","toggle-left","toggle-right","lock","unlock","chart-pie","chart-bar","form","detail","list","dashboard"];let C=[];window.customIcons&&(C=window.customIcons);const _=()=>o.success("Copied!");const O=r.div`
  .icon-list-title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-list li {
    display: inline-block;
    width: 140px;
    padding: 30px 0;
    color: #666;
    cursor: pointer;
  }

  .icon-list li:hover {
    color: #333;
    background-color: #f7f7f7;
  }

  .icon-list i {
    display: block;
    width: 32px;
    margin: 0 auto;
  }

  .icon-list span {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  .icon-list-custom-title {
    margin: 20px 0 20px 10px;
    font-size: 20px;
    color: #333;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("div",{className:"icon-list-title"},"Click on the icon to copy the code."),e.createElement("ul",{className:"icon-list"},w.map(((n,o)=>e.createElement(v,{key:o,text:`<Icon type="${n}" />`,onCopy:_},e.createElement("li",null,e.createElement(t,{type:n,size:"xl"}),e.createElement("span",null,n)))))),C.length?e.createElement("div",null,e.createElement("div",{className:"icon-list-custom-title"},"Custom Icon"),e.createElement("ul",{className:"icon-list"},C.map(((n,o)=>e.createElement(v,{key:o,text:`<Icon type="${n}" />`,onCopy:_},e.createElement("li",null,e.createElement(t,{type:n,size:"xl"}),e.createElement("span",null,n))))))):null);return e.createElement(O,null,n)}});const z={};z._basic=i,z._iconfont=p,z._accessibility=m,z._size=f,z._style=b,z._type=k;export default z;