(this.webpackJsonpseamlessmdassignment=this.webpackJsonpseamlessmdassignment||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),a=(n(9),n(2)),j=(n(10),n(0));var b=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),i=Object(a.a)(s,2),b=i[0],u=i[1],h=Object(r.useState)(0),d=Object(a.a)(h,2),l=d[0],o=d[1],O=Object(r.useState)(0),f=Object(a.a)(O,2),x=f[0],g=f[1],m=Object(r.useState)(0),v=Object(a.a)(m,2),p=v[0],D=v[1];function y(e,t){var n=0,r=0;if("birthDate"in t.resource){var c=Number(t.resource.birthDate.substring(0,4)),s=Number(t.resource.birthDate.substring(5,7))-1,i=Number(t.resource.birthDate.substring(8,10)),a=new Date;n=a.getFullYear()-c-1,(a.getMonth()>s||a.getMonth()===s&&a.getDate()>=i)&&n++,r++}return[e[0]+n,e[1]+r]}function N(e){var t="";if("name"in e){var n=e.name[0];return"prefix"in n&&(t+=n.prefix[0]+" "),"text"in n?t+=n.text:("given"in n&&(t+=n.given[0],"family"in n&&(t+=" ")),"family"in n&&(t+=n.family)),t}return"N/A"}return Object(r.useEffect)((function(){fetch("https://hapi.fhir.org/baseR4/Patient?_pretty=true&_count=30").then((function(e){return e.json()})).then((function(e){return c(e.entry)}))}),[]),Object(r.useEffect)((function(){u(n.length);var e=n.reduce(y,[0,0]);g(e[0]),o(e[1])}),[n]),Object(r.useEffect)((function(){D((x/l).toFixed(2))}),[l,x]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{class:"center",children:"SeamlessMD Richard Huang Assignment"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{class:"center",children:["Total Patients: ",b]}),Object(j.jsxs)("h3",{class:"center",children:["Average Age: ",p]})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{class:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Number"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Birthday"}),Object(j.jsx)("th",{children:"Gender"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t+1}),Object(j.jsx)("td",{children:N(e.resource)}),Object(j.jsx)("td",{children:"birthDate"in e.resource?e.resource.birthDate:"N/A"}),Object(j.jsx)("td",{children:"gender"in e.resource?e.resource.gender:"N/A"})]},t)}))})]})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5e900538.chunk.js.map