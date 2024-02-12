import{a as p}from"./vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const g="/Dyvani_programisty/assets/symbol-defs-940e27cf.svg",n=document.querySelector(".Backdrop");document.querySelector(".Modal");const f=document.querySelector(".ExerciseFiltersList"),v=document.querySelector(".ModalClose"),c=document.querySelector(".AddRemoveFavorites"),d="IsOpen";let l={},y="64f389465ae26083f39b17a4",u,m;f.addEventListener("click",h);async function h(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.closest("li").id;try{l=await R(s),C(),M(l),$(),document.querySelectorAll("span").forEach(function(i){i.textContent=i.textContent.charAt(0).toUpperCase()+i.textContent.slice(1)}),n.addEventListener("click",I),c.addEventListener("submit",L)}catch{}}function I(t){(t.currentTarget===v||t.key==="Escape"||t.target===n)&&T()}async function R(){const t=`https://energyflow.b.goit.study/api/exercises/${y}`;try{return(await p.get(t)).data}catch{}}function M(t){const s=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="${g}#icon-close"></use>
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
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${t.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${t.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${t.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${t.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${t.burnedCalories}/${t.time} min</span></li>
  </ul>
  <p class="Description">${t.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</svg><svg class="HeartModalIcon" width="18" height="18">
            <use href="./img/symbol-defs.svg#icon-heart"></use>
          </svg></button>
          </div>
  </div>
  </div> `;n.innerHTML=s}function L(){toggleFavorite(l),c.innerText="Remove from"}function C(){n.classList.add(d)}function T(){n.classList.remove(d)}function $(){b(),q()}function b(){u=document.querySelector(".RatingActive"),m=document.querySelector(".NumberRating")}function q(t=m.innerHTML){const s=t/.05;u.style.width=`${s}%`}export{g as i};
//# sourceMappingURL=modal_window-a11e8f1a.js.map
