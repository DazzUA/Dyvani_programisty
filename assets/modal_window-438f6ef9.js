import{a as G}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const p="/Dyvani_programisty/assets/symbol-defs-de218909.svg",O=window.location.pathname,Q=O.lastIndexOf("/"),I=O.substring(Q);function X(e){let o=localStorage.getItem(e);return o||(localStorage.setItem(e,JSON.stringify([])),o="[]"),o}let S="favorites",b=X(S),h=JSON.parse(b);document.querySelector(".add-favorites");const s=document.querySelector(".favorites-list");let E;const R=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),Z=document.querySelectorAll(".favorites-list-item");if(I==="/favorites.html"){if(!b||h.length==0)R.classList.add("is-open-message-favorites"),g.classList.add("close");else if(b)try{h.forEach(e=>{T()})}catch(e){console.log(e.name),console.log(e.message)}}I==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&o()?g.style.display="flex":g.style.display="none"}function o(){return s&&s.offsetParent!==null}function i(){const t=window.innerWidth<=767&&o()?8:s.children.length,a=Math.ceil(s.children.length/t);if(window.innerWidth>767&&o()){for(let c=0;c<s.children.length;c++)s.children[c].style.display="block";return}let d=1;function N(c){const v=(c-1)*t,L=v+t;for(let u=0;u<s.children.length;u++)s.children[u].style.display="none";for(let u=v;u<L&&u<s.children.length;u++)s.children[u].style.display="block"}N(d),g.innerHTML="";for(let c=1;c<=a;c++){const v=document.createElement("button");v.textContent=c,v.addEventListener("click",function(){d=c,N(d),F(d)}),g.appendChild(v)}function F(c){g.querySelectorAll("button").forEach((L,u)=>{u===c-1?L.classList.add("active-btn"):L.classList.remove("active-btn")})}F(d)}i(),window.addEventListener("resize",i);function r(){const t=Array.from(s.children).reduce((a,d)=>a+d.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",t>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}r(),e(),window.addEventListener("resize",function(){e(),i(),r()}),o()&&s.children.length>=8&&i()});function j(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const o=e.target.closest("li").id;ee(o)}}I==="/favorites.html"&&s.addEventListener("click",j);function ee(e){const o=h.findIndex(i=>i._id==e);h.splice(o,1),localStorage.setItem(S,JSON.stringify(h)),Z.forEach(i=>{i._id==e&&(E=i)}),E&&s.removeChild(E),(!b||h.length==0)&&(R.classList.add("is-open-message-info"),g.classList.add("close"),window.location.reload()),T()}function T(){s.innerHTML="",h.forEach(e=>{const o=B(e);s.insertAdjacentHTML("beforeend",o)})}function B(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
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

    </li>`}function J(e){let o=JSON.parse(localStorage.getItem(S))||[];o.findIndex(r=>r._id===e._id)===-1&&(o.push(e),localStorage.setItem(S,JSON.stringify(o)))}const y=document.querySelector(".backdrop"),te=document.querySelector(".exercise-filters-list-subcategories"),oe=document.querySelector(".search-list"),H=document.querySelector("body"),ie=document.querySelector(".favorites-list"),P=document.querySelector(".favorites-list"),_="is-open";let m={},U,D,n,k,f,l=JSON.parse(localStorage.getItem("favorites"))||[];H.classList.contains("home-style")&&(te.addEventListener("click",A),oe.addEventListener("click",A));H.classList.contains("favorites-style")&&ie.addEventListener("click",ne);async function A(e){const o=e.target.closest("li").id;try{let r=function(t){t.target===i&&(x(),C(),i.removeEventListener("click",r))};if(e.target.nodeName!=="BUTTON")return;m=await W(o),Y(),V(m),z(),K(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),n=document.querySelector(".add-remove-favorites"),f=n.textContent,l=JSON.parse(localStorage.getItem("favorites"))||[],l.some(t=>t._id===m._id)&&(n.textContent=" Remove from "),n.addEventListener("click",se);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),y.addEventListener("click",q),i.addEventListener("click",r)}catch{}finally{}}function se(){l=JSON.parse(localStorage.getItem("favorites"))||[],f.trim().toLowerCase()=="add to favorites"?(n.textContent=" Remove from ",f=n.textContent,J(m)):f.trim().toLowerCase()=="remove from"&&(n.textContent=" Add to favorites ",f=n.textContent,l=l.filter(e=>e._id!==m._id),localStorage.setItem("favorites",JSON.stringify(l)))}async function W(e){const o=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await G.get(o)).data}catch{}}function V(e){const o=`<div class="modal">
   <button class="modal-close" type="button">
          <svg class="close-modal-icon" width="25" height="25">
            <use href="${p}#icon-close"></use>
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
            <use href="${p}#icon-vector"></use>
          </svg>
  <ul class="modal-list">
  <li class="modal-list-item"><span class="item-title">Target</span> <span class="item-data">${e.target}</span></li>
  <li class="modal-list-item"><span class="item-title">Body Part</span> <span class="item-data">${e.bodyPart}</span></li>
  <li class="modal-list-item"><span class="item-title">Equipment</span><span class="item-data">${e.equipment}</span></li>
  <li class="modal-list-item"><span class="item-title">Popular</span><span class="item-data">${e.popularity}</span></li>
  <li class="modal-list-item"><span class="item-title">Burned Calories</span><span class="item-data">${e.burnedCalories}/${e.time} min</span></li>
  </ul>
  <svg class="vector" width="25" height="2">
            <use href="${p}#icon-vector"></use>
          </svg>
  <p class="description">${e.description}</p>
 <div class="button-favourites"> <button class="add-remove-favorites" type="button">Add to favorites</button>
  <svg class="heart-modal-icon" width="18" height="18">
            <use href="${p}#icon-heart"></use></svg>
             
          </div>
          </div>
  </div>
  </div> `;y.innerHTML=o}async function ne(e){const o=e.target.closest("li").id;try{let r=function(t){t.target===i&&(x(),C(),i.removeEventListener("click",r))};if(e.target.nodeName!=="BUTTON")return;m=await W(o),Y(),V(m),z(),K(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),n=document.querySelector(".add-remove-favorites"),n.textContent=" Remove from ",f=n.textContent,n.addEventListener("click",ae);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",$),y.addEventListener("click",q),i.addEventListener("click",r)}catch{}finally{}}function ae(){l=JSON.parse(localStorage.getItem("favorites"))||[],f.trim().toLowerCase()=="add to favorites"?(n.textContent=" Remove from ",f=n.textContent,J(m),M()):f.trim().toLowerCase()=="remove from"&&(n.textContent=" Add to favorites ",f=n.textContent,l=l.filter(e=>e._id!==m._id),localStorage.setItem("favorites",JSON.stringify(l)),l=JSON.parse(localStorage.getItem("favorites"))||[],M())}function $(e){e.key==="Escape"&&(x(),C(),document.removeEventListener("keydown",$))}function q(e){e.target===y&&(x(),C(),y.removeEventListener("click",q))}function Y(){y.classList.add(_)}function x(){y.classList.remove(_)}function z(){re(),le()}function re(){U=document.querySelector(".rating-active"),D=document.querySelector(".number-rating")}function le(e=D.innerHTML){const o=e/.05;U.style.width=`${o}%`}function K(){k=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${k}px`}function C(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,k)}function M(){l=JSON.parse(localStorage.getItem("favorites"))||[],P.innerHTML="",l.forEach(e=>{const o=B(e);P.insertAdjacentHTML("beforeend",o)})}export{p as i};
//# sourceMappingURL=modal_window-438f6ef9.js.map
