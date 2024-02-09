import{a as n}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const x=document.querySelector(".filter-buttons"),f=document.querySelector(".exercise-filters-list"),d=document.querySelector(".pagination"),b="https://energyflow.b.goit.study/api";let h="Muscles",g=1,m=window.innerWidth,c=0;x.addEventListener("click",L);m<=375?c=8:(m<=768,c=12);async function y(){try{return(await n.get(`${b}/filters`,{params:{filter:h,page:g,limit:c}})).data}catch(t){console.log(t)}}async function L(t){t.preventDefault(),g=1;const r=t.target.dataset.filter;if(h=r,f.innerHTML="",t.target.tagName==="BUTTON")try{y(r).then(a=>{const{results:e,totalPages:i,page:o}=a;if(v(e),i>1){const l=E(o,i);d.innerHTML=l}else d.innerHTML=""})}catch(a){console.log(a)}}function v(t){const s=t.map(({name:r,filter:a,imgUrl:e})=>` <li class="filter-list ExercisesItem" data-filter='${a}' data-name='${r}'>
        <img class="img-exercises" src="${e}" alt="${a}">
        <div class="filter-text">
          <p class="filter-exercises">${r}</p>
          <p class="filter-name">${a}</p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",s)}function E(t,s){let r="";for(let a=1;a<=s;a+=1)r+=`<button class="pagination-btn" type="button">${a}</button>`;return r}async function $(t){g=t.target.textContent,f.innerHTML="";try{const{results:s,page:r,totalPages:a}=await y(),e=s[0].filter;if(r===a)return;v(s)}catch(s){console.log(s)}}d.addEventListener("click",$);document.querySelector(".filter-buttons");const p=document.querySelector(".exercise-filters-list"),w=document.querySelector(".ExercisesHead"),u="https://energyflow.b.goit.study/api";p.addEventListener("click",S);async function S(t){if(t.target===t.currentTarget)return;p.classList.add("ExerciseCategoryList");const s=t.target.closest(".ExercisesItem");console.log(s);const r=s.dataset.filter,a=s.dataset.name;console.log(r),console.log(a);try{const e=await T(r,a);p.innerHTML=M(e),w.innerHTML=C(a)}catch(e){console.log(e)}}async function T(t,s){try{return t==="Muscles"?(await n.get(`${u}/exercises`,{params:{muscles:s}})).data.results:t==="Body parts"?(await n.get(`${u}/exercises`,{params:{bodypart:s}})).data.results:(await n.get(`${u}/exercises`,{params:{equipment:s}})).data.results}catch(r){console.log(r)}}function M(t){return t.map(({rating:r,name:a,burnedCalories:e,time:i,bodyPart:o,target:l})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='/src/img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='/src/img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='/src/img/symbol-defs.svg#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${a}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${e} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
      </ul>
    </li>`).join("")}function C(t){return`<div>
  <h2 class="title-exercises">Exercises / <span class="NameValue"> ${t}</span></h2>
  <div class="ExercisesHeared">
  <div class="list-exercises filter-buttons">
    <button class="item-exercises" data-filter="Muscles">Muscles</button>
    <button class="item-exercises" data-filter="Body parts">Body parts</button>
    <button class="item-exercises" data-filter="Equipment">Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='/src/img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}
//# sourceMappingURL=commonHelpers.js.map
