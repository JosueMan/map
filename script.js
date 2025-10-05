const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
    
});

//Cerrar menu cuando le damos click en el boton de cerrar
menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

//Cerrar menu cuando le damos click en el boton de nav link
navLinks.forEach(link => {
    link.addEventListener("click",()=> menuOpenButton.click());
});

//Inicializacion del Swiper
const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive Breakpoints
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  
  });
