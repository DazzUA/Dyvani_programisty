import"./assets/modal_window-e3cb4653.js";import"./assets/vendor-db25513e.js";const p="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",k=window.location.pathname;k.lastIndexOf("/");function x(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let v="favorites",c=x(v),i=JSON.parse(c);document.querySelector(".add-favorites");const s=document.querySelector(".favorites-list");let y="",l;const b=document.querySelector(".message-favorites"),n=document.querySelector(".favorites-pagination-block"),d=document.querySelector(".div-favorites-section"),C=document.querySelectorAll(".favorites-list-item");function I(e){const t=S(e);s.insertAdjacentHTML("beforeend",t)}if(!c||i.length==0)b.classList.add("is-open-message-favorites"),n.classList.add("close");else if(c)try{i.forEach(e=>{I(e)})}catch(e){console.log(e.name),console.log(e.message)}document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?n.style.display="flex":n.style.display="none"}function t(){return s&&s.offsetParent!==null}function o(){const u=window.innerWidth<=767&&t()?8:s.children.length;if(window.innerWidth>767&&t()){for(let a=0;a<s.children.length;a++)s.children[a].style.display="block";return}Math.ceil(s.children.length/u);let h=1;function L(a){const g=(a-1)*u,m=g+u;for(let r=0;r<s.children.length;r++)s.children[r].style.display="none";for(let r=g;r<m&&r<s.children.length;r++)s.children[r].style.display="block"}L(h),n.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(n.querySelectorAll("button").forEach(m=>m.classList.remove("active-btn")),a.target.classList.add("active-btn"),h=parseInt(a.target.textContent),L(h))})}function w(){window.matchMedia("(min-width: 768px)").matches?d.style.overflowY="scroll":d.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?d.style.maxHeight="480px":d.style.maxHeight="none",window.scrollBy(0,10)}w(),e(),window.addEventListener("resize",function(){e(),o(),w()}),t()&&s.children.length>=8&&o()});const f=document.querySelector(".add-favorites");function q(){if(f.textContent.trim()=="Add to favorites")i.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(v,JSON.stringify(i)),f.textContent="Delete from favorites";else{const e=i.findIndex(o=>o.id==y);i.splice(e,1),localStorage.setItem(v,JSON.stringify(i));const t=document.querySelectorAll(".favorites-list-item");f.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${y}"]`)&&(t.forEach(o=>{o.id==y&&(l=o)}),list.removeChild(l),(!c||i.length==0)&&(b.classList.add("is-open-message-info"),n.classList.add("close")))}}f.addEventListener("click",q);function E(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;B(t)}}s.addEventListener("click",E);function B(e){const t=i.findIndex(o=>o.id==e);i.splice(t,1),localStorage.setItem(v,JSON.stringify(i)),C.forEach(o=>{o.id==e&&(l=o)}),l&&s.removeChild(l),(!c||i.length==0)&&(b.classList.add("is-open-message-info"),n.classList.add("close")),O()}function O(){s.innerHTML="",i.forEach(e=>{const t=S(e);s.insertAdjacentHTML("beforeend",t)})}function S(e){return`<li class="favorites-list-item" id="${e.id}">
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
                        <p class="favorites-card-footer-block">${e.burnedCalories}</p>
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
