$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector,
  });
  return false;
});

$(document).ready(function () {
  for (let i = 1; i <= 131; i++) {
    // prettier-ignore
    let imageHtml = "<div class=\"item col-lg-3 col-md-4 col-6 col-sm\"><a href=\"../img/gallery/" + i + ".jpeg\" class=\"fancylight popup-btn\" data-fancybox-group=\"light\"><img class=\"img-fluid\" src=\"../img/gallery/" + i + ".jpeg\" /></a></div>";
    console.log(imageHtml);
    $("#image-gallery").append(imageHtml);
  }

  var popup_btn = $(".popup-btn");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
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
