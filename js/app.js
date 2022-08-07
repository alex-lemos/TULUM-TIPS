
/*======= CHANGE BACKGROUND HEADER =======*/ 
function scrollHeader(){
    const nav = document.querySelector("header")
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
  });