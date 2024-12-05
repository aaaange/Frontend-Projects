// const title = document.getElementById("title");

// // console.log('title')

// title.innerText = "Got you!";

// console.log(title.id)
// console.log(title.className)

// 가장 먼저 일치하는 값을 가져옴
// const title = document.querySelector('.hello h1');
// 일치하는 모든 값을 가져옴
// const title = document.querySelectorAll('.hello h1');

// console.log(title);
// title.innerText = "Hello";




// 3.3 Event

// const title = document.querySelector('div.hello:first-child h1');

// // console.dir(title);

// // title.style.color = "bule";

// function handleTitleClick() {
//     console.log('title was clicked');
//     title.style.color = 'blue';
// }

// // 함수를 안에 넣어줄 때는 괄호를 넣지 않음.
// title.addEventListener('click', handleTitleClick);


// 3.4 Event part Two
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
// const title = document.querySelector('div.hello:first-child h1');

// console.dir(title);

// function handleTitleClick() {
//     console.log('title was clicked');
//     title.style.color = 'blue';
// }

// function handleMouseEnter() {
//     console.log('mouse is here!')
//     title.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//     title.innerText = 'Mouse is gone!';
// }

// title.addEventListener('click', handleTitleClick);
// title.addEventListener('mouseenter', handleMouseEnter);
// title.addEventListener('mouseleave', handleMouseLeave);





// 3.5 More Events

const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    console.log('title was clicked');
    h1.style.color = 'blue';
}

function handleMouseEnter() {
    console.log('mouse is here!')
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = 'Mouse is gone!';
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato'; //여기서 bady는 중요한 부분
}

function handleWindowCopy() {
    alert('copoer!');
}

function handlewindowOffline() {
    alert('SOS no WIFI');
}

function handleWindowOnline() {
    alert('ALL GOOOOOOD')
}

h1.onclick = handleTitleClick; 
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);
// 이벤트 리스너를 작성하는 방법은 위와 같이 2종류

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handlewindowOffline)₩;
window.addEventListener('online', handleWindowOnline);