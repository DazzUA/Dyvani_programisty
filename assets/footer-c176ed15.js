import{a as d,i as P}from"./vendor-db25513e.js";import{i as v}from"./modal_window-5f244337.js";const D=document.querySelector(".js-menu"),J=document.querySelector(".js-open-menu"),z=document.querySelector(".js-close-menu"),A=function(){const e=D.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};J.addEventListener("click",A);z.addEventListener("click",A);window.matchMedia("(min-width: 335px)").addEventListener("change",_);function _(e){e.matches&&(D.classList.remove("is-open"),document.body.style.overflow="")}let Y=document.querySelector(".QuoteText"),Q=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),s=localStorage.getItem("quoteDate"),t=new Date,r=s?new Date(s):null;if(e&&r&&K(t,r)){C(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",t.toISOString()),C(n)}catch(e){console.error("Error:",e)}});function C(e){Y.innerText=e.quote,Q.innerText=e.author}function K(e,s){return e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()}const G=document.querySelector(".FilterButtons"),y=document.querySelector(".ExerciseFiltersList"),q=document.querySelector(".Pagination"),X="https://energyflow.b.goit.study/api";let H="Muscles",S=1,$=window.innerWidth,E=0;G.addEventListener("click",ee);q.addEventListener("click",N);$<=375?E=8:($<=768,E=12);async function M(){try{return(await d.get(`${X}/filters`,{params:{filter:H,page:S,limit:E}})).data}catch(e){console.log(e)}}async function Z(){try{const e=await M().then(s=>{const{results:t,totalPages:r,page:a}=s;if(t&&t.length>0){y.innerHTML=h(t);const n=T(a,r);q.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}Z();async function ee(e){e.preventDefault(),S=1;const t=e.target.dataset.filter;if(H=t,y.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{M(t).then(r=>{const{results:a,totalPages:n,page:i}=r;y.innerHTML=h(a);{const c=T(i,n);q.innerHTML=c}})}catch(r){console.log(r)}}async function N(e){S=e.target.textContent,Array.from(e.currentTarget.children).map(s=>{s.textContent!==S?s.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),y.innerHTML="";try{const{results:s,page:t,totalPages:r}=await M();if(t===r)return;y.innerHTML=h(s)}catch(s){console.log(s)}}function h(e){return e.map(({name:t,filter:r,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${t}'>
        <img class="ImgExercises" src="${a}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${t}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function T(e,s){let t="";for(let r=1;r<=s;r+=1)t+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return t}const o=document.querySelector(".ExerciseFiltersList"),te=document.querySelector(".ExercisesHead"),l=document.querySelector(".Pagination"),L="https://energyflow.b.goit.study/api";let g=1,u,x;o.addEventListener("click",b);async function b(e){if(o.removeEventListener("click",b),l.removeEventListener("click",N),l.removeEventListener("click",j),e.target===e.currentTarget)return;o.classList.add("ExerciseCategoryList"),o.classList.remove("ExerciseFiltersList");const s=e.target.closest(".ExercisesItem");u=s.dataset.filter,x=s.dataset.name;try{te.innerHTML=se(x);const t=document.querySelector("#MusclesBtn");u==="Muscles"?t.classList.add("FilterBtnIsActive"):u==="Body parts"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):u==="Equipment"&&document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:r,totalPages:a,results:n}=await W(u,x);o.innerHTML=O(n);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",re),i.addEventListener("click",R),l.innerHTML="",a>1){const c=T(r,a);l.innerHTML=c}l.addEventListener("click",V)}catch{m("Error")}}function R(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",R)}async function W(e,s,t){try{return e==="Muscles"?(await d.get(`${L}/exercises`,{params:{muscles:s,page:t,limit:9}})).data:e==="Body parts"?(await d.get(`${L}/exercises`,{params:{bodypart:s,page:t,limit:9}})).data:(await d.get(`${L}/exercises`,{params:{equipment:s,page:t,limit:9}})).data}catch{m("Error")}}function O(e){return e.map(({rating:t,name:r,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard id ='${B}">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${v}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${v}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${v}#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${r}</p>
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

    </li>`).join("")}function se(e){return`<div>
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
          <use href='${v}#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}async function re(e){if(document.querySelectorAll(".ItemExercises").forEach(t=>{t.classList.remove("FilterBtnIsActive")}),o.addEventListener("click",b),o.classList.remove("ExerciseCategoryList"),o.classList.add("ExerciseFiltersList"),g=1,l.removeEventListener("click",V),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){u=e.target.dataset.filter;try{const{page:t,totalPages:r,results:a}=await U(u);if(o.innerHTML=h(a),r>1){const i=T(t,r);l.innerHTML=i}else l.innerHTML="";l.addEventListener("click",j);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch{m("Error")}}}async function U(e=filterValueDefault){try{return(await d.get(`${L}/filters`,{params:{filter:e,page:g,limit:12}})).data}catch{m("Error")}}async function V(e){if(e.target.tagName==="BUTTON"){g=e.target.textContent;try{const{results:s}=await W(u,x,g);o.innerHTML=O(s)}catch{m("Error")}}}async function j(e){g=e.target.textContent;try{const{results:s}=await U(u,g);o.innerHTML=h(s)}catch{m("Error")}}function m(e){P.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ae="https://energyflow.b.goit.study/api/exercises",k={searchForm:document.querySelector(".ExercisesForm"),searchInput:document.querySelector(".SearchInput"),searchBtn:document.querySelector(".SearchButton"),searchIcon:document.querySelector(".IconSearch"),searchLable:document.querySelector("#search"),searchList:document.querySelector(".SearchList")},f={query:"",page:1};async function ne(e){e.preventDefault(),k.searchList.innerHTML="",f.page=1;const s=e.currentTarget;if(f.query=s.elements.query.value.trim(),!!f.query)try{const t=await oe(f.query);ie(t)}catch(t){console.log(t)}}k.searchForm.addEventListener("submit",ne);console.log(k.searchForm);async function oe(e,s){try{return(await d.get(ae,{params:{filter:e,keyword:s,page:f.page,limit:9}})).data}catch(t){handleError(t)}}function ie(e){e.length===0?s():ce(e);function s(){const t=document.createElement("div");t.classList.add("NoResultsMessageContainer");const r=document.createElement("div");r.classList.add("NoResultsMessage"),r.innerHTML='Unfortunately, <span class="NoResultsMessageAccent">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.',t.appendChild(r),document.body.appendChild(t)}}function ce(e){return e.map(({rating:t,name:r,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard">
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
        <p class='MainPartName'>${r}</p>
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

    </li>`).join("")}const p={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},le="https://energyflow.b.goit.study/api/subscription",ue="feedback-form-state",F=JSON.parse(localStorage.getItem(ue));F!=null?p.input.value=F.email:p.input.value="";p.submit.addEventListener("click",de);async function de(e){const s=p.input.value.trim();e.preventDefault();try{const t=await d.post(le,{email:s});I(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}catch(t){I(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}}function I(e){P.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const w=document.querySelector(".ScrollUp");w.addEventListener("click",async()=>{await pe()});window.onscroll=async()=>{await ge()};async function pe(){window.scrollTo({top:0,behavior:"smooth"})}async function ge(){(document.body.scrollTop||document.documentElement.scrollTop)>20?w.classList.remove("visually-hidden"):w.classList.add("visually-hidden")}
//# sourceMappingURL=footer-c176ed15.js.map
