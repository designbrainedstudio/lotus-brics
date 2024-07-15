import { setHeroCTA } from "./hero-cta.js";
import { initialiseSwiper } from "./swiper-init.js";

let currentSlide = 0;
let swiper;

$(document).ready(function () {
  initialiseSwiper();
  setHeroCTA();
});
