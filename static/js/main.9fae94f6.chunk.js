(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(12),a=c.n(s),i=c(14),o=c(20),j=c(3),l=(c(31),c(1)),b=function(e){var t=e.numItems,c=e.total;return Object(l.jsxs)("header",{className:"shop-header row",children:[Object(l.jsx)("a",{className:"logo text-dark",href:"dfasd",children:"ReStore"}),Object(l.jsxs)("a",{className:"shopping-cart",href:"dasdsad",children:[Object(l.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",c,")"]})]})},d=c(9),u=c(10),h=c(17),O=c(15),x=(c(33),function(e){var t=e.book,c=t.title,n=t.author,r=t.price,s=t.coverImage;return Object(l.jsxs)("div",{className:"book-list-item",children:[Object(l.jsx)("div",{className:"book-cover",children:Object(l.jsx)("img",{src:s,alt:"cover"})}),Object(l.jsxs)("div",{className:"book-details",children:[Object(l.jsx)("a",{href:"dasda",className:"book-title",children:c}),Object(l.jsx)("div",{className:"book-author",children:n}),Object(l.jsxs)("div",{className:"book-price",children:["$",r]}),Object(l.jsx)("button",{className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),m=c(16),f=c(23),p=r.a.createContext(),v=p.Provider,g=p.Consumer,k=function(){return function(e){return function(t){return Object(l.jsx)(g,{children:function(c){return Object(l.jsx)(e,Object(f.a)(Object(f.a)({},t),{},{bookstoreService:c}))}})}}},N=function(e){return{type:"BOOKS_LOADED",payload:e}},y=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},w=(c(34),function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.bookstoreService.getBooks();this.props.booksLoaded(e)}},{key:"render",value:function(){var e=this.props.books;return Object(l.jsx)("ul",{className:"book-list",children:e.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(x,{book:e})},e.id)}))})}}]),c}(n.Component)),I=y(k(),Object(i.b)((function(e){return{books:e.books}}),(function(e){return Object(m.a)({booksLoaded:N},e)})))(w),S=(c(35),function(){return Object(l.jsxs)("div",{className:"shopping-cart-table",children:[Object(l.jsx)("h2",{children:"Your Order"}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Item"}),Object(l.jsx)("th",{children:"Count"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:"Site Reliability Engineering"}),Object(l.jsx)("td",{children:"2"}),Object(l.jsx)("td",{children:"$40"}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{className:"btn btn-outline-danger btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-trash-o"})}),Object(l.jsx)("button",{className:"btn btn-outline-success btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-plus-circle"})}),Object(l.jsx)("button",{className:"btn btn-outline-warning btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-minus-circle"})})]})]})})]}),Object(l.jsx)("div",{className:"total",children:"Total: $201"})]})}),C=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(I,{}),Object(l.jsx)(S,{})]})},E=function(){return Object(l.jsx)("div",{children:"CartPage"})},_=(c(36),function(){return Object(l.jsxs)("main",{role:"main",className:"container",children:[Object(l.jsx)(b,{numItems:5,total:210}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",component:C,exact:!0}),Object(l.jsx)(j.a,{path:"/cart",component:E})]})]})}),B=(c(39),function(){return Object(l.jsx)("div",{children:"Error!"})}),L=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(u.a)(c,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)(B,{}):this.props.children}}]),c}(n.Component),A=function(){function e(){Object(d.a)(this,e)}return Object(u.a)(e,[{key:"getBooks",value:function(){return[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}}]),e}(),D={books:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_LOADED":return{books:t.payload};default:return e}},J=Object(m.b)(R),P=new A;a.a.render(Object(l.jsx)(i.a,{store:J,children:Object(l.jsx)(L,{children:Object(l.jsx)(v,{value:P,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(_,{})})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9fae94f6.chunk.js.map