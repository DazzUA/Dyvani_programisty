import{a as m}from"./vendor-db25513e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=u(e);fetch(e.href,s)}})();const I="/Dyvani_programisty/assets/symbol-defs-940e27cf.svg",n=document.querySelector(".Backdrop"),l=document.querySelector(".Modal"),f=document.querySelector(".SearchButton");document.querySelector(".ModalClose");const c=document.querySelector(".AddRemoveFavorites"),d="IsOpen";let a={};f.addEventListener("click",p);async function p(){try{a=await g(),h(),y(a),c.addEventListener("submit",v),l.addEventListener("click",L)}catch{}}async function g(){const t="https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a4";try{return(await m.get(t)).data}catch{}}function y(t){l.innerHTML=` <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="8" height="8">
            <use href="./img/symbol-defs.svg#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${t.gifUrl}" alt="imagegif"/>
  </div>
  <h3 class="ModalTitle">${t.name}</h3>
  <div class="ModalRating">
  <p class="NumberRating">${t.rating}</p>
  <div class="StarRating"></div>
  </div>
  <ul class="ModalList">
  <li class="ModalListItem">Target ${t.target}</li>
  <li class="ModalListItem">Body Part ${t.bodyPart}</li>
  <li class="ModalListItem">Equipment${t.equipment}</li>
  <li class="ModalListItem">Popular${t.popularity}</li>
  <li class="ModalListItem">Burned Calories${t.burnedCalories}/${t.time} min</li>
  </ul>
  <p class="Description">${t.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites</button>
  </div>  `}function v(){c.innerText="Remove from"}function h(){n.classList.add(d)}function L(){n.classList.remove(d)}export{I as i};
//# sourceMappingURL=modal_window-3fe10479.js.map
