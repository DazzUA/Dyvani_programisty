import{a as g,i as W}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const re=document.querySelector(".FilterButtons"),x=document.querySelector(".ExerciseFiltersList"),A=document.querySelector(".Pagination"),ie="https://energyflow.b.goit.study/api";let V="Muscles",k=1,U=window.innerWidth,w=0;re.addEventListener("click",oe);A.addEventListener("click",_);U<=375?w=8:(U<=768,w=12);async function N(){try{return(await g.get(`${ie}/filters`,{params:{filter:V,page:k,limit:w}})).data}catch(e){console.log(e)}}async function ae(){try{const e=await N().then(t=>{const{results:s,totalPages:r,page:i}=t;if(s&&s.length>0){x.innerHTML=S(s);const a=q(i,r);A.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}ae();async function oe(e){e.preventDefault(),k=1;const s=e.target.dataset.filter;if(V=s,x.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{N(s).then(r=>{const{results:i,totalPages:a,page:c}=r;x.innerHTML=S(i);{const n=q(c,a);A.innerHTML=n}})}catch(r){console.log(r)}}async function _(e){k=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==k?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),x.innerHTML="";try{const{results:t,page:s,totalPages:r}=await N();if(s===r)return;x.innerHTML=S(t)}catch(t){console.log(t)}}function S(e){return e.map(({name:s,filter:r,imgUrl:i})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function q(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const d=document.querySelector(".ExerciseFiltersList"),ne=document.querySelector(".ExercisesHead"),u=document.querySelector(".Pagination"),C="https://energyflow.b.goit.study/api";let h=1,v,B;d.addEventListener("click",O);async function O(e){if(d.removeEventListener("click",O),d.classList.add("ExerciseCategoryList"),u.removeEventListener("click",_),u.removeEventListener("click",Q),e.target===e.currentTarget)return;d.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");v=t.dataset.filter,B=t.dataset.name;try{ne.innerHTML=ce(B);const{page:s,totalPages:r,results:i}=await K(v,B);d.innerHTML=D(i);const a=document.querySelector(".StartBtn"),c=document.querySelector("#FilterBtn");if(c.addEventListener("click",le),c.addEventListener("click",z),u.innerHTML="",r>1){const n=q(s,r);u.innerHTML=n}u.addEventListener("click",G)}catch(s){console.log(s)}}function z(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",z)}async function K(e,t,s){try{return e==="Muscles"?(await g.get(`${C}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await g.get(`${C}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await g.get(`${C}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function D(e){return e.map(({rating:s,name:r,burnedCalories:i,time:a,bodyPart:c,target:n,_id:y})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${y}'>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${i} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${c}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
      </ul>

    </li>`).join("")}function ce(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
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
`}async function le(e){if(d.addEventListener("click",O),d.classList.remove("ExerciseCategoryList"),h=1,u.removeEventListener("click",G),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){v=e.target.dataset.filter;try{const{page:t,totalPages:s,results:r}=await Y(v);if(d.innerHTML=S(r),s>1){const a=q(t,s);u.innerHTML=a}else u.innerHTML="";u.addEventListener("click",Q);const i=document.querySelector(".TitleExercises");i.innerHTML="Exercises"}catch(t){console.log(t)}}}async function Y(e=filterValueDefault){try{return(await g.get(`${C}/filters`,{params:{filter:e,page:h,limit:12}})).data}catch(t){console.log(t)}}async function G(e){if(e.target.tagName==="BUTTON"){h=e.target.textContent;try{const{results:t}=await K(v,B,h);d.innerHTML=D(t)}catch(t){console.log(t)}}}async function Q(e){h=e.target.textContent;try{const{results:t}=await Y(v,h);d.innerHTML=S(t)}catch(t){console.log(t)}}const de="https://energyflow.b.goit.study/api/exercises",X={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},I={query:"",page:1};X.searchForm.addEventListener("submit",ue);async function ue(e){e.preventDefault(),X.searchList.innerHTML="",I.page=1;const t=e.currentTarget;if(I.query=t.elements.query.value.trim(),!!I.query)try{const s=await fe(query);D(s.data)}catch{}}async function fe(e){try{return(await g.get(de,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}})).data}catch(t){handleError(t)}}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ge="https://energyflow.b.goit.study/api/subscription",pe="feedback-form-state",$=JSON.parse(localStorage.getItem(pe));$!=null?m.input.value=$.email:m.input.value="";m.submit.addEventListener("click",me);async function me(e){const t=m.input.value.trim();e.preventDefault();try{const s=await g.post(ge,{email:t});W.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(s){W.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const P="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",he=window.location.pathname;he.lastIndexOf("/");function ve(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let M="favorites",b=ve(M),l=JSON.parse(b);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let H="",L;const R=document.querySelector(".message-favorites"),p=document.querySelector(".favorites-pagination-block"),E=document.querySelector(".div-favorites-section"),ye=document.querySelectorAll(".favorites-list-item");function Le(e){const t=Z(e);o.insertAdjacentHTML("beforeend",t)}if(!b||l.length==0)R.classList.add("is-open-message-favorites"),p.classList.add("close");else if(b)try{l.forEach(e=>{Le(e)})}catch(e){console.log(e.name),console.log(e.message)}document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?p.style.display="flex":p.style.display="none"}function t(){return o&&o.offsetParent!==null}function s(){const i=window.innerWidth<=767&&t()?8:o.children.length;if(window.innerWidth>767&&t()){for(let n=0;n<o.children.length;n++)o.children[n].style.display="block";return}Math.ceil(o.children.length/i);let a=1;function c(n){const y=(n-1)*i,F=y+i;for(let f=0;f<o.children.length;f++)o.children[f].style.display="none";for(let f=y;f<F&&f<o.children.length;f++)o.children[f].style.display="block"}c(a),p.addEventListener("click",function(n){n.target.tagName==="BUTTON"&&(p.querySelectorAll("button").forEach(F=>F.classList.remove("active-btn")),n.target.classList.add("active-btn"),a=parseInt(n.target.textContent),c(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?E.style.overflowY="scroll":E.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?E.style.maxHeight="480px":E.style.maxHeight="none",window.scrollBy(0,10)}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&o.children.length>=8&&s()});const T=document.querySelector(".add-favorites");function xe(){if(T.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(M,JSON.stringify(l)),T.textContent="Delete from favorites";else{const e=l.findIndex(s=>s.id==H);l.splice(e,1),localStorage.setItem(M,JSON.stringify(l));const t=document.querySelectorAll(".favorites-list-item");T.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${H}"]`)&&(t.forEach(s=>{s.id==H&&(L=s)}),list.removeChild(L),(!b||l.length==0)&&(R.classList.add("is-open-message-info"),p.classList.add("close")))}}T.addEventListener("click",xe);function be(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;Se(t)}}o.addEventListener("click",be);function Se(e){const t=l.findIndex(s=>s.id==e);l.splice(t,1),localStorage.setItem(M,JSON.stringify(l)),ye.forEach(s=>{s.id==e&&(L=s)}),L&&o.removeChild(L),(!b||l.length==0)&&(R.classList.add("is-open-message-info"),p.classList.add("close")),Ee()}function Ee(){o.innerHTML="",l.forEach(e=>{const t=Z(e);o.insertAdjacentHTML("beforeend",t)})}function Z(e){return`<li class="favorites-list-item" id="${e.id}">
        <div class="favorites-card-header">
            <div class="favorites-workout">
                <p>WORKOUT</p>
            </div>
            <button class="favorites-btn-trash" aria-label="trash" type="button">
                <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                    <use class="favorites-icon-delete-use" href="${P}#icon-trash"></use>
                </svg>
            </button>
            <button
                data-id="${e.id}"
                class="favorites-btn-arrow"
                aria-label="start"
                type="button">Start
                    <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                        <use class="favorites-icon-arrow-use" href="${P}#icon-arrow"></use>
                    </svg>
            </button>
            </div>
            <div class="favorites-main-container">
    
            <div class="favorite-icon-run-man">
            <svg width="14" height="14">
      <use href="${P}#icon-running"></use>
    </svg></div>                  
                <h3 class="favorites-name-part">${e.name}</h3>
            </div>
            <div class="favorites-card-footer">
            <ul class="favorites-card-footer-list">
                <li class="favorites-card-footer-item">
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Burned calories:</h4>
                        <p class="favorites-card-footer-block">${e.burnedCalories}</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Body part:</h4>
                        <p class="favorites-card-footer-block">${e.bodyPart}</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Target:</h4>
                        <p class="favorites-card-footer-block">${e.target}</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>`}const j=document.querySelector(".Backdrop"),ee=document.querySelector(".Modal"),we=document.querySelector(".SearchButton");document.querySelector(".ModalClose");const te=document.querySelector(".AddRemoveFavorites"),se="IsOpen";let J={};we.addEventListener("click",Ce);async function Ce(){try{J=await Be(),Me(),Te(J),te.addEventListener("submit",ke),ee.addEventListener("click",qe)}catch{}}async function Be(){const e="https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a4";try{return(await g.get(e)).data}catch{}}function Te(e){ee.innerHTML=` <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="./img/symbol-defs.svg#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${e.gifUrl}" alt="imagegif"/>
  </div>
  <h3 class="ModalTitle">${e.name}</h3>
  <div class="ModalRating">
  <p class="NumberRating">${e.rating}</p>
  <div class="StarRating"></div>
  </div>
  <ul class="ModalList">
  <li class="ModalListItem">Target ${e.target}</li>
  <li class="ModalListItem">Body Part ${e.bodyPart}</li>
  <li class="ModalListItem">Equipment${e.equipment}</li>
  <li class="ModalListItem">Popular${e.popularity}</li>
  <li class="ModalListItem">Burned Calories${e.burnedCalories}/${e.time} min</li>
  </ul>
  <p class="Description">${e.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</button>
  </div>  `}function ke(){te.innerText="Remove from"}function Me(){j.classList.add(se)}function qe(){j.classList.remove(se)}
//# sourceMappingURL=commonHelpers.js.map
