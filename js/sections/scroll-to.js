
const click = document.querySelector('[data-click]');

click.addEventListener("click", ()=>{
     $('html,body').animate({
         scrollTop: $("#footer__location-scroll").offset().top},
         'slow');
});

