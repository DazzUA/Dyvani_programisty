import{a as d,i as I}from"./vendor-db25513e.js";let O=document.querySelector(".QuoteText"),U=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),r=localStorage.getItem("quoteDate"),t=new Date,s=r?new Date(r):null;if(e&&s&&V(t,s)){M(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",t.toISOString()),M(n)}catch(e){console.error("Error:",e)}});function M(e){O.innerText=e.quote,U.innerText=e.author}function V(e,r){return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}const J=document.querySelector(".FilterButtons"),y=document.querySelector(".ExerciseFiltersList"),T=document.querySelector(".Pagination"),j="https://energyflow.b.goit.study/api";let $="Muscles",L=1,k=window.innerWidth,v=0;J.addEventListener("click",_);T.addEventListener("click",D);k<=375?v=8:(k<=768,v=12);async function q(){try{return(await d.get(`${j}/filters`,{params:{filter:$,page:L,limit:v}})).data}catch(e){console.log(e)}}async function z(){try{const e=await q().then(r=>{const{results:t,totalPages:s,page:a}=r;if(t&&t.length>0){y.innerHTML=h(t);const n=S(a,s);T.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}z();async function _(e){e.preventDefault(),L=1;const t=e.target.dataset.filter;if($=t,y.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{q(t).then(s=>{const{results:a,totalPages:n,page:i}=s;y.innerHTML=h(a);{const c=S(i,n);T.innerHTML=c}})}catch(s){console.log(s)}}async function D(e){L=e.target.textContent,Array.from(e.currentTarget.children).map(r=>{r.textContent!==L?r.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),y.innerHTML="";try{const{results:r,page:t,totalPages:s}=await q();if(t===s)return;y.innerHTML=h(r)}catch(r){console.log(r)}}function h(e){return e.map(({name:t,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${t}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${t}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function S(e,r){let t="";for(let s=1;s<=r;s+=1)t+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return t}const o=document.querySelector(".ExerciseFiltersList"),Y=document.querySelector(".ExercisesHead"),l=document.querySelector(".Pagination"),E="https://energyflow.b.goit.study/api";let g=1,u,x;o.addEventListener("click",C);async function C(e){if(o.removeEventListener("click",C),l.removeEventListener("click",D),l.removeEventListener("click",W),e.target===e.currentTarget)return;o.classList.add("ExerciseCategoryList"),o.classList.remove("ExerciseFiltersList");const r=e.target.closest(".ExercisesItem");u=r.dataset.filter,x=r.dataset.name;try{Y.innerHTML=Q(x);const t=document.querySelector("#MusclesBtn");u==="Muscles"?t.classList.add("FilterBtnIsActive"):u==="Body parts"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):u==="Equipment"&&document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:s,totalPages:a,results:n}=await P(u,x);o.innerHTML=A(n);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",K),i.addEventListener("click",H),l.innerHTML="",a>1){const c=S(s,a);l.innerHTML=c}l.addEventListener("click",R)}catch{m("Error")}}function H(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",H)}async function P(e,r,t){try{return e==="Muscles"?(await d.get(`${E}/exercises`,{params:{muscles:r,page:t,limit:9}})).data:e==="Body parts"?(await d.get(`${E}/exercises`,{params:{bodypart:r,page:t,limit:9}})).data:(await d.get(`${E}/exercises`,{params:{equipment:r,page:t,limit:9}})).data}catch{m("Error")}}function A(e){return e.map(({rating:t,name:s,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${B}'>
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
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${i}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${c}</span></p>
        </li>
      </ul>

    </li>`).join("")}function Q(e){return`<div>
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
`}async function K(e){if(document.querySelectorAll(".ItemExercises").forEach(t=>{t.classList.remove("FilterBtnIsActive")}),o.addEventListener("click",C),o.classList.remove("ExerciseCategoryList"),o.classList.add("ExerciseFiltersList"),g=1,l.removeEventListener("click",R),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){u=e.target.dataset.filter;try{const{page:t,totalPages:s,results:a}=await N(u);if(o.innerHTML=h(a),s>1){const i=S(t,s);l.innerHTML=i}else l.innerHTML="";l.addEventListener("click",W);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch{m("Error")}}}async function N(e=filterValueDefault){try{return(await d.get(`${E}/filters`,{params:{filter:e,page:g,limit:12}})).data}catch{m("Error")}}async function R(e){if(e.target.tagName==="BUTTON"){g=e.target.textContent;try{const{results:r}=await P(u,x,g);o.innerHTML=A(r)}catch{m("Error")}}}async function W(e){g=e.target.textContent;try{const{results:r}=await N(u,g);o.innerHTML=h(r)}catch{m("Error")}}function m(e){I.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const G="https://energyflow.b.goit.study/api/exercises",w={searchForm:document.querySelector(".ExercisesForm"),searchInput:document.querySelector(".SearchInput"),searchBtn:document.querySelector(".SearchButton"),searchIcon:document.querySelector(".IconSearch"),searchLable:document.querySelector("#search"),searchList:document.querySelector(".SearchList")},f={query:"",page:1};async function X(e){e.preventDefault(),w.searchList.innerHTML="",f.page=1;const r=e.currentTarget;if(f.query=r.elements.query.value.trim(),!!f.query)try{const t=await Z(f.query);ee(t)}catch(t){console.log(t)}}w.searchForm.addEventListener("submit",X);console.log(w.searchForm);async function Z(e,r){try{return(await d.get(G,{params:{filter:e,keyword:r,page:f.page,limit:9}})).data}catch(t){handleError(t)}}function ee(e){e.length===0?r():te(e);function r(){const t=document.createElement("div");t.classList.add("NoResultsMessageContainer");const s=document.createElement("div");s.classList.add("NoResultsMessage"),s.innerHTML='Unfortunately, <span class="NoResultsMessageAccent">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.',t.appendChild(s),document.body.appendChild(t)}}function te(e){return e.map(({rating:t,name:s,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${B}'>
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
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${i}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${c}</span></p>
        </li>
      </ul>

    </li>`).join("")}const p={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},re="https://energyflow.b.goit.study/api/subscription",se="feedback-form-state",F=JSON.parse(localStorage.getItem(se));F!=null?p.input.value=F.email:p.input.value="";p.submit.addEventListener("click",ae);async function ae(e){const r=p.input.value.trim();e.preventDefault();try{const t=await d.post(re,{email:r});b(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}catch(t){b(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}}function b(e){I.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-f9f1207b.js.map
