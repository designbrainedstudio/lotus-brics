import { setHeroCTA } from "./hero-cta.js";
import { initialiseSwiper } from "../components/swiperjs/swiper-init.js";

let currentSlide = 0;
let swiper;

$(document).ready(function () {
  swiper = initialiseSwiper();
  setHeroCTA();
});
