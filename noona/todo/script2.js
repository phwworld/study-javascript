let taskInput = document.querySelector(".task-input");
let taskAddBtn = document.querySelector(".task-add");
let resultArea = document.querySelector(".task");
let tabBtn = document.querySelectorAll(".tab div");
let taskId = 0;
let taskList = [];
let filterVal = "all";
let filterList = [];

// for (let i = 0; i < tabBtn.length; i++) {
//   tabBtn[i].addEventListener("click", (event) => {
//     filter(event);
//   });
// }
tabBtn.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    filter(event);
  })
});


let taskAdd = () => {
  if (taskInput.value) {
    let task = {
      id: taskId,
      state: false,
      cont: taskInput.value,
    };
    taskList.push(task);
    taskInput.value = "";
    render();
    taskId++;
  } else {
    alert("입력하세요.");
  }
};

let taskCheck = (id) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].state = !taskList[i].state;
      break;
    }
  }
  render();
};

let taskDel = (id) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
    }
  }
  filter();
};

let filter = (event) => {
  if (event) {
    filterVal = event.target.className;
  }

  filterList = [];

  if (filterVal === "going") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].state === false) {
        filterList.push(taskList[i]);
      }
    }
    console.log(filterList);
    render();
  } else if (filterVal === "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].state === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else {
    render();
  }
  render();
};

let render = () => {
  list = [];
  let resultHtml = "";

  if (filterVal === "going" || filterVal === "done") {
    list = filterList;
  } else {
    list = taskList;
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].state == true) {
      resultHtml += `<div>
            <p class="task-done">${list[i].cont}</p>
            <div>
                <button type="button" onclick="taskCheck('${list[i].id}')">체크</button>
                <button type="button" onclick="taskDel('${list[i].id}')">삭제</button>
            </div>
        </div>`;
    } else {
      resultHtml += `<div>
            <p>${list[i].cont}</p>
            <div>
                <button type="button" onclick="taskCheck('${list[i].id}')">체크</button>
                <button type="button" onclick="taskDel('${list[i].id}')">삭제</button>
            </div>
        </div>`;
    }
  }
  resultArea.innerHTML = resultHtml;
};

taskAddBtn.addEventListener("click", taskAdd);
