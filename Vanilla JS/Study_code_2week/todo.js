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
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     li.remove()
// }

// function paintToDo(newTodo) {
//     const li = document.createElement("li")
//     const span = document.createElement("span");
//     span.innerText = newTodo;
//     const button = document.createElement("button");
//     button.innerText = "❌";
//     button.addEventListener("click", deleteToDo)
//     li.appendChild(span); 
//     li.appendChild(button);
//     // append는 맨 마지막에 둬야 함.
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     paintToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit) 



// 7.3 Saving To Dos
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const toDos = [];

// function saveToDos(){
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }
// // localStorage에는 텍스트만 저장할 수 있음. 배열을 저장할 수 없음
// // 그러나 배열처럼 보이게 하기 -> JSON.stringify()
// // 값을 string으로 저장하고 싶을 때 사용

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     li.remove()
// }

// function paintToDo(newTodo) {
//     const li = document.createElement("li")
//     const span = document.createElement("span");
//     span.innerText = newTodo;
//     const button = document.createElement("button");
//     button.innerText = "❌";
//     button.addEventListener("click", deleteToDo)
//     li.appendChild(span); 
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     toDos.push(newTodo);
//     paintToDo(newTodo);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit) 



// 7.4 Loading To Dos part one
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit) 

function sayHello() {

}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse(saveToDos) : saveToDos를 배열로 바꿀 수 있음
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
}