// 4.0 Input Values

// const loginForm = document.getElementById('login-form')
// // const loginForm = document.querySelector('#login-form') 동일한 명령어

// const loginInput = loginForm.querySelector('input')
// const loginButton = loginForm.querySelector('button')

// // 위에 loginForm을 안쓰려면 const loginInput = document.querySelector('#login-form input')


// function onLoginBtnClick() {
//     console.log("hello", loginInput.value)
//     // 위와 같이 작성하면 "hello 입력값"이 콘솔로그에 뜸
// }

// loginButton.addEventListener('click', onLoginBtnClick);



// 4.1 Form Submission
// username 유효성 검사

// const loginForm = document.getElementById('login-form')

// const loginInput = loginForm.querySelector('input')
// const loginButton = loginForm.querySelector('button')


// function onLoginBtnClick() {
//     const username = loginInput.value;
//     // if(username === "") {
//     //     alert("Please write your name");
//     // } else if (username.length > 15) {
//     //     alert("Your name is too long.")
//     // }
//     // require를 html에 사용하면 위와 같은 내용을 작성하지 않아도 됨.
// }

// loginButton.addEventListener('click', onLoginBtnClick);



// 4.2 Events
// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')

// function onLoginSubmit(event) {
//     event.preventDefault(loginInput.value); // 어떤 event의 기본 행동(어떤 함수에 대해 브라우저가 기본적으로 수행하는 동작)이든지 발생되지 않도록 막는 것
//     // 예로 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어있음
//     console.log(event)
// }

// loginForm.addEventListener('submit', onLoginSubmit)
// // onLoginSubmit() -> ()를 더하면 브라우저가 보자마자 자동으로 이 function을 실행시킴
// // 브라우저는 ()안에 들어가는 값을 가지고 해당 함수를 실행시키는 버튼을 누르는 것.
// // 함수의 첫번째 인자(argument)는 항상 지금 막 벌어진 일에 대한 정보 -> 우리는 공간('()')만 제공하면 알아서 js가 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣음 ⭐️
// // 첫번째 인자를 채워주는 것은 선택사항



// 4.3 Evnets part Two
// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value)
// }

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
//     // alert('clicked!'); // <-- JS가 기본동작을 모두 멈춰놨고, ok를 눌러 alert를 끄면 다시 이후에 동작이 실행됨.
// }

// loginForm.addEventListener('submit', onLoginSubmit)
// link.addEventListener('click', handleLinkClick)



// 4.4 Getting Username
// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')
// const greeting = document.querySelector('#greeting');

// const HIDDEN_CLASSNAME = "hidden"
// // 대문자로 작성하는 이유는 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add('hidden')
//     const username = loginInput.value;
//     greeting.innerText = `Hello ${username}`;
//     // greeting.innerText = "Hello " + username; 위와 동일
//     greeting.classList.remove(HIDDEN_CLASSNAME)
// }

// loginForm.addEventListener('submit', onLoginSubmit)



// 4.5 Saving Username
// const loginForm = document.querySelector('#login-form')
// const loginInput = document.querySelector('#login-form input')
// const greeting = document.querySelector('#greeting');

// const HIDDEN_CLASSNAME = "hidden"

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add('hidden')
//     const username = loginInput.value;
//     localStorage.setItem("username", username) // 입력한 유저 이름을 저장함, 그러나 여전히 새로고침하면 form이 나타남.
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME)
// }


// loginForm.addEventListener('submit', onLoginSubmit)


// local storage는 우리가 브라우저에 뭔가 저장할 수 있게 함. 나중에 가져다 사용할 수 있음
// local storage에 뭐가 들었는지 보고 싶다면 개발자 도구 이용 >> - Application - Local Storage
// setItem : local storage에 정보를 저장 => localStorage.setItem("username", "aaange")
// getItem : local storage에서 정보 불러오기 => localStorage.getItem("username")
// removeItem : local storage에서 정보 삭제하기 => localStorage.removeItem("username")



// 4.6 Loading Username
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username" // 이 string을 한 번만 작성하고자 변수에 선언해줌. 오타가 나면 작동하지 않고 알 수 없으니 방지 차원

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}


function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername)
}



// 4.7 Super Recap
