import{a as p,i as F}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const G=document.querySelector(".FilterButtons"),M=document.querySelector(".ExerciseFiltersList"),H=document.querySelector(".Pagination"),Q="https://energyflow.b.goit.study/api";let R="Muscles",C=1,W=window.innerWidth,$=0;G.addEventListener("click",Z);H.addEventListener("click",ee);W<=375?$=8:(W<=768,$=12);async function O(){try{return(await p.get(`${Q}/filters`,{params:{filter:R,page:C,limit:$}})).data}catch(e){console.log(e)}}async function X(){try{const e=await O().then(t=>{const{results:s,totalPages:r,page:o}=t;if(s&&s.length>0){N(s);const a=J(o,r);H.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}X();async function Z(e){e.preventDefault(),C=1;const s=e.target.dataset.filter;if(R=s,M.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{O(s).then(r=>{const{results:o,totalPages:a,page:n}=r;N(o);{const i=J(n,a);H.innerHTML=i}})}catch(r){console.log(r)}}async function ee(e){C=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==C?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),M.innerHTML="";try{const{results:t,page:s,totalPages:r}=await O();if(s===r)return;N(t)}catch(t){console.log(t)}}function N(e){const t=e.map(({name:s,filter:r,imgUrl:o})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");M.insertAdjacentHTML("beforeend",t)}function J(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}document.querySelector(".FilterButtons");const y=document.querySelector(".ExerciseFiltersList"),te=document.querySelector(".ExercisesHead"),f=document.querySelector(".Pagination"),T="https://energyflow.b.goit.study/api";let u=1,x,k;y.addEventListener("click",se);async function se(e){if(e.target===e.currentTarget)return;y.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");console.log(t),x=t.dataset.filter,k=t.dataset.name;try{const{page:s,perPage:r,totalPages:o,results:a}=await V(x,k);if(console.log(a),y.innerHTML=j(a),te.innerHTML=re(k),document.querySelector("#FilterBtn").addEventListener("click",oe),f.innerHTML="",o>1){const i=K(o);console.log(i),f.innerHTML=i}//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!НОВЕ
f.addEventListener("click",Y)}catch(s){console.log(s)}}async function V(e,t,s){try{return e==="Muscles"?(await p.get(`${T}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await p.get(`${T}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await p.get(`${T}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function j(e){return e.map(({rating:s,name:r,burnedCalories:o,time:a,bodyPart:n,target:i})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${i}</span></p>
        </li>
      </ul>

    </li>`).join("")}function re(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles">Muscles</button>
    <button class="ItemExercises" data-filter="Body parts">Body parts</button>
    <button class="ItemExercises" data-filter="Equipment">Equipment</button>
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
`}async function oe(e){if(u=1,f.removeEventListener("click",Y),e.target!==e.currentTarget){x=e.target.dataset.filter;try{const{page:t,perPage:s,totalPages:r,results:o}=await _(x);if(console.log(r),y.innerHTML=z(o),r>1){const i=K(r);console.log(i),f.innerHTML=i}else f.innerHTML="";f.addEventListener("click",ae);const a=document.querySelector(".TitleExercises");a.innerHTML="Exercises";const n=document.querySelector(".ExercisesForm");console.log(a)}catch(t){console.log(t)}}}async function _(e=filterValueDefault){try{return(await p.get(`${T}/filters`,{params:{filter:e,page:u,limit:12}})).data}catch(t){console.log(t)}}function z(e){return e.map(({name:s,filter:r,imgUrl:o})=>` <li class='ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div>
          <p>${s}</p>
          <p>${r}</p>
        </div>
      </li>`).join("")}function K(e){let t="";for(let s=1;s<=e;s+=1)t+=`<button class="pagination-btn" type="button">${s}</button>`;return t}async function Y(e){u=e.target.textContent,console.log(u);try{const{results:t,page:s,totalPages:r}=await V(x,k,u);y.innerHTML=j(t)}catch(t){console.log(t)}}async function ae(e){u=e.target.textContent,console.log(u);try{const{results:t,page:s,totalPages:r}=await _(x,u);console.log(t),y.innerHTML=z(t)}catch(t){console.log(t)}}const ie="https://energyflow.b.goit.study/api/exercises",A={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},S={query:"",page:1};A.searchForm.addEventListener("submit",ne);async function ne(e){e.preventDefault(),A.searchList.innerHTML="",S.page=1;const t=e.currentTarget;S.query=t.elements.query.value.trim(),S.query&&await ce(S)}async function ce(e){try{const t=await p.get(`${ie}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});le(t.data.results)}catch(t){handleError(t)}}function le(e){e.length===0?de():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,A.searchList.appendChild(s)})}function de(){F.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const h={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ue="https://energyflow.b.goit.study/api/subscription",fe="feedback-form-state",P=JSON.parse(localStorage.getItem(fe));P!=null?h.input.value=P.email:h.input.value="";h.submit.addEventListener("click",ge);async function ge(e){const t=h.input.value.trim();e.preventDefault();try{const s=await p.post(ue,{email:t});F.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}catch(s){F.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}}const I="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",pe=window.location.pathname;pe.lastIndexOf("/");let w="favorites",m=localStorage.getItem(w);m||(localStorage.setItem(w,JSON.stringify([])),m="[]");let l=JSON.parse(m);const b=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let v="",L;const D=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),E=document.querySelector(".div-favorites-section"),U=document.querySelector(".favorites-list"),me=document.querySelectorAll(".favorites-list-item");if(!m||l.length==0)D.classList.add("is-open-message-favorites"),g.classList.add("close");else if(m)try{l.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${I}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${I}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${I}#icon-running"></use>
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
        </li>`;c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}U.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){v=e.currentTarget.id;const t=l.findIndex(s=>s.id==v);l.splice(t,1),localStorage.setItem(w,JSON.stringify(l)),me.forEach(s=>{s.id==v&&(L=s)}),L&&U.removeChild(L),(!m||l.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return c&&c.offsetParent!==null}function s(){const o=window.innerWidth<=767&&t()?6:c.children.length;if(window.innerWidth>767&&t()){for(let i=0;i<c.children.length;i++)c.children[i].style.display="block";return}Math.ceil(c.children.length/o);let a=1;function n(i){const q=(i-1)*o,B=q+o;for(let d=0;d<c.children.length;d++)c.children[d].style.display="none";for(let d=q;d<B&&d<c.children.length;d++)c.children[d].style.display="block"}n(a),g.addEventListener("click",function(i){i.target.tagName==="BUTTON"&&(g.querySelectorAll("button").forEach(B=>B.classList.remove("active-btn")),i.target.classList.add("active-btn"),a=parseInt(i.target.textContent),n(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?E.style.overflowY="scroll":E.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?E.style.maxHeight="480px":E.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&c.children.length>=6&&s()});b.addEventListener("click",()=>{if(b.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(w,JSON.stringify(l)),b.textContent="Delete from favorites",b.innerHTML="Delete from favorites";else{const e=l.findIndex(s=>s.id==v);l.splice(e,1),localStorage.setItem(w,JSON.stringify(l));const t=document.querySelectorAll(".favorites-list-item");b.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${v}"]`)&&(t.forEach(s=>{s.id==v&&(L=s)}),list.removeChild(L),(!m||l.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
