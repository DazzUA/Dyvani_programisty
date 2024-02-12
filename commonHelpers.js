import{i as h}from"./assets/modal_window-e5d0f47c.js";import"./assets/vendor-db25513e.js";const S=window.location.pathname,I=S.lastIndexOf("/"),p=S.substring(I);function E(e){let i=localStorage.getItem(e);return i||(localStorage.setItem(e,JSON.stringify([])),i="[]"),i}let b="favorites",u=E(b),r=JSON.parse(u);document.querySelector(".add-favorites");const t=document.querySelector(".favorites-list");let g;const k=document.querySelector(".message-favorites"),l=document.querySelector(".favorites-pagination-block"),v=document.querySelector(".div-favorites-section"),P=document.querySelectorAll(".favorites-list-item");function B(e){const i=x(e);t.insertAdjacentHTML("beforeend",i)}if(p==="/favorites.html"){if(!u||r.length==0)k.classList.add("is-open-message-favorites"),l.classList.add("close");else if(u)try{r.forEach(e=>{B(e)})}catch(e){console.log(e.name),console.log(e.message)}}p==="/favorites.html"&&document.addEventListener("DOMContentLoaded",function(){function e(){window.location.pathname==="/Dyvani_programisty/favorites.html"&&window.innerWidth<=767&&isFavoritesListVisibl?l.style.display="flex":l.style.display="none"}function i(){return t&&t.offsetParent!==null}function a(){const d=window.innerWidth<=767&&i()?8:t.children.length,C=Math.ceil(t.children.length/d);if(window.innerWidth>767&&i()){for(let s=0;s<t.children.length;s++)t.children[s].style.display="block";return}let c=1;function y(s){const n=(s-1)*d,f=n+d;for(let o=0;o<t.children.length;o++)t.children[o].style.display="none";for(let o=n;o<f&&o<t.children.length;o++)t.children[o].style.display="block"}y(c),l.innerHTML="";for(let s=1;s<=C;s++){const n=document.createElement("button");n.textContent=s,n.addEventListener("click",function(){c=s,y(c),L(c)}),l.appendChild(n)}function L(s){l.querySelectorAll("button").forEach((f,o)=>{o===s-1?f.classList.add("active-btn"):f.classList.remove("active-btn")})}L(c)}a(),window.addEventListener("resize",a);function w(){window.matchMedia("(min-width: 768px)").matches?v.style.overflowY="scroll":v.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?v.style.maxHeight="480px":v.style.maxHeight="none",window.scrollBy(0,10)}w(),e(),window.addEventListener("resize",function(){e(),a(),w()}),i()&&t.children.length>=8&&a()});const m=document.querySelector(".add-favorites");function q(){m.textContent.trim()=="Add to favorites"&&(r.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"cardiovascular",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(b,JSON.stringify(r)),m.textContent="Delete from favorites")}m.addEventListener("click",q);function M(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const i=e.currentTarget.id;$(i)}}p==="/favorites.html"&&t.addEventListener("click",M);function $(e){const i=r.findIndex(a=>a.id==e);r.splice(i,1),localStorage.setItem(b,JSON.stringify(r)),P.forEach(a=>{a.id==e&&(g=a)}),g&&t.removeChild(g),(!u||r.length==0)&&(k.classList.add("is-open-message-info"),l.classList.add("close")),F()}function F(){t.innerHTML="",r.forEach(e=>{const i=x(e);t.insertAdjacentHTML("beforeend",i)})}function x(e){return`<li class="favorites-list-item" id="${e.id}">
        <div class="favorites-card-header">
            <div class="favorites-workout">
                <p>WORKOUT</p>
            </div>
            <button class="favorites-btn-trash" aria-label="trash" type="button">
                <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                    <use class="favorites-icon-delete-use" href="${h}#icon-trash"></use>
                </svg>
            </button>
            <button
                data-id="${e.id}"
                class="favorites-btn-arrow"
                aria-label="start"
                type="button">Start
                    <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                        <use class="favorites-icon-arrow-use" href="${h}#icon-arrow"></use>
                    </svg>
            </button>
            </div>
            <div class="favorites-main-container">
    
            <div class="favorite-icon-run-man">
            <svg width="14" height="14">
      <use href="${h}#icon-running"></use>
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
