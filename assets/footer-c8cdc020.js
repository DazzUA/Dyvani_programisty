import{a as i,i as J}from"./vendor-8cce9181.js";import{i as w}from"./modal_window-a29d35e2.js";const j=document.querySelector(".js-menu"),Z=document.querySelector(".js-open-menu"),ee=document.querySelector(".js-close-menu"),V=function(){const e=j.classList.toggle("is-open");document.body.style.overflow=e?"hidden":""};Z.addEventListener("click",V);ee.addEventListener("click",V);window.matchMedia("(min-width: 335px)").addEventListener("change",te);function te(e){e.matches&&(j.classList.remove("is-open"),document.body.style.overflow="")}let se=document.querySelector(".quoteText"),re=document.querySelector(".quoteAuthor");window.addEventListener("DOMContentLoaded",async function(){try{let e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),s=new Date,r=t?new Date(t):null;if(e&&r&&oe(s,r)){H(JSON.parse(e));return}let n=(await i.get("https://energyflow.b.goit.study/api/quote")).data;localStorage.setItem("quoteData",JSON.stringify(n)),localStorage.setItem("quoteDate",s.toISOString()),H(n)}catch(e){console.error("Error:",e)}});function H(e){se.innerText=e.quote,re.innerText=e.author}function oe(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}const k=document.querySelector(".ExerciseFiltersList");document.querySelector(".ExercisesHead");const q=document.querySelector(".Pagination"),D=document.querySelector(".PaginationSubcategories"),F=document.querySelector(".ExerciseFiltersListSubcategories"),ne=document.querySelector(".ExercisesForm"),L="https://energyflow.b.goit.study/api";let f=1,a,c;k.addEventListener("click",ae);async function ae(e){if(ne.classList.remove("visually-hidden"),q.innerHTML="",k.classList.add("visually-hidden"),F.classList.remove("visually-hidden"),q.removeEventListener("click",le),e.target===e.currentTarget)return;const t=e.target.closest(".ExercisesItem"),{filter:s,name:r}=t.dataset;a=s,c=r;try{const{page:o,totalPages:n,results:u}=await z(a,c);if(F.innerHTML=g(u),q.innerHTML="",n>1){const y=E(o,n);D.innerHTML=y}D.addEventListener("click",ce)}catch{h("Error")}}async function z(e,t,s){try{return e==="Muscles"?(await i.get(`${L}/exercises`,{params:{muscles:t,page:s,limit:9}})).data:e==="Body parts"?(await i.get(`${L}/exercises`,{params:{bodypart:t,page:s,limit:9}})).data:(await i.get(`${L}/exercises`,{params:{equipment:t,page:s,limit:9}})).data}catch{h("Error")}}function g(e){return e.map(({rating:s,name:r,burnedCalories:o,time:n,bodyPart:u,target:y,_id:X})=>`<li class="WorkoutCard ExerciseCategoryList id ='${X}">
      <div class='CardHeader'>
        <div class='WorkoutWrapper'>
          <p class='Workout'>workout</p>
          <div class='RatingWrapper'><p>${s}</p>
          <svg class='StarIcon' width='13' height='13'>
          <use href='${w}#icon-star'></use>
        </svg></div>
        </div>
        
          <button type="button" class="StartBtn">
  START<svg width='13' height='13'>
          <use href='${w}#icon-arrow'></use>
        </svg>
</button>
        
      </div>
      <div class='CardMainPart'>
      <div class='RunIconWrapper'><svg width='14' height='14'>
          <use href='${w}#icon-running'></use>
        </svg></div>
        <p class='MainPartName'>${r}</p>
      </div>
      <ul class="CardFooter">
        <li>
          <p class='CardFooterTextDescr'>Burned calories: <span class='CardFooterTextValue'>${o} / ${n} min</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Body part: <span class='CardFooterTextValue'>${u}</span></p>
        </li>
        <li>
          <p class='CardFooterTextDescr'>Target: <span class='CardFooterTextValue'>${y}</span></p>
        </li>
      </ul>

    </li>`).join("")}async function ie(e=filterValueDefault){try{return(await i.get(`${L}/filters`,{params:{filter:e,page:f,limit:12}})).data}catch{h("Error")}}async function ce(e){if(e.target.tagName==="BUTTON"){f=e.target.textContent;try{const{results:t}=await z(a,c,f);F.innerHTML=g(t)}catch{h("Error")}}}async function le(e){f=e.target.textContent;try{const{results:t}=await ie(a,f);k.innerHTML=x(t)}catch{h("Error")}}function h(e){J.error({message:e,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}const ue=document.querySelector(".FilterButtons"),p=document.querySelector(".ExerciseFiltersList"),v=document.querySelector(".Pagination"),de=document.querySelector(".ExercisesForm"),ge=document.querySelector(".ExerciseFiltersListSubcategories"),N=document.querySelector(".PaginationSubcategories"),pe=document.querySelector(".search-list"),me=document.querySelector(".search-pagination"),ye=document.querySelector(".no-results"),fe="https://energyflow.b.goit.study/api";let _="Muscles",T=1,I=window.innerWidth,S=0;ue.addEventListener("click",Le);v.addEventListener("click",Se);I<=375?S=8:(I<=768,S=12);async function B(){try{return(await i.get(`${fe}/filters`,{params:{filter:_,page:T,limit:S}})).data}catch(e){console.log(e)}}async function he(){try{const e=await B().then(t=>{const{results:s,totalPages:r,page:o}=t;if(s&&s.length>0){p.innerHTML=x(s);const n=E(o,r);v.innerHTML=n}else console.error("No exercises found.")})}catch(e){console.error("Error fetching exercises:",e)}}he();async function Le(e){if(e.target.tagName!=="BUTTON")return;pe.innerHTML="",me.innerHTML="",e.preventDefault(),de.classList.add("visually-hidden"),ye.classList.add("visually-hidden"),ge.classList.add("visually-hidden"),p.classList.remove("visually-hidden"),v.innerHTML="",N.innerHTML="",N.classList.remove("visually-hidden"),T=1;const s=e.target.dataset.filter;if(_=s,p.innerHTML="",Array.from(e.target.children).map(r=>{r.textContent!==e.target.textContent?r.classList.remove("ButtonIsActive"):e.target.classList.add("ButtonIsActive")}),e.target.tagName==="BUTTON")try{B(s).then(r=>{const{results:o,totalPages:n,page:u}=r;p.innerHTML=x(o);{const y=E(u,n);v.innerHTML=y}})}catch(r){console.log(r)}}async function Se(e){if(e.target.tagName==="BUTTON"){T=e.target.textContent,Array.from(e.currentTarget.children).map(t=>{t.textContent!==T?t.classList.remove("PaginationBtnIsActive"):e.target.classList.add("PaginationBtnIsActive")}),p.innerHTML="";try{const{results:t,page:s,totalPages:r}=await B();if(s===r)return;p.innerHTML=x(t)}catch(t){console.log(t)}}}function x(e){return e.map(({name:s,filter:r,imgUrl:o})=>` <li class='FilterList ExercisesItem' data-filter='${r}' data-name='${s}'>
        <img class="ImgExercises" src="${o}" alt="${r}">
        <div class="FilterText">
          <p class="FilterExercises">${s}</p>
          <p class="FilterName">${r}</p>
        </div>
      </li>`).join("")}function E(e,t){let s="";for(let r=1;r<=t;r+=1)s+=`<button class="PaginationBtn PaginationBtnIsActive" type="button" value="${r}">${r}</button>`;return s}const C="https://energyflow.b.goit.study/api",A=document.querySelector(".ExerciseFiltersListSubcategories"),O=document.querySelector(".search-container"),d=document.querySelector(".search-list"),Y=document.querySelector(".ExercisesForm"),U=document.querySelector(".no-results"),ve=document.querySelector(".PaginationSubcategories"),$=document.querySelector(".search-pagination");let l,M,R=1;Y.addEventListener("submit",Te);async function K(e,t,s=1,r=9){try{return(await i.get(`${C}/exercises`,{params:{bodypart:e,keyword:t,page:s,limit:r}})).data}catch(o){console.log(o)}}async function G(e,t,s=1,r=9){try{return(await i.get(`${C}/exercises`,{params:{muscles:e,keyword:t,page:s,limit:r}})).data}catch(o){console.log(o)}}async function Q(e,t,s=1,r=9){try{return(await i.get(`${C}/exercises`,{params:{equipment:e,keyword:t,page:s,limit:r}})).data}catch(o){console.log(o)}}async function Te(e){e.preventDefault(),ve.classList.add("visually-hidden"),l=e.currentTarget.elements.search.value.trim(),console.log(l);let t;try{a==="Body parts"?t=await K(c,l):a==="Muscles"?t=await G(c,l):a==="Equipment"&&(t=await Q(c,l)),console.log(e.target);const{totalPages:s,page:r,results:o}=t,n=t.results;if(console.log(s),console.log(r),s>1){const u=E(r,s);$.innerHTML=u}else $.innerHTML="";s===null?(O.classList.remove("visually-hidden"),U.classList.remove("visually-hidden"),A.classList.add("visually-hidden"),d.classList.add("visually-hidden")):(O.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),U.classList.add("visually-hidden"),A.classList.add("visually-hidden"),M=t.results,console.log(M),d.innerHTML=g(M))}catch(s){console.log(s)}finally{Y.reset()}}async function xe(e){if(e.target.tagName==="BUTTON"){console.log(e.target),R=e.target.textContent,console.log(R),d.innerHTML="";try{if(console.log(a),a==="Body parts"){const{results:t,page:s,totalPages:r}=await K(c,l);d.innerHTML=g(t),console.log(t)}else if(a==="Muscles"){const{results:t}=await G(c,l);d.innerHTML=g(t),console.log(t)}else if(a==="Equipment"){const{results:t}=await Q(c,l);d.innerHTML=g(t),console.log(t)}}catch(t){console.log(t)}}}$.addEventListener("click",xe);const m={form:document.querySelector(".FooterForm"),input:document.querySelector(".FormInput"),submit:document.querySelector(".ModalButton")},Ee="https://energyflow.b.goit.study/api/subscription",we="feedback-form-state",b=JSON.parse(localStorage.getItem(we));b!=null?m.input.value=b.email:m.input.value="";m.submit.addEventListener("click",qe);async function qe(e){const t=m.input.value.trim();e.preventDefault();try{const s=await i.post(Ee,{email:t});W(JSON.stringify(JSON.parse(s.request.responseText).message)),m.input.value=""}catch(s){W(JSON.stringify(JSON.parse(s.request.responseText).message)),m.input.value=""}}function W(e){J.show({position:"topRight",message:e,maxWidth:"352",messageColor:"#fff",messageSize:"15px",backgroundColor:"rgba(27, 27, 27)",close:!1,closeOnClick:!0})}const P=document.querySelector(".ScrollUp");P.addEventListener("click",async()=>{await Me()});window.onscroll=async()=>{await be()};async function Me(){window.scrollTo({top:0})}async function be(){(document.body.scrollTop||document.documentElement.scrollTop)>20?P.classList.remove("visually-hidden"):P.classList.add("visually-hidden")}
//# sourceMappingURL=footer-c8cdc020.js.map
