import{i as m}from"./assets/modal_window-14a9a5d3.js";import{a as I}from"./assets/vendor-8cce9181.js";let C=document.querySelector(".quoteFavoritesText"),E=document.querySelector(".quoteFavoritesAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),a=new Date,c=t?new Date(t):null;if(e&&c&&O(a,c)){x(JSON.parse(e));return}let u=(await I.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(u)),localStorage.setItem("quoteDate",a.toISOString()),x(u)}catch(e){console.error("Error:",e)}});function x(e){C.innerText=e.quote,E.innerText=e.author}function O(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const q=window.location.pathname,F=q.lastIndexOf("/"),y=q.substring(F);function M(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let b="favorites",g=M(b),s=JSON.parse(g);document.querySelector(".add-favorites");const o=document.querySelector(".favorites-list");let p;const k=document.querySelector(".message-favorites"),l=document.querySelector(".favorites-pagination-block"),h=document.querySelector(".div-favorites-section"),T=document.querySelectorAll(".favorites-list-item");function P(e){const t=D(e);o.insertAdjacentHTML("beforeend",t)}if(y==="/favorites.html"){if(!g||s.length==0)k.classList.add("is-open-message-favorites"),l.classList.add("close");else if(g)try{s.forEach(e=>{P(e)})}catch(e){console.log(e.name),console.log(e.message)}}y==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/Dyvani_programisty/favorites.html"&&window.innerWidth<=767&&isFavoritesListVisibl?l.style.display="flex":l.style.display="none"}function t(){return o&&o.offsetParent!==null}function a(){const d=window.innerWidth<=767&&t()?8:o.children.length,u=Math.ceil(o.children.length/d);if(window.innerWidth>767&&t()){for(let r=0;r<o.children.length;r++)o.children[r].style.display="block";return}let f=1;function S(r){const n=(r-1)*d,v=n+d;for(let i=0;i<o.children.length;i++)o.children[i].style.display="none";for(let i=n;i<v&&i<o.children.length;i++)o.children[i].style.display="block"}S(f),l.innerHTML="";for(let r=1;r<=u;r++){const n=document.createElement("button");n.textContent=r,n.addEventListener("click",function(){f=r,S(f),L(f)}),l.appendChild(n)}function L(r){l.querySelectorAll("button").forEach((v,i)=>{i===r-1?v.classList.add("active-btn"):v.classList.remove("active-btn")})}L(f)}a(),window.addEventListener("resize",a);function c(){window.matchMedia("(min-width: 768px)").matches?h.style.overflowY="scroll":h.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?h.style.maxHeight="480px":h.style.maxHeight="none",window.scrollBy(0,10)}c(),e(),window.addEventListener("resize",function(){e(),a(),c()}),t()&&o.children.length>=8&&a()});const w=document.querySelector(".add-favorites");function B(){w.textContent.trim()=="Add to favorites"&&(s.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"cardiovascular",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(b,JSON.stringify(s)),w.textContent="Delete from favorites")}w.addEventListener("click",B);function $(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;A(t)}}y==="/favorites.html"&&o.addEventListener("click",$);function A(e){const t=s.findIndex(a=>a.id==e);s.splice(t,1),localStorage.setItem(b,JSON.stringify(s)),T.forEach(a=>{a.id==e&&(p=a)}),p&&o.removeChild(p),(!g||s.length==0)&&(k.classList.add("is-open-message-info"),l.classList.add("close")),H()}function H(){o.innerHTML="",s.forEach(e=>{const t=D(e);o.insertAdjacentHTML("beforeend",t)})}function D(e){return`<li class="favorites-list-item" id="${e.id}">
        <div class="favorites-card-header">
            <div class="favorites-workout">
                <p>WORKOUT</p>
            </div>
            <button class="favorites-btn-trash" aria-label="trash" type="button">
                <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                    <use class="favorites-icon-delete-use" href="${m}#icon-trash"></use>
                </svg>
            </button>
            <button
                data-id="${e.id}"
                class="favorites-btn-arrow"
                aria-label="start"
                type="button">Start
                    <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                        <use class="favorites-icon-arrow-use" href="${m}#icon-arrow"></use>
                    </svg>
            </button>
            </div>
            <div class="favorites-main-container">
    
            <div class="favorite-icon-run-man">
            <svg width="14" height="14">
      <use href="${m}#icon-running"></use>
    </svg></div>                  
                <h3 class="favorites-name-part">${e.name}</h3>
            </div>
            <div class="favorites-card-footer">
            <ul class="favorites-card-footer-list">
                <li class="favorites-card-footer-item">
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Burned calories:</h4>
                        <p class="favorites-card-footer-block">${e.burnedCalories}/3min</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Body part:</h4>
                        <p class="favorites-card-footer-block">${e.bodyPart}</p>
                    </div>
                    <div class="favorites-card-footer-wrapper">
                        <h4 class="favorites-card-footer-title">Target:</h4>
                        <p class="favorites-card-footer-block">${e.target}</p>
                    </div>
                </li>
            </ul>
        </div>
    </li>`}
//# sourceMappingURL=commonHelpers.js.map
