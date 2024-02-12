import{i as h}from"./assets/modal_window-3fe10479.js";import"./assets/vendor-db25513e.js";const x=window.location.pathname;x.lastIndexOf("/");function C(e){let t=localStorage.getItem(e);return t||(localStorage.setItem(e,JSON.stringify([])),t="[]"),t}let m="favorites",v=C(m),r=JSON.parse(v);document.querySelector(".add-favorites");const i=document.querySelector(".favorites-list");let g;const L=document.querySelector(".message-favorites"),l=document.querySelector(".favorites-pagination-block"),f=document.querySelector(".div-favorites-section"),E=document.querySelectorAll(".favorites-list-item");function I(e){const t=k(e);i.insertAdjacentHTML("beforeend",t)}if(!v||r.length==0)L.classList.add("is-open-message-favorites"),l.classList.add("close");else if(v)try{r.forEach(e=>{I(e)})}catch(e){console.log(e.name),console.log(e.message)}document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?l.style.display="flex":l.style.display="none"}function t(){return i&&i.offsetParent!==null}function a(){const u=window.innerWidth<=767&&t()?8:i.children.length,S=Math.ceil(i.children.length/u);if(window.innerWidth>767&&t()){for(let s=0;s<i.children.length;s++)i.children[s].style.display="block";return}let c=1;function w(s){const n=(s-1)*u,d=n+u;for(let o=0;o<i.children.length;o++)i.children[o].style.display="none";for(let o=n;o<d&&o<i.children.length;o++)i.children[o].style.display="block"}w(c),l.innerHTML="";for(let s=1;s<=S;s++){const n=document.createElement("button");n.textContent=s,n.addEventListener("click",function(){c=s,w(c),y(c)}),l.appendChild(n)}function y(s){l.querySelectorAll("button").forEach((d,o)=>{o===s-1?d.classList.add("active-btn"):d.classList.remove("active-btn")})}y(c)}a(),window.addEventListener("resize",a);function b(){window.matchMedia("(min-width: 768px)").matches?f.style.overflowY="scroll":f.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?f.style.maxHeight="480px":f.style.maxHeight="none",window.scrollBy(0,10)}b(),e(),window.addEventListener("resize",function(){e(),a(),b()}),t()&&i.children.length>=8&&a()});const p=document.querySelector(".add-favorites");function B(){p.textContent.trim()=="Add to favorites"&&(r.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"cardiovascular system",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(m,JSON.stringify(r)),p.textContent="Delete from favorites")}p.addEventListener("click",B);function q(e){if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){const t=e.currentTarget.id;M(t)}}i.addEventListener("click",q);function M(e){const t=r.findIndex(a=>a.id==e);r.splice(t,1),localStorage.setItem(m,JSON.stringify(r)),E.forEach(a=>{a.id==e&&(g=a)}),g&&i.removeChild(g),(!v||r.length==0)&&(L.classList.add("is-open-message-info"),l.classList.add("close")),P()}function P(){i.innerHTML="",r.forEach(e=>{const t=k(e);i.insertAdjacentHTML("beforeend",t)})}function k(e){return`<li class="favorites-list-item" id="${e.id}">
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
