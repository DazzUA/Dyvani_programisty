import{a as U}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const v="/Dyvani_programisty/assets/symbol-defs-de218909.svg",$=window.location.pathname,J=$.lastIndexOf("/"),C=$.substring(J);function W(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let I="favorites",b=W(I),m=JSON.parse(b);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let S;const k=document.querySelector(".message-favorites"),f=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),V=document.querySelectorAll(".favorites-list-item");if(C==="/favorites.html"){if(!b||m.length==0)k.classList.add("is-open-message-favorites"),f.classList.add("close");else if(b)try{m.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}C==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&t()?f.style.display="flex":f.style.display="none"}function t(){return n&&n.offsetParent!==null}function o(){const i=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/i);if(window.innerWidth>767&&t()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let l=1;function M(r){const u=(r-1)*i,L=u+i;for(let c=0;c<n.children.length;c++)n.children[c].style.display="none";for(let c=u;c<L&&c<n.children.length;c++)n.children[c].style.display="block"}M(l),f.innerHTML="";for(let r=1;r<=a;r++){const u=document.createElement("button");u.textContent=r,u.addEventListener("click",function(){l=r,M(l),E(l)}),f.appendChild(u)}function E(r){f.querySelectorAll("button").forEach((L,c)=>{c===r-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}E(l)}o(),window.addEventListener("resize",o);function s(){const i=Array.from(n.children).reduce((a,l)=>a+l.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",i>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}s(),e(),window.addEventListener("resize",function(){e(),o(),s()}),t()&&n.children.length>=8&&o()});function Y(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;q(t)}}C==="/favorites.html"&&n.addEventListener("click",Y);function q(e){const t=m.findIndex(o=>o._id==e);m.splice(t,1),localStorage.setItem(I,JSON.stringify(m)),V.forEach(o=>{o._id==e&&(S=o)}),S&&n.removeChild(S),(!b||m.length==0)&&(k.classList.add("is-open-message-info"),f.classList.add("close"),window.location.reload()),T()}function T(){n.innerHTML="",m.forEach(e=>{const t=z(e);n.insertAdjacentHTML("beforeend",t)})}function z(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${v}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${v}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${v}#icon-running'></use>
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

    </li>`}function G(e){let t=JSON.parse(localStorage.getItem(I))||[],o=t.findIndex(s=>s._id===e._id);console.log(o),o===-1&&(t.push(e),localStorage.setItem(I,JSON.stringify(t)))}const g=document.querySelector(".Backdrop");document.querySelector(".Modal");const K=document.querySelector(".exercise-filters-list-subcategories"),Q=document.querySelector(".search-list"),A=document.querySelector("body"),X=document.querySelector(".favorites-list"),P="IsOpen";let p={},B,F,d,x,Z;A.classList.contains("home-style")&&(K.addEventListener("click",R),Q.addEventListener("click",R));A.classList.contains("favorites-style")&&X.addEventListener("click",te);async function R(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await N(t),H(),D(p),O(),_(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),d=document.querySelector(".AddRemoveFavorites"),Z=d.textContent,d.addEventListener("click",j);const o=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(s){s.target===g&&(h(),y())}),o.addEventListener("click",function(s){s.target===o&&(h(),y())})}catch{}finally{}}function j(){G(p),d.innerText=" Remove from "}function ee(){q(p._id),console.log(p._id),d.innerText=" Add to favorites "}async function N(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await U.get(t)).data}catch{}}function D(e){const t=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${v}#icon-close"></use>
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
            <use href="${v}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${e.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${e.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${e.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${e.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${v}#icon-vector"></use>
          </svg>
  <p class="Description">${e.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites
  <svg class="HeartModalIcon" width="18" height="18">
            <use href="${v}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;g.innerHTML=t}async function te(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;p=await N(t),H(),D(p),O(),_(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),d=document.querySelector(".AddRemoveFavorites"),d.addEventListener("click",ee);const o=document.querySelector(".CloseModalIcon");d.innerText=" Remove from ",document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),g.addEventListener("click",function(s){s.target===g&&(h(),y())}),o.addEventListener("click",function(s){s.target===o&&(h(),y())})}finally{}}function H(){g.classList.add(P)}function h(){g.classList.remove(P)}function O(){se(),oe()}function se(){B=document.querySelector(".RatingActive"),F=document.querySelector(".NumberRating")}function oe(e=F.innerHTML){const t=e/.05;B.style.width=`${t}%`}function _(){x=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${x}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,x)}export{v as i};
//# sourceMappingURL=modal_window-00adb628.js.map
