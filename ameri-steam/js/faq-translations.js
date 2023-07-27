$(document).ready(function () {
  var translations = {
    en: {
      "faq-title-meta": "Ameri-STEAM - FAQ",
      "faq-desc-meta":
        "Be a part of the next generation of leaders through our educational enrichment, mentoring, and technology training programs.",
      "faq-header-title": "FAQ - Ameri-STEAM",
      "faq-main-header": "FAQ",
      "faq-main-desc":
        "Answers to commonly asked questions about the program, including applications, schedules, activities, safety measures, and more.",
      "about-us-title": "About us",
      "about-us-desc": "Find out what makes Ameri-STEAM special.",
      "our-history-title": "Our History",
      "our-history-desc": "Browse our gallery of photos from past years.",
      "contact-us-title": "Contact Us",
      "contact-us-desc": "Reach out to us with any questions.",
      "faq-q1": "What are the dates for the next Ameri-STEAM program?",
      "faq-a1":
        "July 14, 2023 to August 31, 2023 with 5 sessions of 10 days. <br /><br />Future programs:<br />Hackathon - November 2023<br />Leadership Bootcamp for Girls - August 2024",
      "faq-q2": "What is the age range for students that want to attend the program?",
      "faq-a2": "Girls from 13 to 17 years old.",
      "faq-q3": "What kind of activities are available for students during their stay?",
      "faq-a3":
        "There will be coding lessons to comprehend contemporary digital interactions, oratory sessions to sharpen your persuasive skills, leadership workshops to nurture the ability to inspire community changes, sports activities to promote wellness and foster teamwork and effort, and English classes to equip students for global engagement.",
      "faq-q4":
        "What are the sleeping arrangements like? How many students are assigned to each room?",
      "faq-a4":
        "The girls sleep together in shared rooms. Each room is 12 square meters and equipped with 6 single beds, a small kitchen, a bathroom and air conditioning.",
      "faq-q5":
        "What measures does the program take to ensure the safety and health of its students, particularly regarding food allergies, medications, and emergencies?",
      "faq-a5":
        "Girls with particular health issues are exempted from sports classes for their safety. The food served also take into account campers' allergies and other health problems. There is no infirmary available on the campsite, so each participant with specific health issues is required to bring their own medications.",
      "faq-q6":
        "Can parents contact or visit their children during the program? If so, what are the guidelines for this?",
      "faq-a6":
        "Visits are only rarely accepted and under very particular circumstances. If a visit is allowed, there is a protocol in place that must be followed.",
      "faq-q7":
        "What is the staff-to-student ratio and what qualifications do the staff members have?",
      "faq-a7":
        "The ratio is 1 instructor for every 6 campers. The instructors and facilitators are personnel from the educational system. They have training by the organizers and the Ministry of Camp Management.",
      "footer-sign-up": "Join the next generation of leaders.",
      "footer-sign-up-btn": "Sign Up",
      "learn-more": "Learn More",
    },
    fr: {
      "faq-title-meta": "Ameri-STEAM - FAQ",
      "faq-desc-meta":
        "Rejoignez la prochaine génération de leaders grâce à nos programmes d'enrichissement éducatif, de mentorat et de formation technologique.",
      "faq-header-title": "FAQ - Ameri-STEAM",
      "faq-main-header": "Questions Fréquentes",
      "faq-main-desc":
        "Réponses aux questions fréquemment posées sur le programme, y compris les applications, les horaires, les activités, les mesures de sécurité et plus encore.",
      "about-us-title": "À propos de nous",
      "about-us-desc": "Découvrez ce qui rend Ameri-STEAM spécial.",
      "our-history-title": "Notre histoire",
      "our-history-desc": "Parcourez notre galerie de photos des années passées.",
      "contact-us-title": "Contactez nous",
      "contact-us-desc": "Contactez-nous pour toute question.",
      "faq-q1": "Quelles sont les dates du prochain programme Ameri-STEAM?",
      "faq-a1":
        "Du 14 juillet 2023 au 31 août 2023 avec 5 sessions de 10 jours. <br /><br />Programmes futurs:<br />Hackathon - Novembre 2023<br />Leadership Bootcamp pour les filles - Août 2024",
      "faq-q2": "Quelle est la tranche d'âge des étudiants qui souhaitent participer au programme?",
      "faq-a2": "Filles de 13 à 17 ans.",
      "faq-q3": "Quel type d'activités sont disponibles pour les étudiants pendant leur séjour?",
      "faq-a3":
        "Il y aura des cours de coding pour cerner les interactions numériques du moment, des sessions d'art oratoire pour défendre vos points de vue de façon impactante, des ateliers de leadership pour inspirer au quotidien et induire des changements dans votre communauté, des activités sportives pour le bien-être et accroitre son goût de l'effort et de la coordination, et des cours d'anglais pour pour se préparer à la citoyenneté mondiale.",
      "faq-q4":
        "Comment sont organisées les arrangements de couchage? Combien d'étudiants sont assignés à chaque chambre?",
      "faq-a4":
        "Les filles dorment ensemble dans des chambres partagées. Chaque chambre fait 12 mètres carrés et est équipée de 6 lits simples, une petite cuisine, une salle de bains et la climatisation.",
      "faq-q5":
        "Quelles mesures le programme prend-il pour assurer la sécurité et la santé de ses étudiants, notamment en ce qui concerne les allergies alimentaires, les médicaments et les urgences?",
      "faq-a5":
        "Le centre et les pièces sont codifiés avec des signalisation pour aider à la sécurité. Les paents des campeuses remplissent une une fiche confidentielle de santé où sont précisées les allergies et crises fréquentes. Les médicaments sont conservés dans un coffre dont les clés sont gardées par l'équipe d'encadrement. Un partenariat est établi avec les SAMU et la croix rouge pour assistance. Enfin, le camp est couvert par un contrat d'assurance.",
      "faq-q6":
        "Les parents peuvent-ils contacter ou visiter leurs enfants pendant le programme? Si oui, quelles sont les directives pour cela?",
      "faq-a6":
        "Les visites sont acceptés rarement et dans des cas très particuliers. Dans ce cas, il y a un protocole établi à cet effet.",
      "faq-q7":
        "Quel est le ratio personnel-étudiant et quelles qualifications ont les membres du personnel?",
      "faq-a7":
        "Le ration est 1 encadreurs pour 6 campeuses. Les encadreurs et animateurs sont des personnels d'enseignement et d'encadrement du système éducatif. Il bénéficient de formations par les organisateurs et le ministère de gestion des camps de vacances.",
      "footer-sign-up": "Rejoignez la prochaine génération de leaders.",
      "footer-sign-up-btn": "S'inscrire",
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
