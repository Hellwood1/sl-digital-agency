import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.members-swiper-init', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 12,
  preventClicks: false,
  preventClicksPropagation: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    768: {
     slidesPerView: 1.64,
      spaceBetween: 14,
      centeredSlides: true,
      centeredSlidesBounds: true,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,

    },
  },
});

function setSlideA11y(sw) {
  const total = sw.slides.length;

  sw.slides.forEach((slide, i) => {
    slide.removeAttribute('role');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} з ${total}`);
    slide.setAttribute('tabindex', '-1');
  });

  const active = sw.slides[sw.activeIndex];
  if (active) active.setAttribute('tabindex', '0');
}

setSlideA11y(swiper);
swiper.on('slideChange', () => setSlideA11y(swiper));
swiper.on('slidesLengthChange', () => setSlideA11y(swiper));