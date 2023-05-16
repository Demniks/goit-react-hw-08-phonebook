"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{5829:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a=t(7762),i=t(9439),o=t(2791),c=t(9434),s=t(3634),l=t(6916),u=function(n){return n.contacts.filter},d=function(n){return n.contacts.contacts},x=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},h=(0,l.P1)([d,u],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),f=t(4554),p=t(890),Z=t(7365),v=t(6151),j=t(2419),b=t(168),y=t(6088),g=y.Z.form(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  z-index: 200;\n  position: relative;\n  /* background-color: #336699; */\n"]))),w=t(184);function C(){var n=(0,o.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],l=(0,o.useState)(""),u=(0,i.Z)(l,2),x=u[0],m=u[1],h=(0,c.I0)(),b=(0,c.v9)(d);function y(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":m(n.currentTarget.value);break;default:return}}return(0,w.jsx)(f.Z,{sx:{flexGrow:1,maxWidth:752,width:"inherit"},children:(0,w.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e,i=[],o=(0,a.Z)(b);try{for(o.s();!(e=o.n()).done;){var c=e.value;i.push(c.name)}}catch(l){o.e(l)}finally{o.f()}i.includes(t)?alert("".concat(t," is already in contacts list")):(h((0,s.el)({name:t,number:x})),r(""),m(""))},children:[(0,w.jsx)(p.Z,{variant:"body",color:"primary.contrastText",children:"Name"}),(0,w.jsx)(Z.Z,{label:"name",variant:"outlined",autoComplete:"off",type:"text",name:"name",value:t,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,w.jsx)(p.Z,{variant:"body",color:"primary.contrastText",children:"Number"}),(0,w.jsx)(Z.Z,{label:"number",variant:"outlined",autoComplete:"off",type:"tel",name:"number",value:x,onChange:y,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,w.jsx)(v.Z,{variant:"contained",startIcon:(0,w.jsx)(j.Z,{}),type:"submit",children:"Add contact"})]})})}var k,A,T,_=t(1889),z=t(493),I=t(3400),N=t(653),P=t(3044),G=t(6259),L=t(7247),S=t(4852),W=(0,y.Z)(S.ZP)(k||(k=(0,b.Z)(["\n  :hover {\n    background-color: #90a955;\n    border-radius: 8px;\n  }\n"]))),F=function(){var n=(0,c.v9)(h),e=(0,c.v9)(x),t=(0,c.v9)(m),r=(0,c.I0)();return(0,o.useEffect)((function(){r((0,s.yF)())}),[r]),(0,w.jsx)(f.Z,{sx:{flexGrow:1,maxWidth:752,width:"inherit"},children:(0,w.jsxs)(_.ZP,{children:[(0,w.jsxs)(p.Z,{variant:"h4",component:"h2",children:[" ","My contacts"]}),e&&!t&&(0,w.jsx)("b",{children:"Request in progress..."}),(0,w.jsx)(z.Z,{children:n.length>0?n.map((function(n){return(0,w.jsxs)(W,{secondaryAction:(0,w.jsx)(I.Z,{edge:"end","aria-label":"delete",onClick:function(){return r((0,s._f)(n._id))},children:(0,w.jsx)(L.Z,{})}),children:[(0,w.jsx)(N.Z,{children:(0,w.jsx)(P.Z,{})}),(0,w.jsx)(G.Z,{primary:(0,w.jsxs)(p.Z,{component:"p",variant:"h6",children:[n.name,": ",n.number]})})]},n._id)})):"No contact here yet"})]})})},M=(0,y.Z)(f.Z)(A||(A=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),q=t(1538),B=function(){var n=(0,c.v9)(u),e=(0,c.I0)();return(0,w.jsxs)(M,{sx:{flexGrow:1,maxWidth:752},children:[(0,w.jsx)(p.Z,{variant:"body",color:"primary.contrastText"}),(0,w.jsx)(Z.Z,{label:"find your contact",variant:"outlined",type:"text",value:n,onChange:function(n){e((0,q.xO)(n.currentTarget.value))}})]})},D=t(1614),E=(0,y.Z)(D.Z)(T||(T=(0,b.Z)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=function(){return(0,w.jsxs)(E,{sx:{mt:{xs:"5px",sm:"20px"}},children:[(0,w.jsx)(C,{}),(0,w.jsx)(B,{}),(0,w.jsx)(F,{})]})}}}]);
//# sourceMappingURL=829.cc89b953.chunk.js.map