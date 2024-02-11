import{a as c,i as A}from"./vendor-db25513e.js";let N=document.querySelector(".QuoteText"),O=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&W(r,s)){B(JSON.parse(e));return}let a=(await c.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(a)),localStorage.setItem("quoteDate",r.toISOString()),B(a)}catch(e){console.error("Error:",e)}});function B(e){N.innerText=e.quote,O.innerText=e.author}function W(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const U=document.querySelector(".FilterButtons"),p=document.querySelector(".ExerciseFiltersList"),S=document.querySelector(".Pagination"),J="https://energyflow.b.goit.study/api";let k="Muscles",x=1,b=window.innerWidth,f=0;U.addEventListener("click",R);S.addEventListener("click",w);b<=375?f=8:(b<=768,f=12);async function T(){try{return(await c.get(`${J}/filters`,{params:{filter:k,page:x,limit:f}})).data}catch(e){console.log(e)}}async function V(){try{const e=await T().then(t=>{const{results:r,totalPages:s,page:n}=t;if(r&&r.length>0){p.innerHTML=m(r);const a=v(n,s);S.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}V();async function R(e){e.preventDefault(),x=1;const r=e.target.dataset.filter;if(k=r,p.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{T(r).then(s=>{const{results:n,totalPages:a,page:g}=s;p.innerHTML=m(n);{const E=v(g,a);S.innerHTML=E}})}catch(s){console.log(s)}}async function w(e){x=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==x?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),p.innerHTML="";try{const{results:t,page:r,totalPages:s}=await T();if(r===s)return;p.innerHTML=m(t)}catch(t){console.log(t)}}function m(e){return e.map(({name:r,filter:s,imgUrl:n})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${n}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function v(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const i=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),o=document.querySelector(".Pagination"),y="https://energyflow.b.goit.study/api";let u=1,d,h;i.addEventListener("click",F);async function F(e){if(i.removeEventListener("click",F),o.removeEventListener("click",w),o.removeEventListener("click",H),e.target===e.currentTarget)return;i.classList.add("ExerciseCategoryList"),i.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");d=t.dataset.filter,h=t.dataset.name;try{j.innerHTML=_(h);const{page:r,totalPages:s,results:n}=await C(d,h);i.innerHTML=I(n);const a=document.querySelector("#FilterBtn");if(a.addEventListener("click",z),a.addEventListener("click",M),o.innerHTML="",s>1){const g=v(r,s);o.innerHTML=g}o.addEventListener("click",D)}catch(r){console.log(r)}}function M(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",M)}async function C(e,t,r){try{return e==="Muscles"?(await c.get(`${y}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await c.get(`${y}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await c.get(`${y}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch(s){console.log(s)}}function I(e){return e.map(({rating:r,name:s,burnedCalories:n,time:a,bodyPart:g,target:E,_id:P})=>`<li class="WorkoutCard">
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${n} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${g}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${E}</span></p>
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
`}async function z(e){if(i.addEventListener("click",F),i.classList.remove("ExerciseCategoryList"),i.classList.add("ExerciseFiltersList"),u=1,o.removeEventListener("click",D),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){d=e.target.dataset.filter;try{const{page:t,totalPages:r,results:s}=await $(d);if(i.innerHTML=m(s),r>1){const a=v(t,r);o.innerHTML=a}else o.innerHTML="";o.addEventListener("click",H);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch(t){console.log(t)}}}async function $(e=filterValueDefault){try{return(await c.get(`${y}/filters`,{params:{filter:e,page:u,limit:12}})).data}catch(t){console.log(t)}}async function D(e){if(e.target.tagName==="BUTTON"){u=e.target.textContent;try{const{results:t}=await C(d,h,u);i.innerHTML=I(t)}catch(t){console.log(t)}}}async function H(e){u=e.target.textContent;try{const{results:t}=await $(d,u);i.innerHTML=m(t)}catch(t){console.log(t)}}document.querySelector(".ExercisesForm"),document.querySelector(".SearchInput"),document.querySelector(".SearchButton"),document.querySelector(".IconSearch"),document.querySelector("#search");const l={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},Q="https://energyflow.b.goit.study/api/subscription",Y="feedback-form-state",L=JSON.parse(localStorage.getItem(Y));L!=null?l.input.value=L.email:l.input.value="";l.submit.addEventListener("click",K);async function K(e){const t=l.input.value.trim();e.preventDefault();try{const r=await c.post(Q,{email:t});q(JSON.stringify(JSON.parse(r.request.responseText).message)),l.input.value=""}catch(r){q(JSON.stringify(JSON.parse(r.request.responseText).message)),l.input.value=""}}function q(e){A.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-4d480aa9.js.map
