$(document).ready(function () {
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
