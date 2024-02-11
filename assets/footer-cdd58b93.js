import{a as c,i as A}from"./vendor-db25513e.js";let N=document.querySelector(".QuoteText"),O=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&W(r,s)){B(JSON.parse(e));return}let n=(await c.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",r.toISOString()),B(n)}catch(e){console.error("Error:",e)}});function B(e){N.innerText=e.quote,O.innerText=e.author}function W(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const U=document.querySelector(".FilterButtons"),m=document.querySelector(".ExerciseFiltersList"),S=document.querySelector(".Pagination"),J="https://energyflow.b.goit.study/api";let q="Muscles",v=1,b=window.innerWidth,y=0;U.addEventListener("click",R);S.addEventListener("click",w);b<=375?y=8:(b<=768,y=12);async function T(){try{return(await c.get(`${J}/filters`,{params:{filter:q,page:v,limit:y}})).data}catch(e){console.log(e)}}async function V(){try{const e=await T().then(t=>{const{results:r,totalPages:s,page:a}=t;if(r&&r.length>0){m.innerHTML=f(r);const n=E(a,s);S.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}V();async function R(e){e.preventDefault(),v=1;const r=e.target.dataset.filter;if(q=r,m.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{T(r).then(s=>{const{results:a,totalPages:n,page:l}=s;m.innerHTML=f(a);{const p=E(l,n);S.innerHTML=p}})}catch(s){console.log(s)}}async function w(e){v=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==v?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),m.innerHTML="";try{const{results:t,page:r,totalPages:s}=await T();if(r===s)return;m.innerHTML=f(t)}catch(t){console.log(t)}}function f(e){return e.map(({name:r,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function E(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const i=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),o=document.querySelector(".Pagination"),h="https://energyflow.b.goit.study/api";let d=1,g,x;i.addEventListener("click",F);async function F(e){if(i.removeEventListener("click",F),o.removeEventListener("click",w),o.removeEventListener("click",H),e.target===e.currentTarget)return;i.classList.add("ExerciseCategoryList"),i.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");g=t.dataset.filter,x=t.dataset.name;try{j.innerHTML=_(x);const{page:r,totalPages:s,results:a}=await C(g,x);i.innerHTML=I(a);const n=document.querySelector(".StartBtn"),l=document.querySelector("#FilterBtn");if(l.addEventListener("click",z),l.addEventListener("click",M),o.innerHTML="",s>1){const p=E(r,s);o.innerHTML=p}o.addEventListener("click",D)}catch(r){console.log(r)}}function M(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",M)}async function C(e,t,r){try{return e==="Muscles"?(await c.get(`${h}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await c.get(`${h}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await c.get(`${h}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch(s){console.log(s)}}function I(e){return e.map(({rating:r,name:s,burnedCalories:a,time:n,bodyPart:l,target:p,_id:P})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${P}'>
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
        <p class='MainPartName'>${s}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${n} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${p}</span></p>
        </li>
      </ul>

    </li>`).join("")}function _(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles" id='MusclesBtn'>Muscles</button>
    <button class="ItemExercises" data-filter="Body parts" id='BodyPartBtn'>Body parts</button>
    <button class="ItemExercises" data-filter="Equipment" id='EquipmentBtn'>Equipment</button>
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
`}async function z(e){if(i.addEventListener("click",F),i.classList.remove("ExerciseCategoryList"),i.classList.add("ExerciseFiltersList"),d=1,o.removeEventListener("click",D),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){g=e.target.dataset.filter;try{const{page:t,totalPages:r,results:s}=await $(g);if(i.innerHTML=f(s),r>1){const n=E(t,r);o.innerHTML=n}else o.innerHTML="";o.addEventListener("click",H);const a=document.querySelector(".TitleExercises");a.innerHTML="Exercises"}catch(t){console.log(t)}}}async function $(e=filterValueDefault){try{return(await c.get(`${h}/filters`,{params:{filter:e,page:d,limit:12}})).data}catch(t){console.log(t)}}async function D(e){if(e.target.tagName==="BUTTON"){d=e.target.textContent;try{const{results:t}=await C(g,x,d);i.innerHTML=I(t)}catch(t){console.log(t)}}}async function H(e){d=e.target.textContent;try{const{results:t}=await $(g,d);i.innerHTML=f(t)}catch(t){console.log(t)}}document.querySelector(".SearchExercises"),document.querySelector(".SearchInput"),document.querySelector(".SearchExercisesList");const u={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},Q="https://energyflow.b.goit.study/api/subscription",Y="feedback-form-state",L=JSON.parse(localStorage.getItem(Y));L!=null?u.input.value=L.email:u.input.value="";u.submit.addEventListener("click",K);async function K(e){const t=u.input.value.trim();e.preventDefault();try{const r=await c.post(Q,{email:t});k(JSON.stringify(JSON.parse(r.request.responseText).message)),u.input.value=""}catch(r){k(JSON.stringify(JSON.parse(r.request.responseText).message)),u.input.value=""}}function k(e){A.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-cdd58b93.js.map
