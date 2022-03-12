const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg'

];

let imagesIndex = 0;
let previousImage = document.getElementById('image-slider');

setInterval(() => {
    if (imagesIndex >= images.length) {
        imagesIndex = 0;
    };

    let imageUrl = images[imagesIndex];
    previousImage.setAttribute('src', imageUrl)
    imagesIndex++
}, 1000)