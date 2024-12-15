// 8.0 Geolocation
// geolocation : 사용자의 위치

// function onGeoOk(position) {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log("You live in", lat, lng);
// }

// function onGeoError() {
//     alert("Can't find you. No weather for you.");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)



// 8.1 Weather API
const API_KEY = "" // your API KEY

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // fetch(url); // JavaScript가 대신 URL을 부름
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.name, data.weather[0].main)
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

// API : 다른 서버와 이야기할 수 있는 방법
