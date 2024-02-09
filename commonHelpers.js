import{a as o}from"./assets/vendor-0cb09735.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const v=document.querySelector(".filter-buttons"),f=document.querySelector(".exercise-filters-list"),p=document.querySelector(".pagination"),$="https://energyflow.b.goit.study/api";let h="Muscles",g=1,m=window.innerWidth,c=0;v.addEventListener("click",b);m<=375?c=8:(m<=768,c=12);async function y(){try{return(await o.get(`${$}/filters`,{params:{filter:h,page:g,limit:c}})).data}catch(e){console.log(e)}}async function b(e){e.preventDefault(),g=1;const s=e.target.dataset.filter;if(h=s,f.innerHTML="",e.target.tagName==="BUTTON")try{y(s).then(t=>{const{results:r,totalPages:i,page:n}=t;if(x(r),i>1){const d=E(n,i);p.innerHTML=d}else p.innerHTML=""})}catch(t){console.log(t)}}function x(e){const a=e.map(({name:s,filter:t,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${t}' data-name='${s}'>
        <img class="img-exercises" src="${r}" alt="${t}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${t}</p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",a)}function E(e,a){let s="";for(let t=1;t<=a;t+=1)s+=`<button class="pagination-btn" type="button">${t}</button>`;return s}async function L(e){g=e.target.textContent,f.innerHTML="";try{const{results:a,page:s,totalPages:t}=await y(),r=a[0].filter;if(s===t)return;x(a)}catch(a){console.log(a)}}p.addEventListener("click",L);const w=document.querySelector(".filter-buttons"),u=document.querySelector(".exercise-filters-list"),T=document.querySelector(".ExercisesHead"),l="https://energyflow.b.goit.study/api";u.addEventListener("click",M);async function M(e){if(e.target===e.currentTarget)return;u.classList.add("ExerciseCategoryList");const a=e.target.closest(".ExercisesItem");console.log(a);const s=a.dataset.filter,t=a.dataset.name;console.log(s),console.log(t);try{const r=await S(s,t);u.innerHTML=B(r),T.innerHTML=C(t)}catch(r){console.log(r)}}async function S(e,a){try{return e==="Muscles"?(await o.get(`${l}/exercises`,{params:{muscles:a}})).data.results:e==="Body parts"?(await o.get(`${l}/exercises`,{params:{bodypart:a}})).data.results:(await o.get(`${l}/exercises`,{params:{equipment:a}})).data.results}catch(s){console.log(s)}}function B(e){return e.map(({rating:s,name:t,burnedCalories:r,time:i,bodyPart:n,target:d})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='./img/symbol-defs.svg#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${t}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${r} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${d}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function C(e){return`<div>
  <h2 class="title-exercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="list-exercises filter-buttons ">
    <button class="item-exercises" data-filter="Muscles">Muscles</button>
    <button class="item-exercises" data-filter="Body parts">Body parts</button>
    <button class="item-exercises" data-filter="Equipment">Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='./img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}w.addEventListener("click",k);async function k(e){e.preventDefault();const s=e.target.dataset.filter;if(console.log(s),e.target.tagName==="BUTTON")try{H(s).then(t=>{console.log(t),u.innerHTML=q(t)})}catch(t){console.log(t)}}async function H(e=filterValueDefault){try{return(await o.get(`${l}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(a){console.log(a)}}function q(e){return e.map(({name:s,filter:t,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${t}' data-name='${s}'>
        <img class="img-exercises" src="${r}" alt="${t}">
        <div>
          <p>${s}</p>
          <p>${t}</p>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
