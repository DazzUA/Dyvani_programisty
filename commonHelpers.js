import{a as u,i as F}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const W=document.querySelector(".FilterButtons"),T=document.querySelector(".ExerciseFiltersList"),q=document.querySelector(".Pagination"),U="https://energyflow.b.goit.study/api";let H="Muscles",L=1,M=window.innerWidth,w=0;W.addEventListener("click",R);q.addEventListener("click",V);M<=375?w=8:(M<=768,w=12);async function B(){try{return(await u.get(`${U}/filters`,{params:{filter:H,page:L,limit:w}})).data}catch(e){console.log(e)}}async function J(){try{const e=await B().then(s=>{const{results:t,totalPages:r,page:o}=s;if(t&&t.length>0){I(t);const i=A(o,r);q.innerHTML=i}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}J();async function R(e){e.preventDefault(),L=1;const t=e.target.dataset.filter;if(H=t,T.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{B(t).then(r=>{const{results:o,totalPages:i,page:n}=r;I(o);{const a=A(n,i);q.innerHTML=a}})}catch(r){console.log(r)}}async function V(e){L=e.target.textContent,Array.from(e.currentTarget.children).map(s=>{s.textContent!==L?s.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),T.innerHTML="";try{const{results:s,page:t,totalPages:r}=await B();if(t===r)return;I(s)}catch(s){console.log(s)}}function I(e){const s=e.map(({name:t,filter:r,imgUrl:o})=>` <li class="FilterList" data-filter>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${t}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");T.insertAdjacentHTML("beforeend",s)}function A(e,s){let t="";for(let r=1;r<=s;r+=1)t+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return t}document.querySelector(".FilterButtons");const k=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),z=document.querySelector(".Pagination"),E="https://energyflow.b.goit.study/api";k.addEventListener("click",_);async function _(e){if(e.target===e.currentTarget)return;k.classList.add("ExerciseCategoryList");const s=e.target.closest(".ExercisesItem");console.log(s);const t=s.dataset.filter,r=s.dataset.name;console.log(t),console.log(r);try{const o=await K(t,r);console.log(o),k.innerHTML=Y(o.results),j.innerHTML=G(r),document.querySelector(".ExercisesForm").addEventListener("submit",n(t,r));async function n(v){try{const f="https://energyflow.b.goit.study/api/exercises?",d=await u.get(f,{params:{bodypart:"back",keyword:v,page:1,limit:9}});renderExercises(d.data.results)}catch(f){handleError(f)}finally{searchForm.reset()}}const a=document.querySelector("#FilterBtn");console.log(a),a.addEventListener("click",Q),z.innerHTML=""}catch(o){console.log(o)}}async function K(e,s){try{return e==="Muscles"?(await u.get(`${E}/exercises`,{params:{muscles:s}})).data:e==="Body parts"?(await u.get(`${E}/exercises`,{params:{bodypart:s}})).data:(await u.get(`${E}/exercises`,{params:{equipment:s}})).data}catch(t){console.log(t)}}function Y(e){return e.map(({rating:t,name:r,burnedCalories:o,time:i,bodyPart:n,target:a})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${a}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function G(e){return`<div>
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
`}async function Q(e){if(e.target===e.currentTarget)return;const s=e.target.dataset.filter;console.log(s);try{const t=await X(s);k.innerHTML=Z(t);const r=document.querySelector(".TitleExercises");r.innerHTML="Exercises",document.querySelector(".ExercisesForm").remove(),console.log(r)}catch(t){console.log(t)}}async function X(e=filterValueDefault){try{return(await u.get(`${E}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function Z(e){return e.map(({name:t,filter:r,imgUrl:o})=>` <li class='ExercisesItem' data-filter='${r}' data-name='${t}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div>
          <p>${t}</p>
          <p>${r}</p>
        </div>
      </li>`).join("")}const D=document.querySelector(".SearchExercises"),ee=document.querySelector(".SearchInput"),te=document.querySelector(".SearchExercisesList");document.querySelector("#LoadMoreButton");let O="";D.addEventListener("submit",se);function se(e){e.preventDefault(),O=ee.value,re(O)}async function re(e){try{const s="https://energyflow.b.goit.study/api/exercises?",t=await u.get(s,{params:{bodypart:"back",keyword:e,page:1,limit:9}});oe(t.data.results)}catch(s){ie(s)}finally{D.reset()}}function oe(e){e.length===0?ae():e.forEach(s=>{const t=document.createElement("li");t.textContent=s.name,te.appendChild(t)})}function ie(e){console.log(e)}function ae(){F.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ne="https://energyflow.b.goit.study/api/subscription",ce="feedback-form-state",$=JSON.parse(localStorage.getItem(ce));$!=null?m.input.value=$.email:m.input.value="";m.submit.addEventListener("click",le);async function le(e){const s=m.input.value.trim();e.preventDefault();try{const t=await u.post(ne,{email:s});F.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(t){F.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const C="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",de=window.location.pathname;de.lastIndexOf("/");let b="favorites",g=localStorage.getItem(b);g||(localStorage.setItem(b,JSON.stringify([])),g="[]");let l=JSON.parse(g);const y=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let h="",x;const P=document.querySelector(".message-favorites"),p=document.querySelector(".favorites-pagination-block"),S=document.querySelector(".div-favorites-section"),N=document.querySelector(".favorites-list"),ue=document.querySelectorAll(".favorites-list-item");if(!g||l.length==0)P.classList.add("is-open-message-favorites"),p.classList.add("close");else if(g)try{l.forEach(e=>{const s=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${C}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${C}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${C}#icon-running"></use>
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
        </li>`;c.insertAdjacentHTML("beforeend",s)})}catch(e){console.log(e.name),console.log(e.message)}N.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){h=e.currentTarget.id;const s=l.findIndex(t=>t.id==h);l.splice(s,1),localStorage.setItem(b,JSON.stringify(l)),ue.forEach(t=>{t.id==h&&(x=t)}),x&&N.removeChild(x),(!g||l.length==0)&&(P.classList.add("is-open-message-info"),p.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&s()?p.style.display="flex":p.style.display="none"}function s(){return c&&c.offsetParent!==null}function t(){const o=window.innerWidth<=767&&s()?6:c.children.length;if(window.innerWidth>767&&s()){for(let a=0;a<c.children.length;a++)c.children[a].style.display="block";return}Math.ceil(c.children.length/o);let i=1;function n(a){const v=(a-1)*o,f=v+o;for(let d=0;d<c.children.length;d++)c.children[d].style.display="none";for(let d=v;d<f&&d<c.children.length;d++)c.children[d].style.display="block"}n(i),p.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(p.querySelectorAll("button").forEach(f=>f.classList.remove("active-btn")),a.target.classList.add("active-btn"),i=parseInt(a.target.textContent),n(i))})}function r(){window.matchMedia("(min-width: 768px)").matches?S.style.overflowY="scroll":S.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?S.style.maxHeight="480px":S.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),t(),r()}),s()&&c.children.length>=6&&t()});y.addEventListener("click",()=>{if(y.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(b,JSON.stringify(l)),y.textContent="Delete from favorites",y.innerHTML="Delete from favorites";else{const e=l.findIndex(t=>t.id==h);l.splice(e,1),localStorage.setItem(b,JSON.stringify(l));const s=document.querySelectorAll(".favorites-list-item");y.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${h}"]`)&&(s.forEach(t=>{t.id==h&&(x=t)}),list.removeChild(x),(!g||l.length==0)&&(P.classList.add("is-open-message-info"),p.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
