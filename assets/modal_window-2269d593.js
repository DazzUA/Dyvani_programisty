import{a as V}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const p="/Dyvani_programisty/assets/symbol-defs-de218909.svg",q=window.location.pathname,Y=q.lastIndexOf("/"),E=q.substring(Y);function z(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let b="favorites",S=z(b),f=JSON.parse(S);document.querySelector(".add-favorites");const n=document.querySelector(".favorites-list");let y;const $=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),I=document.querySelector(".div-favorites-section"),A=document.querySelectorAll(".favorites-list-item");if(E==="/favorites.html"){if(!S||f.length==0)$.classList.add("is-open-message-favorites"),g.classList.add("close");else if(S)try{f.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}E==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return n&&n.offsetParent!==null}function o(){const i=window.innerWidth<=767&&t()?8:n.children.length,a=Math.ceil(n.children.length/i);if(window.innerWidth>767&&t()){for(let l=0;l<n.children.length;l++)n.children[l].style.display="block";return}let d=1;function M(l){const v=(l-1)*i,C=v+i;for(let u=0;u<n.children.length;u++)n.children[u].style.display="none";for(let u=v;u<C&&u<n.children.length;u++)n.children[u].style.display="block"}M(d),g.innerHTML="";for(let l=1;l<=a;l++){const v=document.createElement("button");v.textContent=l,v.addEventListener("click",function(){d=l,M(d),R(d)}),g.appendChild(v)}function R(l){g.querySelectorAll("button").forEach((C,u)=>{u===l-1?C.classList.add("active-btn"):C.classList.remove("active-btn")})}R(d)}o(),window.addEventListener("resize",o);function s(){const i=Array.from(n.children).reduce((a,d)=>a+d.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?I.style.maxHeight="500px":I.style.maxHeight="none",i>I.offsetHeight?I.style.overflowY="scroll":I.style.overflowY="visible",window.scrollBy(0,10)}s(),e(),window.addEventListener("resize",function(){e(),o(),s()}),t()&&n.children.length>=8&&o()});function G(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.target.closest("li").id;P(t)}}E==="/favorites.html"&&n.addEventListener("click",G);function P(e){const t=f.findIndex(o=>o._id==e);f.splice(t,1),localStorage.setItem(b,JSON.stringify(f)),A.forEach(o=>{o._id==e&&(y=o)}),y&&n.removeChild(y),(!S||f.length==0)&&($.classList.add("is-open-message-info"),g.classList.add("close"),window.location.reload()),T()}function T(){n.innerHTML="",f.forEach(e=>{const t=K(e);n.insertAdjacentHTML("beforeend",t)})}function K(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
      <div class='favorites-card-header'>
        <div class='favorites-workout'>
          <p class='workout-p'>workout</p>

          <button class='favorites-btn-trash' type="button">
          <svg class='favorites-icon-delete' width='16' height='16' fill="none">
              <use class='favorites-icon-delete-use' href='${p}#icon-trash'></use>
            </svg>
          </button>
        </div>
        
          <button class="favorites-btn-arrow" type="button" >Start
            <svg width='14' height='14'>
              <use href='${p}#icon-arrow'></use>
            </svg>
          </button>
      </div>

      <div class='favorites-main-container'>
        <div class='favorites-icon-run-man'>
          <svg width='14' height='14'>
            <use href='${p}#icon-running'></use>
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

    </li>`}function F(e){let t=JSON.parse(localStorage.getItem(b))||[],o=t.findIndex(s=>s._id===e._id);console.log(o),o===-1&&(t.push(e),localStorage.setItem(b,JSON.stringify(t)))}function Q(e){const t=f.findIndex(o=>o._id==e);f.splice(t,1),localStorage.setItem(b,JSON.stringify(f)),A.forEach(o=>{o._id==e&&(y=o)}),y&&n.removeChild(y)}const h=document.querySelector(".Backdrop");document.querySelector(".Modal");const X=document.querySelector(".exercise-filters-list-subcategories"),Z=document.querySelector(".search-list"),N=document.querySelector("body"),j=document.querySelector(".favorites-list");document.querySelector(".message-favorites");document.querySelector(".favorites-pagination-block");const B="IsOpen";let m={},_,D,r,x,c;N.classList.contains("home-style")&&(X.addEventListener("click",k),Z.addEventListener("click",k));N.classList.contains("favorites-style")&&j.addEventListener("click",te);async function k(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;m=await H(t),J(),O(m),U(),W(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),r=document.querySelector(".AddRemoveFavorites"),c=r.textContent,r.addEventListener("click",ee);const o=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(w(),L())}),h.addEventListener("click",function(s){s.target===h&&(w(),L())}),o.addEventListener("click",function(s){s.target===o&&(w(),L())})}finally{}}function ee(){console.log(c),c.trim().toLowerCase()=="add to favorites"?(console.log("add"),r.textContent=" Remove from ",c=r.textContent,F(m)):c.trim().toLowerCase()=="remove from"&&(console.log("remove"),r.textContent=" Add to favorites ",c=r.textContent,console.log(m._id),Q(m._id))}async function H(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await V.get(t)).data}catch{}}function O(e){const t=`<div class="Modal">
   <button class="ModalClose" type="button">
          <svg class="CloseModalIcon" width="25" height="25">
            <use href="${p}#icon-close"></use>
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
            <use href="${p}#icon-vector"></use>
          </svg>
  <ul class="ModalList">
  <li class="ModalListItem"><span class="ItemTitle">Target</span> <span class="ItemData">${e.target}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Body Part</span> <span class="ItemData">${e.bodyPart}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Equipment</span><span class="ItemData">${e.equipment}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Popular</span><span class="ItemData">${e.popularity}</span></li>
  <li class="ModalListItem"><span class="ItemTitle">Burned Calories</span><span class="ItemData">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${p}#icon-vector"></use>
          </svg>
  <p class="Description">${e.description}</p>
  <button class="AddRemoveFavorites" type="button">Add to favorites
  <svg class="HeartModalIcon" width="18" height="18">
            <use href="${p}#icon-heart"></use>
          </svg>   
          </button>
          </div>
  </div>
  </div> `;h.innerHTML=t}async function te(e){const t=e.target.closest("li").id;try{if(e.target.nodeName!=="BUTTON")return;m=await H(t),J(),O(m),U(),W(),document.querySelectorAll("span").forEach(function(s){s.textContent=s.textContent.charAt(0).toUpperCase()+s.textContent.slice(1)}),r=document.querySelector(".AddRemoveFavorites"),r.textContent=" Remove from ",c=r.textContent,r.addEventListener("click",oe);const o=document.querySelector(".CloseModalIcon");document.addEventListener("keydown",function(s){s.key==="Escape"&&(w(),L())}),h.addEventListener("click",function(s){s.target===h&&(w(),L())}),o.addEventListener("click",function(s){s.target===o&&(w(),L())})}finally{}}function oe(){console.log(c),c.trim().toLowerCase()=="add to favorites"?(console.log("add"),r.textContent=" Remove from ",c=r.textContent,F(m)):c.trim().toLowerCase()=="remove from"&&(console.log("remove"),r.textContent=" Add to favorites ",c=r.textContent,console.log(m._id),P(m._id))}function J(){h.classList.add(B)}function w(){h.classList.remove(B)}function U(){se(),ie()}function se(){_=document.querySelector(".RatingActive"),D=document.querySelector(".NumberRating")}function ie(e=D.innerHTML){const t=e/.05;_.style.width=`${t}%`}function W(){x=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${x}px`}function L(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,x)}export{p as i};
//# sourceMappingURL=modal_window-2269d593.js.map
