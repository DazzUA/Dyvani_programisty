import{a as d,i as P}from"./vendor-db25513e.js";import{i as v}from"./modal_window-a11e8f1a.js";let V=document.querySelector(".QuoteText"),J=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),r=localStorage.getItem("quoteDate"),t=new Date,s=r?new Date(r):null;if(e&&s&&j(t,s)){M(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",t.toISOString()),M(n)}catch(e){console.error("Error:",e)}});function M(e){V.innerText=e.quote,J.innerText=e.author}function j(e,r){return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}const z=document.querySelector(".FilterButtons"),y=document.querySelector(".ExerciseFiltersList"),q=document.querySelector(".Pagination"),_="https://energyflow.b.goit.study/api";let D="Muscles",S=1,$=window.innerWidth,E=0;z.addEventListener("click",Q);q.addEventListener("click",A);$<=375?E=8:($<=768,E=12);async function k(){try{return(await d.get(`${_}/filters`,{params:{filter:D,page:S,limit:E}})).data}catch(e){console.log(e)}}async function Y(){try{const e=await k().then(r=>{const{results:t,totalPages:s,page:a}=r;if(t&&t.length>0){y.innerHTML=h(t);const n=T(a,s);q.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}Y();async function Q(e){e.preventDefault(),S=1;const t=e.target.dataset.filter;if(D=t,y.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{k(t).then(s=>{const{results:a,totalPages:n,page:i}=s;y.innerHTML=h(a);{const c=T(i,n);q.innerHTML=c}})}catch(s){console.log(s)}}async function A(e){S=e.target.textContent,Array.from(e.currentTarget.children).map(r=>{r.textContent!==S?r.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),y.innerHTML="";try{const{results:r,page:t,totalPages:s}=await k();if(t===s)return;y.innerHTML=h(r)}catch(r){console.log(r)}}function h(e){return e.map(({name:t,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${t}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${t}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function T(e,r){let t="";for(let s=1;s<=r;s+=1)t+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return t}const o=document.querySelector(".ExerciseFiltersList"),K=document.querySelector(".ExercisesHead"),l=document.querySelector(".Pagination"),x="https://energyflow.b.goit.study/api";let g=1,u,L;o.addEventListener("click",C);async function C(e){if(o.removeEventListener("click",C),l.removeEventListener("click",A),l.removeEventListener("click",U),e.target===e.currentTarget)return;o.classList.add("ExerciseCategoryList"),o.classList.remove("ExerciseFiltersList");const r=e.target.closest(".ExercisesItem");u=r.dataset.filter,L=r.dataset.name;try{K.innerHTML=G(L);const t=document.querySelector("#MusclesBtn");u==="Muscles"?t.classList.add("FilterBtnIsActive"):u==="Body parts"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):u==="Equipment"&&document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:s,totalPages:a,results:n}=await N(u,L);o.innerHTML=R(n);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",X),i.addEventListener("click",H),l.innerHTML="",a>1){const c=T(s,a);l.innerHTML=c}l.addEventListener("click",O)}catch{m("Error")}}function H(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",H)}async function N(e,r,t){try{return e==="Muscles"?(await d.get(`${x}/exercises`,{params:{muscles:r,page:t,limit:9}})).data:e==="Body parts"?(await d.get(`${x}/exercises`,{params:{bodypart:r,page:t,limit:9}})).data:(await d.get(`${x}/exercises`,{params:{equipment:r,page:t,limit:9}})).data}catch{m("Error")}}function R(e){return e.map(({rating:t,name:s,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard id ='${B}">
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

    </li>`).join("")}function G(e){return`<div>
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
`}async function X(e){if(document.querySelectorAll(".ItemExercises").forEach(t=>{t.classList.remove("FilterBtnIsActive")}),o.addEventListener("click",C),o.classList.remove("ExerciseCategoryList"),o.classList.add("ExerciseFiltersList"),g=1,l.removeEventListener("click",O),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){u=e.target.dataset.filter;try{const{page:t,totalPages:s,results:a}=await W(u);if(o.innerHTML=h(a),s>1){const i=T(t,s);l.innerHTML=i}else l.innerHTML="";l.addEventListener("click",U);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch{m("Error")}}}async function W(e=filterValueDefault){try{return(await d.get(`${x}/filters`,{params:{filter:e,page:g,limit:12}})).data}catch{m("Error")}}async function O(e){if(e.target.tagName==="BUTTON"){g=e.target.textContent;try{const{results:r}=await N(u,L,g);o.innerHTML=R(r)}catch{m("Error")}}}async function U(e){g=e.target.textContent;try{const{results:r}=await W(u,g);o.innerHTML=h(r)}catch{m("Error")}}function m(e){P.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const Z="https://energyflow.b.goit.study/api/exercises",b={searchForm:document.querySelector(".ExercisesForm"),searchInput:document.querySelector(".SearchInput"),searchBtn:document.querySelector(".SearchButton"),searchIcon:document.querySelector(".IconSearch"),searchLable:document.querySelector("#search"),searchList:document.querySelector(".SearchList")},f={query:"",page:1};async function ee(e){e.preventDefault(),b.searchList.innerHTML="",f.page=1;const r=e.currentTarget;if(f.query=r.elements.query.value.trim(),!!f.query)try{const t=await te(f.query);re(t)}catch(t){console.log(t)}}b.searchForm.addEventListener("submit",ee);console.log(b.searchForm);async function te(e,r){try{return(await d.get(Z,{params:{filter:e,keyword:r,page:f.page,limit:9}})).data}catch(t){handleError(t)}}function re(e){e.length===0?r():se(e);function r(){const t=document.createElement("div");t.classList.add("NoResultsMessageContainer");const s=document.createElement("div");s.classList.add("NoResultsMessage"),s.innerHTML='Unfortunately, <span class="NoResultsMessageAccent">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.',t.appendChild(s),document.body.appendChild(t)}}function se(e){return e.map(({rating:t,name:s,burnedCalories:a,time:n,bodyPart:i,target:c,_id:B})=>`<li class="WorkoutCard">
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

    </li>`).join("")}const p={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},ae="https://energyflow.b.goit.study/api/subscription",ne="feedback-form-state",F=JSON.parse(localStorage.getItem(ne));F!=null?p.input.value=F.email:p.input.value="";p.submit.addEventListener("click",oe);async function oe(e){const r=p.input.value.trim();e.preventDefault();try{const t=await d.post(ae,{email:r});I(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}catch(t){I(JSON.stringify(JSON.parse(t.request.responseText).message)),p.input.value=""}}function I(e){P.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const w=document.querySelector(".ScrollUp");w.addEventListener("click",async()=>{await ie()});window.onscroll=async()=>{await ce()};async function ie(){window.scrollTo({top:0,behavior:"smooth"})}async function ce(){(document.body.scrollTop||document.documentElement.scrollTop)>20?w.classList.remove("visually-hidden"):w.classList.add("visually-hidden")}
//# sourceMappingURL=footer-a90e7559.js.map
