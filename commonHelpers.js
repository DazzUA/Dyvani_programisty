import{a as y}from"./assets/vendor-0cb09735.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L=document.querySelector(".filter-buttons"),a=document.querySelector(".exercise-filters-list"),l=document.querySelector(".pagination"),h="https://energyflow.b.goit.study/api";let d="Muscles",u=1,f=window.innerWidth,c=0;L.addEventListener("click",b);f<=375?c=8:(f<=768,c=12);async function p(){try{return(await y.get(`${h}/filters`,{params:{filter:d,page:u,limit:c}})).data}catch(n){console.log(n)}}async function b(n){n.preventDefault(),u=1;const s=n.target.dataset.filter;if(d=s,a.innerHTML="",n.target.tagName==="BUTTON")try{p(s).then(t=>{const{results:e,totalPages:r,page:o}=t;if(g(e),r>1){const m=P(o,r);l.innerHTML=m}else l.innerHTML=""})}catch(t){console.log(t)}}function g(n){const i=n.map(({name:s,filter:t,imgUrl:e})=>` <li class="filter-list" data-filter>
        <img class="img-exercises" src="${e}" alt="${t}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${t}</p>
        </div>
      </li>`).join("");a.insertAdjacentHTML("beforeend",i)}function P(n,i){let s="";for(let t=1;t<=i;t+=1)s+=`<button class="pagination-btn" type="button">${t}</button>`;return s}async function x(n){u=n.target.textContent,a.innerHTML="";try{const{results:i,page:s,totalPages:t}=await p(),e=i[0].filter;if(s===t)return;g(i)}catch(i){console.log(i)}}l.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
