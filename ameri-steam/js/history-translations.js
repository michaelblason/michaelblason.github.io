$(document).ready(function () {
  var translations = {
    en: {
      "history-title-meta": "Ameri-STEAM - Our History",
      "history-desc-meta":
        "Be a part of the next generation of leaders through our educational enrichment, mentoring, and technology training programs.",
      "history-header-title": "Our History - Ameri-STEAM",
      "history-main-header": "Our History",
      "history-main-desc":
        "Browse our gallery from past years. And find videos from the program on",
      "youtube-desc": "our YouTube channel.",
      "about-us-title": "About us",
      "about-us-desc": "Find out what makes Ameri-STEAM special.",
      "our-history-title": "Our History",
      "our-history-desc": "Browse our gallery of photos from past years.",
      "contact-us-title": "Contact Us",
      "contact-us-desc": "Reach out to us with any questions.",
      "learn-more": "Learn More",
    },
    fr: {
      "history-title-meta": "Ameri-STEAM - Notre Histoire",
      "history-desc-meta":
        "Faites partie de la prochaine génération de leaders grâce à nos programmes d'enrichissement éducatif, de mentorat et de formation technologique.",
      "history-header-title": "Notre Histoire - Ameri-STEAM",
      "history-main-header": "Notre Histoire",
      "history-main-desc":
        "Parcourez notre galerie de photos des années précédentes. Et trouvez des vidéos du programme sur",
      "youtube-desc": "notre chaîne YouTube.",
      "about-us-title": "À propos de nous",
      "about-us-desc": "Découvrez ce qui rend Ameri-STEAM spécial.",
      "our-history-title": "Notre Histoire",
      "our-history-desc": "Parcourez notre galerie de photos des années précédentes.",
      "contact-us-title": "Contactez-nous",
      "contact-us-desc": "Contactez-nous pour toute question.",
      "learn-more": "En savoir plus",
    },
  };

  var languageMap = {
    english: "en",
    français: "fr",
  };

  var languageFlag = {
    en: "gb",
    fr: "fr",
  };

  var languageLabel = {
    en: "English",
    fr: "Français",
  };

  function changeLanguage(lang) {
    $(".translate").each(function () {
      var id = $(this).attr("id");
      if (translations[lang][id]) {
        $(this).html(translations[lang][id]);
      } else {
        console.log(`The key '${id}' was not found in the translations for '${lang}'`);
      }
    });

    // Set language in the HTML tag
    $("html").attr("lang", lang);

    // Save current language to local storage
    localStorage.setItem("selectedLang", lang);
  }

  function updateButtonLabels(lang) {
    var nextLang = lang === "en" ? "fr" : "en";

    // Change dropdown label
    $("#language-btn").html(
      '<span class="fi fi-' + languageFlag[lang] + '"></span> ' + languageLabel[lang]
    );

    // Set next language in change-lang link
    $("#change-lang").html(
      '<span class="fi fi-' + languageFlag[nextLang] + '"></span> ' + languageLabel[nextLang]
    );

    // Set the "data-lang" for "change-lang" to the other language
    $("#change-lang").attr("data-lang", nextLang);
  }

  // Get current language from local storage, default to French if not set
  var currentLang = localStorage.getItem("selectedLang") || "fr";

  // Change language to current language
  changeLanguage(currentLang);

  // Update button labels
  updateButtonLabels(currentLang);

  $("#change-lang").click(function (e) {
    e.preventDefault();
    var lang = $(this).attr("data-lang"); // Get language from attribute
    changeLanguage(lang);

    // Prepare for next change
    var nextLang = lang === "en" ? "fr" : "en";
    $(this).attr("data-lang", nextLang); // Set next language in attribute

    // Update button labels
    updateButtonLabels(lang);
  });
});
