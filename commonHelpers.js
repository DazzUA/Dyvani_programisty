import{a as n}from"./assets/vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const v=document.querySelector(".filter-buttons"),f=document.querySelector(".exercise-filters-list"),p=document.querySelector(".pagination"),b="https://energyflow.b.goit.study/api";let y="Muscles",g=1,m=window.innerWidth,c=0;v.addEventListener("click",E);m<=375?c=8:(m<=768,c=12);async function h(){try{return(await n.get(`${b}/filters`,{params:{filter:y,page:g,limit:c}})).data}catch(e){console.log(e)}}async function E(e){e.preventDefault(),g=1;const t=e.target.dataset.filter;if(y=t,f.innerHTML="",e.target.tagName==="BUTTON")try{h(t).then(a=>{const{results:r,totalPages:i,page:o}=a;if(x(r),i>1){const d=$(o,i);p.innerHTML=d}else p.innerHTML=""})}catch(a){console.log(a)}}function x(e){const s=e.map(({name:t,filter:a,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${a}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div class="filter-text">
          <p class="filter-exercises">${t}</p>
          <p class="filter-name">${a}</p>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",s)}function $(e,s){let t="";for(let a=1;a<=s;a+=1)t+=`<button class="pagination-btn" type="button">${a}</button>`;return t}async function L(e){g=e.target.textContent,f.innerHTML="";try{const{results:s,page:t,totalPages:a}=await h(),r=s[0].filter;if(t===a)return;x(s)}catch(s){console.log(s)}}p.addEventListener("click",L);document.querySelector(".filter-buttons");const u=document.querySelector(".exercise-filters-list"),S=document.querySelector(".ExercisesHead"),w=document.querySelector(".pagination"),l="https://energyflow.b.goit.study/api";u.addEventListener("click",T);async function T(e){if(e.target===e.currentTarget)return;u.classList.add("ExerciseCategoryList");const s=e.target.closest(".ExercisesItem");console.log(s);const t=s.dataset.filter,a=s.dataset.name;console.log(t),console.log(a);try{const r=await F(t,a);console.log(r),u.innerHTML=M(r.results),S.innerHTML=B(a),document.querySelector(".ExercisesForm").addEventListener("submit",onFormSubmit(t,a));const o=document.querySelector("#FilterBtn");console.log(o),o.addEventListener("click",C),w.innerHTML=""}catch(r){console.log(r)}}async function F(e,s){try{return e==="Muscles"?(await n.get(`${l}/exercises`,{params:{muscles:s}})).data:e==="Body parts"?(await n.get(`${l}/exercises`,{params:{bodypart:s}})).data:(await n.get(`${l}/exercises`,{params:{equipment:s}})).data}catch(t){console.log(t)}}function M(e){return e.map(({rating:t,name:a,burnedCalories:r,time:i,bodyPart:o,target:d})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
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
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${d}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function B(e){return`<div>
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
`}async function C(e){if(e.target===e.currentTarget)return;const s=e.target.dataset.filter;console.log(s);try{const t=await k(s);u.innerHTML=H(t)}catch(t){console.log(t)}}async function k(e=filterValueDefault){try{return(await n.get(`${l}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function H(e){return e.map(({name:t,filter:a,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${a}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div>
          <p>${t}</p>
          <p>${a}</p>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
