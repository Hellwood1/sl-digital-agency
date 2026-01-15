const slides = document.querySelectorAll('.swiper-slide.overlay');

slides.forEach(slide => {
  slide.addEventListener('click', e => {
    if (slide.classList.contains('is-dragging')) return;
    slides.forEach(s => s.classList.remove('is-flipped'));
    slide.classList.toggle('is-flipped');
  });
});
