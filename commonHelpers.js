import{a as o}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const v=document.querySelector(".filter-buttons"),f=document.querySelector(".exercise-filters-list"),p=document.querySelector(".pagination"),b="https://energyflow.b.goit.study/api";let y="Muscles",g=1,m=window.innerWidth,c=0;v.addEventListener("click",$);m<=375?c=8:(m<=768,c=12);async function h(){try{return(await o.get(`${b}/filters`,{params:{filter:y,page:g,limit:c}})).data}catch(e){console.log(e)}}async function $(e){e.preventDefault(),g=1;const s=e.target.dataset.filter;if(y=s,f.innerHTML="",e.target.tagName==="BUTTON")try{h(s).then(a=>{const{results:r,totalPages:i,page:n}=a;if(x(r),i>1){const d=E(n,i);p.innerHTML=d}else p.innerHTML=""})}catch(a){console.log(a)}}function x(e){const t=e.map(({name:s,filter:a,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${a}' data-name='${s}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${a}</p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t)}function E(e,t){let s="";for(let a=1;a<=t;a+=1)s+=`<button class="pagination-btn" type="button">${a}</button>`;return s}async function L(e){g=e.target.textContent,f.innerHTML="";try{const{results:t,page:s,totalPages:a}=await h(),r=t[0].filter;if(s===a)return;x(t)}catch(t){console.log(t)}}p.addEventListener("click",L);document.querySelector(".filter-buttons");const u=document.querySelector(".exercise-filters-list"),w=document.querySelector(".ExercisesHead"),T=document.querySelector(".pagination"),l="https://energyflow.b.goit.study/api";u.addEventListener("click",S);async function S(e){if(e.target===e.currentTarget)return;u.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");console.log(t);const s=t.dataset.filter,a=t.dataset.name;console.log(s),console.log(a);try{const r=await M(s,a);console.log(r),u.innerHTML=B(r.results),w.innerHTML=C(a);const i=document.querySelector("#FilterBtn");console.log(i),i.addEventListener("click",k),T.innerHTML=""}catch(r){console.log(r)}}async function M(e,t){try{return e==="Muscles"?(await o.get(`${l}/exercises`,{params:{muscles:t}})).data:e==="Body parts"?(await o.get(`${l}/exercises`,{params:{bodypart:t}})).data:(await o.get(`${l}/exercises`,{params:{equipment:t}})).data}catch(s){console.log(s)}}function B(e){return e.map(({rating:s,name:a,burnedCalories:r,time:i,bodyPart:n,target:d})=>`<li class="WorkoutCard">
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
        <p class='MainPartName'>${a}</p>
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
  <div class="list-exercises filter-buttons" id='FilterBtn'>
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
`}async function k(e){if(e.target===e.currentTarget)return;const t=e.target.dataset.filter;console.log(t);try{const s=await F(t);u.innerHTML=H(s)}catch(s){console.log(s)}}async function F(e=filterValueDefault){try{return(await o.get(`${l}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(t){console.log(t)}}function H(e){return e.map(({name:s,filter:a,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${a}' data-name='${s}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div>
          <p>${s}</p>
          <p>${a}</p>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
