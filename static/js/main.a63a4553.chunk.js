(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),n=a(12),c=a.n(n),o=(a(23),a(24),a(13)),l=a(14),i=a(15),u=a(18),d=a(17),m=a(0);var h=function(e){return Object(m.jsx)("div",{className:"container text-center",children:Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"display-5",style:{margin:"12px"},htmlFor:"search",children:"Search:"}),Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Jon Snow",id:"search",style:{width:"70%",transform:"translate(22%)",textAlign:"center"}}),Object(m.jsx)("button",{onClick:e.handleFormSubmit,className:"btn mt-3 btn-primary",children:"Search"}),Object(m.jsx)("button",{onClick:e.handleReset,style:{marginLeft:"5px"},className:"btn btn-primary mt-3",children:"Reset"}),Object(m.jsx)("button",{type:"button",style:{marginLeft:"5px"},className:"btn btn-secondary mt-3 dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Sort"}),Object(m.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"dropdown-item",onClick:e.sortFirstName,children:"First Name"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"dropdown-item",onClick:e.sortLastName,children:"Last Name"})})]})]})})})},b={card:{borderRadius:"2% 2%",width:"18rem",margin:"1%",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",textAlign:"center"},profilePicture:{borderRadius:"60% 60%",position:"relative",top:"5%",left:"50%",maxWidth:"180px",marginBottom:"20px",boxShadow:"3px 3px 20px rgba(0, 0, 0, 0.5)",border:"2px solid rgba(255, 255, 255, 1)",WebkitTransform:"translate(-50%, 0%)",transform:"translate(-50%, 0%)"},"card:hover":{transform:"scale(1.05)"}};var p=function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:e.results.map((function(e){return Object(m.jsxs)("div",{className:"card",style:b.card,children:[Object(m.jsx)("img",{alt:e.name.first,style:b.profilePicture,className:"card-img-top",src:e.picture.large}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("h5",{className:"card-title",children:[e.name.first," ",e.name.last]})}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsx)("li",{className:"list-group-item",children:e.email}),Object(m.jsx)("li",{className:"list-group-item",children:e.phone})]})]},e.email)}))})})},j=a(16),f=a.n(j),x=function(){return f.a.get("https://randomuser.me/api/?results=20")};var g=function(e,t){var a=[];return e.forEach((function(e){-1===e.name.first.toLowerCase().search(t)&&-1===e.name.last.toLowerCase().search(t)||a.push(e)})),a},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],employees:[]},e.getEmployees=function(){x().then((function(t){return e.setState({results:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.name,s=t.target.value;e.setState(Object(o.a)({},a,s))},e.handleFormSubmit=function(t){t.preventDefault(),e.setState({results:g(e.state.employees,e.state.search)})},e.handleReset=function(t){t.preventDefault(),e.setState({results:e.state.employees})},e.sortFirstName=function(t){t.preventDefault();var a=e.state.results.sort((function(e,t){var a=e.name.first.toLowerCase(),s=t.name.first.toLowerCase();return a<s?-1:a>s?1:0}));e.setState({results:a})},e.sortLastName=function(t){t.preventDefault();var a=e.state.results.sort((function(e,t){var a=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return a<s?-1:a>s?1:0}));e.setState({results:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(m.jsxs)("div",{style:{backgroundColor:"aliceblue"},children:[Object(m.jsx)(h,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleReset:this.handleReset,sortFirstName:this.sortFirstName,sortLastName:this.sortLastName}),Object(m.jsx)(p,{results:this.state.results})]})}}]),a}(s.Component);var v=function(){return Object(m.jsx)(O,{})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};a(44);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),y()}},[[45,1,2]]]);
//# sourceMappingURL=main.a63a4553.chunk.js.map