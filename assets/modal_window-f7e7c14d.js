import{a as J}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const m="/Dyvani_programisty/assets/symbol-defs-de218909.svg",q=window.location.pathname,W=q.lastIndexOf("/"),M=q.substring(W);function V(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let b="favorites",S=V(b),g=JSON.parse(S);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let x;const A=document.querySelector(".message-favorites"),v=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),Y=document.querySelectorAll(".favorites-list-item");if(M==="/favorites.html"){if(!S||g.length==0)A.classList.add("is-open-message-favorites"),v.classList.add("close");else if(S)try{g.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}M==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&t()?v.style.display="flex":v.style.display="none"}function t(){return n&&n.offsetParent!==null}function o(){const i=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/i);if(window.innerWidth>767&&t()){for(let r=0;r<n.children.length;r++)n.children[r].style.display="block";return}let l=1;function E(r){const f=(r-1)*i,L=f+i;for(let c=0;c<n.children.length;c++)n.children[c].style.display="none";for(let c=f;c<L&&c<n.children.length;c++)n.children[c].style.display="block"}E(l),v.innerHTML="";for(let r=1;r<=a;r++){const f=document.createElement("button");f.textContent=r,f.addEventListener("click",function(){l=r,E(l),k(l)}),v.appendChild(f)}function k(r){v.querySelectorAll("button").forEach((L,c)=>{c===r-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}k(l)}o(),window.addEventListener("resize",o);function s(){const i=Array.from(n.children).reduce((a,l)=>a+l.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",i>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}s(),e(),window.addEventListener("resize",function(){e(),o(),s()}),t()&&n.children.length>=8&&o()});function z(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;R(t)}}M==="/favorites.html"&&n.addEventListener("click",z);function R(e){const t=g.findIndex(o=>o._id==e);g.splice(t,1),localStorage.setItem(b,JSON.stringify(g)),Y.forEach(o=>{o._id==e&&(x=o)}),x&&n.removeChild(x),(!S||g.length==0)&&(A.classList.add("is-open-message-info"),v.classList.add("close"),window.location.reload()),T()}function T(){n.innerHTML="",g.forEach(e=>{const t=G(e);n.insertAdjacentHTML("beforeend",t)})}function G(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
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

    </li>`}function K(e){let t=JSON.parse(localStorage.getItem(b))||[],o=t.findIndex(s=>s._id===e._id);console.log(o),o===-1&&(t.push(e),localStorage.setItem(b,JSON.stringify(t)))}const p=document.querySelector(".Backdrop");document.querySelector(".Modal");const Q=document.querySelector(".exercise-filters-list-subcategories"),X=document.querySelector(".search-list"),P=document.querySelector("body"),Z=document.querySelector(".favorites-list"),F="IsOpen";let u={},B,N,d,C,I;P.classList.contains("home-style")&&(Q.addEventListener("click",$),X.addEventListener("click",$));P.classList.contains("favorites-style")&&Z.addEventListener("click",te);async function $(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;u=await D(t),_(),H(u),O(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),d=document.querySelector(".AddRemoveFavorites"),I=d.textContent,d.addEventListener("click",j);const o=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),o.addEventListener("click",function(s){s.target===o&&(h(),y())})}finally{}}function j(){console.log(I),I=="Add to favorites"?(K(u),d.innerText=" Remove from "):I=="Remove from"?(R(u._id),d.innerText=" Add to favorites "):console.log("fack")}function ee(){R(u._id),console.log(u._id),d.innerText=" Add to favorites "}async function D(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await J.get(t)).data}catch{}}function H(e){const t=`<div class="Modal">
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
  </div> `;p.innerHTML=t}async function te(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;u=await D(t),_(),H(u),O(),U(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),d=document.querySelector(".AddRemoveFavorites"),d.addEventListener("click",ee);const o=document.querySelector(".CloseModalIcon");d.innerText=" Remove from ",document.addEventListener("keydown",function(s){s.key==="Escape"&&(h(),y())}),p.addEventListener("click",function(s){s.target===p&&(h(),y())}),o.addEventListener("click",function(s){s.target===o&&(h(),y())})}finally{}}function _(){p.classList.add(F)}function h(){p.classList.remove(F)}function O(){se(),oe()}function se(){B=document.querySelector(".RatingActive"),N=document.querySelector(".NumberRating")}function oe(e=N.innerHTML){const t=e/.05;B.style.width=`${t}%`}function U(){C=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${C}px`}function y(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,C)}export{m as i};
//# sourceMappingURL=modal_window-f7e7c14d.js.map
