
const click = document.querySelector('[data-click]');

click.addEventListener("click", ()=>{
     $('html,body').animate({
         scrollTop: $(".footer__wrapper").offset().top},
         'slow');
});
