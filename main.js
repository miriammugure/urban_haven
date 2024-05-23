// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
// const harmbuger =document.querySelector(".harmbuger");
// const header_navlist=document.querySelector(".header-nav-list");
// harmbuger.addEventListener("click",() =>{
//   harmbuger.classList.toggle("active");
//   header_navlist.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
//   harmbuger.classList.remove("active");
//   header_navlist.classList.remove("active");
// }))
const harmbuger = document.querySelector(".harmburger");
const header_navlist = document.querySelector(".header-nav-list");

harmbuger.addEventListener("click", () => {
  harmbuger.classList.toggle("active");
  header_navlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    harmbuger.classList.remove("active");
    header_navlist.classList.remove("active");
  }),
);
