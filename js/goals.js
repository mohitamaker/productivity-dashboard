let addGoal = document.querySelector("#addGoal");
let goalText = document.querySelector("#goalText");
let goallist = document.querySelector(".goal-list");
let goals = [];
addGoal.addEventListener('click',(e)=>{
    e.preventDefault();
    let goalVal = "";
    if(goalText.value!=""){
        goalVal=goalText.value;
        goals.push(goalVal);
    }
    goalText.value="";
    console.log(goals);
    addData();
})

function addData(){
    let clutter="";
    goals.forEach((val,idx)=>{
        clutter+=`<div class="goal-card">
                        <h4>${val}</h4>
                  </div>`
    })
    goallist.innerHTML=clutter;
}