import{a as d,i as A}from"./vendor-db25513e.js";let N=document.querySelector(".QuoteText"),O=document.querySelector(".QuoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),s=new Date,r=t?new Date(t):null;if(e&&r&&W(s,r)){T(JSON.parse(e));return}let n=(await d.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",s.toISOString()),T(n)}catch(e){console.error("Error:",e)}});function T(e){N.innerText=e.quote,O.innerText=e.author}function W(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const U=document.querySelector(".FilterButtons"),m=document.querySelector(".ExerciseFiltersList"),S=document.querySelector(".Pagination"),J="https://energyflow.b.goit.study/api";let M="Muscles",x=1,q=window.innerWidth,y=0;U.addEventListener("click",R);S.addEventListener("click",b);q<=375?y=8:(q<=768,y=12);async function B(){try{return(await d.get(`${J}/filters`,{params:{filter:M,page:x,limit:y}})).data}catch(e){console.log(e)}}async function V(){try{const e=await B().then(t=>{const{results:s,totalPages:r,page:a}=t;if(s&&s.length>0){m.innerHTML=f(s);const n=E(a,r);S.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}V();async function R(e){e.preventDefault(),x=1;const s=e.target.dataset.filter;if(M=s,m.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{B(s).then(r=>{const{results:a,totalPages:n,page:c}=r;m.innerHTML=f(a);{const u=E(c,n);S.innerHTML=u}})}catch(r){console.log(r)}}async function b(e){x=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==x?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),m.innerHTML="";try{const{results:t,page:s,totalPages:r}=await B();if(s===r)return;m.innerHTML=f(t)}catch(t){console.log(t)}}function f(e){return e.map(({name:s,filter:r,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${a}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function E(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const o=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),i=document.querySelector(".Pagination"),h="https://energyflow.b.goit.study/api";let p=1,l,v;o.addEventListener("click",F);async function F(e){if(o.removeEventListener("click",F),i.removeEventListener("click",b),i.removeEventListener("click",D),e.target===e.currentTarget)return;o.classList.add("ExerciseCategoryList"),o.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");l=t.dataset.filter,v=t.dataset.name;try{j.innerHTML=_(v);const s=document.querySelector("#MusclesBtn");console.log(s),l==="Muscles"?s.classList.add("FilterBtnIsActive"):l==="Body Part"?document.querySelector("#BodyPartBtn").classList.add("FilterBtnIsActive"):document.querySelector("#EquipmentBtn").classList.add("FilterBtnIsActive");const{page:r,totalPages:a,results:n}=await w(l,v);o.innerHTML=C(n);const c=document.querySelector("#FilterBtn");if(c.addEventListener("click",z),c.addEventListener("click",k),i.innerHTML="",a>1){const u=E(r,a);i.innerHTML=u}i.addEventListener("click",P)}catch(s){console.log(s)}}function k(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",k)}async function w(e,t,s){try{return e==="Muscles"?(await d.get(`${h}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await d.get(`${h}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await d.get(`${h}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function C(e){return e.map(({rating:s,name:r,burnedCalories:a,time:n,bodyPart:c,target:u,_id:H})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${H}'>
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
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${c}</span></p>
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
`}async function z(e){const t=document.querySelectorAll(".ItemExercises");if(console.log(t),t.forEach(s=>{s.classList.remove("FilterBtnIsActive")}),o.addEventListener("click",F),o.classList.remove("ExerciseCategoryList"),o.classList.add("ExerciseFiltersList"),p=1,i.removeEventListener("click",P),Array.from(e.currentTarget.children).map(s=>{s.textContent!==e.target.textContent?s.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){l=e.target.dataset.filter;try{const{page:s,totalPages:r,results:a}=await $(l);if(o.innerHTML=f(a),r>1){const c=E(s,r);i.innerHTML=c}else i.innerHTML="";i.addEventListener("click",D);const n=document.querySelector(".TitleExercises");n.innerHTML="Exercises"}catch(s){console.log(s)}}}async function $(e=filterValueDefault){try{return(await d.get(`${h}/filters`,{params:{filter:e,page:p,limit:12}})).data}catch(t){console.log(t)}}async function P(e){if(e.target.tagName==="BUTTON"){p=e.target.textContent;try{const{results:t}=await w(l,v,p);o.innerHTML=C(t)}catch(t){console.log(t)}}}async function D(e){p=e.target.textContent;try{const{results:t}=await $(l,p);o.innerHTML=f(t)}catch(t){console.log(t)}}document.querySelector(".ExercisesForm"),document.querySelector(".SearchInput"),document.querySelector(".SearchButton"),document.querySelector(".IconSearch"),document.querySelector("#search");const g={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},Q="https://energyflow.b.goit.study/api/subscription",Y="feedback-form-state",L=JSON.parse(localStorage.getItem(Y));L!=null?g.input.value=L.email:g.input.value="";g.submit.addEventListener("click",K);async function K(e){const t=g.input.value.trim();e.preventDefault();try{const s=await d.post(Q,{email:t});I(JSON.stringify(JSON.parse(s.request.responseText).message)),g.input.value=""}catch(s){I(JSON.stringify(JSON.parse(s.request.responseText).message)),g.input.value=""}}function I(e){A.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-07585d53.js.map
