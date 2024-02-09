import{a as n,i as h}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const E=document.querySelector(".filter-buttons"),m=document.querySelector(".exercise-filters-list"),g=document.querySelector(".pagination"),$="https://energyflow.b.goit.study/api";let v="Muscles",y=1,x=window.innerWidth,l=0;E.addEventListener("click",L);x<=375?l=8:(x<=768,l=12);async function b(){try{return(await n.get(`${$}/filters`,{params:{filter:v,page:y,limit:l}})).data}catch(t){console.log(t)}}async function L(t){t.preventDefault(),y=1;const e=t.target.dataset.filter;if(v=e,m.innerHTML="",t.target.tagName==="BUTTON")try{b(e).then(a=>{const{results:r,totalPages:o,page:i}=a;if(S(r),o>1){const p=w(i,o);g.innerHTML=p}else g.innerHTML=""})}catch(a){console.log(a)}}function S(t){const s=t.map(({name:e,filter:a,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${a}' data-name='${e}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div class="filter-text">
          <p class="filter-exercises">${e}</p>
          <p class="filter-name">${a}</p>
        </div>
      </li>`).join("");m.insertAdjacentHTML("beforeend",s)}function w(t,s){let e="";for(let a=1;a<=s;a+=1)e+=`<button class="pagination-btn" type="button">${a}</button>`;return e}async function T(t){y=t.target.textContent,m.innerHTML="";try{const{results:s,page:e,totalPages:a}=await b(),r=s[0].filter;if(e===a)return;S(s)}catch(s){console.log(s)}}g.addEventListener("click",T);document.querySelector(".filter-buttons");const d=document.querySelector(".exercise-filters-list"),C=document.querySelector(".ExercisesHead"),F=document.querySelector(".pagination"),u="https://energyflow.b.goit.study/api";d.addEventListener("click",k);async function k(t){if(t.target===t.currentTarget)return;d.classList.add("ExerciseCategoryList");const s=t.target.closest(".ExercisesItem");console.log(s);const e=s.dataset.filter,a=s.dataset.name;console.log(e),console.log(a);try{const r=await q(e,a);console.log(r),d.innerHTML=B(r.results),C.innerHTML=M(a),document.querySelector(".ExercisesForm").addEventListener("submit",onFormSubmit(e,a));const i=document.querySelector("#FilterBtn");console.log(i),i.addEventListener("click",H),F.innerHTML=""}catch(r){console.log(r)}}async function q(t,s){try{return t==="Muscles"?(await n.get(`${u}/exercises`,{params:{muscles:s}})).data:t==="Body parts"?(await n.get(`${u}/exercises`,{params:{bodypart:s}})).data:(await n.get(`${u}/exercises`,{params:{equipment:s}})).data}catch(e){console.log(e)}}function B(t){return t.map(({rating:e,name:a,burnedCalories:r,time:o,bodyPart:i,target:p})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${e}</p>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${r} / ${o} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${i}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${p}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function M(t){return`<div>
  <h2 class="title-exercises">Exercises / <span class="NameValue"> ${t}</span></h2>
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
`}async function H(t){if(t.target===t.currentTarget)return;const s=t.target.dataset.filter;console.log(s);try{const e=await O(s);d.innerHTML=N(e)}catch(e){console.log(e)}}async function O(t=filterValueDefault){try{return(await n.get(`${u}/filters`,{params:{filter:t,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function N(t){return t.map(({name:e,filter:a,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${a}' data-name='${e}'>
        <img class="img-exercises" src="${r}" alt="${a}">
        <div>
          <p>${e}</p>
          <p>${a}</p>
        </div>
      </li>`).join("")}const c={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},P="https://energyflow.b.goit.study/api/subscription",I="feedback-form-state",f=JSON.parse(localStorage.getItem(I));f!=null?c.input.value=f.email:c.input.value="";c.submit.addEventListener("click",W);async function W(t){const s=c.input.value.trim();t.preventDefault();try{const e=await n.post(P,{email:s});h.show({position:"topRight",message:JSON.stringify(JSON.parse(e.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),c.input.value=""}catch(e){h.show({position:"topRight",message:JSON.stringify(JSON.parse(e.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),c.input.value=""}}
//# sourceMappingURL=commonHelpers.js.map
