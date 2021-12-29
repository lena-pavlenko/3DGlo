(()=>{"use strict";const e=e=>{let t=document.documentElement.scrollTop+e.getBoundingClientRect().top;window.scrollTo({top:t,behavior:"smooth"})};(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),o=document.getElementById("timer-days"),l=e=>e<10?`0${e}`:e;let a;const c=()=>{a=(()=>{let e=(new Date("25 december 2021").getTime()-(new Date).getTime())/1e3;return{day:Math.floor(e/3600/24),hour:Math.floor(e/3600%24),minute:Math.floor(e/60%60),second:Math.floor(e%60),timeRemaining:e}})(),t.textContent=l(a.hour),n.textContent=l(a.minute),r.textContent=l(a.second),o.textContent=l(a.day)};c(),a.timeRemaining>0?setInterval(c,1e3):(t.textContent="00",n.textContent="00",r.textContent="00",o.textContent="00")})(),(()=>{const t=document.querySelector("menu"),n=document.querySelector("body"),r=()=>{t.classList.toggle("active-menu")};n.addEventListener("click",(n=>{if(n.target.closest(".menu")&&r(),"A"===n.target.tagName&&n.target.closest("menu")&&(n.preventDefault(),r(),n.target.closest("li"))){let t=document.querySelector(n.target.getAttribute("href"));e(t)}n.target.closest("menu")||n.target.closest(".menu")||t.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content");let r,o;const l=document.documentElement.scrollWidth;t.style.display="block";let a=n.getBoundingClientRect().left;t.style.display="none";const c=l-a;let s=c,i=0;const u=()=>{s-=100,r=requestAnimationFrame(u),s>-51?n.style.transform=`translateX(${s}px)`:(cancelAnimationFrame(r),n.style.transform="translateX(-50px)")},d=()=>{i+=100,o=requestAnimationFrame(d),i<c?n.style.transform=`translateX(${i}px)`:(cancelAnimationFrame(o),n.style.transform=`translateX(${c}px)`,t.style.display="none")};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",window.screen.width>768&&(s=c,n.style.transform=`translateX(${s}px)`,u())}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(window.screen.width>768?(i=0,n.style.transform=`translateX(${c}px)`,d()):t.style.display="none")}))})(),(()=>{const t=document.querySelector("main").querySelector('[href="#service-block"]'),n=document.getElementById("service-block");t.addEventListener("click",(t=>{t.preventDefault(),e(n)}))})(),((e=100)=>{const t=document.querySelectorAll("input.calc-item"),n=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total");t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))}));const s=(e=>{let t;return n=>{clearTimeout(t),t=setTimeout(e,700,n)}})((()=>{const t=+r.options[r.selectedIndex].value,n=+o.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),s=t&&n?e*t*n*i*u:0,((e,t)=>{let n=t/10,r=0,o=Math.round(500/(t/n)),l=setInterval((()=>{if(r>=t)return clearInterval(l),!1;r+=n,e.textContent=Math.floor(r)}),o)})(c,s)}));n.addEventListener("input",(e=>{e.target!==r&&e.target!==o&&e.target!==l&&e.target!==a||s()}))})(100),(()=>{const e=document.querySelectorAll('form[name="user_form"]'),t=document.querySelector('input[placeholder="Ваше сообщение"]'),n=/[^а-яА-я\-\ ]/g,r=/[^a-zA-Z0-9\@\-\_\.\!\~\*\']/g,o=/[^\d\()\-]/g,l=function(e,t){e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")}))},a=function(e,t){e.addEventListener("blur",(e=>{let n=e.target.value;n=n.trim(),n=n.replace(t,""),n=n.replace(/^\-{0,}|\-{0,}$/g,""),n=n.replace(/^\ {0,}|\ {0,}$/g,""),"text"===e.target.getAttribute("type")&&(n=n.split(/\ +/).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ")),"email"!==e.target.getAttribute("type")&&(n=n.replace(/\-+/g,"-")),e.target.value="",e.target.value=n}))};e.forEach((e=>{const c=e.querySelector('input[type="text"]'),s=e.querySelector('input[type="email"]'),i=e.querySelector('input[type="tel"]');l(c,n),l(t,n),l(s,r),l(i,o),a(c,n),a(s,r),a(i,o),e.addEventListener("submit",(e=>{e.preventDefault()}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),n=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const r=t.target.closest(".service-header-tab");n.forEach(((t,n)=>{t===r?(t.classList.add("active"),e[n].classList.remove("d-none")):(t.classList.remove("active"),e[n].classList.add("d-none"))}))}}))})(),((e,t,n,r="dot-active",o="slide-active",l,a,c)=>{if(e&&t&&n){const s=document.querySelector(`.${e}`),i=document.querySelectorAll(`.${t}`),u=document.querySelector(`.${n}`);if(!(s&&i&&u))return;{(()=>{for(let e=0;e<i.length;e++){let e=document.createElement("li");e.className="dot",u.append(e)}})();const e=document.querySelectorAll(".dot");e[0].classList.add(`${r}`);let t,n=0,d=2e3;const m=(e,t,n)=>{e[t].classList.remove(n)},p=(e,t,n)=>{e[t].classList.add(n)},g=()=>{m(i,n,`${o}`),m(e,n,`${r}`),n++,n>=i.length&&(n=0),p(i,n,`${o}`),p(e,n,`${r}`)},y=(e=1500)=>{t=setInterval(g,e)},v=()=>{clearInterval(t)};s.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(`.${l}, .dot`)&&(m(i,n,`${o}`),m(e,n,`${r}`),t.target.matches(`#${c}`)?n++:t.target.matches(`#${a}`)?n--:t.target.classList.contains("dot")&&e.forEach(((e,r)=>{t.target===e&&(n=r)})),n>=i.length&&(n=0),n<0&&(n=i.length-1),p(i,n,`${o}`),p(e,n,`${r}`))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.${l}, .dot`)&&v()}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.${l}, .dot`)&&y(d)}),!0),y(d)}}})("portfolio-content","portfolio-item","portfolio-dots","dot-active","portfolio-item-active","portfolio-btn","arrow-left","arrow-right")})();