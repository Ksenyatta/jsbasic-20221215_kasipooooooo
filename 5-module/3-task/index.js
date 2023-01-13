function initCarousel() {
  let right =  document.querySelector('.carousel__arrow_right');
  //let left = document.querySelector('.carousel__arrow_left');
  //let carousel = document.querySelector('.carousel__inner');

  //let slide = document.querySelector('.carousel__slide');
  let slideWidth = document.querySelector('.carousel').offsetWidth / 4;
  let carouselWidth = document.querySelector('.carousel').offsetWidth;
  
  right.addEventListener('click',() => {
    let i = !slideWidth;
    carousel.style.transform = 'translateX(i)';
    if (carousel.style.transform = 'translateX(-carouselWidth)') {
      right.style.display = 'none';
    };
      /*for (  let i = 0; ; i = slide.offsetWidth ) {
        carousel.style.transform = 'translateX([i++])';
       if (i = slide.offsetWidth * 3) {
        right.style.display = 'none';
       } break; 
      }*/
  });
}