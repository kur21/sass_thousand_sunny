// $('.customer-list').slick({
//    infinite: true,
//    slidesToShow: 3,
//    slidesToScroll: 1,
//    variableWidth: true,
//    dots: true,
//    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fi fi-rr-arrow-left"></i></button>`,
//    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fi fi-rr-arrow-right"></i></button>`,
//    responsive: [
//       {
//          breakpoint: 768,
//          settings: {
//             slidesToShow: 1,
//             variableWidth: false,
//             arrows: false,
//          }
//       }
//    ]
// });

const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const activeClass = 'is-show'
toggle.onclick = () => {
   menu.classList.add(activeClass)
}
window.addEventListener('click', function(e){   
   if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')) {
      menu.classList.remove(activeClass)
   }
});

document.addEventListener('DOMContentLoaded', function() {
   const slider = document.querySelector('.testimonial-list')
   const sliderItems = document.querySelectorAll('.testimonial-item')
   const sliderItemWidth = sliderItems[0].clientWidth
   const arrowLeft = document.querySelector('.arrow-left')
   const arrowRight = document.querySelector('.arrow-right')
   let positionX = 0
   let index = 0
   
   function handleChangeSlide(dir) {
      if (dir === 'right') {
         arrowLeft.classList.remove('disable')
         if (index >= sliderItems.length - 1) {return}
         index++
         positionX += sliderItemWidth
         slider.style.transform = `translateX(-${positionX}px)`
         if (index === sliderItems.length - 1) { 
            arrowRight.classList.add('disable')
         }
      }
      if (dir === 'left') {
         arrowRight.classList.remove('disable')
         if (index <= 0) {return}
         index--
         positionX -= sliderItemWidth
         slider.style.transform = `translateX(-${positionX}px)`
         if (index === 0) {
            arrowLeft.classList.add('disable')
         }
      }
   }

   arrowRight.onclick = () => {
      handleChangeSlide('right')
   }
   arrowLeft.onclick = () => {
      handleChangeSlide('left')
   }
})