import{a as Y}from"./vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const m="/Dyvani_programisty/assets/symbol-defs-de218909.svg",F=window.location.pathname,z=F.lastIndexOf("/"),$=F.substring(z);function K(e){let s=localStorage.getItem(e);return s||(localStorage.setItem(e,JSON.stringify([])),s="[]"),s}let L="favorites",S=K(L),v=JSON.parse(S);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let E;const M=document.querySelector(".message-favorites"),f=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),G=document.querySelectorAll(".favorites-list-item");if($==="/favorites.html"){if(!S||v.length==0)M.classList.add("is-open-message-favorites"),f.classList.add("close");else if(S)try{v.forEach(e=>{B()})}catch(e){console.log(e.name),console.log(e.message)}}$==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/favorites.html"&&window.innerWidth<=767&&s()?f.style.display="flex":f.style.display="none"}function s(){return o&&o.offsetParent!==null}function i(){const t=window.innerWidth<=767&&s()?8:o.children.length,n=Math.ceil(o.children.length/t);if(window.innerWidth>767&&s()){for(let r=0;r<o.children.length;r++)o.children[r].style.display="block";return}let c=1;function P(r){const u=(r-1)*t,b=u+t;for(let d=0;d<o.children.length;d++)o.children[d].style.display="none";for(let d=u;d<b&&d<o.children.length;d++)o.children[d].style.display="block"}P(c),f.innerHTML="";for(let r=1;r<=n;r++){const u=document.createElement("button");u.textContent=r,u.addEventListener("click",function(){c=r,P(c),N(c)}),f.appendChild(u)}function N(r){f.querySelectorAll("button").forEach((b,d)=>{d===r-1?b.classList.add("active-btn"):b.classList.remove("active-btn")})}N(c)}i(),window.addEventListener("resize",i);function a(){const t=Array.from(o.children).reduce((n,c)=>n+c.offsetHeight,0);window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="500px":w.style.maxHeight="none",t>w.offsetHeight?w.style.overflowY="scroll":w.style.overflowY="visible",window.scrollBy(0,10)}a(),e(),window.addEventListener("resize",function(){e(),i(),a()}),s()&&o.children.length>=8&&i()});function Q(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const s=e.target.closest("li").id;X(s)}}$==="/favorites.html"&&o.addEventListener("click",Q);function X(e){const s=v.findIndex(i=>i._id==e);v.splice(s,1),localStorage.setItem(L,JSON.stringify(v)),G.forEach(i=>{i._id==e&&(E=i)}),E&&o.removeChild(E),(!S||v.length==0)&&(M.classList.add("is-open-message-info"),f.classList.add("close"),window.location.reload()),B()}function B(){o.innerHTML="",v.forEach(e=>{const s=Z(e);o.insertAdjacentHTML("beforeend",s)})}function Z(e){return`<li class="favorites-card favorites-list-item" id ='${e._id}'>
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

    </li>`}function j(e){let s=JSON.parse(localStorage.getItem(L))||[];s.findIndex(a=>a._id===e._id)===-1&&(s.push(e),localStorage.setItem(L,JSON.stringify(s)))}const p=document.querySelector(".backdrop"),ee=document.querySelector(".exercise-filters-list-subcategories"),te=document.querySelector(".search-list"),R=document.querySelector("body"),se=document.querySelector(".favorites-list"),T="is-open";let g={},O,H,l,k,h,y=JSON.parse(localStorage.getItem("favorites"))||[];R.classList.contains("home-style")&&(ee.addEventListener("click",A),te.addEventListener("click",A));R.classList.contains("favorites-style")&&se.addEventListener("click",ie);async function A(e){const s=e.target.closest("li").id;try{let a=function(t){t.target===i&&(x(),C(),i.removeEventListener("click",a))};if(e.target.nodeName!=="BUTTON")return;g=await J(s),D(),U(g),W(),V(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),l=document.querySelector(".add-remove-favorites"),h=l.textContent,y=JSON.parse(localStorage.getItem("favorites"))||[],y.some(t=>t._id===g._id)&&(l.textContent=" Remove from "),l.addEventListener("click",_);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",I),p.addEventListener("click",q),i.addEventListener("click",a)}catch{}finally{}}function _(){y=JSON.parse(localStorage.getItem("favorites"))||[],h.trim().toLowerCase()=="add to favorites"?(l.textContent=" Remove from ",h=l.textContent,j(g)):h.trim().toLowerCase()=="remove from"&&(l.textContent=" Add to favorites ",h=l.textContent,y=y.filter(e=>e._id!==g._id),localStorage.setItem("favorites",JSON.stringify(y)))}async function J(e){const s=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await Y.get(s)).data}catch{}}function U(e){const s=`<div class="modal">
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
  </div> `;p.innerHTML=s}async function ie(e){const s=e.target.closest("li").id;try{let a=function(t){t.target===i&&(x(),C(),i.removeEventListener("click",a))};if(e.target.nodeName!=="BUTTON")return;g=await J(s),D(),U(g),W(),V(),document.querySelectorAll("span").forEach(function(t){t.textContent=t.textContent.charAt(0).toUpperCase()+t.textContent.slice(1)}),l=document.querySelector(".add-remove-favorites"),l.textContent=" Remove from ",h=l.textContent,l.addEventListener("click",_);const i=document.querySelector(".close-modal-icon");document.addEventListener("keydown",I),p.addEventListener("click",q),i.addEventListener("click",a)}catch{}finally{}}function I(e){e.key==="Escape"&&(x(),C(),document.removeEventListener("keydown",I))}function q(e){e.target===p&&(x(),C(),p.removeEventListener("click",q))}function D(){p.classList.add(T)}function x(){p.classList.remove(T)}function W(){oe(),ne()}function oe(){O=document.querySelector(".rating-active"),H=document.querySelector(".number-rating")}function ne(e=H.innerHTML){const s=e/.05;O.style.width=`${s}%`}function V(){k=window.scrollY,document.body.style.position="absolute",document.body.style.width="100%",document.body.style.overflow="hidden",document.body.style.top=`-${k}px`}function C(){document.body.style.overflow="",document.body.style.position="",document.body.style.width="",document.body.style.top="",window.scrollTo(0,k)}export{m as i};
//# sourceMappingURL=modal_window-1ae209d1.js.map
