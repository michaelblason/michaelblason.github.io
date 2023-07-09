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

  // Modal Script

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Open the modal on first open
  if (!localStorage.getItem("beenHereBefore")) {
    window.onload = function () {
      modal.style.display = "block";
    };

    localStorage.setItem("beenHereBefore", "true");
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //Countdown

  // Set the date we're counting down to
  var countDownDate = new Date("Jul 14, 2023 12:00:00").getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    "Il ne reste que " + days + " jours avant le programme Ameri-STEAM 2023 !";

  // If the count down is finished, write some text
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Ameri-STEAM 2023 is happening now!";
  }
});
