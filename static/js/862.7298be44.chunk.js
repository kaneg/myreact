"use strict";(self.webpackChunkmyreact=self.webpackChunkmyreact||[]).push([[862],{1862:function(n,t,e){e.r(t),e.d(t,{MyApp:function(){return v},default:function(){return m}});var i=e(9439),r=e(2791),s=e(5671),u=e(3144),c=e(136),o=e(7277),l=e(184),d=function(n){var t=n.title,e=n.disabled;return(0,l.jsx)("button",{disabled:e,children:t})},h=function(n){(0,c.Z)(e,n);var t=(0,o.Z)(e);function e(){return(0,s.Z)(this,e),t.apply(this,arguments)}return(0,u.Z)(e,[{key:"render",value:function(){return(0,l.jsx)("h2",{children:"Hi, I am a Car!"})}}]),e}(r.Component),a=function(){var n=(0,r.useState)(""),t=(0,i.Z)(n,2),e=(t[0],t[1]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("form",{children:(0,l.jsx)("input",{onChange:function(n){return e(n.target.value)}})})})},j=function(){var n=(0,r.useState)("NA"),t=(0,i.Z)(n,2),e=t[0],s=t[1];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:["HttpBin date: ",e]}),(0,l.jsx)("button",{onClick:function(){fetch("http://httpbin.org/uuid").then((function(n){return console.log(n),n.json()})).then((function(n){console.log(n),s(n.uuid)})).catch((function(n){console.log(n)}))},children:"HttpBin"})]})},f=function(n){var t,e=n.slide;return console.log(e.items),(0,l.jsxs)("div",{children:[e.title,"(",e.type,")",(0,l.jsx)("ul",{children:null===(t=e.items)||void 0===t?void 0:t.map((function(n,t){return(0,l.jsx)("li",{children:n},t)}))}),(0,l.jsx)("hr",{})]})},x=function(){var n=(0,r.useState)(),t=(0,i.Z)(n,2),e=t[0],s=t[1],u=(0,r.useState)(),c=(0,i.Z)(u,2),o=c[0],d=c[1];return(0,r.useEffect)((function(){fetch("https://httpbin.org/json").then((function(n){return n.json()})).then((function(n){var t=n.slideshow;console.log(t),s(t)}))}),[o]),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){d(!o)},children:"Load SlideShow"}),e?(0,l.jsxs)("div",{children:[(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["Author: ",e.author]}),(0,l.jsxs)("li",{children:["Title: ",e.title]}),(0,l.jsxs)("li",{children:["Date: ",e.date]})]}),e.slides.map((function(n){return(0,l.jsx)(f,{slide:n},n.title)}))]}):(0,l.jsx)("div",{children:"Empty"})]})},p=e(5532),v=function(){var n=(0,r.useState)(new Date),t=(0,i.Z)(n,2),e=t[0],s=t[1];return(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{}),(0,l.jsxs)("h2",{children:["Current date: ",e.toTimeString()]}),(0,l.jsx)("button",{onClick:function(){s(new Date)},children:"Date"}),(0,l.jsx)(d,{title:"123",disabled:!1}),(0,l.jsx)(h,{}),(0,l.jsx)(j,{}),(0,l.jsx)(a,{}),(0,l.jsx)(x,{})]})},m=v}}]);
//# sourceMappingURL=862.7298be44.chunk.js.map