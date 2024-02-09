import{a as i,i as m}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const $=document.querySelector(".filter-buttons"),y=document.querySelector(".exercise-filters-list"),g=document.querySelector(".pagination"),w="https://energyflow.b.goit.study/api";let b="Muscles",h=1,x=window.innerWidth,l=0;$.addEventListener("click",k);x<=375?l=8:(x<=768,l=12);async function S(){try{return(await i.get(`${w}/filters`,{params:{filter:b,page:h,limit:l}})).data}catch(e){console.log(e)}}async function k(e){e.preventDefault(),h=1;const t=e.target.dataset.filter;if(b=t,y.innerHTML="",e.target.tagName==="BUTTON")try{S(t).then(o=>{const{results:r,totalPages:a,page:n}=o;if(E(r),a>1){const p=q(n,a);g.innerHTML=p}else g.innerHTML=""})}catch(o){console.log(o)}}function E(e){const s=e.map(({name:t,filter:o,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div class="filter-text">
          <p class="filter-exercises">${t}</p>
          <p class="filter-name">${o}</p>
        </div>
      </li>`).join("");y.insertAdjacentHTML("beforeend",s)}function q(e,s){let t="";for(let o=1;o<=s;o+=1)t+=`<button class="pagination-btn" type="button">${o}</button>`;return t}async function C(e){h=e.target.textContent,y.innerHTML="";try{const{results:s,page:t,totalPages:o}=await S(),r=s[0].filter;if(t===o)return;E(s)}catch(s){console.log(s)}}g.addEventListener("click",C);document.querySelector(".filter-buttons");const d=document.querySelector(".exercise-filters-list"),F=document.querySelector(".ExercisesHead"),T=document.querySelector(".pagination"),u="https://energyflow.b.goit.study/api";d.addEventListener("click",B);async function B(e){if(e.target===e.currentTarget)return;d.classList.add("ExerciseCategoryList");const s=e.target.closest(".ExercisesItem");console.log(s);const t=s.dataset.filter,o=s.dataset.name;console.log(t),console.log(o);try{const r=await M(t,o);console.log(r),d.innerHTML=H(r.results),F.innerHTML=O(o),document.querySelector(".ExercisesForm").addEventListener("submit",onFormSubmit(t,o));const n=document.querySelector("#FilterBtn");console.log(n),n.addEventListener("click",N),T.innerHTML=""}catch(r){console.log(r)}}async function M(e,s){try{return e==="Muscles"?(await i.get(`${u}/exercises`,{params:{muscles:s}})).data:e==="Body parts"?(await i.get(`${u}/exercises`,{params:{bodypart:s}})).data:(await i.get(`${u}/exercises`,{params:{equipment:s}})).data}catch(t){console.log(t)}}function H(e){return e.map(({rating:t,name:o,burnedCalories:r,time:a,bodyPart:n,target:p})=>`<li class="WorkoutCard">
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
        <p class='MainPartName'>${o}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${r} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${p}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function O(e){return`<div>
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
`}async function N(e){if(e.target===e.currentTarget)return;const s=e.target.dataset.filter;console.log(s);try{const t=await I(s);d.innerHTML=P(t)}catch(t){console.log(t)}}async function I(e=filterValueDefault){try{return(await i.get(`${u}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function P(e){return e.map(({name:t,filter:o,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div>
          <p>${t}</p>
          <p>${o}</p>
        </div>
      </li>`).join("")}const L=document.querySelector(".SearchExercises"),W=document.querySelector(".SearchInput"),D=document.querySelector(".SearchExercisesList");document.querySelector("#LoadMoreButton");let v="";L.addEventListener("submit",R);function R(e){e.preventDefault(),v=W.value,V(v)}async function V(e){try{const s="https://energyflow.b.goit.study/api/exercises?",t=await i.get(s,{params:{bodypart:"back",keyword:e,page:1,limit:9}});U(t.data.results)}catch(s){A(s)}finally{L.reset()}}function U(e){e.length===0?J():e.forEach(s=>{const t=document.createElement("li");t.textContent=s.name,D.appendChild(t)})}function A(e){console.log(e)}function J(){m.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const c={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},j="https://energyflow.b.goit.study/api/subscription",z="feedback-form-state",f=JSON.parse(localStorage.getItem(z));f!=null?c.input.value=f.email:c.input.value="";c.submit.addEventListener("click",_);async function _(e){const s=c.input.value.trim();e.preventDefault();try{const t=await i.post(j,{email:s});m.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),c.input.value=""}catch(t){m.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),c.input.value=""}}
//# sourceMappingURL=commonHelpers.js.map
