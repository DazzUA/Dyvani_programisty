import{a as m}from"./vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const a=document.querySelector(".Backdrop"),l=document.querySelector(".Modal"),f=document.querySelector(".SearchButton");document.querySelector(".ModalClose");const c=document.querySelector(".AddRemoveFavorites"),d="IsOpen";let n={};f.addEventListener("click",p);async function p(){try{n=await g(),h(),y(n),c.addEventListener("submit",v),l.addEventListener("click",L)}catch{}}async function g(){const t="https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a4";try{return(await m.get(t)).data}catch{}}function y(t){l.innerHTML=` <button class="ModalClose" type="button">
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
  </div>  `}function v(){c.innerText="Remove from"}function h(){a.classList.add(d)}function L(){a.classList.remove(d)}
//# sourceMappingURL=modal_window-523fa135.js.map
