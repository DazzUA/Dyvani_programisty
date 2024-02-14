import{a as U}from"./vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const m="/Dyvani_programisty/assets/symbol-defs-de218909.svg",R=window.location.pathname,W=R.lastIndexOf("/"),x=R.substring(W);function J(e){let s=localStorage.getItem(e);return s||(localStorage.setItem(e,JSON.stringify([])),s="[]"),s}let C="favorites",b=J(C),d=JSON.parse(b);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let I;const $=document.querySelector(".message-favorites"),v=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),V=document.querySelectorAll(".favorites-list-item");function Y(e){const s=T(e);n.insertAdjacentHTML("beforeend",s)}if(x==="/favorites.html"){if(!b||d.length==0)$.classList.add("is-open-message-favorites"),v.classList.add("close");else if(b)try{d.forEach(e=>{Y(e)})}catch(e){console.log(e.name),console.log(e.message)}}x==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/Dyvani_programisty/favorites.html"&&window.innerWidth<=767&&isFavoritesListVisibl?v.style.display="flex":v.style.display="none"}function s(){return n&&n.offsetParent!==null}function o(){const t=window.innerWidth<=767&&s()?8:n.children.length,a=Math.ceil(n.children.length/t);if(window.innerWidth>767&&s()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let c=1;function M(r){const f=(r-1)*t,L=f+t;for(let l=0;l<n.children.length;l++)n.children[l].style.display="none";for(let l=f;l<L&&l<n.children.length;l++)n.children[l].style.display="block"}M(c),v.innerHTML="";for(let r=1;r<=a;r++){const f=document.createElement("button");f.textContent=r,f.addEventListener("click",function(){c=r,M(c),E(c)}),v.appendChild(f)}function E(r){v.querySelectorAll("button").forEach((L,l)=>{l===r-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}E(c)}o(),window.addEventListener("resize",o);function i(){window.matchMedia("(min-width: 768px)").matches?w.style.overflowY="scroll":w.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="480px":w.style.maxHeight="none",window.scrollBy(0,10)}i(),e(),window.addEventListener("resize",function(){e(),o(),i()}),s()&&n.children.length>=8&&o()});function z(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const s=e.target.closest("li").id;q(s)}}x==="/favorites.html"&&n.addEventListener("click",z);function q(e){const s=d.findIndex(o=>o._id==e);d.splice(s,1),localStorage.setItem(C,JSON.stringify(d)),V.forEach(o=>{o._id==e&&(I=o)}),I&&n.removeChild(I),(!b||d.length==0)&&($.classList.add("is-open-message-info"),v.classList.add("close")),G()}function G(){n.innerHTML="",d.forEach(e=>{const s=T(e);n.insertAdjacentHTML("beforeend",s)})}function T(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${m}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${m}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${m}#icon-running'></use>
          </svg>
        </div>
        <p class='favorites-name-part'>${e.name}</p>
      </div>

      <ul class="favorites-card-footer-list">
        <li>
          <p class='favorites-card-footer-title'>Burned calories: <span class='favorites-footer-text-value'>${e.burnedCalories} / ${e.time} min</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Body part: <span class='favorites-footer-text-value'>${e.bodyPart}</span></p>
        </li>
        <li>
          <p class='favorites-card-footer-title'>Target: <span class='favorites-footer-text-value'>${e.target}</span></p>
        </li>
      </ul>

    </li>`}function K(e){d.push(e),localStorage.setItem(C,JSON.stringify(d))}const g=document.querySelector(".Backdrop");document.querySelector(".Modal");const Q=document.querySelector(".ExerciseFiltersListSubcategories"),X=document.querySelector(".search-list"),A=document.querySelector("body"),Z=document.querySelector(".favorites-list"),P="IsOpen";let p={},F,B,u,S=0;A.classList.contains("home-style")&&(Q.addEventListener("click",k),X.addEventListener("click",k));A.classList.contains("favorites-style")&&Z.addEventListener("click",te);async function k(e){const s=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await N(s),H(),D(p),O(),_(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites");const o=u.textContent;u.addEventListener("click",j);const i=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(t){t.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(t){t.target===g&&(h(),y())}),i.addEventListener("click",function(t){t.target===i&&(h(),y())})}finally{}}function j(){K(p),u.innerText=" Remove from "}function ee(){q(p._id),console.log(p._id),u.innerText=" Add to favorites "}async function N(e){const s=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await U.get(s)).data}catch{}}function D(e){const s=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${m}#icon-close"></use>
          </svg>
        </button>
  <div class="ModalImage">     
  <img class="ImageGif" src="${e.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="ModalTitle">${e.name}</h3>
  <div class="ModalRating">
  <div class="NumberRating">${e.rating}</div>
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
            <use href="${m}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${e.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${e.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${e.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${e.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${m}#icon-vector"></use>
          </svg>
  <p class="Description">${e.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites
  <svg class="HeartModalIcon" width="18" height="18">
            <use href="${m}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;g.innerHTML=s}async function te(e){const s=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await N(s),H(),D(p),O(),_(),document.querySelectorAll("span").forEach(function(i){i.textContent=i.textContent.charAt(0).toUpperCase()+i.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites"),u.addEventListener("click",ee);const o=document.querySelector(".CloseModalIcon");u.innerText=" Remove from ",document.addEventListener("keydown",function(i){i.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(i){i.target===g&&(h(),y())}),o.addEventListener("click",function(i){i.target===o&&(h(),y())})}finally{}}function H(){g.classList.add(P)}function h(){g.classList.remove(P)}function O(){se(),ie()}function se(){F=document.querySelector(".RatingActive"),B=document.querySelector(".NumberRating")}function ie(e=B.innerHTML){const s=e/.05;F.style.width=`${s}%`}function _(){S=window.scrollY,document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${S}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.top="",window.scrollTo(0,S)}export{m as i};
//# sourceMappingURL=modal_window-e9759320.js.map
