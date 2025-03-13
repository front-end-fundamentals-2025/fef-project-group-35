document.addEventListener('DOMContentLoaded', function() {
  const productsGrid = document.querySelector('.products-grid');
  let isDragging = false;
  let startX;
  let scrollLeft;

  if (!productsGrid) {
    console.error('productsGrid element not found');
    return;
  }

  productsGrid.addEventListener('mousedown', (e) => {
    isDragging = true;
    productsGrid.classList.add('active');
    startX = e.pageX - productsGrid.offsetLeft;
    scrollLeft = productsGrid.scrollLeft;
  });

  productsGrid.addEventListener('mouseleave', () => {
    isDragging = false;
    productsGrid.classList.remove('active');
  });

  productsGrid.addEventListener('mouseup', () => {
    isDragging = false;
    productsGrid.classList.remove('active');
  });

  productsGrid.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - productsGrid.offsetLeft;
    const walk = (x - startX) * 3;
    productsGrid.scrollLeft = scrollLeft - walk;
  });

  // Slideshow functionality for mobile devices only
  function showSlides() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("auto-slide");

    function displaySlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(displaySlides, 2000); 
    }

    displaySlides();
  }

  function initializeSlideshow() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      showSlides();
      console.log('for mobile');
    } 
  }

  // Initial check
  initializeSlideshow();

  // Add event listener for window resize
  window.addEventListener('resize', initializeSlideshow);
});