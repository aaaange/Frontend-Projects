// 7.0 Setup
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     console.log(newTodo, toDoInput.value)
// }

// toDoForm.addEventListener("submit", handleToDoSubmit) 



// 7.1 Adding ToDos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function paintToDo(newTodo) {
//     const li = document.createElement("li")
//     // 변수명은 li라고 지을 필요 없이 원하는 대로 지으면 됨.
//     // 그러나 document.createElement("li") 이 안에 작성되는 태그 이름은 꼭 지켜줘야 함.
//     const span = document.createElement("span");
//     li.appendChild(span); // span을 li 안에 넣어주기.
//     span.innerText = newTodo;
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     paintToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit) 



// 7.2 Deleting To Dos
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li")
    // 변수명은 li라고 지을 필요 없이 원하는 대로 지으면 됨.
    // 그러나 document.createElement("li") 이 안에 작성되는 태그 이름은 꼭 지켜줘야 함.
    const span = document.createElement("span");
    li.appendChild(span); // span을 li 안에 넣어주기.
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit) 