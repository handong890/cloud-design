import{am as e,r as l}from"./index.4642f55c.js";import{q as t}from"./styled-components.browser.esm.1feaecc0.js";const a=e.Node;class n extends l.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return l.createElement("div",null,l.createElement("span",{id:"a11y-tree-select"},"TreeSelect: "),l.createElement(e,{treeDefaultExpandAll:!0,"aria-labelledby":"a11y-tree-select",onChange:this.handleChange,style:{width:200}},l.createElement(a,{key:"1",value:"1",label:"Component"},l.createElement(a,{key:"2",value:"2",label:"Form"},l.createElement(a,{key:"4",value:"4",label:"Input"}),l.createElement(a,{key:"5",value:"5",label:"Select",disabled:!0})),l.createElement(a,{key:"3",value:"3",label:"Display"},l.createElement(a,{key:"6",value:"6",label:"Table"})))))}}const r=t.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(n,null);return l.createElement(r,null,e)}});const c=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5"}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class s extends l.Component{constructor(e){super(e),this.state={value:["4","6"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l),this.setState({value:e})}render(){return l.createElement(e,{treeDefaultExpandAll:!0,treeCheckable:!0,dataSource:c,value:this.state.value,onChange:this.handleChange,style:{width:200}})}}const u=t.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(s,null);return l.createElement(u,null,e)}});const d=e.Node;class i extends l.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return l.createElement(e,{treeDefaultExpandAll:!0,onChange:this.handleChange,style:{width:200}},l.createElement(d,{key:"1",value:"1",label:"Component"},l.createElement(d,{key:"2",value:"2",label:"Form"},l.createElement(d,{key:"4",value:"4",label:"Input"}),l.createElement(d,{key:"5",value:"5",label:"Select",disabled:!0})),l.createElement(d,{key:"3",value:"3",label:"Display"},l.createElement(d,{key:"6",value:"6",label:"Table"}))))}}const b=t.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(i,null);return l.createElement(b,null,e)}});const v=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5"}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class p extends l.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return l.createElement(e,{treeDefaultExpandAll:!0,treeCheckable:!0,dataSource:v,onChange:this.handleChange,style:{width:200}})}}const g=t.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(p,null);return l.createElement(g,null,e)}});const E=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5",disabled:!0}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class y extends l.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return l.createElement(e,{treeDefaultExpandAll:!0,dataSource:E,onChange:this.handleChange,style:{width:200}})}}const S=t.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(y,null);return l.createElement(S,null,e)}});const f=[{label:"浙江",value:"浙江",children:[{label:"绍兴",value:"绍兴"}]}];class D extends l.Component{constructor(e){super(e),this.state={value:["浙江"],treeData:f},this.handleSearch=this.handleSearch.bind(this)}handleSearch(e,l){clearTimeout(this.timeId),e?this.timeId=setTimeout((()=>{this.setState({treeData:[{label:e,value:e}]})}),500):this.setState({treeData:f})}render(){return l.createElement(e,{treeDefaultExpandAll:!0,showSearch:!0,onSearch:this.handleSearch,dataSource:this.state.treeData,style:{width:200}})}}const x=t.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(D,null);return l.createElement(x,null,e)}});const k=[{label:"Component",value:"1",selectable:!1,children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5",disabled:!0}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class w extends l.Component{constructor(e){super(e),this.state={value:["4","6"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return l.createElement(e,{treeDefaultExpandAll:!0,showSearch:!0,dataSource:k,onChange:this.handleChange,style:{width:200}})}}const j=t.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(w,null);return l.createElement(j,null,e)}});const z={};z._accessibility=o,z._control=h,z._basic=m,z._check=C,z._data=_,z["_pro-search"]=T,z._search=I;export default z;