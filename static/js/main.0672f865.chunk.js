(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(4),i=n.n(c),a=n(3),b=n(1),s=(n(9),n(0)),o=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=e.find((function(t){return t.id===n}));return Object(s.jsxs)("div",{children:[e.map((function(t){var e=t.id,i=t.title;return Object(s.jsx)("button",{type:"button",onClick:function(){n!==e&&c(t)},children:i},e)})),Object(s.jsx)("br",{}),null===i||void 0===i?void 0:i.content]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=d[0],e=t.id,n=t.title,c=Object(b.useState)(e),i=Object(a.a)(c,2),r=i[0],l=i[1],u=Object(b.useState)(n),j=Object(a.a)(u,2),O=j[0],x=j[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h1",{children:["Selected tab is"," ",O]}),Object(s.jsx)(o,{tabs:d,selectedTabId:r,onTabSelected:function(t){var e=t.id,n=t.title;l(e),x(n)}})]})};i.a.render(Object(s.jsx)(r,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.0672f865.chunk.js.map