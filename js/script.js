// let todoCard = document.querySelector("#todoCard");
// let todopage = document.querySelector("#todo-page");
// let dashboardPage = document.querySelector("#dashboard-page");

// let plannerCard = document.querySelector("#plannerCard");
// let plannerppage = document.querySelector("#planner-page");

// let timerCard = document.querySelector("#timerCard");
// let timerpage = document.querySelector("#timer-page");

// let goalCard =document.querySelector("#goalCard");
// let goalpage = document.querySelector("#goal-page");

// let weatherCard =document.querySelector("#weatherCard");
// let weatherpage = document.querySelector("#weather-page");

// let motivationCard =document.querySelector("#motivationCard");
// let motivationpage = document.querySelector("#motivation-page");

// todoCard.addEventListener("click", function () {
//   todopage.style.display = "block";
//   dashboardPage.style.display = "none";
// //   todoCard.style.display = "none";
// });
// plannerCard.addEventListener('click',()=>{
//     plannerppage.style.display = "block";
//     dashboardPage.style.display = "none";
// });
// timerCard.addEventListener('click',()=>{
//     timerpage.style.display = "block";
//     dashboardPage.style.display = "none";
// })
// goalCard.addEventListener('click',()=>{
//     goalpage.style.display = "block";
//     dashboardPage.style.display = "none";
// })
// weatherCard.addEventListener('click',()=>{
//     weatherpage.style.display = "block";
//     dashboardPage.style.display = "none";
// })
// motivationCard.addEventListener('click',()=>{
//     motivationpage.style.display = "block";
//     dashboardPage.style.display = "none";
// })
let circle = document.querySelector(".circle");
window.addEventListener('mousemove',(e)=>{
    circle.style.top=e.clientY+"px";
    circle.style.left=e.clientX+"px";
})

import "./theme.js";
import "./navigation.js";
import "./todo.js";
import "./planner.js";
import "./timer.js";
import "./goals.js";
import "./weather.js";
import "./motivation.js";
