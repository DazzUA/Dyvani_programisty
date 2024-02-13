import{a as f}from"./vendor-8cce9181.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const o="/Dyvani_programisty/assets/symbol-defs-de218909.svg",n=document.querySelector(".Backdrop");document.querySelector(".Modal");const v=document.querySelector(".ExerciseFiltersListSubcategories"),d=document.querySelector(".ModalClose"),p="IsOpen";let u={},m,g;v.addEventListener("click",y);async function y(t){if(t.target.nodeName!=="BUTTON")return;const i=t.target.closest("li").id;console.log(i);try{u=await h(i),R(),I(u),L(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),document.addEventListener("keydown",function(s){s.key==="Escape"&&c()}),n.addEventListener("click",function(s){s.target===n&&c()}),d.addEventListener("click",function(s){s.target===d&&c()})}catch{}}async function h(t){const i=`https://energyflow.b.goit.study/api/exercises/${t}`;try{return(await f.get(i)).data}catch{}}function I(t){const i=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${o}#icon-close"></use>
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
            <use href="${o}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${t.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${t.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${t.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${t.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${t.burnedCalories}/${t.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${o}#icon-vector"></use>
          </svg>
  <p class="Description">${t.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</svg><svg class="HeartModalIcon" width="18" height="18">
            <use href="${o}#icon-heart"></use>
          </svg></button>
          </div>
  </div>
  </div> `;n.innerHTML=i}function R(){n.classList.add(p)}function c(){n.classList.remove(p)}function L(){M(),$()}function M(){m=document.querySelector(".RatingActive"),g=document.querySelector(".NumberRating")}function $(t=g.innerHTML){const i=t/.05;m.style.width=`${i}%`}export{o as i};
//# sourceMappingURL=modal_window-d2413290.js.map
