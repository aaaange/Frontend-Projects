// 2.13 Conditonals
// const age = prompt("How old are you?");

// console.log(typeof age, parseInt(age)) ; //typeof 변수를 쓰면 변수의 타입을 출력


// const age = parseInt(prompt("How old are you?"));

// console.log(age);




// 2.14 Conditionals part Two

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(condition){
//     // condition === ture
// }

// if(isNaN(age)){
//     console.log('Please write a number')
// } else {
//     console.log('Thank you for wirting your age.')
// }



// 2.15 Conditionals part Three

// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age)){
//     console.log('Please write a number');
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if (age > 50 && age <=80) {
//     console.log("You should exercise");
// } else if (age > 80) {
//     console.log("You can do whatever you want")
// }



// 3.1 

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

// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//     console.log('title was clicked');
//     h1.style.color = 'blue';
// }

// function handleMouseEnter() {
//     console.log('mouse is here!')
//     h1.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//     h1.innerText = 'Mouse is gone!';
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = 'tomato'; //여기서 bady는 중요한 부분
// }

// function handleWindowCopy() {
//     alert('copoer!');
// }

// function handlewindowOffline() {
//     alert('SOS no WIFI');
// }

// function handleWindowOnline() {
//     alert('ALL GOOOOOOD')
// }

// h1.onclick = handleTitleClick; 
// h1.addEventListener('mouseenter', handleMouseEnter);
// h1.addEventListener('mouseleave', handleMouseLeave);
// // 이벤트 리스너를 작성하는 방법은 위와 같이 2종류

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handlewindowOffline);
// window.addEventListener('online', handleWindowOnline);



// 3.6 CSS in JavaScirpt
// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//     const currrentColor = h1.style.color;
//     let newColor;
//     if(currrentColor === 'blue') {
//         newColor = 'tomato';
//     } else {
//         newColor = 'blue';
//     }
//     h1.style.color = newColor;
// }

// h1.onclick = handleTitleClick; 




// 3.7CSS in JavaScript part Two
// const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//     const clickedClass = 'clicked';
//     if (h1.className === 'clickedClass') {
//         h1.className  = "";
//     } else {
//         h1.className = 'clickedClass';
//     }
// }

// h1.onclick = handleTitleClick; 




// 3.8 CSS in JavaScript part Three
// className을 사용하면 이전에 있던 클래스는 고려하지 않고 교체함
// classList는 조금 다름

const h1 = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//     const clickedClass = 'clicked';
//     if (h1.classList.contains(clickedClass) === 'clickedClass') {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.onclick = handleTitleClick; 