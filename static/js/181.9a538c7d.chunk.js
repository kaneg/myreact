"use strict";(self.webpackChunkmyreact=self.webpackChunkmyreact||[]).push([[181],{5998:function(e,n,t){t.d(n,{Z:function(){return a}});var c=t(9439),i=t(2791),o=t(3620),r=t(4005),s=t(184),d=!1,a=function(e){var n=e.children,t=(0,i.useState)(!1),a=(0,c.Z)(t,2),l=a[0],u=a[1],h=(0,i.useState)(!1),w=(0,c.Z)(h,2),m=w[0],f=w[1];return(0,i.useEffect)((function(){d||(d=!0,console.log("Login ..."),fetch("https://httpbin.org/delay/0",{mode:"no-cors",cache:"no-cache"}).then((function(e){return e.text()})).then((function(e){new URLSearchParams(document.location.search).has("authed")?(console.log("authed"),u(!0),d=!1):f(!0)})).catch((function(){})))}),[]),l?(0,s.jsx)("div",{children:n}):m?(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"Login",children:(0,s.jsx)(o.z,{onClick:function(){window.addEventListener("message",(function(e){u(!0),d=!1,console.log(e)})),function(e,n,t,c){var i=void 0!==window.screenLeft?window.screenLeft:window.screenX,o=void 0!==window.screenTop?window.screenTop:window.screenY,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,d=r/window.screen.availWidth,a=(r-t)/2/d+i,l=(s-c)/2/d+o,u=window.open(e,n,"\n      scrollbars=yes,\n      width=".concat(t/d,", \n      height=").concat(c/d,", \n      top=").concat(l,", \n      left=").concat(a,"\n      "));u&&void 0!==window.focus&&u.focus()}(document.location.href.replace(document.location.hash,"#authed"),"login",600,320)},children:"You need to login first"})})}):(0,s.jsx)("div",{className:"Login",children:(0,s.jsx)(r.$,{labelPosition:"after"})})}},9181:function(e,n,t){t.r(n),t.d(n,{FluentApp:function(){return k},default:function(){return E}});var c=t(8637),i=t(1625),o=t(3620),r=t(5532),s=(t(2791),t(1413)),d=t(535),a=t(4217),l=t(3225),u=t(1165),h=t(4759),w=t(6172),m=t(7548),f=t(3504),x=t(5038),g=t(7135),p=t(184),j=function(e){return"".concat("https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/").concat(e)},v=(0,d.Z)({card:(0,s.Z)((0,s.Z)({},a.q5.margin("auto")),{},{width:"720px",maxWidth:"100%"})}),b=function(){var e=v();return(0,p.jsxs)(m.Z,{className:e.card,children:[(0,p.jsx)(f.O,{image:(0,p.jsx)("img",{src:j("avatar_elvia.svg"),alt:"Elvia Atkins avatar picture"}),header:(0,p.jsxs)(l.m,{children:[(0,p.jsx)("b",{children:"Elvia Atkins"})," mentioned you"]}),description:(0,p.jsx)(u.d,{children:"5h ago \xb7 About us - Overview"})}),(0,p.jsx)(x.f,{logo:(0,p.jsx)("img",{src:j("docx.png"),alt:"Microsoft Word document"}),children:(0,p.jsx)("img",{src:j("doc_template.png"),alt:"Preview of a Word document: About Us - Overview"})}),(0,p.jsxs)(g.e,{children:[(0,p.jsx)(o.z,{icon:(0,p.jsx)(h.HYp,{fontSize:16}),children:"Reply"}),(0,p.jsx)(o.z,{icon:(0,p.jsx)(w.UxM,{fontSize:16}),children:"Share"})]})]})},Z=t(5998),k=function(){return(0,p.jsx)(c.r,{theme:i.Y,children:(0,p.jsxs)(Z.Z,{children:[(0,p.jsx)(r.Z,{}),(0,p.jsx)(o.z,{appearance:"primary",children:"Get started"}),(0,p.jsx)(b,{})]})})},E=k}}]);
//# sourceMappingURL=181.9a538c7d.chunk.js.map