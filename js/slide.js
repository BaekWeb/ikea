$(function() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
})