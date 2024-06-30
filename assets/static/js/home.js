document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 10; // Adjust for margin

    // Clone first and last items for seamless transition
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);
    carouselInner.appendChild(firstClone);
    carouselInner.insertBefore(lastClone, items[0]);

    // Update total items with clones
    const newItems = document.querySelectorAll('.carousel-item');
    const newTotalItems = newItems.length;

    // Initialize carousel
    carouselInner.style.transform = `translateX(-${itemWidth}px)`;

    // Move to next slide
    function moveToNextSlide() {
        if (currentIndex >= newTotalItems - 1) return;
        currentIndex++;
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

        // Reset to first slide
        if (currentIndex === newTotalItems - 1) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                currentIndex = 1;
                carouselInner.style.transform = `translateX(-${itemWidth}px)`;
            }, 500);
        }
    }

    // Move to previous slide
    function moveToPrevSlide() {
        if (currentIndex <= 0) return;
        currentIndex--;
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

        // Reset to last slide
        if (currentIndex === 0) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                currentIndex = newTotalItems - 2;
                carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            }, 500);
        }
    }

    // Automatic sliding
    function autoSlide() {
        setInterval(() => {
            moveToNextSlide();
        }, 2500);
    }

    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    autoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner02 = document.querySelector('.carousel-inner-2');
    const prevButton02 = document.getElementById('prev02');
    const nextButton02 = document.getElementById('next02');
    let currentIndex02 = 0;
    const items02 = document.querySelectorAll('.carousel-item-2');
    const totalItems02 = items02.length;
    const itemWidth02 = items02[0].clientWidth + 10; // Adjust for margin

    // Clone first and last items02 for seamless transition
    const firstClone02 = items02[0].cloneNode(true);
    const lastClone02 = items02[totalItems02 - 1].cloneNode(true);
    carouselInner02.appendChild(firstClone02);
    carouselInner02.insertBefore(lastClone02, items02[0]);

    // Update total items02 with clones
    const newItems02 = document.querySelectorAll('.carousel-item-2');
    const newTotalItems02 = newItems02.length;

    // Initialize carousel
    carouselInner02.style.transform = `translateX(-${itemWidth02}px)`;

    // Move to next slide
    function moveToNextSlide() {
        if (currentIndex02 >= newTotalItems02 - 1) return;
        currentIndex02++;
        carouselInner02.style.transition = 'transform 0.5s ease-in-out';
        carouselInner02.style.transform = `translateX(-${itemWidth02 * currentIndex02}px)`;

        // Reset to first slide
        if (currentIndex02 === newTotalItems02 - 1) {
            setTimeout(() => {
                carouselInner02.style.transition = 'none';
                currentIndex02 = 1;
                carouselInner02.style.transform = `translateX(-${itemWidth02}px)`;
            }, 500);
        }
    }

    // Move to previous slide
    function moveToPrevSlide() {
        if (currentIndex02 <= 0) return;
        currentIndex02--;
        carouselInner02.style.transition = 'transform 0.5s ease-in-out';
        carouselInner02.style.transform = `translateX(-${itemWidth02 * currentIndex02}px)`;

        // Reset to last slide
        if (currentIndex02 === 0) {
            setTimeout(() => {
                carouselInner02.style.transition = 'none';
                currentIndex02 = newTotalItems02 - 2;
                carouselInner02.style.transform = `translateX(-${itemWidth02 * currentIndex02}px)`;
            }, 500);
        }
    }

    // Automatic sliding
    function autoSlide() {
        setInterval(() => {
            moveToNextSlide();
        }, 2500);
    }

    nextButton02.addEventListener('click', moveToNextSlide);
    prevButton02.addEventListener('click', moveToPrevSlide);
    autoSlide();
});

