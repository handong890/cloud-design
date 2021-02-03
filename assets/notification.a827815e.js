import{f as t,_ as e,c as n,d as o,w as i,ae as a,r as c,A as r,a0 as l,p as s,b as f,C as u,B as m,a7 as p}from"./index.54491fbe.js";import{q as d}from"./styled-components.browser.esm.6105e56a.js";var h,y,v={offset:[30,30],maxCount:0,size:"large",placement:"tr",duration:4500,getContainer:function(){return document.body}},g=function(t){switch(t){case"tl":case"bl":return"slideInLeft";case"tr":case"br":return"slideInRight";default:return null}},b=(y=h=function(s){function f(e){n(this,f);var c=o(this,s.call(this,e));return c.close=function(t){var e=c.state.notifications,n=e.findIndex((function(e){return e.key===t}));if(-1!==n){var o=e[n],i=o.onClose,a=o.timer;e.splice(n,1);var r=c.timers.findIndex((function(t){return t===a}));-1!==r&&c.timers.splice(r,1),a&&clearTimeout(a),c.setState({notifications:e}),i&&i()}},c.open=function(e){var n=e.key,o=e.duration,r=i(e,["key","duration"]),l=[].concat(c.state.notifications);n||(n=a("notification-"));var s=l.findIndex((function(t){return t.key===n}));if(-1!==s)l[s]=t({},l[s],r);else{var f=void 0;o>0&&(f=setTimeout((function(){c.close(n)}),o),c.timers.push(f)),l.push(t({},r,{key:n,timer:f}))}if(v.maxCount>0&&v.maxCount<l.length)for(;l.length>v.maxCount;){var u=l[0].key;c.close(u),l.splice(0,1)}return c.setState({notifications:l}),n},c.state={notifications:[]},c.timers=[],c}return e(f,s),f.prototype.componentWillUnmount=function(){this.timers.forEach((function(t){t&&clearTimeout(t)}))},f.prototype.render=function(){var t,e=this.props.prefix,n=this.state.notifications;return c.createElement("div",{className:e+"notification",style:(t={},t[0===v.placement.indexOf("b")?"bottom":"top"]=v.offset[1],t[-1!==v.placement.indexOf("l")?"left":"right"]=v.offset[0],t)},c.createElement(r,{animationAppear:!0,animation:{enter:g(v.placement),leave:e+"notification-fade-leave"},singleMode:!1},n.map((function(t){var e=t.key,n=t.type,o=t.title,i=t.content,a=t.icon,r=t.onClick,s=t.style,f=t.className;return c.createElement(l,{key:e,shape:"toast",type:n,title:o,iconType:a,closeable:!0,animation:!1,size:v.size,visible:!0,style:s,className:f,onClick:r,onClose:function(){return N(e)}},i)}))))},f}(c.Component),h.propTypes={prefix:s.string},h.defaultProps={prefix:"next-"},y);b.displayName="Notification";var _=f.config(b,{exportNames:["open","close"]}),C=void 0,E=!1,T=[];function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.title||e.content){var n=e.duration||0===e.duration?e.duration:v.duration;if(!C){if(e.key||(e.key=a("notification-")),T.push(t({},e,{duration:n})),!E){E=!0;var o=document.createElement("div");if(v.getContainer){var i=v.getContainer();i.appendChild(o)}else document.body.appendChild(o);u.render(c.createElement(f,f.getContext(),c.createElement(_,{ref:function(t){C=t}})),o,(function(){T.forEach((function(t){return C.open(t)})),T=[],E=!1}))}return e.key}var r=C.open(t({},e,{duration:n}));return r}}function N(t){if(C)C.close(t);else{var e=T.findIndex((function(e){return e.key===t}));T.splice(e,1)}}var x={};["success","error","warning","notice","help"].forEach((function(e){x[e]=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return k(t({},n,{type:e}))}}));var w=t({config:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.apply(void 0,[v].concat(n))},open:k,close:N,destroy:function(){if(C){var t=u.findDOMNode(C).parentNode;t&&(u.unmountComponentAtNode(t),t.parentNode.removeChild(t))}}},x);const S=()=>{w.open({title:"Notification Title",content:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:()=>{console.log("Notification Clicked!")}})};const O=d.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement(m,{type:"primary",onClick:S},"Open Notification");return c.createElement(O,null,t)}});const z=()=>{w.open({title:"Notification Title",content:"I will never close automatically. I will be close automatically. I will never close automatically.",icon:"smile"})};const j=d.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement("div",null,c.createElement(m,{type:"primary",onClick:z,style:{marginLeft:20}},"Open Notification"));return c.createElement(j,null,t)}});const L=t=>{w.open({title:"Notification Title",content:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",type:t})};const A=d.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement("div",{className:"button-row"},c.createElement(m,{onClick:()=>L("success")},"success"),c.createElement(m,{onClick:()=>L("warning")},"warning"),c.createElement(m,{onClick:()=>L("error")},"error"),c.createElement(m,{onClick:()=>L("notice")},"notice"),c.createElement(m,{onClick:()=>L("help")},"help"));return c.createElement(A,null,t)}});const R=()=>{w.open({key:"updatable",title:"Notification Title",content:"description."}),setTimeout((()=>{w.open({key:"updatable",title:"New Title",content:"New description."})}),1e3)};const q=d.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement(m,{type:"primary",onClick:R},"Open Notification");return c.createElement(q,null,t)}});const P=t=>{w.config({placement:t}),w.open({title:"Notification Title",content:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};const U=d.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement("div",{className:"button-row"},c.createElement(m,{onClick:()=>P("tl")},"Top Left"),c.createElement(m,{onClick:()=>P("tr")},"Top Right"),c.createElement(m,{onClick:()=>P("bl")},"Bottom Left"),c.createElement(m,{onClick:()=>P("br")},"Bottom Right"));return c.createElement(U,null,t)}});let W=4500;const F=()=>{const t={title:"Notification Title",content:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:W};w.open(t)};const G=d.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement("div",null,c.createElement(p,{defaultValue:W,onChange:t=>W=t||0}),c.createElement(m,{type:"primary",onClick:F,style:{marginLeft:20}},"Open Notification"));return c.createElement(G,null,t)}});const J=()=>{w.open({title:"Notification Title",content:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{width:600,marginLeft:-225}})};const K=d.div``;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=c.createElement(m,{type:"primary",onClick:J},"Open Notification");return c.createElement(K,null,t)}});const X={};X._basic=I,X._icon=M,X._level=B,X._update=D,X._position=V,X._duration=H,X._style=Q;export default X;