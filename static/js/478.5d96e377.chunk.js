"use strict";(self.webpackChunkreact_pizza=self.webpackChunkreact_pizza||[]).push([[478],{478:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});t(791);var i=t(960),c=t(802),n=t(329);const a=s=>{let{id:e,name:t,type:a,size:r,price:l,count:d,imageUrl:o}=s;const m=(0,c.T)();return(0,n.jsx)("div",{className:"content__items",children:(0,n.jsxs)("div",{className:"cart__item",children:[(0,n.jsx)("div",{className:"cart__item-img",children:(0,n.jsx)("img",{className:"pizza-block__image",src:o,alt:"Pizza"})}),(0,n.jsxs)("div",{className:"cart__item-info",children:[(0,n.jsx)("h3",{children:t}),(0,n.jsxs)("p",{children:[a,", ",r," \u0441\u043c."]})]}),(0,n.jsxs)("div",{className:"cart__item-count",children:[(0,n.jsx)("button",{disabled:1==d,className:"button button--outline button--circle cart__item-count-minus",onClick:()=>m((0,i.uz)({id:e})),children:(0,n.jsx)("img",{src:"assets/img/minus-icon.svg"})}),(0,n.jsx)("b",{children:d}),(0,n.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",onClick:()=>m((0,i.$)({id:e})),children:(0,n.jsx)("img",{src:"assets/img/plus-icon.svg"})})]}),(0,n.jsx)("div",{className:"cart__item-price",children:(0,n.jsxs)("b",{children:[l*d," \u20bd"]})}),(0,n.jsx)("div",{className:"cart__item-remove",children:(0,n.jsx)("div",{className:"button button--outline button--circle",onClick:()=>m((0,i.CV)({id:e})),children:(0,n.jsx)("img",{src:"assets/img/close-icon.svg"})})})]})})};var r=t(87);const l=()=>(0,n.jsx)("div",{className:"container container--cart",children:(0,n.jsxs)("div",{className:"cart cart--empty",children:[(0,n.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),(0,n.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",(0,n.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),(0,n.jsx)("img",{src:"assets/img/empty-cart.png",alt:"Empty cart"}),(0,n.jsx)(r.rU,{to:"/",children:(0,n.jsx)("div",{className:"button button--black",children:(0,n.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})})]})}),d=()=>{const s=(0,c.T)(),{items:e,totalPrice:t}=(0,c.C)((s=>s.cart)),d=e.reduce(((s,e)=>s+e.count),0);return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"content",children:e.length>0?(0,n.jsx)("div",{className:"container container--cart",children:(0,n.jsxs)("div",{className:"cart",children:[(0,n.jsxs)("div",{className:"cart__top",children:[(0,n.jsxs)("div",{className:"cart-left",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",children:[(0,n.jsx)("path",{d:"M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825",stroke:"#3F3F3F",strokeWidth:"2.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,n.jsx)("h2",{className:"content__title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),(0,n.jsxs)("div",{className:"cart__clear",onClick:()=>s((0,i.H5)()),children:[(0,n.jsx)("img",{src:"assets/img/trash.svg"}),(0,n.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,n.jsx)("div",{className:"content__items",children:e.map((s=>(0,n.jsx)(a,{...s},s.id)))}),(0,n.jsxs)("div",{className:"cart__bottom",children:[(0,n.jsxs)("div",{className:"cart__bottom-details",children:[(0,n.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",(0,n.jsxs)("b",{children:[" ",d||0," \u0448\u0442."]})]}),(0,n.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430:",(0,n.jsxs)("b",{children:[t||0," \u20bd"]})]})]}),(0,n.jsxs)("div",{className:"cart__bottom-buttons",children:[(0,n.jsx)(r.rU,{to:"/",children:(0,n.jsxs)("div",{className:"button button--outline button--add go-back-btn",children:[(0,n.jsx)("img",{src:"assets/img/grey-arrow-left.svg"}),(0,n.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),(0,n.jsx)("div",{className:"button pay-btn",children:(0,n.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})}):(0,n.jsx)(l,{})})})}}}]);
//# sourceMappingURL=478.5d96e377.chunk.js.map