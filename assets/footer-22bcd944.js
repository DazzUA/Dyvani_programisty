import{a as l,i as A}from"./vendor-db25513e.js";const N=document.querySelector(".FilterButtons"),m=document.querySelector(".ExerciseFiltersList"),S=document.querySelector(".Pagination"),D="https://energyflow.b.goit.study/api";let b="Muscles",x=1,F=window.innerWidth,y=0;N.addEventListener("click",O);S.addEventListener("click",C);F<=375?y=8:(F<=768,y=12);async function T(){try{return(await l.get(`${D}/filters`,{params:{filter:b,page:x,limit:y}})).data}catch(e){console.log(e)}}async function W(){try{const e=await T().then(t=>{const{results:s,totalPages:r,page:a}=t;if(s&&s.length>0){m.innerHTML=f(s);const c=L(a,r);S.innerHTML=c}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}W();async function O(e){e.preventDefault(),x=1;const s=e.target.dataset.filter;if(b=s,m.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{T(s).then(r=>{const{results:a,totalPages:c,page:o}=r;m.innerHTML=f(a);{const p=L(o,c);S.innerHTML=p}})}catch(r){console.log(r)}}async function C(e){x=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==x?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),m.innerHTML="";try{const{results:t,page:s,totalPages:r}=await T();if(s===r)return;m.innerHTML=f(t)}catch(t){console.log(t)}}function f(e){return e.map(({name:s,filter:r,imgUrl:a})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${a}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function L(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const i=document.querySelector(".ExerciseFiltersList"),U=document.querySelector(".ExercisesHead"),n=document.querySelector(".Pagination"),h="https://energyflow.b.goit.study/api";let d=1,g,v;i.addEventListener("click",B);async function B(e){if(i.removeEventListener("click",B),n.removeEventListener("click",C),n.removeEventListener("click",I),e.target===e.currentTarget)return;i.classList.add("ExerciseCategoryList"),i.classList.remove("ExerciseFiltersList");const t=e.target.closest(".ExercisesItem");g=t.dataset.filter,v=t.dataset.name;try{U.innerHTML=V(v);const{page:s,totalPages:r,results:a}=await $(g,v);i.innerHTML=w(a);const c=document.querySelector(".StartBtn"),o=document.querySelector("#FilterBtn");if(o.addEventListener("click",R),o.addEventListener("click",M),n.innerHTML="",r>1){const p=L(s,r);n.innerHTML=p}n.addEventListener("click",H)}catch(s){console.log(s)}}function M(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",M)}async function $(e,t,s){try{return e==="Muscles"?(await l.get(`${h}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await l.get(`${h}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await l.get(`${h}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function w(e){return e.map(({rating:s,name:r,burnedCalories:a,time:c,bodyPart:o,target:p,_id:P})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
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
        <p class='MainPartName'>${r}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${a} / ${c} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${p}</span></p>
        </li>
      </ul>

    </li>`).join("")}function V(e){return`<div>
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
`}async function R(e){if(i.addEventListener("click",B),i.classList.remove("ExerciseCategoryList"),i.classList.add("ExerciseFiltersList"),d=1,n.removeEventListener("click",H),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){g=e.target.dataset.filter;try{const{page:t,totalPages:s,results:r}=await q(g);if(i.innerHTML=f(r),s>1){const c=L(t,s);n.innerHTML=c}else n.innerHTML="";n.addEventListener("click",I);const a=document.querySelector(".TitleExercises");a.innerHTML="Exercises"}catch(t){console.log(t)}}}async function q(e=filterValueDefault){try{return(await l.get(`${h}/filters`,{params:{filter:e,page:d,limit:12}})).data}catch(t){console.log(t)}}async function H(e){if(e.target.tagName==="BUTTON"){d=e.target.textContent;try{const{results:t}=await $(g,v,d);i.innerHTML=w(t)}catch(t){console.log(t)}}}async function I(e){d=e.target.textContent;try{const{results:t}=await q(g,d);i.innerHTML=f(t)}catch(t){console.log(t)}}document.querySelector(".SearchExercises"),document.querySelector(".SearchInput"),document.querySelector(".SearchExercisesList");const u={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},J="https://energyflow.b.goit.study/api/subscription",_="feedback-form-state",E=JSON.parse(localStorage.getItem(_));E!=null?u.input.value=E.email:u.input.value="";u.submit.addEventListener("click",j);async function j(e){const t=u.input.value.trim();e.preventDefault();try{const s=await l.post(J,{email:t});k(JSON.stringify(JSON.parse(s.request.responseText).message)),u.input.value=""}catch(s){k(JSON.stringify(JSON.parse(s.request.responseText).message)),u.input.value=""}}function k(e){A.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0})}
//# sourceMappingURL=footer-22bcd944.js.map
