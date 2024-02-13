import{a as n,i as I}from"./vendor-8cce9181.js";import{i as x}from"./modal_window-53d74114.js";const N=document.querySelector(".js-menu"),U=document.querySelector(".js-open-menu"),V=document.querySelector(".js-close-menu"),H=function(){const e=N.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};U.addEventListener("click",H);V.addEventListener("click",H);window.matchMedia("(min-width: 335px)").addEventListener("change",j);function j(e){e.matches&&(N.classList.remove("is-open"),document.body.style.overflow="")}let J=document.querySelector(".quoteText"),z=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),r=new Date,s=t?new Date(t):null;if(e&&s&&_(r,s)){k(JSON.parse(e));return}let o=(await n.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(o)),localStorage.setItem("quoteDate",r.toISOString()),k(o)}catch(e){console.error("Error:",e)}});function k(e){J.innerText=e.quote,z.innerText=e.author}function _(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const Y=document.querySelector(".FilterButtons"),i=document.querySelector(".ExerciseFiltersList"),h=document.querySelector(".Pagination"),K=document.querySelector(".ExercisesForm"),G=document.querySelector(".ExerciseFiltersListSubcategories"),Q=document.querySelector(".PaginationSubcategories"),X="https://energyflow.b.goit.study/api";let A="Muscles",v=1,B=window.innerWidth,y=0;Y.addEventListener("click",ee);h.addEventListener("click",O);B<=375?y=8:(B<=768,y=12);async function b(){try{return(await n.get(`${X}/filters`,{params:{filter:A,page:v,limit:y}})).data}catch(e){console.log(e)}}async function Z(){try{const e=await b().then(t=>{const{results:r,totalPages:s,page:a}=t;if(r&&r.length>0){i.innerHTML=L(r);const o=M(a,s);h.innerHTML=o}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}Z();async function ee(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault(),K.classList.add("visually-hidden"),G.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),h.innerHTML="",Q.innerHTML="",v=1;const r=e.target.dataset.filter;if(A=r,i.innerHTML="",Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{b(r).then(s=>{const{results:a,totalPages:o,page:l}=s;i.innerHTML=L(a);{const u=M(l,o);h.innerHTML=u}})}catch(s){console.log(s)}}async function O(e){if(e.target.tagName==="BUTTON"){v=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==v?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),i.innerHTML="";try{const{results:t,page:r,totalPages:s}=await b();if(r===s)return;i.innerHTML=L(t)}catch(t){console.log(t)}}}function L(e){return e.map(({name:r,filter:s,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${s}' data-name='${r}'>
        <img class="ImgExercises" src="${a}" alt="${s}">
        <div class="FilterText">
          <p class="FilterExercises">${r}</p>
          <p class="FilterName">${s}</p>
        </div>
      </li>`).join("")}function M(e,t){let r="";for(let s=1;s<=t;s+=1)r+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${s}</button>`;return r}const $=document.querySelector(".ExerciseFiltersList");document.querySelector(".ExercisesHead");const m=document.querySelector(".Pagination"),P=document.querySelector(".PaginationSubcategories"),w=document.querySelector(".ExerciseFiltersListSubcategories"),te=document.querySelector(".ExercisesForm"),f="https://energyflow.b.goit.study/api";let p=1,S,F;$.addEventListener("click",re);async function re(e){if(te.classList.remove("visually-hidden"),m.innerHTML="",$.classList.add("visually-hidden"),w.classList.remove("visually-hidden"),m.removeEventListener("click",O),m.removeEventListener("click",oe),e.target===e.currentTarget)return;const t=e.target.closest(".ExercisesItem");S=t.dataset.filter,F=t.dataset.name;try{const{page:r,totalPages:s,results:a}=await R(S,F);if(w.innerHTML=W(a),m.innerHTML="",s>1){const o=M(r,s);P.innerHTML=o}P.addEventListener("click",ae)}catch{g("Error")}}async function R(e,t,r){try{return e==="Muscles"?(await n.get(`${f}/exercises`,{params:{muscles:t,page:r,limit:9}})).data:e==="Body parts"?(await n.get(`${f}/exercises`,{params:{bodypart:t,page:r,limit:9}})).data:(await n.get(`${f}/exercises`,{params:{equipment:t,page:r,limit:9}})).data}catch{g("Error")}}function W(e){return e.map(({rating:r,name:s,burnedCalories:a,time:o,bodyPart:l,target:u,_id:T})=>`<li class="WorkoutCard ExerciseCategoryList id ='${T}">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${x}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${x}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${x}#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${s}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${o} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function se(e=filterValueDefault){try{return(await n.get(`${f}/filters`,{params:{filter:e,page:p,limit:12}})).data}catch{g("Error")}}async function ae(e){if(e.target.tagName==="BUTTON"){p=e.target.textContent;try{const{results:t}=await R(S,F,p);w.innerHTML=W(t)}catch{g("Error")}}}async function oe(e){p=e.target.textContent;try{const{results:t}=await se(S,p);$.innerHTML=L(t)}catch{g("Error")}}function g(e){I.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ne="https://energyflow.b.goit.study/api/exercises",C={searchForm:document.querySelector(".ExercisesForm"),searchInput:document.querySelector(".SearchInput"),searchBtn:document.querySelector(".SearchButton"),searchIcon:document.querySelector(".IconSearch"),searchLable:document.querySelector("#search"),searchList:document.querySelector(".SearchList")},d={query:"",page:1};async function ie(e){e.preventDefault(),C.searchList.innerHTML="",d.page=1;const t=e.currentTarget;if(d.query=t.elements.query.value.trim(),!!d.query)try{const r=await ce(d.query);le(r)}catch(r){console.log(r)}}C.searchForm.addEventListener("submit",ie);console.log(C.searchForm);async function ce(e,t){try{return(await n.get(ne,{params:{filter:e,keyword:t,page:d.page,limit:9}})).data}catch(r){handleError(r)}}function le(e){e.length===0?t():ue(e);function t(){const r=document.createElement("div");r.classList.add("NoResultsMessageContainer");const s=document.createElement("div");s.classList.add("NoResultsMessage"),s.innerHTML='Unfortunately, <span class="NoResultsMessageAccent">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.',r.appendChild(s),document.body.appendChild(r)}}function ue(e){return e.map(({rating:r,name:s,burnedCalories:a,time:o,bodyPart:l,target:u,_id:T})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${r}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${T}'>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${o} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
      </ul>

    </li>`).join("")}const c={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},de="https://energyflow.b.goit.study/api/subscription",pe="feedback-form-state",E=JSON.parse(localStorage.getItem(pe));E!=null?c.input.value=E.email:c.input.value="";c.submit.addEventListener("click",ge);async function ge(e){const t=c.input.value.trim();e.preventDefault();try{const r=await n.post(de,{email:t});D(JSON.stringify(JSON.parse(r.request.responseText).message)),c.input.value=""}catch(r){D(JSON.stringify(JSON.parse(r.request.responseText).message)),c.input.value=""}}function D(e){I.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const q=document.querySelector(".ScrollUp");q.addEventListener("click",async()=>{await me()});window.onscroll=async()=>{await ye()};async function me(){window.scrollTo({top:0})}async function ye(){(document.body.scrollTop||document.documentElement.scrollTop)>20?q.classList.remove("visually-hidden"):q.classList.add("visually-hidden")}
//# sourceMappingURL=footer-30a0c845.js.map
