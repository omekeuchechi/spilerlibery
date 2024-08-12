const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    //if we need pagination for our work i need it so much
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },

    //navigation arrow notice it
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    //Responsive breakpoint
    breakpoint: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});