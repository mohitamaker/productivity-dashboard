
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
