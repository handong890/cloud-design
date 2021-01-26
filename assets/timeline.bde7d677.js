import{A as e,_ as t,c as n,d as i,y as o,r as a,b as l,f as r,j as s,o as m,v as c,i as u,p as d,S as g}from"./index.4642f55c.js";import{q as p}from"./styled-components.browser.esm.1feaecc0.js";import{T as f}from"./timeline.d7d620dc.js";var h,E,y=e.Expand,b=(E=h=function(e){function u(){var t,o;n(this,u);for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];return t=o=i(this,e.call.apply(e,[this].concat(l))),o.beforeEnter=function(){o["timeline-item"].style["min-height"]="auto"},o.beforeLeave=function(){o["timeline-item"].style["min-height"]="48px"},i(o,t)}return t(u,e),u.prototype.toggleFold=function(e){this.props.toggleFold(e)},u.prototype.render=function(){var e,t,n,i,d=this,g=this.props,p=g.prefix,f=g.className,h=g.state,E=g.icon,b=g.dot,v=g.time,_=g.title,x=g.timeLeft,S=g.content,z=g.index,T=g.total,C=g.folderIndex,N=g.foldShow,j=g.locale,D=g.animation,H=o(g,["prefix","className","state","icon","dot","time","title","timeLeft","content","index","total","folderIndex","foldShow","locale","animation"]),O=b||(E?a.createElement("span",{className:p+"timeline-item-icon"},a.createElement(l,{type:E,size:"xs"})):a.createElement("span",{className:p+"timeline-item-dot"})),A=r(((e={})[p+"timeline-item"]=!0,e[p+"timeline-item-first"]=0===z,e[p+"timeline-item-last"]=z===T-1,e[p+"timeline-item-"+h]=h,e[p+"timeline-item-folded"]=C,e[p+"timeline-item-unfolded"]=N,e[p+"timeline-item-has-left-content"]=x,e[f]=f,e)),P=r(((t={})[p+"timeline-item-folder"]=!0,t[p+"timeline-item-has-left-content"]=x,t)),I=r(((n={})[p+"timeline-item-node"]=!0,n[p+"timeline-item-node-custom"]=b,n)),w=r(((i={})[p+"timeline-item-dot-tail"]=!0,i[p+"timeline-item-dot-tail-solid"]=N,i[p+"timeline-hide"]=z===T-1&&N,i)),L={text:!0,size:"small",type:"primary",onClick:this.toggleFold.bind(this,C,T)},k=C&&N||!C?a.createElement("div",s({},m.pickOthers(u.propTypes,H),{className:A,ref:function(e){d["timeline-item"]=e}}),a.createElement("div",{className:p+"timeline-item-left-content"},a.createElement("p",{className:p+"timeline-item-body"},x)),a.createElement("div",{className:p+"timeline-item-timeline"},a.createElement("div",{className:p+"timeline-item-tail"},a.createElement("i",null)),a.createElement("div",{className:I},O)),a.createElement("div",{className:p+"timeline-item-content"},a.createElement("div",{className:p+"timeline-item-title"},_),a.createElement("div",{className:p+"timeline-item-body"},S),a.createElement("div",{className:p+"timeline-item-time"},v))):null;return a.createElement("li",{tabIndex:"0"},D&&C?a.createElement(y,{animationAppear:!1,beforeEnter:this.beforeEnter,beforeLeave:this.beforeEnter,afterEnter:this.beforeLeave},k):k,C===z?a.createElement("div",{className:P},a.createElement("div",{className:w}),N?a.createElement(c,L,j.fold,a.createElement(l,{type:"arrow-up"})):a.createElement(c,L,j.expand,a.createElement(l,{type:"arrow-down"}))):null)},u}(a.Component),h.propTypes=s({},u.propTypes,{prefix:d.string,index:d.number,total:d.number,folderIndex:d.number,foldShow:d.bool,state:d.oneOf(["done","process","error","success"]),icon:d.string,dot:d.node,time:d.node,title:d.node,timeLeft:d.node,content:d.node,toggleFold:d.func,className:d.string,locale:d.object,animation:d.bool}),h.defaultProps={prefix:"next-",state:"done",toggleFold:function(){},animation:!0},E);b.displayName="TimelineItem",f.Item=b;const v=f.Item;class _ extends a.Component{constructor(e){super(e),this.onTimelineAnimation=e=>{this.setState({timelineAnimation:e})},this.state={timelineAnimation:!0}}render(){return a.createElement("div",null,a.createElement("div",{className:"custom-step-option"},a.createElement(g,{placeholder:"Whether to start animation",onChange:this.onTimelineAnimation,className:"custom-select",defaultValue:!0},[!0,!1].map(((e,t)=>a.createElement(g.Option,{value:e,key:t},e?"Animation on":"Animation off"))))),a.createElement(f,{animation:this.state.timelineAnimation,fold:[{foldArea:[1,2],foldShow:!1},{foldArea:[5],foldShow:!1}]},a.createElement(v,{title:"Sign",content:"[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again",time:"2016-06-10 10:30:00",state:"process"}),a.createElement(v,{title:"Delivery",content:"[Hangzhou]Express has reached Hangzhou Hangzhou Binjiang Company",time:"2016-06-10 09:30:00"}),a.createElement(v,{title:"Delivery",content:"[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you",time:"2016-06-10 09:03:00"}),a.createElement(v,{title:"Transport",content:"[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued",time:"2016-06-10 06:10:00"}),a.createElement(v,{title:"Transport",content:"[Dongguan City] Guangdong Dongguan Transshipment Center has been issued",time:"2016-06-09 18:00:00"}),a.createElement(v,{title:"Processing",content:"[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province",time:"2016-06-09 16:12:00"}),a.createElement(v,{title:"Processing",content:"[Dongguan City] The merchant is informing the express company to insert",time:"2016-06-09 14:00:00"}),a.createElement(v,{title:"Processing",content:"[Dongguan City] Your order to be picked",time:"2016-06-09 10:12:19"}),a.createElement(v,{title:"Processing",content:"[Dongguan] Your order starts processing",time:"2016-06-09 10:01:09"})))}}const x=p.div`
  .custom-step-option {
    margin-bottom: 20px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(_,null);return a.createElement(x,null,e)}});const z=f.Item;const T=p.div`
  .custom-node {
    color: #1dc11d;
    position: relative;
    left: 3px;
    font-size: 14px;
  }
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(f,null,a.createElement(z,{title:"Receipt",state:"process",icon:"smile",time:"2017-10-21"}),a.createElement(z,{title:"Ship",dot:a.createElement("span",{className:"custom-node"}," 😂 "),state:"success",time:"2017-10-22"}),a.createElement(z,{title:"Order",dot:a.createElement(l,{type:"success",size:"xl",style:{color:"#1DC11D"}}),content:"Congratulations, successful orders!",time:"2017-10-23"}));return a.createElement(T,null,e)}});const N=f.Item;const j=p.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(f,null,a.createElement(N,{title:"Sign",content:"[Hangzhou] has received the sign, the signer is Alibaba Post Office, thank you for using STO, looking forward to serving you again",time:"2016-06-10 10:30:00",state:"process"}),a.createElement(N,{title:"Delivery",content:"[Hangzhou]Express has reached Hangzhou Hangzhou Binjiang Company",time:"2016-06-10 09:30:00"}),a.createElement(N,{title:"Delivery",content:"[Hangzhou] Zhejiang Hangzhou Binjiang Company dispatches members for you",time:"2016-06-10 09:03:00"}),a.createElement(N,{title:"Transport",content:"[Hangzhou] Zhejiang Hangzhou Transshipment Center has been issued",time:"2016-06-10 06:10:00"}),a.createElement(N,{title:"Transport",content:"[Dongguan City] Guangdong Dongguan Transshipment Center has been issued",time:"2016-06-09 18:00:00"}),a.createElement(N,{title:"Processing",content:"[Dongguan City] Shentong Express Guangdong Fenggang Branch of Guangdong Province",time:"2016-06-09 16:12:00"}),a.createElement(N,{title:"Processing",content:"[Dongguan City] The merchant is informing the express company to insert",time:"2016-06-09 14:00:00"}),a.createElement(N,{title:"Processing",content:"[Dongguan City] Your order to be picked",time:"2016-06-09 10:12:19"}),a.createElement(N,{title:"Processing",content:"[Dongguan] Your order starts processing",time:"2016-06-09 10:01:09",icon:"atm"}));return a.createElement(j,null,e)}});const H=f.Item;const O=p.div``;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(f,null,a.createElement(H,{title:"Receipt",state:"process"}),a.createElement(H,{title:"Ship"}),a.createElement(H,{title:"Order"}));return a.createElement(O,null,e)}});const P=f.Item;const I=p.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(f,null,a.createElement(P,{title:"Cloudy",time:"2016-06-10 10:30:00",state:"process"}),a.createElement(P,{title:"Sunny",time:"2016-06-11",state:"success"}),a.createElement(P,{title:"Rainy",time:"2016-06-09",state:"error"}));return a.createElement(I,null,e)}});const L=f.Item;const k=p.div``;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(f,null,a.createElement(L,{title:"Sign",state:"process",timeLeft:"2016-10-03"}),a.createElement(L,{title:"Ship",timeLeft:"2016-10-02"}),a.createElement(L,{title:"Order",timeLeft:"2016-10-01"}));return a.createElement(k,null,e)}});const B={};B._fold=S,B._custom=C,B._content=D,B._basic=A,B._state=w,B._timeLeft=F;export default B;