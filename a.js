let currentSlide = 1;
const totalSlides = 4;

// Move o slider automaticamente
setInterval(() => {
    nextSlide();
}, 5000);

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    updateSlidePosition();
}

// Move para um slide específico ao clicar na bolinha
function moveToSlide(slideNumber) {
    currentSlide = slideNumber;
    updateSlidePosition();
}

// Atualiza a posição do slider
function updateSlidePosition() {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(-${(currentSlide - 1) * 800}px)`;

    // Atualiza as bolinhas ativas
    const buttons = document.querySelectorAll(".manual-btn");
    buttons.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentSlide - 1);
    });
}



let currentIndex = [0, 0, 0, 0]; // Índices para cada carrossel

function moveCarousel(direction, carouselIndex) {
    const carousel = document.querySelector(`#carousel-${carouselIndex}`);
    const items = document.querySelectorAll(`#carousel-${carouselIndex} .carousel-item`);
    const totalItems = items.length;
    const visibleItems = 4; // Quantidade de imagens visíveis
    const maxIndex = Math.ceil(totalItems / visibleItems) - 1;

    // Atualizar o índice para o carrossel específico
    currentIndex[carouselIndex] += direction;

    // Se o índice for menor que 0, vai para o último grupo de itens
    if (currentIndex[carouselIndex] < 0) {
        currentIndex[carouselIndex] = maxIndex;
    }

    // Se o índice exceder o máximo, volta para o primeiro grupo
    if (currentIndex[carouselIndex] > maxIndex) {
        currentIndex[carouselIndex] = 0;
    }

    // Mover o carrossel
    const offset = -currentIndex[carouselIndex] * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}