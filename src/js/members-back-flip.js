const isTouchDevice = window.matchMedia('(max-width: 1023px)').matches;
if (isTouchDevice) {
  const slides = document.querySelectorAll('.swiper-slide.overlay');

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('is-dragging')) return;
      const isOpen = slide.classList.contains('is-flipped');
      slides.forEach(s => s.classList.remove('is-flipped'));
      if (!isOpen) {
        slide.classList.add('is-flipped');
      }
    });
  });
}