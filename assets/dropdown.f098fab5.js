import{r as e,F as t,a1 as l,B as n}from"./index.4642f55c.js";import{q as r}from"./styled-components.browser.esm.1feaecc0.js";const o=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const i=r.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{trigger:e.createElement("a",null,"Click me"),triggerType:"click"},o);return e.createElement(i,null,t)}});const c=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));class s extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisible=()=>{this.setState({visible:!this.state.visible})},this.onVisibleChange=e=>{this.setState({visible:e})}}render(){return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement(n,{onClick:this.toggleVisible,ref:"button"},"Toggle Overlay")),e.createElement(l,{trigger:e.createElement("span",null,"Hello dropdown"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange,safeNode:()=>this.refs.button},c))}}const m=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(m,null,t)}});const g=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const p=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{trigger:e.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},g));return e.createElement(p,null,t)}});const d={};d["_trigger-type"]=a,d._controlled=u,d._basic=E;export default d;