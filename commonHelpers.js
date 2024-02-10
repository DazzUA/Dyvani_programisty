import{a as u,i as T}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const W=document.querySelector(".FilterButtons"),C=document.querySelector(".ExerciseFiltersList"),B=document.querySelector(".Pagination"),U="https://energyflow.b.goit.study/api";let A="Muscles",$=1,N=window.innerWidth,S=0;W.addEventListener("click",J);B.addEventListener("click",V);N<=375?S=8:(N<=768,S=12);async function I(){try{return(await u.get(`${U}/filters`,{params:{filter:A,page:$,limit:S}})).data}catch(e){console.log(e)}}async function R(){try{const e=await I().then(t=>{const{results:s,totalPages:r,page:o}=t;if(s&&s.length>0){P(s);const a=D(o,r);B.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}R();async function J(e){e.preventDefault(),$=1;const s=e.target.dataset.filter;if(A=s,C.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{I(s).then(r=>{const{results:o,totalPages:a,page:n}=r;P(o);{const i=D(n,a);B.innerHTML=i}})}catch(r){console.log(r)}}async function V(e){$=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==$?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),C.innerHTML="";try{const{results:t,page:s,totalPages:r}=await I();if(s===r)return;P(t)}catch(t){console.log(t)}}function P(e){const t=e.map(({name:s,filter:r,imgUrl:o})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");C.insertAdjacentHTML("beforeend",t)}function D(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}document.querySelector(".FilterButtons");const k=document.querySelector(".ExerciseFiltersList"),j=document.querySelector(".ExercisesHead"),_=document.querySelector(".Pagination"),L="https://energyflow.b.goit.study/api";k.addEventListener("click",z);async function z(e){if(e.target===e.currentTarget)return;k.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");console.log(t);const s=t.dataset.filter,r=t.dataset.name;console.log(s),console.log(r);try{const o=await K(s,r);console.log(o),k.innerHTML=Y(o.results),j.innerHTML=G(r),document.querySelector(".ExercisesForm").addEventListener("submit",n(s,r));async function n(v){try{const f="https://energyflow.b.goit.study/api/exercises?",d=await u.get(f,{params:{bodypart:"back",keyword:v,page:1,limit:9}});renderExercises(d.data.results)}catch(f){handleError(f)}finally{searchForm.reset()}}const i=document.querySelector("#FilterBtn");console.log(i),i.addEventListener("click",Q),_.innerHTML=""}catch(o){console.log(o)}}async function K(e,t){try{return e==="Muscles"?(await u.get(`${L}/exercises`,{params:{muscles:t}})).data:e==="Body parts"?(await u.get(`${L}/exercises`,{params:{bodypart:t}})).data:(await u.get(`${L}/exercises`,{params:{equipment:t}})).data}catch(s){console.log(s)}}function Y(e){return e.map(({rating:s,name:r,burnedCalories:o,time:a,bodyPart:n,target:i})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
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
        <p class='MainPartName'>${r}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${i}</span></p>
        </li>
      </ul>

    </li>`).join("")}function G(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles">Muscles</button>
    <button class="ItemExercises" data-filter="Body parts">Body parts</button>
    <button class="ItemExercises" data-filter="Equipment">Equipment</button>
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
`}async function Q(e){if(e.target===e.currentTarget)return;const t=e.target.dataset.filter;console.log(t);try{const s=await X(t);k.innerHTML=Z(s);const r=document.querySelector(".TitleExercises");r.innerHTML="Exercises",document.querySelector(".ExercisesForm").remove(),console.log(r)}catch(s){console.log(s)}}async function X(e=filterValueDefault){try{return(await u.get(`${L}/filters`,{params:{filter:e,page:1,limit:20}})).data.results}catch(t){console.log(t)}}function Z(e){return e.map(({name:s,filter:r,imgUrl:o})=>` <li class='ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div>
          <p>${s}</p>
          <p>${r}</p>
        </div>
      </li>`).join("")}const ee="https://energyflow.b.goit.study/api/exercises",M={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},E={query:"",page:1};M.searchForm.addEventListener("submit",te);async function te(e){e.preventDefault(),M.searchList.innerHTML="",E.page=1;const t=e.currentTarget;E.query=t.elements.query.value.trim(),E.query&&await se(E)}async function se(e){try{const t=await u.get(`${ee}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});re(t.data.results)}catch(t){handleError(t)}}function re(e){e.length===0?oe():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,M.searchList.appendChild(s)})}function oe(){T.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const m={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},ae="https://energyflow.b.goit.study/api/subscription",ie="feedback-form-state",q=JSON.parse(localStorage.getItem(ie));q!=null?m.input.value=q.email:m.input.value="";m.submit.addEventListener("click",ne);async function ne(e){const t=m.input.value.trim();e.preventDefault();try{const s=await u.post(ae,{email:t});T.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}catch(s){T.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),m.input.value=""}}const F="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",ce=window.location.pathname;ce.lastIndexOf("/");let b="favorites",g=localStorage.getItem(b);g||(localStorage.setItem(b,JSON.stringify([])),g="[]");let l=JSON.parse(g);const y=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let h="",x;const O=document.querySelector(".message-favorites"),p=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),H=document.querySelector(".favorites-list"),le=document.querySelectorAll(".favorites-list-item");if(!g||l.length==0)O.classList.add("is-open-message-favorites"),p.classList.add("close");else if(g)try{l.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${F}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${F}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${F}#icon-running"></use>
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
        </li>`;c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}H.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){h=e.currentTarget.id;const t=l.findIndex(s=>s.id==h);l.splice(t,1),localStorage.setItem(b,JSON.stringify(l)),le.forEach(s=>{s.id==h&&(x=s)}),x&&H.removeChild(x),(!g||l.length==0)&&(O.classList.add("is-open-message-info"),p.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?p.style.display="flex":p.style.display="none"}function t(){return c&&c.offsetParent!==null}function s(){const o=window.innerWidth<=767&&t()?6:c.children.length;if(window.innerWidth>767&&t()){for(let i=0;i<c.children.length;i++)c.children[i].style.display="block";return}Math.ceil(c.children.length/o);let a=1;function n(i){const v=(i-1)*o,f=v+o;for(let d=0;d<c.children.length;d++)c.children[d].style.display="none";for(let d=v;d<f&&d<c.children.length;d++)c.children[d].style.display="block"}n(a),p.addEventListener("click",function(i){i.target.tagName==="BUTTON"&&(p.querySelectorAll("button").forEach(f=>f.classList.remove("active-btn")),i.target.classList.add("active-btn"),a=parseInt(i.target.textContent),n(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?w.style.overflowY="scroll":w.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="480px":w.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&c.children.length>=6&&s()});y.addEventListener("click",()=>{if(y.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(b,JSON.stringify(l)),y.textContent="Delete from favorites",y.innerHTML="Delete from favorites";else{const e=l.findIndex(s=>s.id==h);l.splice(e,1),localStorage.setItem(b,JSON.stringify(l));const t=document.querySelectorAll(".favorites-list-item");y.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${h}"]`)&&(t.forEach(s=>{s.id==h&&(x=s)}),list.removeChild(x),(!g||l.length==0)&&(O.classList.add("is-open-message-info"),p.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
