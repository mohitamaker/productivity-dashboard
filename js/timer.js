let timercard = document.querySelector(".timer-card");
let timerText = document.querySelector("#timer");
let timerID;
let running = false;
let timefocus = 1500;
let currMode = "focus";


let timercircle = document.querySelector(".timer-circle");
let angle = 0;
// timercircle.addEventListener('click', (e) => {
//     console.log("Start");
//     setInterval(() => {
//         angle++;
//         console.log(angle);
//         timercircle.style.setProperty("--angle", `${angle}deg`);
//     }, 500)
// })








function startTimer(time) {
    running = true;
    timerID = setInterval(() => {
        let minutes = Math.floor(timefocus / 60);
        let seconds = timefocus % 60;
        timefocus--;
        let sec = seconds;
        let mins = minutes;
        if (seconds < 10) {
            sec = "0" + seconds;
        }
        if (minutes < 10) {
            mins = "0" + minutes;
        }
        console.log(`${mins}:${sec}`);
        if (timefocus < 0) {
            clearInterval(timerID);
        }
        timerText.innerText = `${mins}:${sec}`;
    }, 1000)
}
timercard.addEventListener('click', (e) => {
    if (e.target.closest("#startBtn")) {
        if (running) {
            return;
        } else {
            startTimer();
        }
        let bg=setInterval(() => {
            angle++;
            console.log(angle);
            timercircle.style.setProperty("--angle", `${angle}deg`);
        }, 20)
        console.log("timer start");
    }
    if (e.target.closest("#pauseBtn")) {
        console.log("pause");
        clearInterval(timerID);
        
        running = false;
    }
    if (e.target.closest("#resetBtn")) {
        console.log("Reset");
        clearInterval(timerID);
        timefocus = 1500;
        timerText.innerText = "25:00";
        running = false;
    }
})