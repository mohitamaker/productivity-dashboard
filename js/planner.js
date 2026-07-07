let planform = document.querySelector(".plan-form");
let activity = document.querySelector("#activity");
let time = document.querySelector("#time");
let addPlan = document.querySelector("#addPlan");
let planlist = document.querySelector(".plan-list");
// let datebox = document.querySelector(".date-box");
let day = document.querySelector("#day");
let date = document.querySelector("#date");
let allDaysOfWeek = ['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let plans = [];
day.innerText = allDaysOfWeek[new Date().getDay()];
date.innerText = new Date().toLocaleDateString();

addPlan.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Add plan clicked");
    // console.log(e.target);
    let ActVal = "";
    let TimeVal = "";
    if (ActVal.value != "" && TimeVal.value != "") {
        ActVal = activity.value;
        TimeVal = time.value;
        plans.push({
            type: ActVal,
            timeTaken: TimeVal,
        })
        console.log(plans);
        addData();
    }
    activity.value = "";
    time.value = "";
})

function addData() {
    let clutter = "";
    plans.forEach((val, idx) => {
        clutter += ` <div class="plan-card" data-idx=${idx}>
                            <div class="plan-info">
                                <h4>${val.type}</h4>
                            </div>
                            <div class="time-badge">${val.timeTaken}</div>
                            <div class="plan-actions">
                                <button id="dltPlan">🗑️</button>
                            </div>
                        </div>`
    })
    planlist.innerHTML=clutter;
}

planlist.addEventListener('click',(e)=>{
    e.preventDefault();
    let ID = e.target.closest(".plan-card").dataset.idx;
    if(e.target.closest("#dltPlan")){
        plans.splice(ID,1);
        addData();
    }
})