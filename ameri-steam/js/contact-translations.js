$(document).ready(function () {
  var translations = {
    en: {
      "contact-us-title-meta": "Ameri-STEAM - Contact Us",
      "contact-us-desc-meta":
        "Be a part of the next generation of leaders through our educational enrichment, mentoring, and technology training programs.",
      "contact-us-header": "Contact Us - Ameri-STEAM",
      "about-us-title": "About Us",
      "about-us-desc": "Find out what makes Ameri-STEAM special.",
      "our-history-title": "Our History",
      "our-history-desc": "Browse our gallery of photos from past years.",
      "contact-us-title": "Contact Us",
      "contact-us-desc": "Reach out to us with any questions.",
      "first-name": "First Name",
      "last-name": "Last Name",
      //prettier-ignore
      "email": "Email",
      "phone-number": "Phone Number",
      "comments-or-questions": "Comments or Questions",
      //prettier-ignore
      "submit": "Submit",
      "learn-more": "Learn More",
    },
    fr: {
      "contact-us-title-meta": "Ameri-STEAM - Contactez-nous",
      "contact-us-desc-meta":
        "Faites partie de la prochaine génération de leaders grâce à nos programmes d'enrichissement éducatif, de mentorat et de formation technologique.",
      "contact-us-header": "Contactez-nous - Ameri-STEAM",
      "about-us-title": "À propos de nous",
      "about-us-desc": "Découvrez ce qui rend Ameri-STEAM spécial.",
      "our-history-title": "Notre histoire",
      "our-history-desc": "Parcourez notre galerie de photos des années passées.",
      "contact-us-title": "Contactez-nous",
      "contact-us-desc": "Contactez-nous pour toute question.",
      "first-name": "Prénom",
      "last-name": "Nom de famille",
      //prettier-ignore
      "email": "Email",
      "phone-number": "Numéro de téléphone",
      "comments-or-questions": "Commentaires ou questions",
      //prettier-ignore
      "submit": "Soumettre",
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
