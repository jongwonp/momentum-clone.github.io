const images = [
    "img1.jfif",
    "img2.jfif",
    "img3.jfif",
    "img4.jfif",
    "img5.jfif",
    "img6.jfif"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.id = "bg";

document.body.appendChild(bgImage);