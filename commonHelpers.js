import"./assets/modal_window-45f6f8fd.js";import{a as l}from"./assets/vendor-8cce9181.js";const s=document.querySelector(".js-menu"),c=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),u=function(){const e=s.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};c.addEventListener("click",u);i.addEventListener("click",u);window.matchMedia("(min-width: 335px)").addEventListener("change",d);function d(e){e.matches&&(s.classList.remove("is-open"),document.body.style.overflow="")}let m=document.querySelector(".quoteFavoritesText"),g=document.querySelector(".quoteFavoritesAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),o=new Date,n=t?new Date(t):null;if(e&&n&&y(o,n)){a(JSON.parse(e));return}let r=(await l.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(r)),localStorage.setItem("quoteDate",o.toISOString()),a(r)}catch(e){console.error("Error:",e)}});function a(e){m.innerText=e.quote,g.innerText=e.author}function y(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}
//# sourceMappingURL=commonHelpers.js.map
