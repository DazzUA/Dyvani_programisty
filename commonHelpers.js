import{a as p,i as U}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const X=document.querySelector(".FilterButtons"),x=document.querySelector(".ExerciseFiltersList"),O=document.querySelector(".Pagination"),Z="https://energyflow.b.goit.study/api";let R="Muscles",C=1,J=window.innerWidth,w=0;X.addEventListener("click",te);O.addEventListener("click",V);J<=375?w=8:(J<=768,w=12);async function A(){try{return(await p.get(`${Z}/filters`,{params:{filter:R,page:C,limit:w}})).data}catch(e){console.log(e)}}async function ee(){try{const e=await A().then(t=>{const{results:s,totalPages:r,page:i}=t;if(s&&s.length>0){x.innerHTML=E(s);const a=q(i,r);O.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}ee();async function te(e){e.preventDefault(),C=1;const s=e.target.dataset.filter;if(R=s,x.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{A(s).then(r=>{const{results:i,totalPages:a,page:c}=r;x.innerHTML=E(i);{const n=q(c,a);O.innerHTML=n}})}catch(r){console.log(r)}}async function V(e){C=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==C?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),x.innerHTML="";try{const{results:t,page:s,totalPages:r}=await A();if(s===r)return;x.innerHTML=E(t)}catch(t){console.log(t)}}function E(e){return e.map(({name:s,filter:r,imgUrl:i})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function q(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const d=document.querySelector(".ExerciseFiltersList"),se=document.querySelector(".ExercisesHead"),u=document.querySelector(".Pagination"),T="https://energyflow.b.goit.study/api";let h=1,v,k;d.addEventListener("click",N);async function N(e){if(d.removeEventListener("click",N),d.classList.add("ExerciseCategoryList"),u.removeEventListener("click",V),u.removeEventListener("click",Y),e.target===e.currentTarget)return;d.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");v=t.dataset.filter,k=t.dataset.name;try{se.innerHTML=re(k);const{page:s,totalPages:r,results:i}=await j(v,k);d.innerHTML=D(i);const a=document.querySelector(".StartBtn"),c=document.querySelector("#FilterBtn");if(c.addEventListener("click",ie),c.addEventListener("click",_),u.innerHTML="",r>1){const n=q(s,r);u.innerHTML=n}u.addEventListener("click",K)}catch(s){console.log(s)}}function _(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",_)}async function j(e,t,s){try{return e==="Muscles"?(await p.get(`${T}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await p.get(`${T}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await p.get(`${T}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function D(e){return e.map(({rating:s,name:r,burnedCalories:i,time:a,bodyPart:c,target:n,_id:y})=>`<li class="WorkoutCard">
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

    </li>`).join("")}function re(e){return`<div>
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
`}async function ie(e){if(d.addEventListener("click",N),d.classList.remove("ExerciseCategoryList"),h=1,u.removeEventListener("click",K),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){v=e.target.dataset.filter;try{const{page:t,totalPages:s,results:r}=await z(v);if(d.innerHTML=E(r),s>1){const a=q(t,s);u.innerHTML=a}else u.innerHTML="";u.addEventListener("click",Y);const i=document.querySelector(".TitleExercises");i.innerHTML="Exercises"}catch(t){console.log(t)}}}async function z(e=filterValueDefault){try{return(await p.get(`${T}/filters`,{params:{filter:e,page:h,limit:12}})).data}catch(t){console.log(t)}}async function K(e){if(e.target.tagName==="BUTTON"){h=e.target.textContent;try{const{results:t}=await j(v,k,h);d.innerHTML=D(t)}catch(t){console.log(t)}}}async function Y(e){h=e.target.textContent;try{const{results:t}=await z(v,h);d.innerHTML=E(t)}catch(t){console.log(t)}}const ae="https://energyflow.b.goit.study/api/exercises",G={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},I={query:"",page:1};G.searchForm.addEventListener("submit",oe);async function oe(e){e.preventDefault(),G.searchList.innerHTML="",I.page=1;const t=e.currentTarget;if(I.query=t.elements.query.value.trim(),!!I.query)try{const s=await ne(query);D(s.data)}catch{}}async function ne(e){try{return(await p.get(ae,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}})).data}catch(t){handleError(t)}}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ce="https://energyflow.b.goit.study/api/subscription",le="feedback-form-state",M=JSON.parse(localStorage.getItem(le));M!=null?m.input.value=M.email:m.input.value="";m.submit.addEventListener("click",de);async function de(e){const t=m.input.value.trim();e.preventDefault();try{const s=await p.post(ce,{email:t});U.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(s){U.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const P="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",ue=window.location.pathname;ue.lastIndexOf("/");function fe(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let F="favorites",b=fe(F),l=JSON.parse(b);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let H="",L;const W=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),S=document.querySelector(".div-favorites-section"),ge=document.querySelectorAll(".favorites-list-item");function pe(e){const t=Q(e);o.insertAdjacentHTML("beforeend",t)}if(!b||l.length==0)W.classList.add("is-open-message-favorites"),g.classList.add("close");else if(b)try{l.forEach(e=>{pe(e)})}catch(e){console.log(e.name),console.log(e.message)}document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return o&&o.offsetParent!==null}function s(){const i=window.innerWidth<=767&&t()?8:o.children.length;if(window.innerWidth>767&&t()){for(let n=0;n<o.children.length;n++)o.children[n].style.display="block";return}Math.ceil(o.children.length/i);let a=1;function c(n){const y=(n-1)*i,$=y+i;for(let f=0;f<o.children.length;f++)o.children[f].style.display="none";for(let f=y;f<$&&f<o.children.length;f++)o.children[f].style.display="block"}c(a),g.addEventListener("click",function(n){n.target.tagName==="BUTTON"&&(g.querySelectorAll("button").forEach($=>$.classList.remove("active-btn")),n.target.classList.add("active-btn"),a=parseInt(n.target.textContent),c(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?S.style.overflowY="scroll":S.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?S.style.maxHeight="480px":S.style.maxHeight="none",window.scrollBy(0,10)}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&o.children.length>=8&&s()});const B=document.querySelector(".add-favorites");function me(){if(B.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(F,JSON.stringify(l)),B.textContent="Delete from favorites";else{const e=l.findIndex(s=>s.id==H);l.splice(e,1),localStorage.setItem(F,JSON.stringify(l));const t=document.querySelectorAll(".favorites-list-item");B.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${H}"]`)&&(t.forEach(s=>{s.id==H&&(L=s)}),list.removeChild(L),(!b||l.length==0)&&(W.classList.add("is-open-message-info"),g.classList.add("close")))}}B.addEventListener("click",me);function he(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;ve(t)}}o.addEventListener("click",he);function ve(e){const t=l.findIndex(s=>s.id==e);l.splice(t,1),localStorage.setItem(F,JSON.stringify(l)),ge.forEach(s=>{s.id==e&&(L=s)}),L&&o.removeChild(L),(!b||l.length==0)&&(W.classList.add("is-open-message-info"),g.classList.add("close")),ye()}function ye(){o.innerHTML="",l.forEach(e=>{const t=Q(e);o.insertAdjacentHTML("beforeend",t)})}function Q(e){return`<li class="favorites-list-item" id="${e.id}">
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
    </li>`}
//# sourceMappingURL=commonHelpers.js.map
