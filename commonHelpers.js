import{a as u,i as q}from"./assets/vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const W=document.querySelector(".filter-buttons"),T=document.querySelector(".exercise-filters-list"),C=document.querySelector(".pagination"),A="https://energyflow.b.goit.study/api";let N="Muscles",F=1,I=window.innerWidth,w=0;W.addEventListener("click",J);I<=375?w=8:(I<=768,w=12);async function H(){try{return(await u.get(`${A}/filters`,{params:{filter:N,page:F,limit:w}})).data}catch(e){console.log(e)}}async function J(e){e.preventDefault(),F=1;const t=e.target.dataset.filter;if(N=t,T.innerHTML="",e.target.tagName==="BUTTON")try{H(t).then(o=>{const{results:r,totalPages:i,page:n}=o;if(P(r),i>1){const a=R(n,i);C.innerHTML=a}else C.innerHTML=""})}catch(o){console.log(o)}}function P(e){const s=e.map(({name:t,filter:o,imgUrl:r})=>` <li class="filter-list ExercisesItem" data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div class="filter-text">
          <p class="filter-exercises">${t}</p>
          <p class="filter-name">${o}</p>
        </div>
      </li>`).join("");T.insertAdjacentHTML("beforeend",s)}function R(e,s){let t="";for(let o=1;o<=s;o+=1)t+=`<button class="pagination-btn" type="button">${o}</button>`;return t}async function U(e){F=e.target.textContent,T.innerHTML="";try{const{results:s,page:t,totalPages:o}=await H(),r=s[0].filter;if(t===o)return;P(s)}catch(s){console.log(s)}}C.addEventListener("click",U);document.querySelector(".filter-buttons");const L=document.querySelector(".exercise-filters-list"),V=document.querySelector(".ExercisesHead"),j=document.querySelector(".pagination"),E="https://energyflow.b.goit.study/api";L.addEventListener("click",z);async function z(e){if(e.target===e.currentTarget)return;L.classList.add("ExerciseCategoryList");const s=e.target.closest(".ExercisesItem");console.log(s);const t=s.dataset.filter,o=s.dataset.name;console.log(t),console.log(o);try{const r=await _(t,o);console.log(r),L.innerHTML=K(r.results),V.innerHTML=Y(o),document.querySelector(".ExercisesForm").addEventListener("submit",n(t,o));async function n(v){try{const f="https://energyflow.b.goit.study/api/exercises?",d=await u.get(f,{params:{bodypart:"back",keyword:v,page:1,limit:9}});renderExercises(d.data.results)}catch(f){handleError(f)}finally{searchForm.reset()}}const a=document.querySelector("#FilterBtn");console.log(a),a.addEventListener("click",G),j.innerHTML=""}catch(r){console.log(r)}}async function _(e,s){try{return e==="Muscles"?(await u.get(`${E}/exercises`,{params:{muscles:s}})).data:e==="Body parts"?(await u.get(`${E}/exercises`,{params:{bodypart:s}})).data:(await u.get(`${E}/exercises`,{params:{equipment:s}})).data}catch(t){console.log(t)}}function K(e){return e.map(({rating:t,name:o,burnedCalories:r,time:i,bodyPart:n,target:a})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${t}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn'>
          <p>Start</p>
          <svg width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-arrow'></use>
        </svg>
        </div>
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='./img/symbol-defs.svg#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${o}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${r} / ${i} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${a}</span></p>
        </li>
      </ul>
      
    </li>`).join("")}function Y(e){return`<div>
  <h2 class="title-exercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="list-exercises filter-buttons" id='FilterBtn'>
    <button class="item-exercises" data-filter="Muscles">Muscles</button>
    <button class="item-exercises" data-filter="Body parts">Body parts</button>
    <button class="item-exercises" data-filter="Equipment">Equipment</button>
  </div>
    <form action="" class="ExercisesForm">
      <label for="#search" class="visually-hidden">Search</label>
      <input class='SearchInput' name="search" placeholder="Search" type="search" id="search" />
      <button class='SearchButton' type="submit">
        <svg class='IconSearch' width='18' height='18'>
          <use href='./img/symbol-defs.svg#icon-search'></use>
        </svg>
      </button>
    </form></div>
</div>
`}async function G(e){if(e.target===e.currentTarget)return;const s=e.target.dataset.filter;console.log(s);try{const t=await Q(s);L.innerHTML=X(t);const o=document.querySelector(".title-exercises");o.innerHTML="Exercises",document.querySelector(".ExercisesForm").remove(),console.log(o)}catch(t){console.log(t)}}async function Q(e=filterValueDefault){try{return(await u.get(`${E}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(s){console.log(s)}}function X(e){return e.map(({name:t,filter:o,imgUrl:r})=>` <li class='ExercisesItem' data-filter='${o}' data-name='${t}'>
        <img class="img-exercises" src="${r}" alt="${o}">
        <div>
          <p>${t}</p>
          <p>${o}</p>
        </div>
      </li>`).join("")}const D=document.querySelector(".SearchExercises"),Z=document.querySelector(".SearchInput"),ee=document.querySelector(".SearchExercisesList");document.querySelector("#LoadMoreButton");let M="";D.addEventListener("submit",te);function te(e){e.preventDefault(),M=Z.value,se(M)}async function se(e){try{const s="https://energyflow.b.goit.study/api/exercises?",t=await u.get(s,{params:{bodypart:"back",keyword:e,page:1,limit:9}});re(t.data.results)}catch(s){oe(s)}finally{D.reset()}}function re(e){e.length===0?ie():e.forEach(s=>{const t=document.createElement("li");t.textContent=s.name,ee.appendChild(t)})}function oe(e){console.log(e)}function ie(){q.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ae="https://energyflow.b.goit.study/api/subscription",ne="feedback-form-state",$=JSON.parse(localStorage.getItem(ne));$!=null?m.input.value=$.email:m.input.value="";m.submit.addEventListener("click",ce);async function ce(e){const s=m.input.value.trim();e.preventDefault();try{const t=await u.post(ae,{email:s});q.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(t){q.show({position:"topRight",message:JSON.stringify(JSON.parse(t.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const k="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",le=window.location.pathname;le.lastIndexOf("/");let x="favorites",g=localStorage.getItem(x);g||(localStorage.setItem(x,JSON.stringify([])),g="[]");let l=JSON.parse(g);const y=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let h="",b;const B=document.querySelector(".message-favorites"),p=document.querySelector(".favorites-pagination-block"),S=document.querySelector(".div-favorites-section"),O=document.querySelector(".favorites-list"),de=document.querySelectorAll(".favorites-list-item");if(!g||l.length==0)B.classList.add("is-open-message-favorites"),p.classList.add("close");else if(g)try{l.forEach(e=>{const s=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${k}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${k}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${k}#icon-running"></use>
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
        </li>`;c.insertAdjacentHTML("beforeend",s)})}catch(e){console.log(e.name),console.log(e.message)}O.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){h=e.currentTarget.id;const s=l.findIndex(t=>t.id==h);l.splice(s,1),localStorage.setItem(x,JSON.stringify(l)),de.forEach(t=>{t.id==h&&(b=t)}),b&&O.removeChild(b),(!g||l.length==0)&&(B.classList.add("is-open-message-info"),p.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&s()?p.style.display="flex":p.style.display="none"}function s(){return c&&c.offsetParent!==null}function t(){const r=window.innerWidth<=767&&s()?6:c.children.length;if(window.innerWidth>767&&s()){for(let a=0;a<c.children.length;a++)c.children[a].style.display="block";return}Math.ceil(c.children.length/r);let i=1;function n(a){const v=(a-1)*r,f=v+r;for(let d=0;d<c.children.length;d++)c.children[d].style.display="none";for(let d=v;d<f&&d<c.children.length;d++)c.children[d].style.display="block"}n(i),p.addEventListener("click",function(a){a.target.tagName==="BUTTON"&&(p.querySelectorAll("button").forEach(f=>f.classList.remove("active-btn")),a.target.classList.add("active-btn"),i=parseInt(a.target.textContent),n(i))})}function o(){window.matchMedia("(min-width: 768px)").matches?S.style.overflowY="scroll":S.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?S.style.maxHeight="480px":S.style.maxHeight="none"}o(),e(),window.addEventListener("resize",function(){e(),t(),o()}),s()&&c.children.length>=6&&t()});y.addEventListener("click",()=>{if(y.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(x,JSON.stringify(l)),y.textContent="Delete from favorites",y.innerHTML="Delete from favorites";else{const e=l.findIndex(t=>t.id==h);l.splice(e,1),localStorage.setItem(x,JSON.stringify(l));const s=document.querySelectorAll(".favorites-list-item");y.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${h}"]`)&&(s.forEach(t=>{t.id==h&&(b=t)}),list.removeChild(b),(!g||l.length==0)&&(B.classList.add("is-open-message-info"),p.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
