import{r as e,a7 as t,R as n,B as l}from"./index.54491fbe.js";import{q as a}from"./styled-components.browser.esm.6105e56a.js";function r(e,t){console.log(e,t.type,t.triggerType)}const o=a.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{max:3,onChange:r}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,max:3,type:"inline",onChange:r}));return e.createElement(o,null,n)}});class u extends e.Component{constructor(e){super(e),this.state={value:0,tip:""},this.onChange=this.onChange.bind(this)}onChange(e,t){let n="";n=e>=0?e:"negative "+-1*e,this.setState({value:e,tip:`${n}`})}render(){const{value:n,tip:l}=this.state;return e.createElement("div",null,e.createElement("span",{id:"a11y-number-picker","aria-live":"assertive","aria-label":l}),e.createElement(t,{type:"inline",value:n,onChange:this.onChange,upBtnProps:{"aria-label":"\b\bincreasing button"},downBtnProps:{"aria-label":"decreasing button"},"aria-labelledby":"a11y-number-picker"}))}}const i=a.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(i,null,t)}});const m=e=>Intl.NumberFormat("en-US").format(e);const d=a.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{format:m,defaultValue:5e3}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{label:"p:",format:e=>`${e}%`,defaultValue:85}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{innerAfter:"%"}));return e.createElement(d,null,n)}});const g=a.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,disabled:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,type:"inline",disabled:!0}));return e.createElement(g,null,n)}});function f(e){console.log("changed",e)}function p(e){console.log(e)}const _=a.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:-3.99,onChange:f,onCorrect:p,step:2,precision:2}));return e.createElement(_,null,n)}});function h(e,t){console.log("onChange",e,t)}function S(e){console.log("onCorrect",e)}const y=a.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{type:"inline",step:3,min:6,max:30,defaultValue:6,onChange:h,onCorrect:S}));return e.createElement(y,null,n)}});class z extends e.Component{constructor(){super(...arguments),this.state={device:"desktop"},this.handleDeviceChange=e=>{this.setState({device:e})}}render(){return e.createElement("div",null,e.createElement(n.Group,{shape:"button",value:this.state.device,onChange:this.handleDeviceChange},e.createElement(n,{value:"desktop"},"desktop"),e.createElement(n,{value:"phone"},"phone")),e.createElement("hr",null),e.createElement(t,{device:this.state.device}))}}const T=a.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(T,null,t)}});class j extends e.Component{constructor(e){super(e),this.state={editable:!1,value:0}}toogle(){this.setState({editable:!this.state.editable})}onChange(e){console.log("changed",e),this.setState({value:e})}render(){return e.createElement("div",null,e.createElement(t,{onChange:this.onChange.bind(this),value:this.state.value,editable:this.state.editable}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{onClick:this.toogle.bind(this)},"Toggle to ",this.state.editable?"uneditable":"editable"))}}const M=a.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(M,null,t)}});const x=a.div`
  .next-number-picker {
    margin-right: 10px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,size:"small"}),e.createElement(t,{defaultValue:0}),e.createElement(t,{defaultValue:0,size:"large"}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,size:"small",type:"inline"}),e.createElement(t,{defaultValue:0,type:"inline"}),e.createElement(t,{defaultValue:0,size:"large",type:"inline"}));return e.createElement(x,null,n)}});function w(e){console.log("changed",e)}function B(e){console.log(e)}const D=a.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,onChange:w,onCorrect:B,step:.01}));return e.createElement(D,null,n)}});const $=a.div``;var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{alwaysShowTrigger:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{hasTrigger:!1}));return e.createElement($,null,n)}});const A={};A._basic=c,A._accessibility=s,A._format=b,A._disabled=E,A._precision=v,A._limit=C,A._mobile=V,A._editable=O,A._size=k,A._step=P,A._trigger=q;export default A;