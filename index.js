function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", function() {
    const estrelasContainer = document.createElement('div');
    estrelasContainer.id = 'estrelas'; 

    document.body.appendChild(estrelasContainer);

    for (let i = 0; i < 1000; i++) { 
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');
        const randomX = randomNumber(0, window.innerWidth);
        const randomY = randomNumber(0, window.innerHeight);
        estrela.style.left = randomX + 'px';
        estrela.style.top = randomY + 'px';
        estrela.style.animationDelay = randomNumber(0,2) + 's';
        estrelasContainer.appendChild(estrela);
    }
});

let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlide, 3000);
}

function nextSlide() {
    if (slideIndex < slides.length) {
        slideIndex++;
    } else {
        slideIndex = 1;
    }
    showSlide();
}

function prevSlide() {
    if (slideIndex > 1) {
        slideIndex--;
    } else {
        slideIndex = slides.length;
    }
    showSlide();
}

showSlide();
