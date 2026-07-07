let addTaskBtn = document.querySelector("#addTaskBtn");
let taskInput = document.querySelector("#taskInput");
let tasklist = document.querySelector(".task-list");
let taskcheck = document.querySelector(".task-check");
let completed = document.querySelector("#completed");
let filters= document.querySelector(".filters");
let tasks = [];

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let val = "";
    if (taskInput.value !== "") {
        val = taskInput.value;
        console.log(val);
        tasks.push({
            taskName: val,
            status: "pending",
        })
        addTask(tasks);
    }
    taskInput.value = "";
})

function addTask(type) {
    let clutter = "";
    type.forEach((val, idx) => {
        clutter += `<div class="task" data-index=${idx}>
                            <div class="task-left">
                                <input type="checkbox" class="task-check" ${val.status==="Completed"?"checked":""}>
                                <p class="task-title">${val.taskName}</p>
                            </div>
                            <div class="completed">${val.status}</div>

                            <div class="task-actions">
                                <button class="delete-btn">🗑️</button>
                            </div>
                        </div>`
    })
    tasklist.innerHTML = clutter;
}

tasklist.addEventListener('click', (e) => {
    let taskEL = e.target.closest(".task");
    let ID = e.target.closest(".task").dataset.index;
    if (e.target.closest(".task-check")) {
        let comp = taskEL.querySelector(".completed");
        if (e.target.checked) {
            console.log("checked");
            console.log(ID);
            comp.innerText = "Completed";
            tasks[ID].status = "Completed";
            console.log(tasks[ID]);
        }
        else {
            comp.innerText = "Pending";
            tasks[ID].status = "Pending";
            console.log(tasks[ID]);
        }
    }
    if(e.target.closest(".delete-btn")){
        deleteTask(ID);
        return;
    }
})

function deleteTask(taskId) {
    tasks.splice(taskId,1);
    console.log(tasks);
    addTask(tasks);
}

filters.addEventListener('click',(e)=>{
    if(e.target.closest("#showAll")){
        console.log("all");
        e.target.classList.add("active");
        document.querySelector("#showCompleted").classList.remove("active");
        document.querySelector("#showPending").classList.remove("active");
        addTask(tasks);
    }
    else if(e.target.closest("#showCompleted")){
        console.log("Completed");
        e.target.classList.add("active");
        document.querySelector("#showAll").classList.remove("active");
        document.querySelector("#showPending").classList.remove("active");
        let completedTasks = tasks.filter((val)=>{
            return val.status==="Completed";
        })
        console.log(completedTasks);
        addTask(completedTasks);
    }
    else if(e.target.closest("#showPending")){
        console.log("Pending");
        e.target.classList.add("active");
        document.querySelector("#showAll").classList.remove("active");
        document.querySelector("#showCompleted").classList.remove("active");
        let pendingTasks = tasks.filter((val)=>{
            return val.status!=="Completed";
        })
        console.log(pendingTasks);
        addTask(pendingTasks);
    }
})