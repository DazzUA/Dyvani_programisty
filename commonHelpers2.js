import{i as M}from"./assets/modal_window-061c53a6.js";import{a,i as V}from"./assets/vendor-8cce9181.js";const W=document.querySelector(".js-menu"),te=document.querySelector(".js-open-menu"),se=document.querySelector(".js-close-menu"),_=function(){const e=W.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};te.addEventListener("click",_);se.addEventListener("click",_);window.matchMedia("(min-width: 335px)").addEventListener("change",re);function re(e){e.matches&&(W.classList.remove("is-open"),document.body.style.overflow="")}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hero-text");e&&(e.style.display="none",setTimeout(function(){e.style.display="block"},500))});let ne=document.querySelector(".quoteText"),oe=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),s=new Date,r=t?new Date(t):null;if(e&&r&&ae(s,r)){F(JSON.parse(e));return}let o=(await a.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(o)),localStorage.setItem("quoteDate",s.toISOString()),F(o)}catch(e){console.error("Error:",e)}});function F(e){ne.innerText=e.quote,oe.innerText=e.author}function ae(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const P=document.querySelector(".exercise-filters-list");document.querySelector(".exercises-head");const $=document.querySelector(".pagination"),C=document.querySelector(".pagination-subcategories"),H=document.querySelector(".exercise-filters-list-subcategories"),ie=document.querySelector(".exercises-form"),L="https://energyflow.b.goit.study/api";let h=1,i,c;P.addEventListener("click",ce);async function ce(e){if(ie.classList.remove("visually-hidden"),$.innerHTML="",P.classList.add("visually-hidden"),H.classList.remove("visually-hidden"),$.removeEventListener("click",de),e.target===e.currentTarget)return;const t=e.target.closest(".exercises-item"),{filter:s,name:r}=t.dataset;i=s,c=r;try{const{page:n,totalPages:o,results:u}=await Y(i,c);if(H.innerHTML=g(u),$.innerHTML="",o>1){const f=b(n,o);C.innerHTML=f}C.addEventListener("click",ue)}catch{l("Error")}}async function Y(e,t,s){try{return e==="Muscles"?(await a.get(`${L}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await a.get(`${L}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await a.get(`${L}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch{l("Error")}}function g(e){return e.map(({rating:s,name:r,burnedCalories:n,time:o,bodyPart:u,target:f,_id:E})=>`<li class="workout-card exercise-category-list" id ='${E}'>
      <div class='card-header'>
        <div class='workout-wrapper'>
          <p class='workout'>workout</p>
          <div class='rating-wrapper'><p>${s}</p>
          <svg class='star-icon' width='13' height='13'>
          <use href='${M}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="start-btn">
  START<svg width='13' height='13'>
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
          <p class='card-footer-text-descr'>Target: <span class='card-footer-text-value'>${f}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function le(e=filterValueDefault){try{return(await a.get(`${L}/filters`,{params:{filter:e,page:h,limit:12}})).data}catch{l("Error")}}async function ue(e){if(e.target.tagName==="BUTTON"){q(),h=e.target.textContent;try{const{results:t}=await Y(i,c,h);H.innerHTML=g(t)}catch{l("Error")}}}async function de(e){h=e.target.textContent;try{const{results:t}=await le(i,h);P.innerHTML=w(t)}catch{l("Error")}}function l(e){V.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const pe=document.querySelector(".filter-buttons"),m=document.querySelector(".exercise-filters-list"),x=document.querySelector(".pagination"),ge=document.querySelector(".exercises-form"),me=document.querySelector(".exercises "),ye=document.querySelector(".exercise-filters-list-subcategories"),U=document.querySelector(".pagination-subcategories"),fe=document.querySelector(".search-list"),he=document.querySelector(".search-pagination"),ve=document.querySelector(".no-results"),Le=document.querySelector(".exercises"),Se="https://energyflow.b.goit.study/api";let K="Muscles",T=1,A=window.innerWidth,S=0;pe.addEventListener("click",Te);x.addEventListener("click",we);A<=375?S=8:(A<=768,S=12);async function N(){try{return(await a.get(`${Se}/filters`,{params:{filter:K,page:T,limit:S}})).data}catch{l("Error")}}async function xe(){try{const e=await N().then(t=>{const{results:s,totalPages:r,page:n}=t;if(s&&s.length>0){m.innerHTML=w(s);const o=b(n,r);x.innerHTML=o}else console.error("No exercises found.")})}catch{l("Error")}}xe();async function Te(e){if(e.target.tagName!=="BUTTON")return;q(),fe.innerHTML="",he.innerHTML="",e.preventDefault(),ge.classList.add("visually-hidden"),ve.classList.add("visually-hidden"),ye.classList.add("visually-hidden"),m.classList.remove("visually-hidden"),x.innerHTML="",U.innerHTML="",U.classList.remove("visually-hidden"),T=1;const s=e.target.dataset.filter;K=s,m.innerHTML="";const r=me.querySelector(".button-is-active"),n=e.target;if(r.classList.remove("button-is-active"),n.classList.add("button-is-active"),e.target.tagName==="BUTTON")try{N(s).then(o=>{const{results:u,totalPages:f,page:E}=o;m.innerHTML=w(u);{const ee=b(E,f);x.innerHTML=ee}})}catch{l("Error")}}async function we(e){if(e.target.tagName==="BUTTON"){e.preventDefault(),q(),T=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==T?t.classList.remove("pagination-btn-is-active"):e.target.classList.add("pagination-btn-is-active")}),m.innerHTML="";try{const{results:t,page:s,totalPages:r}=await N();if(s===r)return;m.innerHTML=w(t)}catch{l("Error")}}}function w(e){return e.map(({name:s,filter:r,imgUrl:n})=>` <li class='filter-list exercises-item' data-filter='${r}' data-name='${s}'>
        <img class="img-exercises" src="${n}" alt="${r}">
        <div class="filter-text">
          <p class="filter-exercises">${s}</p>
          <p class="filter-name">${r}</p>
        </div>
      </li>`).join("")}function b(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="pagination-btn pagination-btn-is-active" type="button" value="${r}">${r}</button>`;return s}function q(){Le.scrollIntoView({behavior:"smooth",block:"start"})}const O="https://energyflow.b.goit.study/api",I=document.querySelector(".exercise-filters-list-subcategories"),R=document.querySelector(".search-container"),d=document.querySelector(".search-list"),G=document.querySelector(".exercises-form"),J=document.querySelector(".no-results"),be=document.querySelector(".pagination-subcategories"),D=document.querySelector(".search-pagination");let p,j,v=1;G.addEventListener("submit",qe);async function Q(e,t,s,r=9){try{return(await a.get(`${O}/exercises`,{params:{bodypart:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function X(e,t,s,r=9){try{return(await a.get(`${O}/exercises`,{params:{muscles:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function Z(e,t,s,r=9){try{return(await a.get(`${O}/exercises`,{params:{equipment:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function qe(e){e.preventDefault(),be.classList.add("visually-hidden"),p=e.currentTarget.elements.search.value.trim();let t;try{i==="Body parts"?t=await Q(c,p):i==="Muscles"?t=await X(c,p):i==="Equipment"&&(t=await Z(c,p));const{totalPages:s,page:r,results:n}=t,o=t.results;if(s>1){const u=b(r,s);D.innerHTML=u}else D.innerHTML="";s===null?(R.classList.remove("visually-hidden"),J.classList.remove("visually-hidden"),I.classList.add("visually-hidden"),d.classList.add("visually-hidden")):(R.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),J.classList.add("visually-hidden"),I.classList.add("visually-hidden"),j=t.results,d.innerHTML=g(j))}catch(s){console.log(s)}finally{G.reset()}}D.addEventListener("click",Ee);async function Ee(e){if(e.preventDefault(),q(),e.target.tagName==="BUTTON"){v=e.target.textContent,d.innerHTML="";try{if(i==="Body parts"){const{results:t}=await Q(c,p,v);d.innerHTML=g(t)}else if(i==="Muscles"){const{results:t}=await X(c,p,v);d.innerHTML=g(t)}else if(i==="Equipment"){const{results:t}=await Z(c,p,v);d.innerHTML=g(t)}}catch(t){console.log(t)}}}const y={form:document.querySelector(".footer-form"),input:document.querySelector(".form-input"),submit:document.querySelector(".modal-button")},Me="https://energyflow.b.goit.study/api/subscription",$e="feedback-form-state",k=JSON.parse(localStorage.getItem($e));k!=null?y.input.value=k.email:y.input.value="";y.submit.addEventListener("click",ke);async function ke(e){const t=y.input.value.trim();e.preventDefault();try{const s=await a.post(Me,{email:t});z(JSON.stringify(JSON.parse(s.request.responseText).message)),y.input.value=""}catch(s){z(JSON.stringify(JSON.parse(s.request.responseText).message)),y.input.value=""}}function z(e){V.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const B=document.querySelector(".scroll-up");B.addEventListener("click",async()=>{await He()});window.onscroll=async()=>{await De()};async function He(){window.scrollTo({top:0})}async function De(){(document.body.scrollTop||document.documentElement.scrollTop)>20?B.classList.remove("visually-hidden"):B.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
