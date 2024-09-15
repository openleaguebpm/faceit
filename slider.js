let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

function showSlide(index) {
    const sliderWidth = document.querySelector('.slider-container').clientWidth;
    const offset = -index * sliderWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
    animateSlide(index); // Анимация появления
}

function animateSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = '1';
        } else {
            slide.style.opacity = '0';
        }
    });
}

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

// Появление первого слайда при загрузке
showSlide(currentSlide);
