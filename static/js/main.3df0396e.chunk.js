(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addData",(function(){return b})),n.d(a,"deleteData",(function(){return l}));var c=n(1),j=n(6),r=n(4),d=n(2),s=n(3),i=(n(16),n(7)),b=function(e,t){var n=e.state.data.push(t);e.setState({newValue:n})},l=function(e,t){var n=e.state.data.indexOf(t);n>-1&&e.state.data.splice(n,1),e.setState(e.state.data)},O=Object(i.a)({data:[]},a),u=n(0);function h(){var e=O(),t=Object(s.a)(e,1)[0];return Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"NAME"}),Object(u.jsx)("th",{children:"AGE"}),Object(u.jsx)("th",{children:"GENDER"})]})}),Object(u.jsx)("tbody",{children:t.data.length?t.data.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.age}),Object(u.jsx)("td",{children:e.gender})]},t)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:"4",className:"text-center",children:"No Data"})})})]})}function o(){var e=Object(c.useState)({name:"",age:0,gender:"male"}),t=Object(s.a)(e,2),n=t[0],a=t[1],j=O(),i=Object(s.a)(j,2),b=(i[0],i[1]),l=function(e){return function(t){a(Object(d.a)(Object(d.a)({},n),{},Object(r.a)({},e,t.target.value)))}};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Hello CodeSandbox"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.addData(n),a({name:"",age:0,gender:"male"})},children:[Object(u.jsx)("input",{value:n.name,onChange:l("name")}),Object(u.jsx)("input",{value:n.age,onChange:l("age")}),Object(u.jsx)("input",{value:n.gender,onChange:l("gender")}),Object(u.jsx)("input",{type:"submit"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(h,{})]})}var x=document.getElementById("root");Object(j.createRoot)(x).render(Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(o,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3df0396e.chunk.js.map