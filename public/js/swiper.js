var swiper = new Swiper(".card_slider", {
  loop:true,
    speed:1000,
    autoplay:{
      delay:5000
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});