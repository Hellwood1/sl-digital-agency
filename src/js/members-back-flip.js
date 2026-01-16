// function shouldEnableTapFlip() {

//   const isDesktopInteraction = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

//   const isDesktopWidth = window.matchMedia('(min-width: 1440px)').matches;


//   return !isDesktopInteraction && !isDesktopWidth;
// }

// function initTapFlip(swiper) {
//   const root = document.querySelector('.members-swiper-init');
//   if (!root) return () => {};

//   const getSlides = () => root.querySelectorAll('.swiper-slide.overlay');
//   const closeAll = () => getSlides().forEach(s => s.classList.remove('is-flipped'));

//   let startX = 0;
//   let startY = 0;
//   let moved = false;

//   const onPointerDown = (e) => {
//     const slide = e.target.closest('.swiper-slide.overlay');
//     if (!slide) return;
//     startX = e.clientX;
//     startY = e.clientY;
//     moved = false;
//   };

//   const onPointerMove = (e) => {
//     const dx = Math.abs(e.clientX - startX);
//     const dy = Math.abs(e.clientY - startY);


//     if (!moved && (dx > 8 || dy > 8)) {
//       moved = true;
//       closeAll();
//     }
//   };

//   const onPointerUp = (e) => {
//     const slide = e.target.closest('.swiper-slide.overlay');
//     if (!slide) return;


//     if (moved) return;

//     const wasOpen = slide.classList.contains('is-flipped');
//     closeAll();
//     if (!wasOpen) slide.classList.add('is-flipped');
//   };

//   root.addEventListener('pointerdown', onPointerDown, { passive: true });
//   root.addEventListener('pointermove', onPointerMove, { passive: true });
//   root.addEventListener('pointerup', onPointerUp, { passive: true });


//   if (swiper?.on) {
//     swiper.on('sliderFirstMove', closeAll);
//     swiper.on('slideChangeTransitionStart', closeAll);
//   }

//   return () => {
//     root.removeEventListener('pointerdown', onPointerDown);
//     root.removeEventListener('pointermove', onPointerMove);
//     root.removeEventListener('pointerup', onPointerUp);
//   };
// }

// let cleanupTapFlip = () => {};

// document.addEventListener('DOMContentLoaded', () => {
//   const setup = () => {
//     cleanupTapFlip();

//     if (shouldEnableTapFlip()) {
//       cleanupTapFlip = initTapFlip(window.swiper);
//     } else {

//       document.querySelectorAll('.swiper-slide.overlay').forEach(s => s.classList.remove('is-flipped'));
//     }
//   };

//   setup();
//   window.addEventListener('resize', setup);
//   window.addEventListener('orientationchange', setup);
// });