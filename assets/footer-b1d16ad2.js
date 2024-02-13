import{a as n,i as N}from"./vendor-8cce9181.js";import{i as T}from"./modal_window-2c069ce0.js";const H=document.querySelector(".js-menu"),V=document.querySelector(".js-open-menu"),j=document.querySelector(".js-close-menu"),O=function(){const e=H.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};V.addEventListener("click",O);j.addEventListener("click",O);window.matchMedia("(min-width: 335px)").addEventListener("change",J);function J(e){e.matches&&(H.classList.remove("is-open"),document.body.style.overflow="")}let z=document.querySelector(".quoteText"),_=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&Y(r,s)){k(JSON.parse(e));return}let a=(await n.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(a)),localStorage.setItem("quoteDate",r.toISOString()),k(a)}catch(e){console.error("Error:",e)}});function k(e){z.innerText=e.quote,_.innerText=e.author}function Y(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const K=document.querySelector(".FilterButtons"),i=document.querySelector(".ExerciseFiltersList"),h=document.querySelector(".Pagination"),G=document.querySelector(".ExercisesForm"),Q=document.querySelector(".ExerciseFiltersListSubcategories"),X=document.querySelector(".PaginationSubcategories"),Z="https://energyflow.b.goit.study/api";let R="Muscles",v=1,B=window.innerWidth,f=0;K.addEventListener("click",te);h.addEventListener("click",A);B<=375?f=8:(B<=768,f=12);async function b(){try{return(await n.get(`${Z}/filters`,{params:{filter:R,page:v,limit:f}})).data}catch(e){console.log(e)}}async function ee(){try{const e=await b().then(t=>{const{results:r,totalPages:s,page:o}=t;if(r&&r.length>0){i.innerHTML=L(r);const a=C(o,s);h.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}ee();async function te(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault(),G.classList.add("visually-hidden"),Q.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),h.innerHTML="",X.innerHTML="",v=1;const r=e.target.dataset.filter;if(R=r,i.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{b(r).then(s=>{const{results:o,totalPages:a,page:l}=s;i.innerHTML=L(o);{const u=C(l,a);h.innerHTML=u}})}catch(s){console.log(s)}}async function A(e){if(e.target.tagName==="BUTTON"){v=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==v?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),i.innerHTML="";try{const{results:t,page:r,totalPages:s}=await b();if(r===s)return;i.innerHTML=L(t)}catch(t){console.log(t)}}}function L(e){return e.map(({name:r,filter:s,imgUrl:o})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${o}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function C(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const M=document.querySelector(".ExerciseFiltersList");document.querySelector(".ExercisesHead");const g=document.querySelector(".Pagination"),D=document.querySelector(".PaginationSubcategories"),w=document.querySelector(".ExerciseFiltersListSubcategories"),re=document.querySelector(".ExercisesForm"),y="https://energyflow.b.goit.study/api";let d=1,S,F;M.addEventListener("click",se);async function se(e){if(re.classList.remove("visually-hidden"),g.innerHTML="",M.classList.add("visually-hidden"),w.classList.remove("visually-hidden"),g.removeEventListener("click",A),g.removeEventListener("click",ne),e.target===e.currentTarget)return;const t=e.target.closest(".ExercisesItem");S=t.dataset.filter,F=t.dataset.name;try{const{page:r,totalPages:s,results:o}=await W(S,F);if(w.innerHTML=U(o),g.innerHTML="",s>1){const a=C(r,s);D.innerHTML=a}D.addEventListener("click",ae)}catch{p("Error")}}async function W(e,t,r){try{return e==="Muscles"?(await n.get(`${y}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await n.get(`${y}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await n.get(`${y}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch{p("Error")}}function U(e){return e.map(({rating:r,name:s,burnedCalories:o,time:a,bodyPart:l,target:u,_id:x})=>`<li class="WorkoutCard ExerciseCategoryList id ='${x}">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${T}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${T}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${T}#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${s}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function oe(e=filterValueDefault){try{return(await n.get(`${y}/filters`,{params:{filter:e,page:d,limit:12}})).data}catch{p("Error")}}async function ae(e){if(e.target.tagName==="BUTTON"){d=e.target.textContent;try{const{results:t}=await W(S,F,d);w.innerHTML=U(t)}catch{p("Error")}}}async function ne(e){d=e.target.textContent;try{const{results:t}=await oe(S,d);M.innerHTML=L(t)}catch{p("Error")}}function p(e){N.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ie="https://energyflow.b.goit.study/api/exercises",$={searchForm:document.querySelector(".ExercisesForm"),searchInput:document.querySelector(".SearchInput"),searchBtn:document.querySelector(".SearchButton"),searchIcon:document.querySelector(".IconSearch"),searchLable:document.querySelector("#search"),searchList:document.querySelector(".SearchList")},m={query:"",page:1};async function ce(e){e.preventDefault(),$.searchList.innerHTML="",m.page=1;const t=e.currentTarget;if(m.query=t.elements.query.value.trim(),!!m.query)try{const r=await le(m);ue(r)}catch(r){console.log(r)}}$.searchForm.addEventListener("submit",ce);async function le(e){try{return(await n.get(ie,{params:{filter:e.query,keyword:e.query,page:e.page,limit:9}})).data}catch(t){console.log(t)}}function I(){const e=document.createElement("div");e.classList.add("NoResultsMessageContainer");const t=document.createElement("div");t.classList.add("NoResultsMessage"),t.innerHTML='Unfortunately, <span class="SearchNoResult">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.',e.appendChild(t),document.body.appendChild(e)}function ue(e){if(exercises.length===0)return typeof I=="function"?I():exercises.forEach(r=>{const s=document.createElement("li");s.textContent=r.name,$.searchList.appendChild(s)}),e.map(({rating:r,name:s,burnedCalories:o,time:a,bodyPart:l,target:u,_id:x})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${x}'>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
      </ul>

    </li>`).join("")}const c={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},de="https://energyflow.b.goit.study/api/subscription",pe="feedback-form-state",E=JSON.parse(localStorage.getItem(pe));E!=null?c.input.value=E.email:c.input.value="";c.submit.addEventListener("click",ge);async function ge(e){const t=c.input.value.trim();e.preventDefault();try{const r=await n.post(de,{email:t});P(JSON.stringify(JSON.parse(r.request.responseText).message)),c.input.value=""}catch(r){P(JSON.stringify(JSON.parse(r.request.responseText).message)),c.input.value=""}}function P(e){N.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const q=document.querySelector(".ScrollUp");q.addEventListener("click",async()=>{await me()});window.onscroll=async()=>{await fe()};async function me(){window.scrollTo({top:0})}async function fe(){(document.body.scrollTop||document.documentElement.scrollTop)>20?q.classList.remove("visually-hidden"):q.classList.add("visually-hidden")}
//# sourceMappingURL=footer-b1d16ad2.js.map
