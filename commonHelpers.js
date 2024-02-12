import"./assets/modal_window-8a75e1f1.js";import"./assets/vendor-db25513e.js";const p="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",C=window.location.pathname;C.lastIndexOf("/");function I(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let g="favorites",f=I(g),o=JSON.parse(f);document.querySelector(".add-favorites");const i=document.querySelector(".favorites-list");let y="",d;const b=document.querySelector(".message-favorites"),n=document.querySelector(".favorites-pagination-block"),u=document.querySelector(".div-favorites-section"),E=document.querySelectorAll(".favorites-list-item");function q(e){const t=k(e);i.insertAdjacentHTML("beforeend",t)}if(!f||o.length==0)b.classList.add("is-open-message-favorites"),n.classList.add("close");else if(f)try{o.forEach(e=>{q(e)})}catch(e){console.log(e.name),console.log(e.message)}document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?n.style.display="flex":n.style.display="none"}function t(){return i&&i.offsetParent!==null}function s(){const m=window.innerWidth<=767&&t()?8:i.children.length,x=Math.ceil(i.children.length/m);if(window.innerWidth>767&&t()){for(let a=0;a<i.children.length;a++)i.children[a].style.display="block";return}let c=1;function L(a){const l=(a-1)*m,v=l+m;for(let r=0;r<i.children.length;r++)i.children[r].style.display="none";for(let r=l;r<v&&r<i.children.length;r++)i.children[r].style.display="block"}L(c),n.innerHTML="";for(let a=1;a<=x;a++){const l=document.createElement("button");l.textContent=a,l.addEventListener("click",function(){c=a,L(c),S(c)}),n.appendChild(l)}function S(a){n.querySelectorAll("button").forEach((v,r)=>{r===a-1?v.classList.add("active-btn"):v.classList.remove("active-btn")})}S(c)}s(),window.addEventListener("resize",s);function w(){window.matchMedia("(min-width: 768px)").matches?u.style.overflowY="scroll":u.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?u.style.maxHeight="480px":u.style.maxHeight="none",window.scrollBy(0,10)}w(),e(),window.addEventListener("resize",function(){e(),s(),w()}),t()&&i.children.length>=8&&s()});const h=document.querySelector(".add-favorites");function B(){if(h.textContent.trim()=="Add to favorites")o.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"cardiovascular system",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(g,JSON.stringify(o)),h.textContent="Delete from favorites";else{const e=o.findIndex(s=>s.id==y);o.splice(e,1),localStorage.setItem(g,JSON.stringify(o));const t=document.querySelectorAll(".favorites-list-item");h.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${y}"]`)&&(t.forEach(s=>{s.id==y&&(d=s)}),list.removeChild(d),(!f||o.length==0)&&(b.classList.add("is-open-message-info"),n.classList.add("close")))}}h.addEventListener("click",B);function $(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;M(t)}}i.addEventListener("click",$);function M(e){const t=o.findIndex(s=>s.id==e);o.splice(t,1),localStorage.setItem(g,JSON.stringify(o)),E.forEach(s=>{s.id==e&&(d=s)}),d&&i.removeChild(d),(!f||o.length==0)&&(b.classList.add("is-open-message-info"),n.classList.add("close")),O()}function O(){i.innerHTML="",o.forEach(e=>{const t=k(e);i.insertAdjacentHTML("beforeend",t)})}function k(e){return`<li class="favorites-list-item" id="${e.id}">
        <div class="favorites-card-header">
            <div class="favorites-workout">
                <p>WORKOUT</p>
            </div>
            <button class="favorites-btn-trash" aria-label="trash" type="button">
                <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                    <use class="favorites-icon-delete-use" href="${p}#icon-trash"></use>
                </svg>
            </button>
            <button
                data-id="${e.id}"
                class="favorites-btn-arrow"
                aria-label="start"
                type="button">Start
                    <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                        <use class="favorites-icon-arrow-use" href="${p}#icon-arrow"></use>
                    </svg>
            </button>
            </div>
            <div class="favorites-main-container">
    
            <div class="favorite-icon-run-man">
            <svg width="14" height="14">
      <use href="${p}#icon-running"></use>
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
