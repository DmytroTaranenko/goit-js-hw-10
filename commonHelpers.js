import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as d,f as m}from"./assets/vendor-77e16229.js";const t={userInput:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null,o;t.startBtn.disabled=!0;t.startBtn.addEventListener("click",()=>{r||(t.startBtn.disabled=!0,d.error({title:"Error",message:"Please choose a date in the future"}));const e=r;o=setInterval(()=>{const a=Date.now(),n=e-a,s=h(n);t.days.textContent=s.days.toString().padStart(2,0),t.hours.textContent=s.hours.toString().padStart(2,0),t.minutes.textContent=s.minutes.toString().padStart(2,0),t.seconds.textContent=s.seconds.toString().padStart(2,0)},1e3),t.startBtn.disabled=!0,t.startBtn.classList.add("js-disabled"),t.userInput.disabled=!0,setTimeout(()=>{clearInterval(o),t.startBtn.classList.remove("js-disabled"),t.userInput.disabled=!1},e-Date.now())});function h(e){const i=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:c,seconds:l}}const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<=new Date?(t.startBtn.disabled=!0,t.startBtn.classList.add("js-disabled"),d.error({title:"Error",message:"Please choose a date in the future"})):(t.startBtn.disabled=!1,t.startBtn.classList.remove("js-disabled"))}};m("#datetime-picker",f);
//# sourceMappingURL=commonHelpers.js.map