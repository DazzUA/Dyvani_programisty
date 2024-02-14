import{i as m}from"./assets/modal_window-2e297e06.js";import{a as E}from"./assets/vendor-8cce9181.js";const x=document.querySelector(".js-menu"),C=document.querySelector(".js-open-menu"),F=document.querySelector(".js-close-menu"),q=function(){const e=x.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};C.addEventListener("click",q);F.addEventListener("click",q);window.matchMedia("(min-width: 335px)").addEventListener("change",O);function O(e){e.matches&&(x.classList.remove("is-open"),document.body.style.overflow="")}let P=document.querySelector(".quoteFavoritesText"),T=document.querySelector(".quoteFavoritesAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),n=new Date,c=t?new Date(t):null;if(e&&c&&$(n,c)){L(JSON.parse(e));return}let f=(await E.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(f)),localStorage.setItem("quoteDate",n.toISOString()),L(f)}catch(e){console.error("Error:",e)}});function L(e){P.innerText=e.quote,T.innerText=e.author}function $(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const M=window.location.pathname,A=M.lastIndexOf("/"),y=M.substring(A);function B(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let w="favorites",h=B(w),a=JSON.parse(h);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let p;const I=document.querySelector(".message-favorites"),l=document.querySelector(".favorites-pagination-block"),g=document.querySelector(".div-favorites-section"),j=document.querySelectorAll(".favorites-list-item");function H(e){const t=k(e);o.insertAdjacentHTML("beforeend",t)}if(y==="/favorites.html"){if(!h||a.length==0)I.classList.add("is-open-message-favorites"),l.classList.add("close");else if(h)try{a.forEach(e=>{H(e)})}catch(e){console.log(e.name),console.log(e.message)}}y==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/Dyvani_programisty/favorites.html"&&window.innerWidth<=767&&isFavoritesListVisibl?l.style.display="flex":l.style.display="none"}function t(){return o&&o.offsetParent!==null}function n(){const d=window.innerWidth<=767&&t()?8:o.children.length,f=Math.ceil(o.children.length/d);if(window.innerWidth>767&&t()){for(let s=0;s<o.children.length;s++)o.children[s].style.display="block";return}let u=1;function b(s){const r=(s-1)*d,v=r+d;for(let i=0;i<o.children.length;i++)o.children[i].style.display="none";for(let i=r;i<v&&i<o.children.length;i++)o.children[i].style.display="block"}b(u),l.innerHTML="";for(let s=1;s<=f;s++){const r=document.createElement("button");r.textContent=s,r.addEventListener("click",function(){u=s,b(u),S(u)}),l.appendChild(r)}function S(s){l.querySelectorAll("button").forEach((v,i)=>{i===s-1?v.classList.add("active-btn"):v.classList.remove("active-btn")})}S(u)}n(),window.addEventListener("resize",n);function c(){window.matchMedia("(min-width: 768px)").matches?g.style.overflowY="scroll":g.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?g.style.maxHeight="480px":g.style.maxHeight="none",window.scrollBy(0,10)}c(),e(),window.addEventListener("resize",function(){e(),n(),c()}),t()&&o.children.length>=8&&n()});function J(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;N(t)}}y==="/favorites.html"&&o.addEventListener("click",J);function N(e){const t=a.findIndex(n=>n.id==e);a.splice(t,1),localStorage.setItem(w,JSON.stringify(a)),j.forEach(n=>{n.id==e&&(p=n)}),p&&o.removeChild(p),(!h||a.length==0)&&(I.classList.add("is-open-message-info"),l.classList.add("close")),Y()}function Y(){o.innerHTML="",a.forEach(e=>{const t=k(e);o.insertAdjacentHTML("beforeend",t)})}function k(e){return`<li class="favorites-card favorites-list-item" id ='${e.id}'>
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

    </li>`}const D=document.querySelector(".add-favorites");function W(){D.textContent.trim()=="Add to favorites"&&(a.push({id:"64f389465ae26083f39b17df",name:"barbell one arm snatch",target:"cardiovascular",time:"3",bodyPart:"shoulders",burnedCalories:"345"}),localStorage.setItem(w,JSON.stringify(a)))}D.addEventListener("click",W);
//# sourceMappingURL=commonHelpers.js.map
