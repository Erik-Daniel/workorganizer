(this.webpackJsonpworkorganizer=this.webpackJsonpworkorganizer||[]).push([[0],{21:function(e,o,n){},30:function(e,o,n){"use strict";n.r(o);var t=n(0),i=n.n(t),r=n(4),d=n.n(r),a=n(2),c=n(9),s=n(3),l=n(8),u=n(7),p=(n(21),n.p+"static/media/garbage.ebfd7f74.svg"),g=n.p+"static/media/add.a1ad828c.svg",m=n.p+"static/media/add-hover.9e69026a.svg",b=n.p+"static/media/trashcan.f2193089.svg",j=n(1);var f=function(){var e=Object(t.useState)([]),o=Object(s.a)(e,2),n=o[0],i=o[1],r=Object(t.useState)([]),d=Object(s.a)(r,2),f=d[0],O=d[1],C=Object(t.useState)([]),D=Object(s.a)(C,2),T=D[0],v=D[1],x=Object(t.useState)({Todo:!1,Doing:!1,Completed:!1}),h=Object(s.a)(x,2),I=h[0],B=h[1],k=Object(t.useState)({Todo:"inputBar",Doing:"inputBar",Completed:"inputBar"}),U=Object(s.a)(k,2),w=U[0],S=U[1],y=Object(t.useState)({Todo:"goingUp",Doing:"goingUp",Completed:"goingUp"}),N=Object(s.a)(y,2),R=N[0],P=N[1],E=Object(t.useRef)(),M=Object(t.useRef)(),z=Object(t.useRef)(),H=[{name:"Todo",items:n,borderColor:"red"},{name:"Doing",items:f,borderColor:"yellow"},{name:"Completed",items:T,borderColor:"green"}];function J(e){if("Todo"===e){var o=E.current.value;""!=o&&(i((function(e){return[].concat(Object(c.a)(e),[{id:Object(u.uuid)(),task:o}])})),E.current.value="")}else if("Doing"===e){var n=M.current.value;""!=n&&(O((function(e){return[].concat(Object(c.a)(e),[{id:Object(u.uuid)(),task:n}])})),M.current.value="")}else if("Completed"===e){var t=z.current.value;""!=t&&(v((function(e){return[].concat(Object(c.a)(e),[{id:Object(u.uuid)(),task:t}])})),z.current.value="")}}return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsx)(l.a,{onDragEnd:function(e){var o,t,r,d;console.log(e),null!==e.destination&&(e.source.droppableId===e.destination.droppableId&&e.source.index===e.destination.index||("Todo"===e.destination.droppableId?(t=i,o=n):"Doing"===e.destination.droppableId?(t=O,o=f):"Completed"===e.destination.droppableId&&(t=v,o=T),"Todo"===e.source.droppableId?(r=n,i):"Doing"===e.source.droppableId?(r=f,O):"Completed"===e.source.droppableId&&(r=T,v),console.log("source index = "+e.source.index),console.log("destination index = "+e.destination.index),console.log("from = "+r[e.source.index]),d=r[e.source.index],r.splice(e.source.index,1),o.splice(e.destination.index,0,d),t(o)))},children:H.map((function(e){return Object(j.jsx)(l.c,{droppableId:e.name,children:function(o,t){return Object(j.jsxs)("div",Object(a.a)(Object(a.a)({className:"container"},o.droppableProps),{},{ref:o.innerRef,children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{onClick:function(){return function(e){var o={Todo:I.Todo,Doing:I.Doing,Completed:I.Completed},n={Todo:w.Todo,Doing:w.Doing,Completed:w.Completed},t={Todo:R.Todo,Doing:R.Doing,Completed:R.Completed};if("Todo"===e){var i=!o.Todo;o.Todo=i,o.Doing=!1,o.Completed=!1,i?(n.Todo="inputBar",n.Doing="closingInputBar",n.Completed="closingInputBar",t.Todo="goingDown",t.Doing="goingUp",t.Completed="goingUp",B(o)):(n.Todo="closingInputBar",t.Todo="goingUp",setTimeout((function(){return B(o)}),500))}else if("Doing"===e){var r=!o.Doing;o.Todo=!1,o.Doing=r,o.Completed=!1,r?(n.Doing="inputBar",n.Todo="closingInputBar",n.Completed="closingInputBar",t.Doing="goingDown",t.Todo="goingUp",t.Completed="goingUp",B(o)):(n.Doing="closingInputBar",t.Doing="goingUp",setTimeout((function(){return B(o)}),500))}else if("Completed"===e){var d=!o.Completed;o.Todo=!1,o.Doing=!1,o.Completed=!o.Completed,d?(n.Completed="inputBar",n.Doing="closingInputBar",n.Todo="closingInputBar",t.Completed="goingDown",t.Doing="goingUp",t.Todo="goingUp",B(o)):(n.Completed="closingInputBar",t.Completed="goingUp",setTimeout((function(){return B(o)}),500))}P(t),S(n)}(e.name)},onMouseOut:function(e){return e.currentTarget.src=g},onMouseOver:function(e){return e.currentTarget.src=m},src:g}),Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("img",{onClick:function(){return o=e.name,console.log("naem ="+o),void("Todo"===o?i([]):"Doing"===o?O([]):"Completed"===o&&v([]));var o},src:p})]}),Object(j.jsxs)("div",{className:I[e.name]?w[e.name]:"inputBarHidden",id:e.name,children:[Object(j.jsx)("input",{onKeyDown:function(o){return function(e,o){"Enter"===e.key&&J(o)}(o,e.name)},ref:"Todo"===e.name?E:"Doing"===e.name?M:"Completed"===e.name?z:null,type:"text"}),Object(j.jsx)("button",{onClick:function(){return J(e.name)},children:"Submit"})]}),Object(j.jsx)("div",{className:R[e.name],children:e.items.map((function(o,t){return Object(j.jsx)(l.b,{draggableId:o.id,index:t,children:function(t,r){return Object(j.jsxs)("div",Object(a.a)(Object(a.a)(Object(a.a)({className:"item",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(a.a)(Object(a.a)({},t.draggableProps.style),{},{borderColor:e.borderColor}),children:[Object(j.jsx)("img",{onClick:function(){return t=o.id,void("Todo"===(r=e.name)?i(n.filter((function(e){return e.id!==t}))):"Doing"===r?O(f.filter((function(e){return e.id!==t}))):"Completed"===r&&v(T.filter((function(e){return e.id!==t}))));var t,r},className:"trashcan",src:b}),o.task]}))}},o.id)}))}),o.placeholder]}))}},e.name)}))})})})};d.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ef303845.chunk.js.map