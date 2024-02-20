import{i as M}from"./assets/modal_window-438f6ef9.js";import{a,i as V}from"./assets/vendor-8cce9181.js";const W=document.querySelector(".js-menu"),te=document.querySelector(".js-open-menu"),se=document.querySelector(".js-close-menu"),_=function(){const e=W.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};te.addEventListener("click",_);se.addEventListener("click",_);window.matchMedia("(min-width: 335px)").addEventListener("change",re);function re(e){e.matches&&(W.classList.remove("is-open"),document.body.style.overflow="")}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hero-text");e&&(e.style.display="none",setTimeout(function(){e.style.display="block"},500))});let ne=document.querySelector(".quoteText"),oe=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),s=new Date,r=t?new Date(t):null;if(e&&r&&ae(s,r)){O(JSON.parse(e));return}let o=(await a.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(o)),localStorage.setItem("quoteDate",s.toISOString()),O(o)}catch(e){console.error("Error:",e)}});function O(e){ne.innerText=e.quote,oe.innerText=e.author}function ae(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const B=document.querySelector(".exercise-filters-list"),C=document.querySelector(".pagination"),F=document.querySelector(".pagination-subcategories"),k=document.querySelector(".exercise-filters-list-subcategories"),ie=document.querySelector(".exercises-form"),ce=document.querySelector(".title-exercises"),x="https://energyflow.b.goit.study/api";let v=1,i,c;B.addEventListener("click",le);async function le(e){if(ie.classList.remove("visually-hidden"),C.innerHTML="",B.classList.add("visually-hidden"),k.classList.remove("visually-hidden"),C.removeEventListener("click",pe),e.target===e.currentTarget)return;const t=e.target.closest(".exercises-item"),{filter:s,name:r}=t.dataset;i=s,c=r,ce.innerHTML=`Exercises /<span class='span-title-exercises'> ${c}</span>`;try{const{page:n,totalPages:o,results:u}=await Y(i,c);if(k.innerHTML=m(u),o>1){const g=b(n,o);F.innerHTML=g}F.addEventListener("click",de)}catch{l("Error")}}async function Y(e,t,s){try{return e==="Muscles"?(await a.get(`${x}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await a.get(`${x}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await a.get(`${x}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch{l("Error")}}function m(e){return e.map(({rating:s,name:r,burnedCalories:n,time:o,bodyPart:u,target:g,_id:E})=>`<li class="workout-card exercise-category-list" id ='${E}'>
      <div class='card-header'>
        <div class='workout-wrapper'>
          <p class='workout'>workout</p>
          <div class='rating-wrapper'><p>${s}</p>
          <svg class='star-icon' width='13' height='13'>
          <use href='${M}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="start-btn">
  Start<svg width='13' height='13'>
          <use href='${M}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='card-main-part'>
      <div class='run-icon-wrapper'><svg width='14' height='14'>
          <use href='${M}#icon-running'></use>
        </svg></div>
        <p class='main-part-name'>${r}</p>
      </div>
      <ul class="card-footer">
        <li>
          <p class='card-footer-text-descr'>Burned calories: <span class='card-footer-text-value'>${n} / ${o} min</span></p>
        </li>
        <li>
          <p class='card-footer-text-descr'>Body part: <span class='card-footer-text-value'>${u}</span></p>
        </li>
        <li>
          <p class='card-footer-text-descr'>Target: <span class='card-footer-text-value'>${g}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function ue(e=filterValueDefault){try{return(await a.get(`${x}/filters`,{params:{filter:e,page:v,limit:12}})).data}catch{l("Error")}}async function de(e){if(e.target.tagName==="BUTTON"){q(),v=e.target.textContent;try{const{results:t}=await Y(i,c,v);k.innerHTML=m(t)}catch{l("Error")}}}async function pe(e){v=e.target.textContent;try{const{results:t}=await ue(i,v);B.innerHTML=T(t)}catch{l("Error")}}function l(e){V.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ge=document.querySelector(".filter-buttons"),y=document.querySelector(".exercise-filters-list"),h=document.querySelector(".pagination"),me=document.querySelector(".exercises-form"),ye=document.querySelector(".exercises "),fe=document.querySelector(".title-exercises"),he=document.querySelector(".exercise-filters-list-subcategories"),U=document.querySelector(".pagination-subcategories"),ve=document.querySelector(".search-list"),Le=document.querySelector(".search-pagination"),xe=document.querySelector(".no-results"),Se=document.querySelector(".exercises"),we="https://energyflow.b.goit.study/api";let K="Muscles",w=1,A=window.innerWidth,S=0;ge.addEventListener("click",be);h.addEventListener("click",qe);A<=375?S=8:(A<=768,S=12);async function P(){try{return(await a.get(`${we}/filters`,{params:{filter:K,page:w,limit:S}})).data}catch{l("Error")}}async function Te(){try{const e=await P().then(t=>{const{results:s,totalPages:r,page:n}=t;if(s&&s.length>0){y.innerHTML=T(s);const o=b(n,r);h.innerHTML=o}else console.error("No exercises found.")})}catch{l("Error")}}Te();async function be(e){if(e.target.tagName!=="BUTTON")return;q(),fe.innerHTML="Exercises",ve.innerHTML="",Le.innerHTML="",e.preventDefault(),me.classList.add("visually-hidden"),xe.classList.add("visually-hidden"),he.classList.add("visually-hidden"),y.classList.remove("visually-hidden"),h.innerHTML="",U.innerHTML="",U.classList.remove("visually-hidden"),w=1;const s=e.target.dataset.filter;K=s,y.innerHTML="";const r=ye.querySelector(".button-is-active"),n=e.target;if(r.classList.remove("button-is-active"),n.classList.add("button-is-active"),e.target.tagName==="BUTTON")try{P(s).then(o=>{const{results:u,totalPages:g,page:E}=o;if(y.innerHTML=T(u),g>1){const ee=b(E,g);h.innerHTML=ee}else h.innerHTML=""})}catch{l("Error")}}async function qe(e){if(e.target.tagName==="BUTTON"){e.preventDefault(),q(),w=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==w?t.classList.remove("pagination-btn-is-active"):e.target.classList.add("pagination-btn-is-active")}),y.innerHTML="";try{const{results:t,page:s,totalPages:r}=await P();if(s===r)return;y.innerHTML=T(t)}catch{l("Error")}}}function T(e){return e.map(({name:s,filter:r,imgUrl:n})=>` <li class='filter-list exercises-item' data-filter='${r}' data-name='${s}'>
        <img class="img-exercises" src="${n}" alt="${r}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${r}</p>
        </div>
      </li>`).join("")}function b(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="pagination-btn pagination-btn-is-active" type="button" value="${r}">${r}</button>`;return s}function q(){Se.scrollIntoView({behavior:"smooth",block:"start"})}const N="https://energyflow.b.goit.study/api",I=document.querySelector(".exercise-filters-list-subcategories"),R=document.querySelector(".search-container"),d=document.querySelector(".search-list"),G=document.querySelector(".exercises-form"),J=document.querySelector(".no-results"),Ee=document.querySelector(".pagination-subcategories"),H=document.querySelector(".search-pagination");let p,j,L=1;G.addEventListener("keydown",function(e){e.keyCode===13&&Me(e)});async function Q(e,t,s,r=9){try{return(await a.get(`${N}/exercises`,{params:{bodypart:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function X(e,t,s,r=9){try{return(await a.get(`${N}/exercises`,{params:{muscles:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function Z(e,t,s,r=9){try{return(await a.get(`${N}/exercises`,{params:{equipment:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function Me(e){e.preventDefault(),Ee.classList.add("visually-hidden"),p=e.currentTarget.elements.search.value.trim();let t;try{i==="Body parts"?t=await Q(c,p):i==="Muscles"?t=await X(c,p):i==="Equipment"&&(t=await Z(c,p));const{totalPages:s,page:r,results:n}=t,o=t.results;if(s>1){const u=b(r,s);H.innerHTML=u}else H.innerHTML="";s===null?(R.classList.remove("visually-hidden"),J.classList.remove("visually-hidden"),I.classList.add("visually-hidden"),d.classList.add("visually-hidden")):(R.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),J.classList.add("visually-hidden"),I.classList.add("visually-hidden"),j=t.results,d.innerHTML=m(j))}catch(s){console.log(s)}finally{G.reset()}}H.addEventListener("click",$e);async function $e(e){if(e.preventDefault(),q(),e.target.tagName==="BUTTON"){L=e.target.textContent,d.innerHTML="";try{if(i==="Body parts"){const{results:t}=await Q(c,p,L);d.innerHTML=m(t)}else if(i==="Muscles"){const{results:t}=await X(c,p,L);d.innerHTML=m(t)}else if(i==="Equipment"){const{results:t}=await Z(c,p,L);d.innerHTML=m(t)}}catch(t){console.log(t)}}}const f={form:document.querySelector(".footer-form"),input:document.querySelector(".form-input"),submit:document.querySelector(".modal-button")},ke="https://energyflow.b.goit.study/api/subscription",He="feedback-form-state",$=JSON.parse(localStorage.getItem(He));$!=null?f.input.value=$.email:f.input.value="";f.submit.addEventListener("click",De);async function De(e){const t=f.input.value.trim();e.preventDefault();try{const s=await a.post(ke,{email:t});z(JSON.stringify(JSON.parse(s.request.responseText).message)),f.input.value=""}catch(s){z(JSON.stringify(JSON.parse(s.request.responseText).message)),f.input.value=""}}function z(e){V.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const D=document.querySelector(".scroll-up");D.addEventListener("click",async()=>{await Be()});window.onscroll=async()=>{await Pe()};async function Be(){window.scrollTo({top:0})}async function Pe(){(document.body.scrollTop||document.documentElement.scrollTop)>20?D.classList.remove("visually-hidden"):D.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
