"use strict";(self.webpackChunkmyreact=self.webpackChunkmyreact||[]).push([[181],{4711:function(e,n,t){var o=t(9439),c=t(2791),i=t(4005),r=t(184),s=!1;n.Z=function(e){var n=e.children,t=(0,c.useState)(!1),a=(0,o.Z)(t,2),l=a[0],d=a[1],u=function(){window.addEventListener("message",(function(e){d(!0),s=!1,console.log(e)}));var e=document.location.href.replace(document.location.hash,"#authed"),n=window.open(e,"mozillaWindow","left=100,top=100,width=320,height=320");console.log("handle:",n),null!=n&&(n.onclose=function(){console.log("closed window"),s=!1})};return(0,c.useEffect)((function(){s||(s=!0,console.log("Login ..."),fetch("http://localhost:8000/auth.txt",{mode:"no-cors",cache:"no-cache"}).then((function(e){return e.text()})).then((function(e){console.log("authed"),d(!0),s=!1})).catch((function(){u()})))}),[]),l?(0,r.jsx)("div",{children:n}):(0,r.jsxs)("div",{children:["Loading...",(0,r.jsx)(i.$,{delay:1})]})}},9181:function(e,n,t){t.r(n),t.d(n,{FluentApp:function(){return b},default:function(){return y}});var o=t(8637),c=t(1625),i=t(3620),r=t(5532),s=(t(2791),t(1413)),a=t(535),l=t(4217),d=t(3225),u=t(1165),h=t(4759),f=t(6172),x=t(7548),m=t(3504),p=t(5038),j=t(7135),g=t(184),v=function(e){return"".concat("https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/").concat(e)},w=(0,a.Z)({card:(0,s.Z)((0,s.Z)({},l.q5.margin("auto")),{},{width:"720px",maxWidth:"100%"})}),Z=function(){var e=w();return(0,g.jsxs)(x.Z,{className:e.card,children:[(0,g.jsx)(m.O,{image:(0,g.jsx)("img",{src:v("avatar_elvia.svg"),alt:"Elvia Atkins avatar picture"}),header:(0,g.jsxs)(d.m,{children:[(0,g.jsx)("b",{children:"Elvia Atkins"})," mentioned you"]}),description:(0,g.jsx)(u.d,{children:"5h ago \xb7 About us - Overview"})}),(0,g.jsx)(p.f,{logo:(0,g.jsx)("img",{src:v("docx.png"),alt:"Microsoft Word document"}),children:(0,g.jsx)("img",{src:v("doc_template.png"),alt:"Preview of a Word document: About Us - Overview"})}),(0,g.jsxs)(j.e,{children:[(0,g.jsx)(i.z,{icon:(0,g.jsx)(h.HYp,{fontSize:16}),children:"Reply"}),(0,g.jsx)(i.z,{icon:(0,g.jsx)(f.UxM,{fontSize:16}),children:"Share"})]})]})},k=t(4711),b=function(){return(0,g.jsx)(k.Z,{children:(0,g.jsxs)(o.r,{theme:c.Y,children:[(0,g.jsx)(r.Z,{}),(0,g.jsx)(i.z,{appearance:"primary",children:"Get started"}),(0,g.jsx)(Z,{})]})})},y=b}}]);
//# sourceMappingURL=181.4d3b1986.chunk.js.map