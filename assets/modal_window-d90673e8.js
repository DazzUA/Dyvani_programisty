import{a as W}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const g="/Dyvani_programisty/assets/symbol-defs-de218909.svg",q=window.location.pathname,J=q.lastIndexOf("/"),C=q.substring(J);function V(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let M="favorites",I=V(M),d=JSON.parse(I);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let S;const T=document.querySelector(".message-favorites"),m=document.querySelector(".favorites-pagination-block"),L=document.querySelector(".div-favorites-section"),Y=document.querySelectorAll(".favorites-list-item");function z(e){const t=A(e);n.insertAdjacentHTML("beforeend",t)}if(C==="/favorites.html"){if(!I||d.length==0)T.classList.add("is-open-message-favorites"),m.classList.add("close");else if(I)try{d.forEach(e=>{z(e)})}catch(e){console.log(e.name),console.log(e.message)}}C==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/Dyvani_programisty/favorites.html"&&window.innerWidth<=767&&isFavoritesListVisibl?m.style.display="flex":m.style.display="none"}function t(){return n&&n.offsetParent!==null}function i(){const o=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/o);if(window.innerWidth>767&&t()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let c=1;function R(r){const v=(r-1)*o,w=v+o;for(let l=0;l<n.children.length;l++)n.children[l].style.display="none";for(let l=v;l<w&&l<n.children.length;l++)n.children[l].style.display="block"}R(c),m.innerHTML="";for(let r=1;r<=a;r++){const v=document.createElement("button");v.textContent=r,v.addEventListener("click",function(){c=r,R(c),k(c)}),m.appendChild(v)}function k(r){m.querySelectorAll("button").forEach((w,l)=>{l===r-1?w.classList.add("active-btn"):w.classList.remove("active-btn")})}k(c)}i(),window.addEventListener("resize",i);function s(){window.matchMedia("(min-width: 768px)").matches?L.style.overflowY="scroll":L.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?L.style.maxHeight="480px":L.style.maxHeight="none",window.scrollBy(0,10)}s(),e(),window.addEventListener("resize",function(){e(),i(),s()}),t()&&n.children.length>=8&&i()});function G(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;E(t)}}C==="/favorites.html"&&n.addEventListener("click",G);function E(e){const t=d.findIndex(i=>i._id==e);d.splice(t,1),localStorage.setItem(M,JSON.stringify(d)),Y.forEach(i=>{i._id==e&&(S=i)}),S&&n.removeChild(S),(!I||d.length==0)&&(T.classList.add("is-open-message-info"),m.classList.add("close")),K()}function K(){n.innerHTML="",d.forEach(e=>{const t=A(e);n.insertAdjacentHTML("beforeend",t)})}function A(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${g}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${g}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${g}#icon-running'></use>
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

    </li>`}function Q(e){d.push(e),localStorage.setItem(M,JSON.stringify(d))}const p=document.querySelector(".Backdrop");document.querySelector(".Modal");const X=document.querySelector(".ExerciseFiltersListSubcategories"),Z=document.querySelector(".search-list"),F=document.querySelector("body"),j=document.querySelector(".favorites-list"),P="IsOpen";let f={},B,N,u,x,b;F.classList.contains("home-style")&&(X.addEventListener("click",$),Z.addEventListener("click",$));F.classList.contains("favorites-style")&&j.addEventListener("click",se);async function $(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;f=await D(t),_(),H(f),O(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites"),b=u.textContent,u.addEventListener("click",ee);const i=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),i.addEventListener("click",function(s){s.target===i&&(h(),y())})}finally{}}function ee(){console.log(b),b=="Add to favorites"?(Q(f),u.innerText=" Remove from "):b=="Remove from"?(E(f._id),u.innerText=" Add to favorites "):console.log("fack")}function te(){E(f._id),console.log(f._id),u.innerText=" Add to favorites "}async function D(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await W.get(t)).data}catch{}}function H(e){const t=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${g}#icon-close"></use>
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
            <use href="${g}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${e.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${e.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${e.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${e.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${g}#icon-vector"></use>
          </svg>
  <p class="Description">${e.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites
  <svg class="HeartModalIcon" width="18" height="18">
            <use href="${g}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;p.innerHTML=t}async function se(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;f=await D(t),_(),H(f),O(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites"),u.addEventListener("click",te);const i=document.querySelector(".CloseModalIcon");u.innerText=" Remove from ",document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),i.addEventListener("click",function(s){s.target===i&&(h(),y())})}finally{}}function _(){p.classList.add(P)}function h(){p.classList.remove(P)}function O(){oe(),ie()}function oe(){B=document.querySelector(".RatingActive"),N=document.querySelector(".NumberRating")}function ie(e=N.innerHTML){const t=e/.05;B.style.width=`${t}%`}function U(){x=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${x}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,x)}export{g as i};
//# sourceMappingURL=modal_window-d90673e8.js.map
