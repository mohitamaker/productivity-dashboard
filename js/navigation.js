let cards = document.querySelector(".cards");
let dashboardpage = document.querySelector("#dashboard-page");
let todopage = document.querySelector("#todo-page");
let dashboardPage = document.querySelector("#dashboard-page");
let plannerpage = document.querySelector("#planner-page");
let timerpage = document.querySelector("#timer-page");
let goalpage = document.querySelector("#goal-page");
let weatherpage = document.querySelector("#weather-page");
let motivationpage = document.querySelector("#motivation-page");
let navigate = document.querySelector(".navigate");
let pages = document.querySelectorAll(".page");

cards.addEventListener('click', (e) => {
    if (e.target.closest(".card")) {
        console.log("Clicked");
        let targ = e.target;
        if (targ.closest("#todoCard")) {
            todopage.style.display = "block";
            dashboardpage.style.display = "none";
        } else if (targ.closest("#plannerCard")) {
            plannerpage.style.display = "block";
            dashboardpage.style.display = "none";
        } else if (targ.closest("#timerCard")) {
            timerpage.style.display = "block";
            dashboardpage.style.display = "none";
        } else if (targ.closest("#goalCard")) {
            goalpage.style.display = "block";
            dashboardpage.style.display = "none";
        } else if (targ.closest("#weatherCard")) {
            weatherpage.style.display = "block";
            dashboardpage.style.display = "none";
        } else if (targ.closest("#motivationCard")) {
            motivationpage.style.display = "block";
            dashboardpage.style.display = "none";
        }
    }
})

pages.forEach((page) => {
    page.addEventListener('click', (e) => {
        if (e.target.closest(".back-btn")) {
            pages.forEach((page, idx) => {
                page.style.display = "none";
            })
            dashboardPage.style.display = "block";
        }
    })
})

navigate.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.closest("#dashboardBtn")) {
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        dashboardPage.style.display = "block";
    } else if (e.target.closest("#todoBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        todopage.style.display = "block";
    } else if (e.target.closest("#plannerBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        plannerpage.style.display = "block";
    } else if (e.target.closest("#timerBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        timerpage.style.display = "block";
    } else if (e.target.closest("#goalBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        goalpage.style.display = "block";
    } else if (e.target.closest("#weatherBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        weatherpage.style.display = "block";
    } else if (e.target.closest("#motivationBtn")) {
        dashboardpage.style.display = "none";
        pages.forEach((page, idx) => {
            page.style.display = "none";
        })
        motivationpage.style.display = "block";
    }
})

