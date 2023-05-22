document.addEventListener("DOMContentLoaded", function () {
  var videoCover = document.getElementById("video--container");
  if (videoCover) {
    modal = videoCover.querySelector("#size-chart")
    var span = videoCover.querySelector(".close")
    const videoPlayerBtns = document.querySelectorAll("[data-video-button]")
    videoElement = videoCover.querySelector("video")

    videoPlayerBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        videoElement.setAttribute("src", this.getAttribute("data-video-src"))
        videoElement.load()
        videoCover.style.display = "block";
        const elemX = document.querySelector('html')
        elemX.style.overflowY = 'hidden';
      })
    })

    span.addEventListener("click", function () {
      videoCover.style.display = 'none';
      const elemX = document.querySelector('html')
      elemX.style.overflowY = 'auto';
    })
  }
})