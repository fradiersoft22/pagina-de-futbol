let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.mi-carousel-item');
        const totalSlides = slides.length;
        
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const carouselInner = document.getElementById('miCarouselInner');
        carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }