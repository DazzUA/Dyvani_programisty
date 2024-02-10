import{a as p,i as W}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const ee=document.querySelector(".FilterButtons"),P=document.querySelector(".ExerciseFiltersList"),M=document.querySelector(".Pagination"),te="https://energyflow.b.goit.study/api";let R="Muscles",$=1,U=window.innerWidth,k=0;ee.addEventListener("click",re);M.addEventListener("click",V);U<=375?k=8:(U<=768,k=12);async function H(){try{return(await p.get(`${te}/filters`,{params:{filter:R,page:$,limit:k}})).data}catch(e){console.log(e)}}async function se(){try{const e=await H().then(t=>{const{results:s,totalPages:r,page:i}=t;if(s&&s.length>0){O(s);const a=j(i,r);M.innerHTML=a}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}se();async function re(e){e.preventDefault(),$=1;const s=e.target.dataset.filter;if(R=s,P.innerHTML="",Array.from(e.currentTarget.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{H(s).then(r=>{const{results:i,totalPages:a,page:n}=r;O(i);{const o=j(n,a);M.innerHTML=o}})}catch(r){console.log(r)}}async function V(e){$=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==$?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),P.innerHTML="";try{const{results:t,page:s,totalPages:r}=await H();if(s===r)return;O(t)}catch(t){console.log(t)}}function O(e){const t=e.map(({name:s,filter:r,imgUrl:i})=>` <li class="FilterList ExercisesItem" data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("");P.insertAdjacentHTML("beforeend",t)}function j(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button">${r}</button>`;return s}const d=document.querySelector(".ExerciseFiltersList"),ie=document.querySelector(".ExercisesHead"),u=document.querySelector(".Pagination"),B="https://energyflow.b.goit.study/api";let y=1,x,T;d.addEventListener("click",A);async function A(e){if(d.removeEventListener("click",A),d.classList.add("ExerciseCategoryList"),u.removeEventListener("click",V),u.removeEventListener("click",X),e.target===e.currentTarget)return;d.classList.add("ExerciseCategoryList");const t=e.target.closest(".ExercisesItem");x=t.dataset.filter,T=t.dataset.name;try{ie.innerHTML=ae(T);const{totalPages:s,results:r}=await z(x,T);d.innerHTML=N(r);const i=document.querySelector(".StartBtn"),a=document.querySelector("#FilterBtn");if(a.addEventListener("click",oe),a.addEventListener("click",_),u.innerHTML="",s>1){const n=G(s);u.innerHTML=n}u.addEventListener("click",Q)}catch(s){console.log(s)}}function _(){document.querySelector(".ExercisesForm").remove(),FilterBtn.removeEventListener("click",_)}async function z(e,t,s){try{return e==="Muscles"?(await p.get(`${B}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await p.get(`${B}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await p.get(`${B}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch(r){console.log(r)}}function N(e){return e.map(({rating:s,name:r,burnedCalories:i,time:a,bodyPart:n,target:o,_id:L})=>`<li class="WorkoutCard">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='./img/symbol-defs.svg#icon-star'></use>
        </svg></div>
        </div>
        <div class='StartBtn' data-id='${L}'>
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
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${n}</span></p>
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
`}async function oe(e){if(d.addEventListener("click",A),d.classList.remove("ExerciseCategoryList"),y=1,u.removeEventListener("click",Q),Array.from(e.currentTarget.children).map(t=>{t.textContent!==e.target.textContent?t.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target!==e.currentTarget){x=e.target.dataset.filter;try{const{totalPages:t,results:s}=await K(x);if(d.innerHTML=Y(s),t>1){const i=G(t);u.innerHTML=i}else u.innerHTML="";u.addEventListener("click",X);const r=document.querySelector(".TitleExercises");r.innerHTML="Exercises"}catch(t){console.log(t)}}}async function K(e=filterValueDefault){try{return(await p.get(`${B}/filters`,{params:{filter:e,page:y,limit:12}})).data}catch(t){console.log(t)}}function Y(e){return e.map(({name:s,filter:r,imgUrl:i})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${i}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function G(e){let t="";for(let s=1;s<=e;s+=1)t+=`<button class="pagination-btn" type="button">${s}</button>`;return t}async function Q(e){y=e.target.textContent;try{const{results:t}=await z(x,T,y);d.innerHTML=N(t)}catch(t){console.log(t)}}async function X(e){y=e.target.textContent;try{const{results:t}=await K(x,y);d.innerHTML=Y(t)}catch(t){console.log(t)}}const ne="https://energyflow.b.goit.study/api/exercises",Z={searchForm:document.querySelector(".SearchExercises"),searchInput:document.querySelector(".SearchInput"),searchList:document.querySelector(".SearchExercisesList")},q={query:"",page:1};Z.searchForm.addEventListener("submit",ce);async function ce(e){e.preventDefault(),Z.searchList.innerHTML="",q.page=1;const t=e.currentTarget;if(q.query=t.elements.query.value.trim(),!!q.query)try{const s=await le(query);N(s.data)}catch{}}async function le(e){try{return(await p.get(ne,{params:{bodypart:"",muscles:"",equipment:"",keyword:e.query,page:e.page,limit:9}})).data}catch(t){handleError(t)}}const h={form:document.querySelector(".footerForm"),input:document.querySelector(".formInput"),submit:document.querySelector(".modalButton")},de="https://energyflow.b.goit.study/api/subscription",ue="feedback-form-state",F=JSON.parse(localStorage.getItem(ue));F!=null?h.input.value=F.email:h.input.value="";h.submit.addEventListener("click",fe);async function fe(e){const t=h.input.value.trim();e.preventDefault();try{const s=await p.post(de,{email:t});W.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}catch(s){W.show({position:"topRight",message:JSON.stringify(JSON.parse(s.request.responseText).message),maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27, 0.7)",close:!1,closeOnClick:!0}),h.input.value=""}}const I="/Dyvani_programisty/assets/symbol-defs-2d4054da.svg",ge=window.location.pathname;ge.lastIndexOf("/");let S="favorites",m=localStorage.getItem(S);m||(localStorage.setItem(S,JSON.stringify([])),m="[]");let l=JSON.parse(m);const b=document.querySelector(".add-favorites"),c=document.querySelector(".favorites-list");let v="",E;const D=document.querySelector(".message-favorites"),g=document.querySelector(".favorites-pagination-block"),w=document.querySelector(".div-favorites-section"),J=document.querySelector(".favorites-list"),pe=document.querySelectorAll(".favorites-list-item");if(!m||l.length==0)D.classList.add("is-open-message-favorites"),g.classList.add("close");else if(m)try{l.forEach(e=>{const t=`<li class="favorites-list-item" id="${e.id}">
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
        </li>`;c.insertAdjacentHTML("beforeend",t)})}catch(e){console.log(e.name),console.log(e.message)}J.addEventListener("click",e=>{if(e.target.classList.contains("favorites-btn-trash")||e.target.classList.contains("favorites-icon-delete")||e.target.classList.contains("favorites-icon-delete-use")){v=e.currentTarget.id;const t=l.findIndex(s=>s.id==v);l.splice(t,1),localStorage.setItem(S,JSON.stringify(l)),pe.forEach(s=>{s.id==v&&(E=s)}),E&&J.removeChild(E),(!m||l.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close"))}location.reload()});document.addEventListener("DOMContentLoaded",function(){function e(){window.innerWidth<=767&&t()?g.style.display="flex":g.style.display="none"}function t(){return c&&c.offsetParent!==null}function s(){const i=window.innerWidth<=767&&t()?6:c.children.length;if(window.innerWidth>767&&t()){for(let o=0;o<c.children.length;o++)c.children[o].style.display="block";return}Math.ceil(c.children.length/i);let a=1;function n(o){const L=(o-1)*i,C=L+i;for(let f=0;f<c.children.length;f++)c.children[f].style.display="none";for(let f=L;f<C&&f<c.children.length;f++)c.children[f].style.display="block"}n(a),g.addEventListener("click",function(o){o.target.tagName==="BUTTON"&&(g.querySelectorAll("button").forEach(C=>C.classList.remove("active-btn")),o.target.classList.add("active-btn"),a=parseInt(o.target.textContent),n(a))})}function r(){window.matchMedia("(min-width: 768px)").matches?w.style.overflowY="scroll":w.style.overflowY="visible",window.matchMedia("(min-width: 1440px)").matches?w.style.maxHeight="480px":w.style.maxHeight="none"}r(),e(),window.addEventListener("resize",function(){e(),s(),r()}),t()&&c.children.length>=6&&s()});b.addEventListener("click",e=>{if(e.preventDefault(),b.textContent.trim()=="Add to favorites")l.push({id:"64f389465ae26083f39b17df",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0067.gif",name:"barbell one arm snatch",rating:"3.67",target:"delts",popular:"5548",bodyPart:"shoulders",equipment:"barbell",burnedCalories:"345",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises."}),localStorage.setItem(S,JSON.stringify(l)),b.textContent="Delete from favorites",b.innerHTML="Delete from favorites";else{const t=l.findIndex(r=>r.id==v);l.splice(t,1),localStorage.setItem(S,JSON.stringify(l));const s=document.querySelectorAll(".favorites-list-item");b.textContent="Add to favorities",document.querySelector(`.favorites-list-item[id="${v}"]`)&&(s.forEach(r=>{r.id==v&&(E=r)}),list.removeChild(E),(!m||l.length==0)&&(D.classList.add("is-open-message-info"),g.classList.add("close")))}location.reload()});
//# sourceMappingURL=commonHelpers.js.map
