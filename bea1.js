document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  let current = 0;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextImage() {
    let next = (current + 1) % images.length;
    showImage(next);
  }

  function startCarousel() {
    interval = setInterval(nextImage, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showImage(i);
      stopCarousel();
      startCarousel();
    });
  });

  // Initial setup
  if (images.length > 0) {
    showImage(0);
    startCarousel();
  }
});