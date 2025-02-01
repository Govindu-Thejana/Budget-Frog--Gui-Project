// DOM Elements
const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');
const carouselDom = document.querySelector('.carousel');
const sliderDom = carouselDom.querySelector('.list');
const thumbnailDom = document.querySelector('.thumbnail');
const thumbnailItems = thumbnailDom.querySelectorAll('.item');

// Append first thumbnail to end for seamless loop
thumbnailDom.appendChild(thumbnailItems[0]);

// Timing Variables
const timeRunning = 3000; // Slide transition duration
const timeAutoNext = 7000; // Auto-play delay

// Event Listeners
nextDom.onclick = () => showSlider('next');
prevDom.onclick = () => showSlider('prev');

let runTimeout, runAutoNext = setTimeout(() => nextDom.click(), timeAutoNext);

// Slider Function
function showSlider(type) {
    const sliderItems = sliderDom.querySelectorAll('.item');
    const thumbnailItems = thumbnailDom.querySelectorAll('.item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItems[0]);
        thumbnailDom.appendChild(thumbnailItems[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runAutoNext);
    runAutoNext = setTimeout(() => nextDom.click(), timeAutoNext);
}