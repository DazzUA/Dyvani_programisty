import{a as M}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const r="/Dyvani_programisty/assets/symbol-defs-de218909.svg",a=document.querySelector(".Backdrop");document.querySelector(".Modal");const C=document.querySelector(".ExerciseFiltersListSubcategories"),S=document.querySelector(".search-list"),y=document.querySelector("body"),q=document.querySelector(".favorites-list"),v="IsOpen";let d={},g,h,m,p=0;y.classList.contains("home-style")&&(C.addEventListener("click",f),S.addEventListener("click",f));y.classList.contains("favorites-style")&&q.addEventListener("click",$);async function f(t){const o=t.target.closest("li").id;try{d=await I(o),R(),L(d),b(),w(),m=document.querySelector(".AddRemoveFavorites"),document.querySelectorAll("span").forEach(function(e){e.textContent=e.textContent.charAt(0).toUpperCase()+e.textContent.slice(1)});const i=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(e){e.key==="Escape"&&(c(),l())}),a.addEventListener("click",function(e){e.target===a&&(c(),l())}),i.addEventListener("click",function(e){e.target===i&&(c(),l())})}finally{}}async function I(t){const o=`https://energyflow.b.goit.study/api/exercises/${t}`;try{return(await M.get(o)).data}catch{}}function L(t){const o=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${r}#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${t.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="ModalTitle">${t.name}</h3>
  <div class="ModalRating">
  <div class="NumberRating">${t.rating}</div>
  <div class="RatingBody">
    <div class="RatingActive"></div>
    <div class="RatingItems">
      <input type="radio" class="RatingItem" value="1" name="Rating" />
      <input type="radio" class="RatingItem" value="2" name="Rating" />
      <input type="radio" class="RatingItem" value="3" name="Rating" />
      <input type="radio" class="RatingItem" value="4" name="Rating" />
      <input type="radio" class="RatingItem" value="5" name="Rating" />
    </div>
  </div>
  </div>
  <svg class="vector" width="25" height="2">
            <use href="${r}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${t.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${t.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${t.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${t.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${t.burnedCalories}/${t.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${r}#icon-vector"></use>
          </svg>
  <p class="Description">${t.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</svg><svg class="HeartModalIcon" width="18" height="18">
            <use href="${r}#icon-heart"></use>
          </svg></button>
          </div>
  </div>
  </div> `;a.innerHTML=o}async function $(t){const o=t.target.closest("li").id;try{d=await I(o),R(),L(d),b(),w(),m=document.querySelector(".AddRemoveFavorites"),document.querySelectorAll("span").forEach(function(e){e.textContent=e.textContent.charAt(0).toUpperCase()+e.textContent.slice(1)});const i=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(e){e.key==="Escape"&&(c(),l())}),a.addEventListener("click",function(e){e.target===a&&(c(),l())}),i.addEventListener("click",function(e){e.target===i&&(c(),l())})}finally{}m.innerText="Remove from"}function R(){a.classList.add(v)}function c(){a.classList.remove(v)}function b(){E(),A()}function E(){g=document.querySelector(".RatingActive"),h=document.querySelector(".NumberRating")}function A(t=h.innerHTML){const o=t/.05;g.style.width=`${o}%`}function w(){p=window.scrollY,window.getComputedStyle(document.body).overflow,document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${p}px`}function l(){document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.top,window.scrollTo(0,p)}export{r as i};
//# sourceMappingURL=modal_window-2e297e06.js.map
