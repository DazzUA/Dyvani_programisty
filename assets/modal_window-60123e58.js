import{a as Y}from"./vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const m="/Dyvani_programisty/assets/symbol-defs-de218909.svg",F=window.location.pathname,z=F.lastIndexOf("/"),k=F.substring(z);function K(e){let s=localStorage.getItem(e);return s||(localStorage.setItem(e,JSON.stringify([])),s="[]"),s}let b="favorites",L=K(b),v=JSON.parse(L);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let C;const M=document.querySelector(".message-favorites"),f=document.querySelector(".favorites-pagination-block"),y=document.querySelector(".div-favorites-section"),G=document.querySelectorAll(".favorites-list-item");if(k==="/favorites.html"){if(!L||v.length==0)M.classList.add("is-open-message-favorites"),f.classList.add("close");else if(L)try{v.forEach(e=>{N()})}catch(e){console.log(e.name),console.log(e.message)}}k==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&s()?f.style.display="flex":f.style.display="none"}function s(){return o&&o.offsetParent!==null}function i(){const t=window.innerWidth<=767&&s()?8:o.children.length,n=Math.ceil(o.children.length/t);if(window.innerWidth>767&&s()){for(let r=0;r<o.children.length;r++)o.children[r].style.display="block";return}let l=1;function I(r){const u=(r-1)*t,w=u+t;for(let d=0;d<o.children.length;d++)o.children[d].style.display="none";for(let d=u;d<w&&d<o.children.length;d++)o.children[d].style.display="block"}I(l),f.innerHTML="";for(let r=1;r<=n;r++){const u=document.createElement("button");u.textContent=r,u.addEventListener("click",function(){l=r,I(l),P(l)}),f.appendChild(u)}function P(r){f.querySelectorAll("button").forEach((w,d)=>{d===r-1?w.classList.add("active-btn"):w.classList.remove("active-btn")})}P(l)}i(),window.addEventListener("resize",i);function a(){const t=Array.from(o.children).reduce((n,l)=>n+l.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?y.style.maxHeight="500px":y.style.maxHeight="none",t>y.offsetHeight?y.style.overflowY="scroll":y.style.overflowY="visible",window.scrollBy(0,10)}a(),e(),window.addEventListener("resize",function(){e(),i(),a()}),s()&&o.children.length>=8&&i()});function Q(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const s=e.target.closest("li").id;B(s)}}k==="/favorites.html"&&o.addEventListener("click",Q);function B(e){const s=v.findIndex(i=>i._id==e);v.splice(s,1),localStorage.setItem(b,JSON.stringify(v)),G.forEach(i=>{i._id==e&&(C=i)}),C&&o.removeChild(C),(!L||v.length==0)&&(M.classList.add("is-open-message-info"),f.classList.add("close"),window.location.reload()),N()}function N(){o.innerHTML="",v.forEach(e=>{const s=X(e);o.insertAdjacentHTML("beforeend",s)})}function X(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
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

    </li>`}function Z(e){let s=JSON.parse(localStorage.getItem(b))||[];s.findIndex(a=>a._id===e._id)===-1&&(s.push(e),localStorage.setItem(b,JSON.stringify(s)))}const g=document.querySelector(".backdrop"),j=document.querySelector(".exercise-filters-list-subcategories"),ee=document.querySelector(".search-list"),R=document.querySelector("body"),te=document.querySelector(".favorites-list"),T="is-open";let h={},H,O,c,E,p;R.classList.contains("home-style")&&(j.addEventListener("click",A),ee.addEventListener("click",A));R.classList.contains("favorites-style")&&te.addEventListener("click",se);async function A(e){const s=e.target.closest("li").id;try{let a=function(t){t.target===i&&(x(),S(),i.removeEventListener("click",a))};if(e.target.nodeName!=="BUTTON")return;h=await U(s),J(),D(h),W(),V(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),c=document.querySelector(".add-remove-favorites"),p=c.textContent,c.addEventListener("click",_);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),g.addEventListener("click",q),i.addEventListener("click",a)}catch{}finally{}}function _(){p.trim().toLowerCase()=="add to favorites"?(c.textContent=" Remove from ",p=c.textContent,Z(h)):p.trim().toLowerCase()=="remove from"&&(c.textContent=" Add to favorites ",p=c.textContent,B(h._id))}async function U(e){const s=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await Y.get(s)).data}catch{}}function D(e){const s=`<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${m}#icon-close"></use>
          </svg>
        </button>
  <div class="modal-image">     
  <img class="image-gif" src="${e.gifUrl}" alt="imagegif"/>
  </div><div>
  <h3 class="modal-title">${e.name}</h3>
  <div class="modal-rating">
  <div class="number-rating">${e.rating}</div>
  <div class="rating-body">
    <div class="rating-active"></div>
    <div class="rating-items">
      <input type="radio" class="rating-item" value="1" name="Rating" />
      <input type="radio" class="rating-item" value="2" name="Rating" />
      <input type="radio" class="rating-item" value="3" name="Rating" />
      <input type="radio" class="rating-item" value="4" name="Rating" />
      <input type="radio" class="rating-item" value="5" name="Rating" />
    </div>
  </div>
  </div>
  <svg class="vector" width="25" height="2">
            <use href="${m}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${e.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${e.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${e.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${e.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${m}#icon-vector"></use>
          </svg>
  <p class="description">${e.description}</p>
 <div class="button-favourites"> <button class="add-remove-favorites" type="button">Add to favorites</button>
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${m}#icon-heart"></use></svg>
             
          </div>
          </div>
  </div>
  </div> `;g.innerHTML=s}async function se(e){const s=e.target.closest("li").id;try{let a=function(t){t.target===i&&(x(),S(),i.removeEventListener("click",a))};if(e.target.nodeName!=="BUTTON")return;h=await U(s),J(),D(h),W(),V(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),c=document.querySelector(".add-remove-favorites"),c.textContent=" Remove from ",p=c.textContent,c.addEventListener("click",_);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),g.addEventListener("click",q),i.addEventListener("click",a)}catch{}finally{}}function $(e){e.key==="Escape"&&(x(),S(),document.removeEventListener("keydown",$))}function q(e){e.target===g&&(x(),S(),g.removeEventListener("click",q))}function J(){g.classList.add(T)}function x(){g.classList.remove(T)}function W(){ie(),oe()}function ie(){H=document.querySelector(".rating-active"),O=document.querySelector(".number-rating")}function oe(e=O.innerHTML){const s=e/.05;H.style.width=`${s}%`}function V(){E=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${E}px`}function S(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,E)}export{m as i};
//# sourceMappingURL=modal_window-60123e58.js.map
