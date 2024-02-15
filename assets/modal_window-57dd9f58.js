import{a as W}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const g="/Dyvani_programisty/assets/symbol-defs-de218909.svg",q=window.location.pathname,J=q.lastIndexOf("/"),C=q.substring(J);function V(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let M="favorites",I=V(M),d=JSON.parse(I);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let S;const A=document.querySelector(".message-favorites"),m=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),Y=document.querySelectorAll(".favorites-list-item");if(C==="/favorites.html"){if(!I||d.length==0)A.classList.add("is-open-message-favorites"),m.classList.add("close");else if(I)try{d.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}C==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&t()?m.style.display="flex":m.style.display="none"}function t(){return n&&n.offsetParent!==null}function i(){const o=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/o);if(window.innerWidth>767&&t()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let l=1;function E(r){const v=(r-1)*o,L=v+o;for(let c=0;c<n.children.length;c++)n.children[c].style.display="none";for(let c=v;c<L&&c<n.children.length;c++)n.children[c].style.display="block"}E(l),m.innerHTML="";for(let r=1;r<=a;r++){const v=document.createElement("button");v.textContent=r,v.addEventListener("click",function(){l=r,E(l),k(l)}),m.appendChild(v)}function k(r){m.querySelectorAll("button").forEach((L,c)=>{c===r-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}k(l)}i(),window.addEventListener("resize",i);function s(){const o=Array.from(n.children).reduce((a,l)=>a+l.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",o>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}s(),e(),window.addEventListener("resize",function(){e(),i(),s()}),t()&&n.children.length>=8&&i()});function z(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;R(t)}}C==="/favorites.html"&&n.addEventListener("click",z);function R(e){const t=d.findIndex(i=>i._id==e);d.splice(t,1),localStorage.setItem(M,JSON.stringify(d)),Y.forEach(i=>{i._id==e&&(S=i)}),S&&n.removeChild(S),(!I||d.length==0)&&(A.classList.add("is-open-message-info"),m.classList.add("close"),window.location.reload()),T()}function T(){n.innerHTML="",d.forEach(e=>{const t=G(e);n.insertAdjacentHTML("beforeend",t)})}function G(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
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

    </li>`}function K(e){d.push(e),localStorage.setItem(M,JSON.stringify(d))}const p=document.querySelector(".Backdrop");document.querySelector(".Modal");const Q=document.querySelector(".exercise-filters-list-subcategories"),X=document.querySelector(".search-list"),P=document.querySelector("body"),Z=document.querySelector(".favorites-list"),F="IsOpen";let f={},B,N,u,x,b;P.classList.contains("home-style")&&(Q.addEventListener("click",$),X.addEventListener("click",$));P.classList.contains("favorites-style")&&Z.addEventListener("click",te);async function $(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;f=await D(t),O(),H(f),_(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites"),b=u.textContent,u.addEventListener("click",j);const i=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),i.addEventListener("click",function(s){s.target===i&&(h(),y())})}finally{}}function j(){console.log(b),b=="Add to favorites"?(K(f),u.innerText=" Remove from "):b=="Remove from"?(R(f._id),u.innerText=" Add to favorites "):console.log("fack")}function ee(){R(f._id),console.log(f._id),u.innerText=" Add to favorites "}async function D(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await W.get(t)).data}catch{}}function H(e){const t=`<div class="Modal">
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
  </div> `;p.innerHTML=t}async function te(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;f=await D(t),O(),H(f),_(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),u=document.querySelector(".AddRemoveFavorites"),u.addEventListener("click",ee);const i=document.querySelector(".CloseModalIcon");u.innerText=" Remove from ",document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),i.addEventListener("click",function(s){s.target===i&&(h(),y())})}finally{}}function O(){p.classList.add(F)}function h(){p.classList.remove(F)}function _(){se(),oe()}function se(){B=document.querySelector(".RatingActive"),N=document.querySelector(".NumberRating")}function oe(e=N.innerHTML){const t=e/.05;B.style.width=`${t}%`}function U(){x=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${x}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,x)}export{g as i};
//# sourceMappingURL=modal_window-57dd9f58.js.map
