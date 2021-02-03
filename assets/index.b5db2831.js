import{i as e,v as t,u as i,_ as n,c as a,d as o,e as s,r,f as p,w as l,o as u,N as d,l as c,b as m,p as f,y as h}from"./index.54491fbe.js";import{m as g}from"./moment.06e24de2.js";import{b as v,T as b,d as C,a as S}from"./index.b35febee.js";var T,y,P,V=t.Popup,N=i.noop,k=h.TimePicker,w=(y=T=function(e){function t(i,n){a(this,t);var s=o(this,e.call(this,i,n));P.call(s);var r=v(i.value||i.defaultValue,i.format);return s.inputAsString="string"==typeof(i.value||i.defaultValue),s.state={value:r,inputStr:"",inputing:!1,visible:i.visible||i.defaultVisible},s}return n(t,e),t.getDerivedStateFromProps=function(e){var t={};return"value"in e&&(t.value=v(e.value,e.format)),"visible"in e&&(t.visible=e.visible),t},t.prototype.onValueChange=function(e){var t=this.inputAsString&&e?e.format(this.props.format):e;this.props.onChange(t)},t.prototype.renderPreview=function(e){var t=this.props,i=t.prefix,n=t.format,a=t.className,o=t.renderPreview,l=this.state.value,u=s(a,i+"form-preview"),d=l?l.format(n):"";return"function"==typeof o?r.createElement("div",p({},e,{className:u}),o(l,this.props)):r.createElement("p",p({},e,{className:u}),d)},t.prototype.render=function(){var e,i,n=this.props,a=n.prefix,o=n.label,m=n.state,f=n.placeholder,h=n.size,g=n.format,v=n.hasClear,C=n.hourStep,S=n.minuteStep,T=n.secondStep,y=n.disabledHours,P=n.disabledMinutes,N=n.disabledSeconds,k=n.renderTimeMenuItems,w=n.inputProps,O=n.popupAlign,x=n.popupTriggerType,E=n.popupContainer,I=n.popupStyle,M=n.popupClassName,H=n.popupProps,j=n.popupComponent,A=n.popupContent,z=n.followTrigger,B=n.disabled,K=n.className,D=n.locale,F=n.rtl,_=n.isPreview,q=l(n,["prefix","label","state","placeholder","size","format","hasClear","hourStep","minuteStep","secondStep","disabledHours","disabledMinutes","disabledSeconds","renderTimeMenuItems","inputProps","popupAlign","popupTriggerType","popupContainer","popupStyle","popupClassName","popupProps","popupComponent","popupContent","followTrigger","disabled","className","locale","rtl","isPreview"]),G=this.state,J=G.value,L=G.inputStr,Q=G.inputing,R=G.visible,U=s(((e={})[a+"time-picker-trigger"]=!0,e));if(F&&(q.dir="rtl"),_)return this.renderPreview(u.pickOthers(q,t.PropTypes));var W=Q?L:J&&J.format(g)||"",X=p({},w,{size:h,disabled:B,value:W,hasClear:J&&v,onChange:this.onInputChange,onBlur:this.onInputBlur,onPressEnter:this.onInputBlur,onKeyDown:this.onKeyown,hint:r.createElement(d,{type:"clock",className:a+"time-picker-symbol-clock-icon"})}),Y=r.createElement("div",{className:U},r.createElement(c,p({},X,{label:o,state:m,placeholder:f||D.placeholder,className:a+"time-picker-input"}))),Z={prefix:a,locale:D,value:J,disabled:B,showHour:g.indexOf("H")>-1,showSecond:g.indexOf("s")>-1,showMinute:g.indexOf("m")>-1,hourStep:C,minuteStep:S,secondStep:T,disabledHours:y,disabledMinutes:P,disabledSeconds:N,renderTimeMenuItems:k,onSelect:this.onTimePanelSelect},$=s(((i={})[a+"time-picker"]=!0,i[a+"time-picker-"+h]=h,i[a+"disabled"]=B,i),K),ee=j||V;return r.createElement("div",p({},u.pickOthers(t.propTypes,q),{className:$}),r.createElement(ee,p({autoFocus:!0,align:O},H,{followTrigger:z,visible:R,onVisibleChange:this.onVisibleChange,trigger:Y,container:E,disabled:B,triggerType:x,style:I,className:M}),A||r.createElement("div",{dir:q.dir,className:a+"time-picker-body"},r.createElement("div",{className:a+"time-picker-panel-header"},r.createElement(c,p({},X,{placeholder:g,className:a+"time-picker-panel-input"}))),r.createElement(b,Z))))},t}(r.Component),T.propTypes=p({},m.propTypes,{prefix:f.string,rtl:f.bool,label:f.node,state:f.oneOf(["error","success"]),placeholder:f.string,value:C,defaultValue:C,size:f.oneOf(["small","medium","large"]),hasClear:f.bool,format:f.string,hourStep:f.number,minuteStep:f.number,secondStep:f.number,disabledHours:f.func,disabledMinutes:f.func,disabledSeconds:f.func,renderTimeMenuItems:f.func,visible:f.bool,defaultVisible:f.bool,popupContainer:f.any,popupAlign:f.string,popupTriggerType:f.oneOf(["click","hover"]),onVisibleChange:f.func,popupStyle:f.object,popupClassName:f.string,popupProps:f.object,followTrigger:f.bool,disabled:f.bool,isPreview:f.bool,renderPreview:f.func,onChange:f.func,className:f.string,name:f.string,inputProps:f.object,popupComponent:f.elementType,popupContent:f.node}),T.defaultProps={prefix:"next-",rtl:!1,locale:k,size:"medium",format:"HH:mm:ss",hasClear:!0,disabled:!1,popupAlign:"tl tl",popupTriggerType:"click",onChange:N,onVisibleChange:N},P=function(){var e=this;this.onClearValue=function(){e.setState({value:null}),e.state.value&&e.onValueChange(null)},this.onInputChange=function(t,i,n){"value"in e.props?"clear"===n&&(i.stopPropagation(),e.onValueChange(null)):("clear"!==n&&t||(i.stopPropagation(),e.onClearValue()),e.setState({inputStr:t,inputing:!0}))},this.onInputBlur=function(){var t=e.state.inputStr;if(t){var i=e.props.format,n=g(t,i,!0);n.isValid()&&(e.setState({value:n,inputStr:""}),e.onValueChange(n)),e.setState({inputing:!1})}},this.onKeyown=function(t){var i=e.state,n=i.value,a=i.inputStr,o=e.props,s=o.format,r=o.hourStep,p=void 0===r?1:r,l=o.minuteStep,u=void 0===l?1:l,d=o.secondStep,c=void 0===d?1:d,m=o.disabledMinutes,f="second";o.disabledSeconds&&(f=m?"hour":"minute");var h=S(t,{format:s,timeInputStr:a,steps:{hour:p,minute:u,second:c},value:n},f);h&&e.onInputChange(h)},this.onTimePanelSelect=function(t){"value"in e.props||e.setState({value:t,inputing:!1}),e.state.value&&t.valueOf()===e.state.value.valueOf()||e.onValueChange(t)},this.onVisibleChange=function(t,i){"visible"in e.props||e.setState({visible:t}),e.props.onVisibleChange(t,i)}},y);w.displayName="TimePicker";var O=e(w),x=m.config(O,{transform:function(e,t){if("defaultOpen"in e){t("defaultOpen","defaultVisible","TimePicker");var i=e,n=i.defaultOpen,a=l(i,["defaultOpen"]);e=p({defaultVisible:n},a)}if("open"in e){t("open","visible","TimePicker");var o=e,s=o.open,r=l(o,["open"]);e=p({visible:s},r)}if("onOpenChange"in e){t("onOpenChange","onVisibleChange","TimePicker");var u=e,d=u.onOpenChange,c=l(u,["onOpenChange"]);e=p({onVisibleChange:d},c)}return e}});export{x as N};