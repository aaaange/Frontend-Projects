const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username" 

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    console.log("Form hidden status:", loginForm.classList.contains(HIDDEN_CLASSNAME));
    console.log("Saved username:", savedUsername);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}


function paintGreetings(username) {
    greeting.innerText = `어서와요! ${username}님!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log("Saved Username 2:", savedUsername);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername)
}