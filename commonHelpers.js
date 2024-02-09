import{a as i,i as g}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const F=document.querySelector(".filter-buttons"),h=document.querySelector(".exercise-filters-list"),y=document.querySelector(".pagination"),q="https://energyflow.b.goit.study/api";let S="Muscles",x=1,b=window.innerWidth,u=0;F.addEventListener("click",C);b<=375?u=8:(b<=768,u=12);async function E(){try{return(await i.get(`${q}/filters`,{params:{filter:S,page:x,limit:u}})).data}catch(e){console.log(e)}}async function C(e){e.preventDefault(),x=1;const t=e.target.dataset.filter;if(S=t,h.innerHTML="",e.target.tagName==="BUTTON")try{E(t).then(o=>{const{results:r,totalPages:a,page:n}=o;if(w(r),a>1){const c=T(n,a);y.innerHTML=c}else y.innerHTML=""})}catch(o){console.log(o)}}function w(e){const s=e.map(({name:t,filter:o,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div class="filter-text">
          <p class="filter-exercises">${t}</p>
          <p class="filter-name">${o}</p>
        </div>
      </li>`).join("");h.insertAdjacentHTML("beforeend",s)}function T(e,s){let t="";for(let o=1;o<=s;o+=1)t+=`<button class="pagination-btn" type="button">${o}</button>`;return t}async function B(e){x=e.target.textContent,h.innerHTML="";try{const{results:s,page:t,totalPages:o}=await E(),r=s[0].filter;if(t===o)return;w(s)}catch(s){console.log(s)}}y.addEventListener("click",B);document.querySelector(".filter-buttons");const p=document.querySelector(".exercise-filters-list"),M=document.querySelector(".ExercisesHead"),H=document.querySelector(".pagination"),d="https://energyflow.b.goit.study/api";p.addEventListener("click",O);async function O(e){if(e.target===e.currentTarget)return;p.classList.add("ExerciseCategoryList");const s=e.target.closest(".ExercisesItem");console.log(s);const t=s.dataset.filter,o=s.dataset.name;console.log(t),console.log(o);try{const r=await N(t,o);console.log(r),p.innerHTML=I(r.results),M.innerHTML=P(o),document.querySelector(".ExercisesForm").addEventListener("submit",n(t,o));async function n(L){try{const f="https://energyflow.b.goit.study/api/exercises?",k=await i.get(f,{params:{bodypart:"back",keyword:L,page:1,limit:9}});renderExercises(k.data.results)}catch(f){handleError(f)}finally{searchForm.reset()}}const c=document.querySelector("#FilterBtn");console.log(c),c.addEventListener("click",W),H.innerHTML=""}catch(r){console.log(r)}}async function N(e,s){try{return e==="Muscles"?(await i.get(`${d}/exercises`,{params:{muscles:s}})).data:e==="Body parts"?(await i.get(`${d}/exercises`,{params:{bodypart:s}})).data:(await i.get(`${d}/exercises`,{params:{equipment:s}})).data}catch(t){console.log(t)}}function I(e){return e.map(({rating:t,name:o,burnedCalories:r,time:a,bodyPart:n,target:c})=>`<li class="WorkoutCard">
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
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${c}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function P(e){return`<div>
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
`}async function W(e){if(e.target===e.currentTarget)return;const s=e.target.dataset.filter;console.log(s);try{const t=await D(s);p.innerHTML=R(t)}catch(t){console.log(t)}}async function D(e=filterValueDefault){try{return(await i.get(`${d}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function R(e){return e.map(({name:t,filter:o,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div>
          <p>${t}</p>
          <p>${o}</p>
        </div>
      </li>`).join("")}const $=document.querySelector(".SearchExercises"),V=document.querySelector(".SearchInput"),U=document.querySelector(".SearchExercisesList");document.querySelector("#LoadMoreButton");let v="";$.addEventListener("submit",A);function A(e){e.preventDefault(),v=V.value,J(v)}async function J(e){try{const s="https://energyflow.b.goit.study/api/exercises?",t=await i.get(s,{params:{bodypart:"back",keyword:e,page:1,limit:9}});j(t.data.results)}catch(s){z(s)}finally{$.reset()}}function j(e){e.length===0?_():e.forEach(s=>{const t=document.createElement("li");t.textContent=s.name,U.appendChild(t)})}function z(e){console.log(e)}function _(){g.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const l={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},K="https://energyflow.b.goit.study/api/subscription",Y="feedback-form-state",m=JSON.parse(localStorage.getItem(Y));m!=null?l.input.value=m.email:l.input.value="";l.submit.addEventListener("click",G);async function G(e){const s=l.input.value.trim();e.preventDefault();try{const t=await i.post(K,{email:s});g.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),l.input.value=""}catch(t){g.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),l.input.value=""}}
//# sourceMappingURL=commonHelpers.js.map
