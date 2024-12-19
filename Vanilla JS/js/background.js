const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
]

const choseImage = images[Math.floor(Math.random() * images.length)]

// const bgImage = document.createElement("img");

// bgImage.src = `img/${choseImage}`;

// console.log(bgImage);

// document.body.appendChild(bgImage)

// const selectedImage = images[randomIndex];
document.body.style.backgroundImage = `url(${choseImage})`;