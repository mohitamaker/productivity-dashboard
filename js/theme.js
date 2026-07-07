const themeBtn = document.querySelector(".theme-btn");
let html = document.querySelector("html");
let welcomeCard = document.querySelector(".welcome-card");
themeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(html.getAttribute("data-theme")==="light"){
        html.setAttribute("data-theme","dark");
        welcomeCard.style.backgroundImage = "url(../photos/night.avif)";
        // console.log("light");
    }
    else {      
        html.setAttribute("data-theme","light");
        welcomeCard.style.backgroundImage = "url(../photos/pic1.avif)";
    }
})