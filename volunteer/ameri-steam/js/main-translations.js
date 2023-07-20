$(document).ready(function () {
  var translations = {
    en: {
      "home-title": "Your home away from home!",
      "home-desc":
        "Unlock global opportunities through STEAM enrichment, mentoring, and leadership training.",
      "about-us-title": "About Us",
      "about-us-desc": "Find out what makes Ameri-STEAM special.",
      "our-history-title": "Our History",
      "our-history-desc": "Browse our gallery of photos from past years.",
      "contact-us-title": "Contact Us",
      "contact-us-desc": "Reach out to us with any questions.",
      "resources-title": "Resources for Students",
      "resources-desc":
        "Detailed guidelines governing Ameri-STEAM's operations, participant conduct, and engagement protocols.",
      "faq-title": "FAQ",
      "faq-desc":
        "Answers to common inquiries about Ameri-STEAM, its programs, partnerships, and participation procedures.",
      "packing-list-title": "Packing List",
      "packing-list-desc":
        "A comprehensive checklist ensuring participants are well-equipped for Ameri-STEAM programs and events.",
      "policies-title": "Policies and Procedures",
      "policies-desc":
        "Detailed guidelines governing Ameri-STEAM's operations, participant conduct, and engagement protocols.",
      "about-us-header": "About Us",
      "about-us-text":
        "We believe in the power of mentorship, global citizenship, and the potential of young women to become positive agents of change. Read more about our mission, goals, and partners.",
      "our-history-header": "Our History",
      "our-history-text":
        "Over the years, we've reached hundreds of young women, offering them the chance to develop their skills, further their education, and become leaders in their communities. Read more about our journey and significant milestones.",
      "contact-us-header": "Contact Us",
      "contact-us-text":
        "We would love to hear from you! Whether you have questions about our programs, interested in becoming a mentor or partner, or want to make a donation, please reach out to us.",
      "read-more": "Read More",
      "sign-up": "Sign Up",
      //prettier-ignore
      "explore": "Explore",
    },
    fr: {
      "home-title": "Votre maison loin de chez vous!",
      "home-desc":
        "Ouvrez des opportunités mondiales grâce à l'enrichissement STEAM, le mentorat et la formation au leadership.",
      "about-us-title": "À propos de nous",
      "about-us-desc": "Découvrez ce qui rend Ameri-STEAM spécial.",
      "our-history-title": "Notre histoire",
      "our-history-desc": "Parcourez notre galerie de photos des années passées.",
      "contact-us-title": "Contactez nous",
      "contact-us-desc": "Contactez-nous pour toute question.",
      "resources-title": "Ressources pour les étudiants",
      "resources-desc":
        "Des directives détaillées régissant les opérations d'Ameri-STEAM, la conduite des participants et les protocoles d'engagement.",
      "faq-title": "FAQ",
      "faq-desc":
        "Réponses aux questions courantes sur Ameri-STEAM, ses programmes, partenariats et procédures de participation.",
      "packing-list-title": "Liste de colisage",
      "packing-list-desc":
        "Une liste de contrôle complète assurant que les participants sont bien équipés pour les programmes et événements d'Ameri-STEAM.",
      "policies-title": "Politiques et procédures",
      "policies-desc":
        "Des directives détaillées régissant les opérations d'Ameri-STEAM, la conduite des participants et les protocoles d'engagement.",
      "about-us-header": "À propos de nous",
      "about-us-text":
        "Nous croyons au pouvoir du mentorat, à la citoyenneté mondiale et au potentiel des jeunes femmes à devenir des agents de changement positifs. En savoir plus sur notre mission, nos objectifs et nos partenaires.",
      "our-history-header": "Notre histoire",
      "our-history-text":
        "Au fil des ans, nous avons atteint des centaines de jeunes femmes, leur offrant la possibilité de développer leurs compétences, de poursuivre leurs études et de devenir des leaders dans leurs communautés. En savoir plus sur notre parcours et nos jalons importants.",
      "contact-us-header": "Contactez nous",
      "contact-us-text":
        "Nous aimerions avoir de vos nouvelles ! Que vous ayez des questions sur nos programmes, que vous soyez intéressé à devenir un mentor ou un partenaire, ou que vous souhaitiez faire un don, n'hésitez pas à nous contacter.",
      "read-more": "En savoir plus",
      "sign-up": "S'inscrire",
      //prettier-ignore
      "explore": "Explorer",
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
