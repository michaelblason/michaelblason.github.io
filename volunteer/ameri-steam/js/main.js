$(document).ready(function () {
  // Hero Video Button
  var video = $(".hero__video").get(0);
  var video_btn = $(".hero__video-btn");

  video_btn.click(function () {
    if (video.paused) {
      video.play();
      $("#hero-video-play").addClass("invisible");
      $("#hero-video-pause").removeClass("invisible");
    } else {
      video.pause();
      $("#hero-video-pause").addClass("invisible");
      $("#hero-video-play").removeClass("invisible");
    }
  });

  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
  }

  $(".dropdown-nav__openNavBtn").click(disableScroll);

  $(".dropdown-nav__closeNavBtn").click(enableScroll);
});
