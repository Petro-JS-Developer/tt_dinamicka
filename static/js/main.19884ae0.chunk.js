(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{54:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),d=a.n(r),i=(a(54),a(12)),o=(a(61),a(19)),s=a(6),u=a(72),l=a(73),j=a(76),b=a(3),O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(l.a.Brand,{children:"TODO LIST"}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsx)(j.a.Link,{as:o.b,to:"/",children:"Create todo"}),Object(b.jsx)(j.a.Link,{as:o.b,to:"/change_todos",children:"Change todos"}),Object(b.jsx)(j.a.Link,{as:o.b,to:"/about_todo",children:"About todo"})]})})]})})},p=a(49),m=a(74),h=a(47),x=a(71),f=a(75),T=a(38),v=a.n(T),g=a(44),A=a(48),Z=a(13),y=a(17),I=a(45),k=a(46),q=[{id:8,userId:1,title:"quo adipisci enim quam ut ab",completed:!0,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:11,userId:1,title:"vero rerum temporibus dolor",completed:!0,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:44,userId:3,title:"cum debitis quis accusamus doloremque ipsa natus sapiente omnis",completed:!0,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:47,userId:3,title:"nam qui rerum fugiat accusamus",completed:!1,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:48,userId:3,title:"sit reprehenderit omnis quia",completed:!1,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:50,userId:3,title:"cupiditate necessitatibus ullam aut quis dolor voluptate",completed:!0,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:52,userId:3,title:"nesciunt dolorum quis recusandae ad pariatur ratione",completed:!1,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"},{id:53,userId:3,title:"qui labore est occaecati recusandae aliquid quam",completed:!1,createdAt:"2020-07-06T14:30:32.542Z",updatedAt:"2020-07-06T14:30:32.542Z"}],w="SET_LIST_TODO",D="ADD_TODO",C="DELETE_TODO",S={allTodo:[]},_=Object(y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Z.a)(Object(Z.a)({},e),{},{allTodo:t.data});case D:return Object(Z.a)(Object(Z.a)({},e),{},{allTodo:[].concat(Object(A.a)(e.allTodo),[t.todo])});case C:return Object(Z.a)(Object(Z.a)({},e),{},{allTodo:e.allTodo.filter((function(e){return e.id!==t.id}))});default:return e}}),Object(I.composeWithDevTools)(Object(y.applyMiddleware)(k.a))),L=function(e){return e.allTodo};_.subscribe((function(){console.log(_.getState())}));var N=a(77),E=function(e){var t=e.title,a=e.id,c=Object(i.b)(),n=function(e){c(function(e){return{type:C,id:e}}(e))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:t}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return n(a)},children:"\xd7"})]})},F=function(){var e=Object(i.c)(L);return Object(b.jsx)(N.a,{id:"todoList",children:e.map((function(e){return Object(b.jsx)(N.a.Item,{className:"d-flex justify-content-between",children:Object(b.jsx)(E,Object(Z.a)({},e))},e.id)}))})},B=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(i.b)(),d=function(){var e;r((e={id:Object(f.a)(),title:a},{type:D,todo:e})),n("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Add new task"}),Object(b.jsx)(m.a,{children:Object(b.jsxs)(m.a.Row,{className:"align-items-center",children:[Object(b.jsx)(h.a,{sm:6,className:"my-1",children:Object(b.jsx)(m.a.Control,{type:"text",placeholder:"Input task",value:a,onChange:function(e){return n(e.target.value)}})}),Object(b.jsx)(h.a,{sm:4,className:"my-1",children:Object(b.jsx)(x.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),d()},children:"Add"})})]})}),Object(b.jsx)(F,{})]})},J=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h2",{children:"ChangeTodo"})})},M=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"About todo"})})};var R=function(){var e=Object(i.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout((function(){t({type:w,data:q})}),2e3);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsx)(u.a,{className:"my-auto",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:B}),Object(b.jsx)(s.a,{path:"/change_todos",component:J}),Object(b.jsx)(s.a,{path:"/about_todo",component:M})]})]})})};d.a.render(Object(b.jsx)(i.a,{store:_,children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.19884ae0.chunk.js.map