// 5.0 Intervals
// const clock = document.querySelector('h2#clock');

// function sayHello() {
//     console.log("hello");
// }

// // 매번 -> interval
// setInterval(sayHello, 5000)
// // 5초에 한번씩



// 5.1 Timeouts and Dates
// const clock = document.querySelector('h2#clock');

// function getClock() {
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }

// // setTimeout
// // setTimeout(getClock, 1000);
// // 얼마나 기다릴지 작성하는 것.

// getClock() 
// // 이걸 작성해주지 않으면 처음에 00:00:00부터 시작하고 1초 뒤 아래 코드가 시작될것임.
// // 그러나 이 코드를 작성함으로써 바로 시간을 보여줄 수 있게 됨.
// setInterval(getClock, 1000);



// 5.2 PadStart
// string.padStart(원하는 길이, 원하는 길이가 아니라면 앞에 추가할 것)
// string.padEnd(원하는 길이, 원하는 길이가 아니라면 뒤에 추가할 것)
const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);
