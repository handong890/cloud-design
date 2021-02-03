import{_ as e,c as t,d as n,e as o,r,p as i,u as s,w as a,f as l,y as u,K as c}from"./index.54491fbe.js";import{m as d}from"./moment.06e24de2.js";function m(e,t,n){if(e[t]&&!d.isMoment(e[t]))return new Error("Invalid prop "+t+" supplied to "+n+". Required a moment object")}function p(e,t,n){if(e[t]&&!d.isMoment(e[t])&&"string"!=typeof e[t])return new Error("Invalid prop "+t+" supplied to "+n+". Required a moment object or format date string!")}function f(e,t){var n="string"==typeof e?d(e,t,!0):e;return n&&d.isMoment(n)&&n.isValid()?n:null}var b,h;function v(e,t,n){var o=window.requestAnimationFrame||function(){return setTimeout(arguments.length<=0?void 0:arguments[0],10)};if(n<=0)e.scrollTop=t;else{var r=(t-e.scrollTop)/n*10;o((function(){e.scrollTop=e.scrollTop+r,e.scrollTop!==t&&v(e,t,n-10)}))}}var y,M,S=function(){},I=(h=b=function(i){function s(){var e,a;t(this,s);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return e=a=n(this,i.call.apply(i,[this].concat(u))),a._menuRefHandler=function(e){a.menu=e},a.createMenuItems=function(e){var t=a.props,n=t.prefix,i=t.mode,s=t.disabled,l=t.disabledItems,u=t.activeIndex,c=t.onSelect,d=t.renderTimeMenuItems,m=t.value;return(e=d(e,i,m)||e).map((function(e){var t,a=e.label,d=e.value,m=s||l(d),p=o(((t={})[n+"time-picker-menu-item"]=!0,t[n+"disabled"]=m,t[n+"selected"]=d===u,t)),f=m?S:function(){return c(d,i)};return r.createElement("li",{role:"option","aria-selected":String(d===u),key:d,title:d,className:p,onClick:f},a)}))},n(a,e)}return e(s,i),s.prototype.componentDidMount=function(){this.scrollToSelected(0)},s.prototype.componentDidUpdate=function(e){e.activeIndex!==this.props.activeIndex&&this.scrollToSelected(120)},s.prototype.scrollToSelected=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,n=t.activeIndex,o=t.step,r=Math.floor((n||0)/o),i=this.menu.children[r],s=i.offsetTop;v(this.menu,s,e)},s.prototype.render=function(){for(var e=this.props,t=e.prefix,n=e.title,o=e.mode,i=e.step,s="hour"===o?24:60,a=[],l=0;l<s;l++)l%i==0&&a.push({label:l,value:l});var u=n?r.createElement("div",{className:t+"time-picker-menu-title"},n):null;return r.createElement("div",{className:t+"time-picker-menu"},u,r.createElement("ul",{role:"listbox",className:t+"time-picker-menu-"+o,ref:this._menuRefHandler},this.createMenuItems(a)))},s}(r.Component),b.propTypes={prefix:i.string,title:i.node,mode:i.oneOf(["hour","minute","second"]),step:i.number,activeIndex:i.number,value:m,disabledItems:i.func,renderTimeMenuItems:i.func,onSelect:i.func,disabled:i.bool},b.defaultProps={step:1,disabledItems:function(){return!1},renderTimeMenuItems:function(e){return e},onSelect:function(){},disabled:!1},h);I.displayName="TimeMenu";var P=s.noop,T=(M=y=function(i){function s(){var e,o;t(this,s);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return e=o=n(this,i.call.apply(i,[this].concat(a))),o.onSelectMenuItem=function(e,t){var n=o.props.value,r=n?n.clone():d("00:00:00","HH:mm:ss",!0);switch(t){case"hour":r.hour(e);break;case"minute":r.minute(e);break;case"second":r.second(e)}o.props.onSelect(r)},n(o,e)}return e(s,i),s.prototype.render=function(){var e=this.props,t=e.prefix,n=e.value,i=e.locale,s=e.className,u=e.disabled,c=e.showHour,m=e.showMinute,p=e.showSecond,f=e.hourStep,b=e.minuteStep,h=e.secondStep,v=e.disabledHours,y=e.disabledMinutes,M=e.disabledSeconds,S=e.renderTimeMenuItems,P=a(e,["prefix","value","locale","className","disabled","showHour","showMinute","showSecond","hourStep","minuteStep","secondStep","disabledHours","disabledMinutes","disabledSeconds","renderTimeMenuItems"]),T=[c,m,p].filter((function(e){return e})).length,E=o(t+"time-picker-panel",t+"time-picker-panel-col-"+T,s),k={prefix:t,disabled:u,onSelect:this.onSelectMenuItem,renderTimeMenuItems:S,value:n},x=void 0,w=void 0,N=void 0;return n&&d.isMoment(n)&&(x=n.hour(),w=n.minute(),N=n.second()),r.createElement("div",l({},P,{className:E}),c?r.createElement(I,l({},k,{activeIndex:x,title:i.hour,mode:"hour",step:f,disabledItems:v})):null,m?r.createElement(I,l({},k,{activeIndex:w,title:i.minute,mode:"minute",step:b,disabledItems:y})):null,p?r.createElement(I,l({},k,{activeIndex:N,title:i.second,step:h,mode:"second",disabledItems:M})):null)},s}(r.Component),y.propTypes={prefix:i.string,value:m,showHour:i.bool,showMinute:i.bool,showSecond:i.bool,hourStep:i.number,minuteStep:i.number,secondStep:i.number,disabledHours:i.func,disabledMinutes:i.func,disabledSeconds:i.func,renderTimeMenuItems:i.func,onSelect:i.func,locale:i.object,disabled:i.bool,className:i.string},y.defaultProps={prefix:"next-",showHour:!0,showSecond:!0,showMinute:!0,disabledHours:P,disabledMinutes:P,disabledSeconds:P,onSelect:P,disabled:!1,locale:u.TimePicker},M);T.displayName="TimePickerPanel";var E={TIME:"time-panel",DATE:"date-panel"};function k(e){return!!(e&&e.constructor&&e.call&&e.apply)}function x(e,t){return d.isMoment(e)&&d.isMoment(t)?e.clone().hour(t.hour()).minute(t.minute()).second(t.second()):e}function w(e,t){var n="string"==typeof e?d(e,t,!1):e;return n&&d.isMoment(n)&&n.isValid()?n:null}function N(e,t,n){if(e[t]&&!d.isMoment(e[t])&&"string"!=typeof e[t])return new Error("Invalid prop "+t+" supplied to "+n+". Required a moment object or format date string!")}function D(e,t,n){!e&&n&&(e={date:"YYYY-MM-DD",month:"YYYY-MM",year:"YYYY",time:""}[n]);var o=t?t.format||"HH:mm:ss":"";return{format:e,timeFormat:o,dateTimeFormat:o?e+" "+o:e}}function g(e,t,n){var o=t.format,r=t.dateInputStr,i=t.value;if(-1!==[c.UP,c.DOWN,c.PAGE_UP,c.PAGE_DOWN].indexOf(e.keyCode)&&!(e.altKey&&-1===[c.PAGE_UP,c.PAGE_DOWN].indexOf(e.keyCode)||e.controlKey||e.shiftKey)){var s=d(r,o,!0);if(s.isValid()){var a=e.altKey?"year":"month";switch(e.keyCode){case c.UP:s.subtract(1,n);break;case c.DOWN:s.add(1,n);break;case c.PAGE_UP:s.subtract(1,a);break;case c.PAGE_DOWN:s.add(1,a)}}else s=i?i.clone():d();return e.preventDefault(),s.format(o)}}function A(e,t,n){var o=t.format,r=t.timeInputStr,i=t.steps,s=t.value;if(-1!==[c.UP,c.DOWN,c.PAGE_UP,c.PAGE_DOWN].indexOf(e.keyCode)&&!(e.altKey&&-1===[c.PAGE_UP,c.PAGE_DOWN].indexOf(e.keyCode)||e.controlKey||e.shiftKey)){var a=d(r,o,!0);if(a.isValid()){var l=e.altKey?"hour":"minute";switch(e.keyCode){case c.UP:a.subtract(i[n],n);break;case c.DOWN:a.add(i[n],n);break;case c.PAGE_UP:a.subtract(i[l],l);break;case c.PAGE_DOWN:a.add(i[l],l)}}else a=s?s.clone():d().hours(0).minutes(0).seconds(0);return e.preventDefault(),a.format(o)}}export{E as P,T,A as a,f as b,N as c,p as d,w as f,D as g,k as i,g as o,x as r};