(() => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 100,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})()
