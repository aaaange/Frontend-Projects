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
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// const toDos = [];

// function saveToDos(){
//     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

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

// function sayHello() {

// }

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos) {
//     const parsedToDos = JSON.parse(savedToDos);
//     // JSON.parse(savedToDos) : savedToDos를 배열로 바꿀 수 있음
//     parsedToDos.forEach((item) => console.log("this is the turn of", item));
// }



// 7.5 Loading To Dos part Two
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function saveToDos(){
//     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

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

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos
//     parsedToDos.forEach(paintToDo);
// }



// 7.6 Deleting To dos part 1
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY = "todos";

// let toDos = [];

// function saveToDos(){
//     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     console.log(li.id);
//     li.remove()
// }

// function paintToDo(newTodo) {
//     const li = document.createElement("li")
//     li.id = newTodo.id;
//     const span = document.createElement("span");
//     span.innerText = newTodo.text; // 아래에서 출력되는 것을 오브젝트로 변경하였으나 여기서 text만 출력으로 재변경
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
//     const newTodoObj = {
//         text: newTodo,
//         id: Date.now(),
//     };
//     toDos.push(newTodoObj);
//     paintToDo(newTodoObj);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit) 

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos
//     parsedToDos.forEach(paintToDo);
// }



// 7.7 Deleting todos part 2 - 3
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove()
    // toDos = toDos.filter(toDo => {toDo.id !== li.id}) // 그냥 이렇게 하면 타입 때문에 제대로 작동하지 않음
    // 실제로 id는 number인데 li.id는 string으로 가져옴
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos() // 위에서 toDos를 지운다음 saveToDos를 한번 더 불러와야 함.
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // 아래에서 출력되는 것을 오브젝트로 변경하였으나 여기서 text만 출력으로 재변경
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit) 

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}

// 배열에서 삭제하는 것이 아니라 지우고 싶은 요소를 제외하고 배열을 다시 그리는 것
// .filter

`
function myfilter() {

}

[1,2,3,4].filter(myfilter)

myfiler(1)
myfiler(2)
myfiler(3)
myfiler(4)
`
// 새 배열에 포함시키고 싶다면 myfilter에서 Ture를 반환해야 함.

