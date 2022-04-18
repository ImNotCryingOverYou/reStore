(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{41:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(19),a=n.n(o),i=n(11),s=n(14),l=n(3),u=(n(41),n(1)),d=Object(i.b)((function(t){var e=t.shoppingCart,n=e.cartItems,r=e.orderTotal;return{numItems:n.length,total:r}}))((function(t){var e=t.numItems,n=t.total;return Object(u.jsxs)("header",{className:"shop-header row",children:[Object(u.jsx)(s.b,{to:"/reStore",children:Object(u.jsx)("div",{className:"logo text-dark",href:"dfasd",children:"\u041a\u043d\u0438\u0436\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"})}),Object(u.jsx)(s.b,{to:"/cart",children:Object(u.jsxs)("div",{className:"shopping-cart",href:"dasdsad",children:[Object(u.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),e," items ($",n,")"]})})]})})),j=n(15),b=n(16),O=n(23),h=n(22),f=(n(45),function(t){var e=t.book,n=t.onAddedToCart,r=e.title,c=e.author,o=e.price,a=e.coverImage;return Object(u.jsxs)("div",{className:"book-list-item",children:[Object(u.jsx)("div",{className:"book-cover",children:Object(u.jsx)("img",{src:a,alt:"cover"})}),Object(u.jsxs)("div",{className:"book-details",children:[Object(u.jsx)("span",{className:"book-title",children:r}),Object(u.jsx)("div",{className:"book-author",children:c}),Object(u.jsxs)("div",{className:"book-price",children:["$",o]}),Object(u.jsx)("button",{onClick:n,className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),m=(n(46),n(59)),p=function(){return Object(u.jsx)("div",{className:"spinner",children:Object(u.jsx)(m.a,{color:"secondary"})})},x=(n(47),function(){return Object(u.jsxs)("div",{className:"error-indicator",children:[Object(u.jsx)("h2",{children:"\u0412\u0441\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435!"}),Object(u.jsx)("p",{children:"\u042d\u0442\u043e \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."})]})}),v=n(29),k=c.a.createContext(),g=k.Provider,C=k.Consumer,_=function(){return function(t){return function(e){return Object(u.jsx)(C,{children:function(n){return Object(u.jsx)(t,Object(v.a)(Object(v.a)({},e),{},{bookstoreService:n}))}})}}},N=function(t){return{type:"BOOK_ADDED_TO_CART",payload:t}},y=function(t){return{type:"BOOK_REMOVED_FROM_CART",payload:t}},E=function(t){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:t}},T=function(t,e){return function(){e({type:"FETCH_BOOKS_REQUEST"}),t.getBooks().then((function(t){return e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){return e({type:"FETCH_BOOKS_FAILURE",payload:t})}))}},I=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight((function(t,e){return e(t)}),t)}},A=(n(48),function(t){var e=t.books,n=t.onAddedToCart;return Object(u.jsx)("ul",{className:"book-list",children:e.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(f,{book:t,onAddedToCart:function(){return n(t.id,t.coverImage)}})},t.id)}))})}),S=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var t=this.props,e=t.books,n=t.loading,r=t.error,c=t.onAddedToCart;return n?Object(u.jsx)(p,{}):r?Object(u.jsx)(x,{}):Object(u.jsx)(A,{books:e,onAddedToCart:c})}}]),n}(r.Component),D=I(_(),Object(i.b)((function(t){var e=t.bookList;return{books:e.books,loading:e.loading,error:e.error}}),(function(t,e){var n=e.bookstoreService;return{fetchBooks:T(n,t),onAddedToCart:function(e,n){return t(N(e))}}})))(S),R=(n(49),{onIncrease:N,onDecrease:y,onDelete:E}),B=Object(i.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.orderTotal}}),R)((function(t){var e=t.items,n=t.total,r=t.onIncrease,c=t.onDecrease,o=t.onDelete;return Object(u.jsxs)("div",{className:"shopping-cart-table",children:[Object(u.jsx)("h2",{children:"Your Order"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Item"}),Object(u.jsx)("th",{children:"Count"}),Object(u.jsx)("th",{children:"Price"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:e.map((function(t,e){var n=t.id,a=t.title,i=t.count,s=t.total;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e+1}),Object(u.jsx)("td",{children:a}),Object(u.jsx)("td",{children:i}),Object(u.jsx)("td",{children:s}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:function(){return o(n)},className:"btn btn-outline-danger btn-sm float-right",children:Object(u.jsx)("i",{className:"fa fa-trash-o"})}),Object(u.jsx)("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right",children:Object(u.jsx)("i",{className:"fa fa-plus-circle"})}),Object(u.jsx)("button",{onClick:function(){return c(n)},className:"btn btn-outline-warning btn-sm float-right",children:Object(u.jsx)("i",{className:"fa fa-minus-circle"})})]})]},n)}))})]}),Object(u.jsxs)("div",{className:"total",children:["Total: $",n]})]})})),w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(D,{}),Object(u.jsx)(B,{})]})},K=(n(50),{onIncrease:N,onDecrease:y,onDelete:E}),F=Object(i.b)((function(t){var e=t.shoppingCart;return{items:e.cartItems,total:e.orderTotal}}),K)((function(t){var e=t.items,n=(t.total,t.onIncrease),r=t.onDecrease,c=t.onDelete;return Object(u.jsx)("div",{className:"wrapper",children:e.map((function(t){var e=t.id,o=t.title,a=t.count,i=t.total,s=t.coverImage,l=t.bookPrice;return Object(u.jsxs)("div",{className:"cart-item",children:[Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)("img",{src:s,alt:"cool",height:"230px",width:"150px"})}),Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("h3",{children:o}),Object(u.jsxs)("p",{className:"lead fw-bold",children:[a," X  $",l," = $",i]}),Object(u.jsx)("button",{onClick:function(){return n(e)},className:"btn btn-outline-dark",children:Object(u.jsx)("i",{className:"fa fa-plus-circle"})}),Object(u.jsx)("button",{onClick:function(){return r(e)},className:"btn btn-outline-dark",children:Object(u.jsx)("i",{className:"fa fa-minus-circle"})}),Object(u.jsx)("button",{onClick:function(){return c(e)},className:"btn btn-outline-dark",children:Object(u.jsx)("i",{className:"fa fa-trash-o"})})]})]},e)}))})})),L=(n(51),function(){return Object(u.jsxs)("main",{role:"main",className:"container",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/restore",component:w,exact:!0}),Object(u.jsx)(l.a,{path:"/cart",component:F})]})]})}),M=function(t){Object(O.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return Object(b.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)(x,{}):this.props.children}}]),n}(r.Component),H=function(){function t(){Object(j.a)(this,t),this.data=[{id:1,title:"\u0413\u0430\u0440\u0440\u0438 \u041f\u043e\u0442\u0442\u0435\u0440 \u0438 \u0443\u0437\u043d\u0438\u043a \u0410\u0437\u043a\u0430\u0431\u0430\u043d\u0430",author:"\u041a\u044d\u0442\u043b\u0438\u043d \u0414\u0436\u043e\u0430\u043d \u0420\u043e\u0443\u043b\u0438\u043d\u0433  ",price:32,coverImage:"https://cdn1.ozone.ru/multimedia/1011027243.jpg"},{id:2,title:"\u0412\u043b\u0430\u0441\u0442\u0435\u043b\u0438\u043d \u043a\u043e\u043b\u0435\u0446: \u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0438 \u043a\u043e\u043b\u044c\u0446\u0430",author:"\u0414\u0436\u043e\u043d \u0420.\u0420. \u0422\u043e\u043b\u043a\u0438\u043d",price:45,coverImage:"https://s1.livelib.ru/boocover/1000499615/o/328a/Tolkin_Dzh.R.R.__Vlastelin_kolets._Trilogiya._Kn._1._Hraniteli_koltsa.jpeg"}]}return Object(b.a)(t,[{key:"getBooks",value:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){Math.random()>.75?n(new Error("Smtng bad happened")):e(t.data)}),700)}))}}]),t}(),U=n(32),P=function(t,e){if(void 0===t)return{books:[],loading:!0,error:null};switch(e.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:e.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:e.payload};default:return t.bookList}},V=n(6),$=function(t,e,n){return 0===e.count?[].concat(Object(V.a)(t.slice(0,n)),Object(V.a)(t.slice(n+1))):-1===n?[].concat(Object(V.a)(t),[e]):[].concat(Object(V.a)(t.slice(0,n)),[e],Object(V.a)(t.slice(n+1)))},z=function(t,e,n){var r=t.bookList.books,c=t.shoppingCart.cartItems,o=r.find((function(t){return t.id===e})),a=c.findIndex((function(t){return t.id===e})),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.id,c=void 0===r?t.id:r,o=e.count,a=void 0===o?0:o,i=e.title,s=void 0===i?t.title:i,l=e.coverImage,u=void 0===l?t.coverImage:l,d=e.total;return{id:c,title:s,count:a+n,total:(void 0===d?0:d)+n*t.price,bookPrice:t.price,coverImage:u}}(o,c[a],n),s=0,l=0,u=$(c,i,a);return u.forEach((function(t){return s+=t.total})),u.forEach((function(t){return l+=t.count})),{cartItems:$(c,i,a),orderTotal:s,count:l}},J=function(t,e){if(void 0===t)return{cartItems:[],orderTotal:0,count:0};switch(e.type){case"BOOK_ADDED_TO_CART":return z(t,e.payload,1);case"BOOK_REMOVED_FROM_CART":return z(t,e.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=t.shoppingCart.cartItems.find((function(t){return t.id===e.payload}));return z(t,e.payload,-n.count);default:return t.shoppingCart}},Q=function(t,e){return{bookList:P(t,e),shoppingCart:J(t,e)}},X=Object(U.a)(Q);X.subscribe((function(){return console.log(X.getState())}));var Y=X,q=new H;a.a.render(Object(u.jsx)(i.a,{store:Y,children:Object(u.jsx)(M,{children:Object(u.jsx)(g,{value:q,children:Object(u.jsx)(s.a,{children:Object(u.jsx)(L,{})})})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.970d349a.chunk.js.map