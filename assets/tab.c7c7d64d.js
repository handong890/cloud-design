var e=Object.assign;import{r as t,x as n,_ as a,c as o,d as i,K as r,b as s,E as l,H as c,j as p,e as m,f as d,F as u,A as b,p as f,y,g as v,o as h,C as g,i as E,B as T,n as k,S as x,a6 as C}from"./index.4642f55c.js";import{q as w}from"./styled-components.browser.esm.1feaecc0.js";var I,N,_="click",M="hover";function S(e,t){var n="width";return"left"!==t&&"right"!==t||(n="height"),e?e.getBoundingClientRect()[n]:0}function z(e,t){var n="left";return"left"!==t&&"right"!==t||(n="top"),e.getBoundingClientRect()[n]}function K(e){return"transform"in e||"webkitTransform"in e||"MozTransform"in e}var D,O,P={float:"right",zIndex:1},B={float:"left",zIndex:1},H={dropdown:"arrow-down",prev:"arrow-left",next:"arrow-right"},j=n.Popup,R=(N=I=function(e){function n(a,c){o(this,n);var p=i(this,e.call(this,a,c));return p.removeTab=function(e,t){t&&t.stopPropagation(),p.props.onClose(e)},p.onCloseKeyDown=function(e,t){t.keyCode===r.ENTER&&(t.stopPropagation(),t.preventDefault(),p.props.onClose(e))},p.defaultTabTemplateRender=function(e,n){var a=n.prefix,o=n.title,i=n.closeable,r=p.props.locale,l=i?t.createElement(s,{"aria-label":r.closeAriaLabel,type:"close",tabIndex:"0",onKeyDown:function(t){return p.onCloseKeyDown(e,t)},onClick:function(t){return p.removeTab(e,t)},className:a+"tabs-tab-close"}):null;return t.createElement("div",{className:p.props.prefix+"tabs-tab-inner"},o,l)},p.scrollToActiveTab=function(){if(p.activeTab&&["slide","dropdown"].includes(p.props.excessMode)){var e=S(p.activeTab),t=S(p.wrapper),n=z(p.activeTab),a=z(p.wrapper),o=p.offset;if(n>=a+t||n+e<=a)return void p.setOffset(p.offset+a-n,!0,!0);p.setOffset(o,!0,!0)}},p.onPrevClick=function(){var e=S(p.wrapper);p.setOffset(p.offset+e,!0,!1)},p.onNextClick=function(){var e=S(p.wrapper);p.setOffset(p.offset-e,!0,!1)},p.onSelectMenuItem=function(e){var t=p.props;(0,t.onTriggerEvent)(t.triggerType,e[0])},p.onWindowResized=function(){p.updateTimer&&clearTimeout(p.updateTimer),p.updateTimer=setTimeout((function(){p.setSlideBtn(),p.getDropdownItems(p.props)}),100)},p.navRefHandler=function(e){p.nav=l.findDOMNode(e)},p.wrapperRefHandler=function(e){p.wrapper=e},p.navbarRefHandler=function(e){p.navbar=e},p.activeTabRefHandler=function(e){p.activeTab=e},p.prevBtnHandler=function(e){p.prevBtn=l.findDOMNode(e)},p.nextBtnHandler=function(e){p.nextBtn=l.findDOMNode(e)},p.state={showBtn:!1,dropdownTabs:[]},p.offset=0,p}return a(n,e),n.prototype.componentDidMount=function(){this.props.animation||this.initialSettings(),c.on(window,"resize",this.onWindowResized)},n.prototype.componentDidUpdate=function(){var e=this;clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout((function(){e.scrollToActiveTab()}),410),clearTimeout(this.slideTimer),this.slideTimer=setTimeout((function(){e.setSlideBtn()}),410)},n.prototype.componentWillUnmount=function(){c.off(window,"resize",this.onWindowResized)},n.prototype.initialSettings=function(){this.setSlideBtn(),this.getDropdownItems(this.props)},n.prototype.setOffset=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=this.props,o=a.tabPosition,i=a.rtl,r=S(this.nav,o),s=S(this.wrapper),l=(e=(e=e>=0?0:e)<=s-r&&s-r<0?s-r:e)-this.offset;if(this.activeTab&&"slide"===this.props.excessMode&&n){var c=S(this.activeTab),m=z(this.activeTab)+l,d=z(this.wrapper);e=this._adjustTarget({wrapperOffset:d,wrapperWH:s,activeTabWH:c,activeTabOffset:m,rtl:i,target:e})}var u=1;this.nav&&this.nav.offsetWidth&&(u=S(this.nav)/this.nav.offsetWidth);var b=e/u,f=isNaN(b)?e:b;if(this.offset!==e){this.offset=e;var y={},v=this.nav.style,h=K(v);y="left"===o||"right"===o?h?{value:"translate3d(0, "+f+"px, 0)"}:{name:"top",value:f+"px"}:this.props.rtl?h?{value:"translate3d("+-1*f+"px, 0, 0)"}:{name:"right",value:f+"px"}:h?{value:"translate3d("+f+"px, 0, 0)"}:{name:"left",value:f+"px"},h?p(v,{transform:y.value,webkitTransform:y.value,mozTransform:y.value}):v[y.name]=y.value,t&&this.setSlideBtn()}},n.prototype._adjustTarget=function(e){var t=e.wrapperOffset,n=e.wrapperWH,a=e.activeTabWH,o=e.activeTabOffset,i=e.rtl,r=e.target;return t+n<o+a&&o<t+n?(i?r+=o+a-(t+n):r-=o+a-(t+n)+1,r):t<o+a&&o<t?(i?r-=t-o+1:r+=t-o,r):r},n.prototype._setBtnStyle=function(e,t){if(this.prevBtn&&this.nextBtn){var n="disabled";this.prevBtn.disabled=!e,this.nextBtn.disabled=!t,e?m.removeClass(this.prevBtn,n):m.addClass(this.prevBtn,n),t?m.removeClass(this.nextBtn,n):m.addClass(this.nextBtn,n)}},n.prototype.setSlideBtn=function(){var e=this.props.tabPosition,t=S(this.nav,e),n=S(this.wrapper,e),a=n-t,o=void 0,i=void 0;a>=0||t<=n?(o=!1,i=!1,this.setOffset(0,!1)):this.offset<0&&this.offset<=a?(i=!0,o=!1):this.offset>=0?(i=!1,o=!0):(i=!0,o=!0),(i||o)!==this.state.showBtn?this.setState({showBtn:i||o}):this._setBtnStyle(i,o)},n.prototype.getDropdownItems=function(e){var t=e.excessMode,n=e.tabs;if("dropdown"===t){var a=this.wrapper.offsetWidth,o=this.nav.childNodes,i=void 0,r=0;for(i=0;i<n.length&&!((r+=o[i].offsetWidth)>a);i++);i===n.length?this.setState({dropdownTabs:[]}):this.setState({dropdownTabs:n})}},n.prototype.renderTabList=function(e){var n=this,a=e.prefix,o=e.tabs,i=e.activeKey,r=e.tabRender||this.defaultTabTemplateRender,s=[];return t.Children.forEach(o,(function(e){var o,l=e.props,c=l.disabled,m=l.className,u=l.onClick,b=l.onMouseEnter,f=l.onMouseLeave,y=l.style,v=i===e.key,h=d(((o={})[a+"tabs-tab"]=!0,o.disabled=c,o.active=v,o),m),g={};c||(g={onClick:n.onNavItemClick.bind(n,e.key,u),onMouseEnter:n.onNavItemMouseEnter.bind(n,e.key,b),onMouseLeave:n.onNavItemMouseLeave.bind(n,e.key,f)}),s.push(t.createElement("li",p({role:"tab",key:e.key,ref:v?n.activeTabRefHandler:null,"aria-hidden":c?"true":"false","aria-selected":v?"true":"false",tabIndex:v?0:-1,className:h,style:y},g),r(e.key,e.props)))})),s},n.prototype.onNavItemClick=function(e,t,n){if(this.props.onTriggerEvent(_,e),t)return t(e,n)},n.prototype.onNavItemMouseEnter=function(e,t,n){if(this.props.onTriggerEvent(M,e),t)return t(e,n)},n.prototype.onNavItemMouseLeave=function(e,t,n){if(t)return t(e,n)},n.prototype.getIcon=function(e){var n=this.props,a=n.prefix,o=n.icons,i=n.rtl,r=H[e],l=t.createElement(s,{type:r,rtl:i,className:a+"tab-icon-"+e});return o[e]&&(l="string"==typeof o[e]?t.createElement(s,{rtl:i,type:o[e]}):o[e]),l},n.prototype.renderDropdownTabs=function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!n.length)return null;var a=this.props,o=a.prefix,i=a.activeKey,r=a.triggerType,s=a.popupProps,l=a.rtl,c=this.getIcon("dropdown"),m=t.createElement("button",{className:o+"tabs-btn-down"},c);return t.createElement(j,p({rtl:l,triggerType:r,trigger:m,container:function(e){return e.parentNode},className:o+"tabs-bar-popup"},s),t.createElement(u,{rtl:l,selectedKeys:[i],onSelect:this.onSelectMenuItem,selectMode:"single"},n.map((function(n){var a=n.props,o=a.disabled,i=a.onClick,r=a.onMouseEnter,s=a.onMouseLeave,l={};return o||(l={onClick:e.onNavItemClick.bind(e,n.key,i),onMouseEnter:e.onNavItemMouseEnter.bind(e,n.key,r),onMouseLeave:e.onNavItemMouseLeave.bind(e,n.key,s)}),t.createElement(u.Item,p({key:n.key},l),n.props.title)}))))},n.prototype.render=function(){var e,n=this.props,a=n.prefix,o=n.tabPosition,i=n.excessMode,r=n.extra,s=n.onKeyDown,l=n.animation,c=n.style,m=n.className,u=n.rtl,f=this.state,y=void 0,v=void 0,h=void 0,g=f.showBtn;if("dropdown"===i&&g&&f.dropdownTabs.length)h=this.renderDropdownTabs(f.dropdownTabs),v=null,y=null;else if(g){var E=this.getIcon("prev");v=t.createElement("button",{onClick:this.onPrevClick,className:a+"tabs-btn-prev",ref:this.prevBtnHandler},E);var T=this.getIcon("next");y=t.createElement("button",{onClick:this.onNextClick,className:a+"tabs-btn-next",ref:this.nextBtnHandler},T),h=null}else y=null,v=null,h=null;var k=d(((e={})[a+"tabs-nav-container"]=!0,e[a+"tabs-nav-container-scrolling"]=g,e)),x=a+"tabs-nav",C=this.renderTabList(this.props),w=[t.createElement("div",{className:k,onKeyDown:s,key:"nav-container"},t.createElement("div",{className:a+"tabs-nav-wrap",ref:this.wrapperRefHandler},t.createElement("div",{className:a+"tabs-nav-scroll"},l?t.createElement(b,{role:"tablist","aria-multiselectable":!1,component:"ul",className:x,animation:x,singleMode:!1,ref:this.navRefHandler,afterAppear:this.initialSettings.bind(this)},C):t.createElement("ul",{role:"tablist",className:x,ref:this.navRefHandler},C))),v,y,h)];if(r){var I={className:a+"tabs-nav-extra",key:"nav-extra"};if("top"===o||"bottom"===o){var N=u?B:P;w.unshift(t.createElement("div",p({},I,{style:N}),r))}else w.push(t.createElement("div",I,r))}var _=d(a+"tabs-bar",m);return t.createElement("div",{className:_,style:c,ref:this.navbarRefHandler},w)},n}(t.Component),I.propTypes={prefix:f.string,rtl:f.bool,animation:f.bool,activeKey:f.oneOfType([f.string,f.number]),excessMode:f.string,extra:f.any,tabs:f.oneOfType([f.array,f.object]),tabPosition:f.string,tabRender:f.func,triggerType:f.string,popupProps:f.object,onTriggerEvent:f.func,onKeyDown:f.func,onClose:f.func,style:f.object,className:f.string,locale:f.object,icons:f.object},N);R.displayName="Nav";var L,A,W=(O=D=function(e){function n(){return o(this,n),i(this,e.apply(this,arguments))}return a(n,e),n.prototype.render=function(){var e,n=this.props,a=n.prefix,o=n.activeKey,i=n.lazyLoad,r=n.unmountInactiveTabs,s=n.children,l=n.className,c=y(n,["prefix","activeKey","lazyLoad","unmountInactiveTabs","children","className"]),m=[];t.Children.forEach(s,(function(e){var n=o==e.key;m.push(t.cloneElement(e,{prefix:a,active:n,lazyLoad:i,unmountInactiveTabs:r}))}));var u=d(((e={})[a+"tabs-content"]=!0,e),l);return t.createElement("div",p({},c,{className:u}),m)},n}(t.PureComponent),D.propTypes={prefix:f.string,activeKey:f.oneOfType([f.string,f.number]),lazyLoad:f.bool,children:f.any},O),F=function(){},U=(A=L=function(e){function n(t,a){o(this,n);var s=i(this,e.call(this,t,a));return s.handleTriggerEvent=function(e,t){var n=s.props,a=n.triggerType,o=n.onClick,i=n.onChange;a===e&&(o(t),s.setActiveKey(t),s.state.activeKey!==t&&i(t))},s.onNavKeyDown=function(e){var t=e.keyCode;if(!s.props.disableKeyboard){t>=r.LEFT&&t<=r.DOWN&&e.preventDefault();var n=void 0;t===r.RIGHT||t===r.DOWN?(n=s.getNextActiveKey(!0),s.handleTriggerEvent(s.props.triggerType,n)):t!==r.LEFT&&t!==r.UP||(n=s.getNextActiveKey(!1),s.handleTriggerEvent(s.props.triggerType,n))}},s.state={activeKey:s.getDefaultActiveKey(t)},s}return a(n,e),n.getDerivedStateFromProps=function(e,t){return void 0!==e.activeKey&&t.activeKey!==""+e.activeKey?{activeKey:""+e.activeKey}:{}},n.prototype.getDefaultActiveKey=function(e){var n=void 0===e.activeKey?e.defaultActiveKey:e.activeKey;return void 0===n&&t.Children.forEach(e.children,(function(e,a){void 0===n&&t.isValidElement(e)&&(e.props.disabled||(n=e.key||a))})),""+n},n.prototype.getNextActiveKey=function(e){var n=this,a=[];t.Children.forEach(this.props.children,(function(n){t.isValidElement(n)&&(n.props.disabled||(e?a.push(n):a.unshift(n)))}));var o=a.length,i=o&&a[0].key;return a.forEach((function(e,t){e.key===n.state.activeKey&&(i=t===o-1?a[0].key:a[t+1].key)})),i},n.prototype.setActiveKey=function(e){e===this.state.activeKey||"activeKey"in this.props||this.setState({activeKey:e})},n.prototype.render=function(){var e,a=this.props,o=a.prefix,i=a.animation,r=a.shape,s=a.size,l=a.extra,c=a.excessMode,m=a.tabPosition,u=a.tabRender,b=a.triggerType,f=a.lazyLoad,v=a.unmountInactiveTabs,g=a.popupProps,E=a.navStyle,T=a.navClassName,k=a.contentStyle,x=a.contentClassName,C=a.className,w=a.onClose,I=a.children,N=a.rtl,_=a.device,M=a.locale,S=a.icons,z=y(a,["prefix","animation","shape","size","extra","excessMode","tabPosition","tabRender","triggerType","lazyLoad","unmountInactiveTabs","popupProps","navStyle","navClassName","contentStyle","contentClassName","className","onClose","children","rtl","device","locale","icons"]),K=this.state.activeKey,D=function(e){var n=[];return t.Children.forEach(e,(function(e,a){t.isValidElement(e)&&n.push(t.cloneElement(e,{key:e.key||a,title:e.props.title||e.props.tab}))})),n}(I),O=-1!==["phone","tablet"].indexOf(_),P=m;N&&["left","right"].indexOf(m)>=0&&(P="left"===m?"right":"left");var B=d(((e={})[o+"tabs"]=!0,e[o+"tabs-"+r]=r,e[o+"tabs-vertical"]="wrapped"===r&&["left","right"].indexOf(m)>=0,e[o+"tabs-scrollable"]=O,e[o+"tabs-"+P]="wrapped"===r,e[""+(o+s)]=s,e),C),H={prefix:o,rtl:N,animation:i,activeKey:K,excessMode:O?"slide":c,extra:l,tabs:D,tabPosition:m,tabRender:u,triggerType:b,popupProps:g,onClose:w,onTriggerEvent:this.handleTriggerEvent,onKeyDown:this.onNavKeyDown,style:E,className:T,locale:M,icons:S},j={prefix:o,activeKey:K,lazyLoad:f,unmountInactiveTabs:v,style:k,className:x},L=[t.createElement(R,p({key:"tab-nav"},H)),t.createElement(W,p({key:"tab-content"},j),D)];return"bottom"===m&&L.reverse(),t.createElement("div",p({dir:N?"rtl":void 0,className:B},h.pickOthers(n.propTypes,z)),L)},n}(t.Component),L.propTypes={prefix:f.string,rtl:f.bool,device:f.oneOf(["tablet","desktop","phone"]),activeKey:f.oneOfType([f.number,f.string]),defaultActiveKey:f.oneOfType([f.number,f.string]),shape:f.oneOf(["pure","wrapped","text","capsule"]),animation:f.bool,excessMode:f.oneOf(["slide","dropdown"]),tabPosition:f.oneOf(["top","bottom","left","right"]),size:f.oneOf(["small","medium"]),triggerType:f.oneOf(["hover","click"]),lazyLoad:f.bool,unmountInactiveTabs:f.bool,navStyle:f.object,navClassName:f.string,contentStyle:f.object,contentClassName:f.string,extra:f.node,disableKeyboard:f.bool,onClick:f.func,onChange:f.func,onClose:f.func,tabRender:f.func,popupProps:f.object,children:f.any,className:f.string,locale:f.object,icons:f.shape({prev:f.oneOfType([f.node,f.string]),next:f.oneOfType([f.node,f.string]),dropdown:f.oneOfType([f.node,f.string])})},L.defaultProps={prefix:"next-",shape:"pure",size:"medium",animation:!0,tabPosition:"top",excessMode:"slide",triggerType:"click",lazyLoad:!0,unmountInactiveTabs:!1,disableKeyboard:!1,onClick:F,onChange:F,onClose:F,locale:g.Tab,icons:{}},A);U.displayName="Tab";var V,$,q=v(U),G=($=V=function(e){function n(){return o(this,n),i(this,e.apply(this,arguments))}return a(n,e),n.prototype.render=function(){var e,n=this.props,a=n.prefix,o=n.active,i=n.lazyLoad,r=n.unmountInactiveTabs,s=n.children;if(this._actived=this._actived||o,i&&!this._actived)return null;if(r&&!o)return null;var l=d(((e={})[a+"tabs-tabpane"]=!0,e[o?"active":"hidden"]=!0,e));return t.createElement("div",{role:"tabpanel","aria-hidden":o?"false":"true",className:l},s)},n}(t.Component),V.propTypes={prefix:f.string,title:f.node,closeable:f.bool,disabled:f.bool,active:f.bool,lazyLoad:f.bool,unmountInactiveTabs:f.bool,children:f.any},V.defaultProps={prefix:"next-",closeable:!1},$);G.displayName="TabItem";var J=v(G);q.Item=J,q.TabPane=E.config(J,{transform:function(e,t){return t("Tab.TabPane","Tab.Item","Tab"),e}});var Q=E.config(q,{transform:function(e,t){if("type"in e){t("type","shape","Tab");var n=e,a=n.type,o=y(n,["type"]);e=p({shape:a},o)}if("resDirection"in e){var i=e,r=i.resDirection,s=y(i,["resDirection"]),l=void 0;"horizontal"===r?(t("resDirection=horizontal","excessMode=slide","Tab"),l="slide"):"vertical"===r&&(t("resDirection=vertical","excessMode=dropdown","Tab"),l="dropdown"),e=p({excessMode:l},s)}if("tabBarExtraContent"in e){t("tabBarExtraContent","extra","Tab");var c=e,m=c.tabBarExtraContent,d=y(c,["tabBarExtraContent"]);e=p({extra:m},d)}return e}});const X=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,null,t.createElement(Q.Item,{title:"Home",key:"1"},"Home content"),t.createElement(Q.Item,{title:"Documentation",key:"2"},"Doc content"),t.createElement(Q.Item,{title:"Help",key:"3"},"Help Content"));return t.createElement(X,null,e)}});const Z=[{tab:"Mail",key:1,closeable:!1},{tab:"Message",key:2,closeable:!0},{tab:"Setting",key:3,closeable:!0},{tab:"Unread",key:4,closeable:!0}];class ee extends t.Component{constructor(e){super(e),this.onClose=e=>{this.remove(e)},this.onChange=e=>{this.setState({activeKey:e})},this.addTabpane=()=>{this.setState((e=>{const{panes:t}=e;return t.push({tab:"new tab",key:Math.random(),closeable:!0}),{panes:t}}))},this.state={panes:Z,activeKey:Z[0].key}}remove(e){let t=this.state.activeKey;const n=[];this.state.panes.forEach((t=>{t.key!=e&&n.push(t)})),e==t&&(t=n[0].key),this.setState({panes:n,activeKey:t})}render(){const e=this.state;return t.createElement("div",null,t.createElement(T,{onClick:this.addTabpane,size:"large",type:"primary"},t.createElement(s,{type:"add"})," New Tab"),t.createElement(Q,{shape:"wrapped",activeKey:e.activeKey,onChange:this.onChange,onClose:this.onClose,className:"custom-tab"},e.panes.map((e=>t.createElement(Q.Item,{title:e.tab,key:e.key,closeable:e.closeable},e.tab," content")))))}}const te=w.div`
  .custom-tab {
    margin-top: 14px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(ee,null);return t.createElement(te,null,e)}});function ae({title:e,desc:n}){return t.createElement("div",{className:"custom-tab-item"},t.createElement("div",{className:"tab-title"},e),t.createElement("div",{className:"tab-desc"},n))}const oe=[{key:"e-checking",title:"Alipay",desc:"The fee to be paid is $15"},{key:"brand-card",title:"Bank Card",desc:"The fee to be paid is $17"}];const ie=w.div`
  .custom-tab-item {
    padding: 10px;
  }

  .tab-title {
    font-size: 20px;
  }
  .tab-desc {
    margin: 10px 0 0 0;
    font-size: 12px;
  }
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=t.createElement(Q,{shape:"wrapped",tabRender:(n,a)=>t.createElement(ae,e({key:n},a))},oe.map((n=>t.createElement(Q.Item,e(e({key:n.key},n),{tabStyle:{height:"60px"}}),n.desc))));return t.createElement(ie,null,n)}});const se=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,null,t.createElement(Q.Item,{title:"Tab 1",disabled:!0,key:"1"},"Tab 1 content"),t.createElement(Q.Item,{title:"Tab 2",key:"2"},"Tab 2 content"),t.createElement(Q.Item,{title:"Tab 3",key:"3"},"Tab 3 content"));return t.createElement(se,null,e)}});class ce extends t.Component{constructor(e){super(e),this.onKeyDown=e=>{const{keyCode:t}=e;t>36&&t<41&&e.stopPropagation()},this.onBlur=e=>{this.setState({editable:!1,tabTitle:e.target.value})},this.onDblClick=()=>{this.setState({editable:!0})},this.state={tabTitle:e.defaultTitle,editable:!1}}componentWillReceiveProps(e){e.defaultTitle!==this.state.tabTitle&&this.setState({tabTitle:e.defaultTitle})}render(){const{tabTitle:e,editable:n}=this.state;return n?t.createElement(k,{defaultValue:e,onKeyDown:this.onKeyDown,onBlur:this.onBlur}):t.createElement("span",{onDoubleClick:this.onDblClick},e)}}const pe=(e,{title:n})=>t.createElement("div",{key:e,className:"editable-tab-wrapper"},t.createElement(ce,{defaultTitle:n}));const me=w.div`
  .editable-tab-wrapper {
    padding: 10px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,{defaultActiveKey:"1",tabRender:pe},t.createElement(Q.Item,{title:"Double Click To Edit Me",key:"1"},"Editable tab"),t.createElement(Q.Item,{title:"Double Click To Edit Me",key:"2"},"Editable tab"));return t.createElement(me,null,e)}});const ue=[{tab:"Todo Tasks",key:0},{tab:"Finished Tasks",key:1},{tab:"Unread Messages",key:2},{tab:"Past Messages",key:3},{tab:"All Messages",key:4}],be={border:"1px solid #DCDEE3",padding:"20px"};const fe=w.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-content {
    padding: 15px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }

  .custom-tab-item {
    margin-right: -1px !important;
  }

  .justify-tabs-tab {
    width: 140px;
    text-align: center;
  }
`;var ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Customize with contentStyle or contentClassName"),t.createElement(Q,{shape:"wrapped",contentStyle:be},ue.map((e=>t.createElement(Q.Item,{title:e.tab,key:e.key},e.tab)))),t.createElement("div",{className:"demo-item-title"},"Setting className and style in Tab.Item"),t.createElement(Q,{shape:"wrapped",navStyle:{background:"#DEE8FF"}},ue.map((e=>t.createElement(Q.Item,{title:e.tab,key:e.key,className:"custom-tab-item",style:{background:"#FFF"}},e.tab)))),t.createElement("div",{className:"demo-item-title"},"Tabs with equal width"),t.createElement(Q,{shape:"capsule"},ue.map((e=>t.createElement(Q.Item,{title:e.tab,key:e.key,className:"justify-tabs-tab"},e.tab)))));return t.createElement(fe,null,e)}});const ve=[{tab:"Home",key:1},{tab:"Documnet",key:2},{tab:"Setting",key:3},{tab:"Help",key:4},{tab:"Admin",key:5},{tab:"More 1",key:6},{tab:"More 2",key:7},{tab:"More 3",key:8},{tab:"More 4",key:9},{tab:"More 5",key:10},{tab:"More 6",key:11},{tab:"More 7",key:12},{tab:"More 8",key:13},{tab:"More 9",key:14},{tab:"More 10",key:15},{tab:"More 11",key:16}];function he(e){console.log(e)}const ge=w.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo",style:{maxWidth:"520px"}},t.createElement("div",{className:"demo-item-title"},"Dropdown mode"),t.createElement(Q,{excessMode:"dropdown"},ve.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab,onClick:he},e.tab," content, content, content")))),t.createElement("div",{className:"demo-item-title"},"Slide mode"),t.createElement(Q,{excessMode:"slide"},ve.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab,onClick:he},e.tab," content, content, content")))));return t.createElement(ge,null,e)}});function Te(e){console.log(e)}const ke=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,{onChange:Te,shape:"wrapped"},t.createElement(Q.Item,{title:"Tab 1",key:"1"},t.createElement(Q,{shape:"wrapped"},t.createElement(Q.Item,{title:"1-1",key:"11"},"1-1"),t.createElement(Q.Item,{title:"1-2",key:"12"},"1-2"),t.createElement(Q.Item,{title:"1-3",key:"13"},"1-3"))),t.createElement(Q.Item,{title:"Tab 2",key:"2"},t.createElement(Q,{shape:"pure"},t.createElement(Q.Item,{title:"2-1",key:"21"},"2-1"),t.createElement(Q.Item,{title:"2-2",key:"22"},"2-2"),t.createElement(Q.Item,{title:"3-3",key:"23"},"2-3"))),t.createElement(Q.Item,{title:"Tab 3",key:"3"},t.createElement(Q,{shape:"capsule"},t.createElement(Q.Item,{title:"3-1",key:"31"},"3-1"),t.createElement(Q.Item,{title:"3-2",key:"32"},"3-2"),t.createElement(Q.Item,{title:"3-3",key:"33"},"3-3"))),t.createElement(Q.Item,{title:"Tab 4",key:"4"},t.createElement(Q,{shape:"text"},t.createElement(Q.Item,{title:"4-1",key:"41"},"4-1"),t.createElement(Q.Item,{title:"4-2",key:"42"},"4-2"),t.createElement(Q.Item,{title:"4-3",key:"43"},"4-3"))));return t.createElement(ke,null,e)}});const Ce=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];const we=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",null,"Render all tab contents"),t.createElement(Q,{lazyLoad:!1},Ce.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("div",null,"Unmount inactive tabs"),t.createElement(Q,{unmountInactiveTabs:!0},Ce.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))));return t.createElement(we,null,e)}});function Ne(e){console.log(e)}const _e=t.createElement(T,{type:"primary",onClick:function(){console.log("hello world")}},"Hello world");const Me=w.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-tab-content {
    min-height: 150px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Extra in Horizontal"),t.createElement(Q,{shape:"wrapped",onChange:Ne,extra:_e},t.createElement(Q.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(Q.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(Q.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")),t.createElement("div",{className:"demo-item-title"},"Extra in Vertical"),t.createElement(Q,{shape:"wrapped",tabPosition:"left",onChange:Ne,extra:_e,contentClassName:"custom-tab-content"},t.createElement(Q.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(Q.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(Q.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")));return t.createElement(Me,null,e)}});const ze=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Q,{disableKeyboard:!0},t.createElement(Q.Item,{title:"Home",key:"1"},"Home content"),t.createElement(Q.Item,{title:"Documentation",key:"2"},"Doc content"),t.createElement(Q.Item,{title:"Help",key:"3"},"Help Content"));return t.createElement(ze,null,e)}});const De=[{tab:"Home",key:"home",content:"This is home page"},{tab:"Document",key:"doc",content:"This is document page"},{tab:"API",key:"api",content:"This is api page"}];const Oe=w.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(Q,{size:"small"},De.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(Q,{size:"small",shape:"wrapped"},De.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(Q,{size:"small",shape:"text"},De.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))),t.createElement("br",null),t.createElement(Q,{size:"small",shape:"capsule"},De.map((e=>t.createElement(Q.TabPane,{key:e.key,title:e.tab},e.content)))));return t.createElement(Oe,null,e)}});const Be=[{tab:"Home",key:0,content:"This is home page"},{tab:"Document",key:1,content:"This is document page"},{tab:"API",key:2,content:"This is api page"}];function He(e){console.log("change",e)}function je(e){console.log("click",e)}function Re(e,t){console.log("enter",t.target,e)}function Le(e,t){console.log("leave",t.target,e)}const Ae=w.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},t.createElement("div",{className:"demo-item-title"},"Click to trigger change"),t.createElement(Q,{triggerType:"click",onChange:He},Be.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab,onClick:je},e.content)))),t.createElement("div",{className:"demo-item-title"},"Hover to trigger change"),t.createElement(Q,{triggerType:"hover",onChange:He},Be.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab,onClick:je,onMouseEnter:Re,onMouseLeave:Le},e.content)))));return t.createElement(Ae,null,e)}});class Fe extends t.Component{constructor(){super(...arguments),this.state={position:"top"},this.changePosition=e=>{this.setState({position:e})}}render(){return t.createElement("div",null,t.createElement(x,{onChange:this.changePosition,placeholder:"Choose Positon of Tab"},["top","bottom","left","right"].map((e=>t.createElement(x.Option,{value:e,key:e},e)))),t.createElement("br",null),t.createElement("br",null),t.createElement(Q,{tabPosition:this.state.position,shape:"wrapped",contentClassName:"custom-tab-content"},t.createElement(Q.Item,{title:"Tab 1",key:"1"},"Tab 1 Content"),t.createElement(Q.Item,{title:"Tab 2",key:"2"},"Tab 2 Content"),t.createElement(Q.Item,{title:"Tab 3",key:"3"},"Tab 3 Content")))}}const Ue=w.div`
  .custom-tab-content {
    min-height: 50px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(Fe,null);return t.createElement(Ue,null,e)}});function $e(e){console.log(e)}const qe=[{tab:"Home",key:"home",content:"This is home page"},{tab:"Document",key:"doc",content:"This is document page"},{tab:"API",key:"api",content:"This is api page"},{tab:"Repo",key:"repo",content:"This ia repo link"}],Ge=["pure","wrapped","text","capsule"];const Je=w.div`
  .fusion-demo-item {
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`;var Qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"fusion-demo"},Ge.map((e=>t.createElement("div",{key:e,className:"fusion-demo-item"},t.createElement(Q,{shape:e,onChange:$e},qe.map((e=>t.createElement(Q.Item,{title:e.tab,key:e.key},e.content))))))));return t.createElement(Je,null,e)}});const{Row:Xe,Col:Ye}=C,Ze=function(e){const t=[];for(let n=1;n<15;n++)t.push({tab:`tab ${n}`,key:n,content:`tab ${n} content`});return t}();const et=w.div`
  .custom-row {
    border: 1px solid #ccc;
  }

  .custom-col-sidebar {
    border-right: 1px solid #ccc;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }

  .custom-col-content {
    overflow: hidden;
  }
`;var tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"custom-wrapper"},t.createElement(Xe,{className:"custom-row"},t.createElement(Ye,{fixedSpan:"12",className:"custom-col-sidebar"},"Sidebar"),t.createElement(Ye,{className:"custom-col-content"},t.createElement(Q,null,Ze.map((e=>t.createElement(Q.Item,{key:e.key,title:e.tab},e.content)))))));return t.createElement(et,null,e)}});const nt={};nt._basic=Y,nt._closable=ne,nt["_custom-tab"]=re,nt._disabled=le,nt["_editable-tab"]=de,nt["_custom-style"]=ye,nt["_excess-mode"]=Ee,nt._nested=xe,nt["_lazy-load"]=Ie,nt._extra=Se,nt["_disable-keyboard"]=Ke,nt._size=Pe,nt["_trigger-type"]=We,nt._position=Ve,nt._shape=Qe,nt["_tab-in-grid"]=tt;export default nt;