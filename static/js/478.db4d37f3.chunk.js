"use strict";(self.webpackChunkreact_pizza=self.webpackChunkreact_pizza||[]).push([[478],{478:(s,c,e)=>{e.r(c),e.d(c,{default:()=>d});e(791);var i=e(960),t=e(802),a=e(329);const n=s=>{let{id:c,name:e,type:n,size:r,price:l,count:d,imageUrl:m}=s;const o=(0,t.T)();return(0,a.jsx)("div",{className:"content__items",children:(0,a.jsxs)("div",{className:"cart__item",children:[(0,a.jsx)("div",{className:"cart__item-img",children:(0,a.jsx)("img",{className:"pizza-block__image",src:m,alt:"Pizza"})}),(0,a.jsxs)("div",{className:"cart__item-info",children:[(0,a.jsx)("h3",{children:e}),(0,a.jsxs)("p",{children:[n,", ",r," \u0441\u043c."]})]}),(0,a.jsxs)("div",{className:"cart__item-count",children:[(0,a.jsx)("button",{disabled:1==d,className:"button button--outline button--circle cart__item-count-minus",onClick:()=>o((0,i.uz)({id:c})),children:(0,a.jsx)("img",{src:"/assets/img/minus-icon.svg"})}),(0,a.jsx)("b",{children:d}),(0,a.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",onClick:()=>o((0,i.$)({id:c})),children:(0,a.jsx)("img",{src:"/assets/img/plus-icon.svg"})})]}),(0,a.jsx)("div",{className:"cart__item-price",children:(0,a.jsxs)("b",{children:[l*d," \u20bd"]})}),(0,a.jsx)("div",{className:"cart__item-remove",children:(0,a.jsx)("div",{className:"button button--outline button--circle",onClick:()=>o((0,i.CV)({id:c})),children:(0,a.jsx)("img",{src:"/assets/img/close-icon.svg"})})})]})})};var r=e(87);const l=()=>(0,a.jsx)("div",{className:"container container--cart",children:(0,a.jsxs)("div",{className:"cart cart--empty",children:[(0,a.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),(0,a.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",(0,a.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),(0,a.jsx)("img",{src:"assets/img/empty-cart.png",alt:"Empty cart"}),(0,a.jsx)(r.rU,{to:"/React-pizza",children:(0,a.jsx)("div",{className:"button button--black",children:(0,a.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})})]})}),d=()=>{const s=(0,t.T)(),{items:c,totalPrice:e}=(0,t.C)((s=>s.cart)),d=c.reduce(((s,c)=>s+c.count),0);return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"content",children:c.length>0?(0,a.jsx)("div",{className:"container container--cart",children:(0,a.jsxs)("div",{className:"cart",children:[(0,a.jsxs)("div",{className:"cart__top",children:[(0,a.jsxs)("div",{className:"cart-left",children:[(0,a.jsx)("img",{src:"/assets/img/delete-items.svg",alt:""}),(0,a.jsx)("h2",{className:"content__title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),(0,a.jsxs)("div",{className:"cart__clear",onClick:()=>s((0,i.H5)()),children:[(0,a.jsx)("img",{src:"/assets/img/trash.svg"}),(0,a.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,a.jsx)("div",{className:"content__items",children:c.map((s=>(0,a.jsx)(n,{...s},s.id)))}),(0,a.jsxs)("div",{className:"cart__bottom",children:[(0,a.jsxs)("div",{className:"cart__bottom-details",children:[(0,a.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",(0,a.jsxs)("b",{children:[" ",d||0," \u0448\u0442."]})]}),(0,a.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430:",(0,a.jsxs)("b",{children:[e||0," \u20bd"]})]})]}),(0,a.jsxs)("div",{className:"cart__bottom-buttons",children:[(0,a.jsx)(r.rU,{to:"/React-pizza",children:(0,a.jsxs)("div",{className:"button button--outline button--add go-back-btn",children:[(0,a.jsx)("img",{src:"/assets/img/grey-arrow-left.svg"}),(0,a.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),(0,a.jsx)("div",{className:"button pay-btn",children:(0,a.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})}):(0,a.jsx)(l,{})})})}}}]);
//# sourceMappingURL=478.db4d37f3.chunk.js.map