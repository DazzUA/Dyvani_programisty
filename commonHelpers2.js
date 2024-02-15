import{i as M}from"./assets/modal_window-d90673e8.js";import{a,i as j}from"./assets/vendor-8cce9181.js";const z=document.querySelector(".js-menu"),te=document.querySelector(".js-open-menu"),se=document.querySelector(".js-close-menu"),_=function(){const e=z.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};te.addEventListener("click",_);se.addEventListener("click",_);window.matchMedia("(min-width: 335px)").addEventListener("change",re);function re(e){e.matches&&(z.classList.remove("is-open"),document.body.style.overflow="")}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hero-text");e&&(e.style.display="none",setTimeout(function(){e.style.display="block"},500))});let ne=document.querySelector(".quoteText"),oe=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),s=new Date,r=t?new Date(t):null;if(e&&r&&ae(s,r)){I(JSON.parse(e));return}let o=(await a.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(o)),localStorage.setItem("quoteDate",s.toISOString()),I(o)}catch(e){console.error("Error:",e)}});function I(e){ne.innerText=e.quote,oe.innerText=e.author}function ae(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const H=document.querySelector(".ExerciseFiltersList");document.querySelector(".ExercisesHead");const $=document.querySelector(".Pagination"),N=document.querySelector(".PaginationSubcategories"),k=document.querySelector(".ExerciseFiltersListSubcategories"),ie=document.querySelector(".ExercisesForm"),v="https://energyflow.b.goit.study/api";let f=1,i,c;H.addEventListener("click",ce);async function ce(e){if(ie.classList.remove("visually-hidden"),$.innerHTML="",H.classList.add("visually-hidden"),k.classList.remove("visually-hidden"),$.removeEventListener("click",de),e.target===e.currentTarget)return;const t=e.target.closest(".ExercisesItem"),{filter:s,name:r}=t.dataset;i=s,c=r;try{const{page:n,totalPages:o,results:l}=await Y(i,c);if(k.innerHTML=g(l),$.innerHTML="",o>1){const y=w(n,o);N.innerHTML=y}N.addEventListener("click",ue)}catch{h("Error")}}async function Y(e,t,s){try{return e==="Muscles"?(await a.get(`${v}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await a.get(`${v}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await a.get(`${v}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch{h("Error")}}function g(e){return e.map(({rating:s,name:r,burnedCalories:n,time:o,bodyPart:l,target:y,_id:b})=>`<li class="WorkoutCard ExerciseCategoryList" id ='${b}'>
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${M}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${M}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${M}#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${r}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${n} / ${o} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${l}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${y}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function le(e=filterValueDefault){try{return(await a.get(`${v}/filters`,{params:{filter:e,page:f,limit:12}})).data}catch{h("Error")}}async function ue(e){if(e.target.tagName==="BUTTON"){q(),f=e.target.textContent;try{const{results:t}=await Y(i,c,f);k.innerHTML=g(t)}catch{h("Error")}}}async function de(e){f=e.target.textContent;try{const{results:t}=await le(i,f);H.innerHTML=E(t)}catch{h("Error")}}function h(e){j.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ge=document.querySelector(".FilterButtons"),p=document.querySelector(".ExerciseFiltersList"),T=document.querySelector(".Pagination"),pe=document.querySelector(".ExercisesForm"),me=document.querySelector(".Exercises "),ye=document.querySelector(".ExerciseFiltersListSubcategories"),O=document.querySelector(".PaginationSubcategories"),fe=document.querySelector(".search-list"),he=document.querySelector(".search-pagination"),Le=document.querySelector(".no-results"),ve=document.querySelector(".Exercises"),Se="https://energyflow.b.goit.study/api";let K="Muscles",x=1,A=window.innerWidth,S=0;ge.addEventListener("click",xe);T.addEventListener("click",Ee);A<=375?S=8:(A<=768,S=12);async function C(){try{return(await a.get(`${Se}/filters`,{params:{filter:K,page:x,limit:S}})).data}catch(e){console.log(e)}}async function Te(){try{const e=await C().then(t=>{const{results:s,totalPages:r,page:n}=t;if(s&&s.length>0){p.innerHTML=E(s);const o=w(n,r);T.innerHTML=o}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}Te();async function xe(e){if(e.target.tagName!=="BUTTON")return;q(),fe.innerHTML="",he.innerHTML="",e.preventDefault(),pe.classList.add("visually-hidden"),Le.classList.add("visually-hidden"),ye.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),T.innerHTML="",O.innerHTML="",O.classList.remove("visually-hidden"),x=1;const s=e.target.dataset.filter;K=s,p.innerHTML="";const r=me.querySelector(".ButtonIsActive"),n=e.target;if(r.classList.remove("ButtonIsActive"),n.classList.add("ButtonIsActive"),e.target.tagName==="BUTTON")try{C(s).then(o=>{const{results:l,totalPages:y,page:b}=o;p.innerHTML=E(l);{const ee=w(b,y);T.innerHTML=ee}})}catch(o){console.log(o)}}async function Ee(e){if(e.target.tagName==="BUTTON"){e.preventDefault(),q(),x=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==x?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),p.innerHTML="";try{const{results:t,page:s,totalPages:r}=await C();if(s===r)return;p.innerHTML=E(t)}catch(t){console.log(t)}}}function E(e){return e.map(({name:s,filter:r,imgUrl:n})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${n}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function w(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button" value="${r}">${r}</button>`;return s}function q(){ve.scrollIntoView({behavior:"smooth",block:"start"})}const D="https://energyflow.b.goit.study/api",U=document.querySelector(".ExerciseFiltersListSubcategories"),R=document.querySelector(".search-container"),u=document.querySelector(".search-list"),G=document.querySelector(".ExercisesForm"),W=document.querySelector(".no-results"),we=document.querySelector(".PaginationSubcategories"),P=document.querySelector(".search-pagination");let d,J,L=1;G.addEventListener("submit",qe);async function Q(e,t,s,r=9){try{return(await a.get(`${D}/exercises`,{params:{bodypart:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function X(e,t,s,r=9){try{return(await a.get(`${D}/exercises`,{params:{muscles:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function Z(e,t,s,r=9){try{return(await a.get(`${D}/exercises`,{params:{equipment:e,keyword:t,page:s,limit:r}})).data}catch(n){console.log(n)}}async function qe(e){e.preventDefault(),we.classList.add("visually-hidden"),d=e.currentTarget.elements.search.value.trim();let t;try{i==="Body parts"?t=await Q(c,d):i==="Muscles"?t=await X(c,d):i==="Equipment"&&(t=await Z(c,d));const{totalPages:s,page:r,results:n}=t,o=t.results;if(s>1){const l=w(r,s);P.innerHTML=l}else P.innerHTML="";s===null?(R.classList.remove("visually-hidden"),W.classList.remove("visually-hidden"),U.classList.add("visually-hidden"),u.classList.add("visually-hidden")):(R.classList.remove("visually-hidden"),u.classList.remove("visually-hidden"),W.classList.add("visually-hidden"),U.classList.add("visually-hidden"),J=t.results,u.innerHTML=g(J))}catch(s){console.log(s)}finally{G.reset()}}P.addEventListener("click",be);async function be(e){if(e.preventDefault(),q(),e.target.tagName==="BUTTON"){L=e.target.textContent,u.innerHTML="";try{if(i==="Body parts"){const{results:t}=await Q(c,d,L);u.innerHTML=g(t)}else if(i==="Muscles"){const{results:t}=await X(c,d,L);u.innerHTML=g(t)}else if(i==="Equipment"){const{results:t}=await Z(c,d,L);u.innerHTML=g(t)}}catch(t){console.log(t)}}}const m={form:document.querySelector(".footer-form"),input:document.querySelector(".form-input"),submit:document.querySelector(".modal-button")},Me="https://energyflow.b.goit.study/api/subscription",$e="feedback-form-state",F=JSON.parse(localStorage.getItem($e));F!=null?m.input.value=F.email:m.input.value="";m.submit.addEventListener("click",Fe);async function Fe(e){const t=m.input.value.trim();e.preventDefault();try{const s=await a.post(Me,{email:t});V(JSON.stringify(JSON.parse(s.request.responseText).message)),m.input.value=""}catch(s){V(JSON.stringify(JSON.parse(s.request.responseText).message)),m.input.value=""}}function V(e){j.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const B=document.querySelector(".scroll-up");B.addEventListener("click",async()=>{await ke()});window.onscroll=async()=>{await Pe()};async function ke(){window.scrollTo({top:0})}async function Pe(){(document.body.scrollTop||document.documentElement.scrollTop)>20?B.classList.remove("visually-hidden"):B.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
