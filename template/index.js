(function(e,o,s,t){"use strict";const{FormText:n,FormInput:c}=s.Forms;function E(){const[u,a]=t.useState(""),[f,g]=t.useState(""),m=function(l){a(l.target.value)},v=function(l){g(l.target.value)};t.useEffect(function(){},[]);const i=function(){};return React.createElement("div",null,React.createElement(n,null,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u0430:"),React.createElement("div",null,React.createElement(n,null,"\u0421\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u0437\u0430\u043C\u0435\u043D\u044B:"),React.createElement(c,{type:"text",value:u,onChange:m,onBlur:i})),React.createElement("div",null,React.createElement(n,null,"\u0421\u043B\u043E\u0432\u043E, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C:"),React.createElement(c,{type:"text",value:f,onChange:v,onBlur:i})))}var d={onLoad:function(){o.logger.log("\u041F\u043B\u0430\u0433\u0438\u043D \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D!"),vendetta.ui.on("message",r)},onUnload:function(){o.logger.log("\u041F\u043B\u0430\u0433\u0438\u043D \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D."),vendetta.ui.off("message",r)},settings:E};function r(u){if(u.toLowerCase().includes("\u043E\u043A")){const a=u.replace(/ок/gi,"\u041E\u043A\u0435\u0439");vendetta.ui.sendMessage(a)}}return e.default=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.ui.components,window.React);
