let taskInput = document.querySelector(".task-input");
let addBtn = document.querySelector(".task-add");
let resultArea = document.querySelector(".task");
let tabBtn = document.querySelectorAll(".tab div");
let taskList = [];
let idx = 0;
let filterVal = "all";
let filterList = [];


for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", (event) => {
        filter(event);
    });
}

let addTask = () => {
    if(!taskInput.value.length == 0) {
        let taskVal = {
            id: idx,
            cont: taskInput.value,
            state: false
        };
        
        taskList.push(taskVal);
        idx++;
        render();
        taskInput.value = "";
    } else {
        alert("할 일을 입력해 주세요.");
    }
    
}

let checkTask = (id) => {
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList[i].state = !taskList[i].state;
            break;
        }
    }
    render();
}

let delTask = (id) => {
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList.splice(i, 1);
        }
    }
    filter();
}

let filter = (event) => {
    if (event) {
        filterVal = event.target.className;
    }

    filterList = [];

    if(filterVal === "going") {
        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].state === false) {
                filterList.push(taskList[i]);
            }
        }
        render();
    } else if(filterVal === "done") {
        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].state === true) {
                filterList.push(taskList[i]);
            }
        }
        render();
    } else {
        render();
    }
    render();
}

let render = () => {
    let resultHtml = "";
    list = [];

    if(filterVal === "going" || filterVal === "done") {
        list = filterList;
    } else {
        list = taskList;
    }
    
    for (let i = 0; i < list.length; i++) {
        if(list[i].state == true) {
            resultHtml += `<div>
                <p class="task-done">${list[i].cont}</p>
                <div>
                    <button type="button" onclick="checkTask('${list[i].id}');">체크</button>
                    <button type="button" onclick="delTask('${list[i].id}');">삭제</button>
                </div>
            </div>`
        } else {
            resultHtml += `<div>
                <p>${list[i].cont}</p>
                <div>
                    <button type="button" onclick="checkTask('${list[i].id}');">체크</button>
                    <button type="button" onclick="delTask('${list[i].id}');">삭제</button>
                </div>
            </div>`
        }
    }
    
    resultArea.innerHTML = resultHtml;
}

addBtn.addEventListener("click", addTask);