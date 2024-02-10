import{a as p,i as P}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const Z=document.querySelector(".FilterButtons"),M=document.querySelector(".ExerciseFiltersList"),H=document.querySelector(".Pagination"),ee="https://energyflow.b.goit.study/api";let R="Muscles",$=1,W=window.innerWidth,k=0;Z.addEventListener("click",se);H.addEventListener("click",J);W<=375?k=8:(W<=768,k=12);async function O(){try{return(await p.get(`${ee}/filters`,{params:{filter:R,page:$,limit:k}})).data}catch(e){console.log(e)}}async function te(){try{const e=await O().then(t=>{const{results:s,totalPages:r,page:i}=t;if(s&&s.length>0){N(s);const a=V(i,r);H.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}te();async function se(e){e.preventDefault(),$=1;const s=e.target.dataset.filter;if(R=s,M.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{O(s).then(r=>{const{results:i,totalPages:a,page:l}=r;N(i);{const o=V(l,a);H.innerHTML=o}})}catch(r){console.log(r)}}async function J(e){$=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==$?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),M.innerHTML="";try{const{results:t,page:s,totalPages:r}=await O();if(s===r)return;N(t)}catch(t){console.log(t)}}function N(e){const t=e.map(({name:s,filter:r,imgUrl:i})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");M.insertAdjacentHTML("beforeend",t)}function V(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const f=document.querySelector(".ExerciseFiltersList"),re=document.querySelector(".ExercisesHead"),d=document.querySelector(".Pagination"),T="https://energyflow.b.goit.study/api";let y=1,x,C;f.addEventListener("click",ie);async function ie(e){if(f.classList.add("ExerciseCategoryList"),d.removeEventListener("click",J),d.removeEventListener("click",X),e.target===e.currentTarget)return;f.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");x=t.dataset.filter,C=t.dataset.name;try{re.innerHTML=ae(C);const{totalPages:s,results:r}=await _(x,C);f.innerHTML=z(r);const i=document.querySelector("#FilterBtn");if(i.addEventListener("click",oe),i.addEventListener("click",j),d.innerHTML="",s>1){const a=G(s);d.innerHTML=a}d.addEventListener("click",Q)}catch(s){console.log(s)}}function j(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",j)}async function _(e,t,s){try{return e==="Muscles"?(await p.get(`${T}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await p.get(`${T}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await p.get(`${T}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function z(e){return e.map(({rating:s,name:r,burnedCalories:i,time:a,bodyPart:l,target:o})=>`<li class="WorkoutCard">
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
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${i} / ${a} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${o}</span></p>
        </li>
      </ul>

    </li>`).join("")}function ae(e){return`<div>
  <h2 class="TitleExercises">Exercises / <span class="NameValue"> ${e}</span></h2>
  <div class="ExercisesHeared">
  <div class="ListExercises FilterButtons" id='FilterBtn'>
    <button class="ItemExercises" data-filter="Muscles" id='MusclesBtn'>Muscles</button>
    <button class="ItemExercises" data-filter="Body parts" id='BodyPartBtn'>Body parts</button>
    <button class="ItemExercises" data-filter="Equipment" id='EquipmentBtn'>Equipment</button>
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
`}async function oe(e){if(f.classList.remove("ExerciseCategoryList"),y=1,d.removeEventListener("click",Q),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){x=e.target.dataset.filter;try{const{totalPages:t,results:s}=await K(x);if(f.innerHTML=Y(s),t>1){const i=G(t);d.innerHTML=i}else d.innerHTML="";d.addEventListener("click",X);const r=document.querySelector(".TitleExercises");r.innerHTML="Exercises"}catch(t){console.log(t)}}}async function K(e=filterValueDefault){try{return(await p.get(`${T}/filters`,{params:{filter:e,page:y,limit:12}})).data}catch(t){console.log(t)}}function Y(e){return e.map(({name:s,filter:r,imgUrl:i})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function G(e){let t="";for(let s=1;s<=e;s+=1)t+=`<button class="pagination-btn" type="button">${s}</button>`;return t}async function Q(e){y=e.target.textContent;try{const{results:t}=await _(x,C,y);f.innerHTML=z(t)}catch(t){console.log(t)}}async function X(e){y=e.target.textContent;try{const{results:t}=await K(x,y);f.innerHTML=Y(t)}catch(t){console.log(t)}}const ne="https://energyflow.b.goit.study/api/exercises",A={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},w={query:"",page:1};A.searchForm.addEventListener("submit",ce);async function ce(e){e.preventDefault(),A.searchList.innerHTML="",w.page=1;const t=e.currentTarget;w.query=t.elements.query.value.trim(),w.query&&await le(w)}async function le(e){try{const t=await p.get(`${ne}`,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}});de(t.data.results)}catch(t){handleError(t)}}function de(e){e.length===0?ue():e.forEach(t=>{const s=document.createElement("li");s.textContent=t.name,A.searchList.appendChild(s)})}function ue(){P.error({title:"No Results",message:"Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs"})}const h={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},fe="https://energyflow.b.goit.study/api/subscription",ge="feedback-form-state",q=JSON.parse(localStorage.getItem(ge));q!=null?h.input.value=q.email:h.input.value="";h.submit.addEventListener("click",pe);async function pe(e){const t=h.input.value.trim();e.preventDefault();try{const s=await p.post(fe,{email:t});P.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}catch(s){P.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}}const I="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",me=window.location.pathname;me.lastIndexOf("/");let E="favorites",m=localStorage.getItem(E);m||(localStorage.setItem(E,JSON.stringify([])),m="[]");let c=JSON.parse(m);const L=document.querySelector(".add-favorites"),n=document.querySelector(".favorites-list");let v="",b;const D=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),S=document.querySelector(".div-favorites-section"),U=document.querySelector(".favorites-list"),he=document.querySelectorAll(".favorites-list-item");if(!m||c.length==0)D.classList.add("is-open-message-favorites"),g.classList.add("close");else if(m)try{c.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
            <div class="favorites-card-header">
                <div class="favorites-workout">
                    <p>WORKOUT</p>
                </div>
                <button class="favorites-btn-trash" aria-label="trash" type="button">
                    <svg class="favorites-icon-delete" width="16" height="16" fill="none">
                        <use class="favorites-icon-delete-use" href="${I}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${e.id}"
                    class="favorites-btn-arrow"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-icon-arrow" width="14" height="14" stroke="#1B1B1B">
                            <use class="favorites-icon-arrow-use" href="${I}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-main-container">

                <div class="favorite-icon-run-man">
                <svg width="14" height="14">
          <use href="${I}#icon-running"></use>
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
        </li>`;n.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}U.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){v=e.currentTarget.id;const t=c.findIndex(s=>s.id==v);c.splice(t,1),localStorage.setItem(E,JSON.stringify(c)),he.forEach(s=>{s.id==v&&(b=s)}),b&&U.removeChild(b),(!m||c.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return n&&n.offsetParent!==null}function s(){const i=window.innerWidth<=767&&t()?6:n.children.length;if(window.innerWidth>767&&t()){for(let o=0;o<n.children.length;o++)n.children[o].style.display="block";return}Math.ceil(n.children.length/i);let a=1;function l(o){const B=(o-1)*i,F=B+i;for(let u=0;u<n.children.length;u++)n.children[u].style.display="none";for(let u=B;u<F&&u<n.children.length;u++)n.children[u].style.display="block"}l(a),g.addEventListener("click",function(o){o.target.tagName==="BUTTON"&&(g.querySelectorAll("button").forEach(F=>F.classList.remove("active-btn")),o.target.classList.add("active-btn"),a=parseInt(o.target.textContent),l(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?S.style.overflowY="scroll":S.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?S.style.maxHeight="480px":S.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&n.children.length>=6&&s()});L.addEventListener("click",()=>{if(L.textContent.trim()=="Add to favorites")c.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(E,JSON.stringify(c)),L.textContent="Delete from favorites",L.innerHTML="Delete from favorites";else{const e=c.findIndex(s=>s.id==v);c.splice(e,1),localStorage.setItem(E,JSON.stringify(c));const t=document.querySelectorAll(".favorites-list-item");L.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${v}"]`)&&(t.forEach(s=>{s.id==v&&(b=s)}),list.removeChild(b),(!m||c.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
