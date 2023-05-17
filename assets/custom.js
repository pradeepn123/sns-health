/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

// hero banner auto slider
// console.log("yyyyyyyyyyyyyyyyyyyyyyyyy")

// var index = 0;
// var slides = document.querySelectorAll(".slides");
// var dot = document.querySelectorAll(".dot");

// function changeSlide() {

//   if (index < 0) {
//     index = slides.length - 1;
//   }

//   if (index > slides.length - 1) {
//     index = 0;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dot[i].classList.remove("active");
//   }

//   slides[index].style.display = "block";
//   dot[index].classList.add("active");
//   index++;
//   setTimeout(changeSlide, 2000);

// }
// changeSlide();

// video control
// const videoElement = document.querySelector('.video-part');
// const playPauseButton = document.querySelector('.video-control');
// const videopause = document.querySelector('.pause-btn');
// console.log('videeeeeooooo')

// playPauseButton.addEventListener('click', () => {
//   console.log('ooooooooooooooooooo')
// 	playPauseButton.classList.toggle('playing');
// 	if (playPauseButton.classList.contains('playing')) {
// 		videoElement.play();
// 	}
// 	else {
// 		videoElement.pause();
// 	}
// });

// videoElement.addEventListener('ended', () => {
// 	playPauseButton.classList.remove('playing');
// });
// function videoEnded(video) {
//   video.load();
// };

// image video slider on mobile screeen
mobileOnlySlider(".image-video-container", false, false, 641);
function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  console.log('oooooooooooooo')
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 1.1,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}


const html = document.html;
var cover = document.getElementById("size-container");
var modal = document.getElementById("size-chart");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


console.log('hlooooo')
btn.onclick = function () {
  console.log('---------------')
  cover.style.display = "block";
  const elemX = document.querySelector('html')
  elemX.style.overflowY = 'hidden';
}

span.onclick = function () {
  console.log('clooooooose')
  cover.style.display = "none";
  const elemX = document.querySelector('html')
  elemX.style.overflowY = 'auto';
}

