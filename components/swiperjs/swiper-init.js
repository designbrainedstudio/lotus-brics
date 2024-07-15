export function initialiseSwiper() {
  swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    speed: 500,

    // Navigation arrows
    navigation: {
      nextEl: ".dbs_swiper_nav-next",
      prevEl: ".dbs_swiper_nav-prev",
    },

    // If we need pagination
    pagination: {
      el: ".dbs_swiper_nav-pagination",
      horizontalClass: ".dbs_swiper_nav-pagination",
      bulletClass: "dbs_swiper_nav-page",
      bulletActiveClass: "is-active",
      clickable: true,
    },

    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    on: {
      init: function () {
        // Swiper Initialised.
      },
    },
  });

  swiper.on("sliderMove", function () {
    swiper.autoplay = false;
  });
}
