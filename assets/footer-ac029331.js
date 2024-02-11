import{a as d,i as M}from"./vendor-db25513e.js";let O=document.querySelector(".QuoteText"),W=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&U(r,s)){q(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",r.toISOString()),q(n)}catch(e){console.error("Error:",e)}});function q(e){O.innerText=e.quote,W.innerText=e.author}function U(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const J=document.querySelector(".FilterButtons"),f=document.querySelector(".ExerciseFiltersList"),S=document.querySelector(".Pagination"),R="https://energyflow.b.goit.study/api";let k="Muscles",v=1,I=window.innerWidth,h=0;J.addEventListener("click",z);S.addEventListener("click",w);I<=375?h=8:(I<=768,h=12);async function F(){try{return(await d.get(`${R}/filters`,{params:{filter:k,page:v,limit:h}})).data}catch(e){console.log(e)}}async function V(){try{const e=await F().then(t=>{const{results:r,totalPages:s,page:a}=t;if(r&&r.length>0){f.innerHTML=y(r);const n=L(a,s);S.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}V();async function z(e){e.preventDefault(),v=1;const r=e.target.dataset.filter;if(k=r,f.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{F(r).then(s=>{const{results:a,totalPages:n,page:l}=s;f.innerHTML=y(a);{const u=L(l,n);S.innerHTML=u}})}catch(s){console.log(s)}}async function w(e){v=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==v?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),f.innerHTML="";try{const{results:t,page:r,totalPages:s}=await F();if(r===s)return;f.innerHTML=y(t)}catch(t){console.log(t)}}function y(e){return e.map(({name:r,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function L(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const i=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),o=document.querySelector(".Pagination"),E="https://energyflow.b.goit.study/api";let p=1,c,x;i.addEventListener("click",T);async function T(e){if(i.removeEventListener("click",T),o.removeEventListener("click",w),o.removeEventListener("click",P),e.target===e.currentTarget)return;i.classList.add("ExerciseCategoryList"),i.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");c=t.dataset.filter,x=t.dataset.name;try{j.innerHTML=_(x);const r=document.querySelector("#MusclesBtn");c==="Muscles"?r.classList.add("FilterBtnIsActive"):c==="Body parts"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):c==="Equipment"&&document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:s,totalPages:a,results:n}=await $(c,x);i.innerHTML=A(n);const l=document.querySelector("#FilterBtn");if(l.addEventListener("click",Q),l.addEventListener("click",C),o.innerHTML="",a>1){const u=L(s,a);o.innerHTML=u}o.addEventListener("click",H)}catch{m("Error")}}function C(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",C)}async function $(e,t,r){try{return e==="Muscles"?(await d.get(`${E}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await d.get(`${E}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await d.get(`${E}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch{m("Error")}}function A(e){return e.map(({rating:r,name:s,burnedCalories:a,time:n,bodyPart:l,target:u,_id:N})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${N}'>
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
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
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
`}async function Q(e){if(document.querySelectorAll(".ItemExercises").forEach(r=>{r.classList.remove("FilterBtnIsActive")}),i.addEventListener("click",T),i.classList.remove("ExerciseCategoryList"),i.classList.add("ExerciseFiltersList"),p=1,o.removeEventListener("click",H),Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){c=e.target.dataset.filter;try{const{page:r,totalPages:s,results:a}=await D(c);if(i.innerHTML=y(a),s>1){const l=L(r,s);o.innerHTML=l}else o.innerHTML="";o.addEventListener("click",P);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch{m("Error")}}}async function D(e=filterValueDefault){try{return(await d.get(`${E}/filters`,{params:{filter:e,page:p,limit:12}})).data}catch{m("Error")}}async function H(e){if(e.target.tagName==="BUTTON"){p=e.target.textContent;try{const{results:t}=await $(c,x,p);i.innerHTML=A(t)}catch{m("Error")}}}async function P(e){p=e.target.textContent;try{const{results:t}=await D(c,p);i.innerHTML=y(t)}catch{m("Error")}}function m(e){M.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}document.querySelector(".ExercisesForm"),document.querySelector(".SearchInput"),document.querySelector(".SearchButton"),document.querySelector(".IconSearch"),document.querySelector("#search");const g={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},Y="https://energyflow.b.goit.study/api/subscription",K="feedback-form-state",B=JSON.parse(localStorage.getItem(K));B!=null?g.input.value=B.email:g.input.value="";g.submit.addEventListener("click",G);async function G(e){const t=g.input.value.trim();e.preventDefault();try{const r=await d.post(Y,{email:t});b(JSON.stringify(JSON.parse(r.request.responseText).message)),g.input.value=""}catch(r){b(JSON.stringify(JSON.parse(r.request.responseText).message)),g.input.value=""}}function b(e){M.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-ac029331.js.map
