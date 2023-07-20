$(document).ready(function () {
  var translations = {
    en: {
      "about-us-title-meta": "Ameri-STEAM - About Us",
      "about-us-desc-meta":
        "Be a part of the next generation of leaders through our educational enrichment, mentoring, and technology training programs.",
      "about-us-header": "About Us - Ameri-STEAM",
      "about-us-title": "About us",
      "about-us-desc": "Find out what makes Ameri-STEAM special.",
      "our-history-title": "Our History",
      "our-history-desc": "Browse our gallery of photos from past years.",
      "contact-us-title": "Contact Us",
      "contact-us-desc": "Reach out to us with any questions.",
      "our-mission-title": "Our Mission",
      "about-us-section-1":
        "At Ameri-Steam, we are committed to shaping the future by empowering the young minds of today.",
      "about-us-section-2":
        "We believe that through our educational enrichment programs, personalized mentoring, and leadership training, we can instill the necessary skills and confidence in our students, helping them make a significant positive impact on their communities and the world at large.",
      "about-us-section-3":
        "We understand that the long-term prosperity of a community is heavily reliant on the skills, aptitude, and leadership qualities of its leaders. We take immense pride in being a catalyst for change and fostering an environment where young minds are free to explore, innovate, and lead with confidence.",
      "objectives-title": "Objectives",
      "objectives-1":
        "We aim to collaborate with local and global public and private organizations. Our goal is to unlock new possibilities and resources that enhance girls' access to internships, training, field trips, international travel, and mentorship programs.",
      "objectives-2":
        "Our focus is on equipping young girls with the necessary skills and qualifications to secure admission into top universities worldwide. But that's not all. We also encourage them to return to their communities, take on leadership roles, and create lasting positive impacts.",
      "objectives-3":
        "We strive to connect young girls with world leaders through both group and individual mentorship programs. This way, we empower them with the skills and training they need to become exemplary global citizens, responsible leaders, and catalysts of positive change.",
      "footer-sign-up": "Join the next generation of leaders.",
      "footer-sign-up-btn": "Sign Up",
      "learn-more": "Learn More",
      // prettier-ignore
      "students": "Students",
      // prettier-ignore
      "staff": "Staff",
      "corporate-partners": "Corporate Partners",
      "how-it-started": "How it started",
      "why-ameri-steam": "Why Ameri-STEAM",
    },
    fr: {
      "about-us-title-meta": "Ameri-STEAM - À propos de nous",
      "about-us-desc-meta":
        "Faites partie de la prochaine génération de leaders grâce à nos programmes d'enrichissement éducatif, de mentorat et de formation technologique.",
      "about-us-header": "À propos de nous - Ameri-STEAM",
      "about-us-title": "À propos de nous",
      "our-history-title": "Notre histoire",
      "our-history-desc": "Parcourez notre galerie de photos des années passées.",
      "contact-us-title": "Contactez nous",
      "contact-us-desc": "Contactez-nous pour toute question.",
      "about-us-desc": "Découvrez ce qui rend Ameri-STEAM spécial.",
      "our-mission-title": "Notre Mission",
      "about-us-section-1":
        "Chez Ameri-Steam, nous nous engageons à façonner l'avenir en autonomisant les jeunes esprits d'aujourd'hui.",
      "about-us-section-2":
        "Nous croyons qu'à travers nos programmes d'enrichissement éducatif, de mentorat personnalisé et de formation au leadership, nous pouvons inculquer les compétences et la confiance nécessaires à nos étudiants, les aidant à avoir un impact positif significatif sur leurs communautés et le monde en général.",
      "about-us-section-3":
        "Nous comprenons que la prospérité à long terme d'une communauté repose fortement sur les compétences, l'aptitude et les qualités de leadership de ses leaders. Nous sommes extrêmement fiers d'être un catalyseur de changement et de favoriser un environnement où les jeunes esprits sont libres d'explorer, d'innover et de diriger avec confiance.",
      "objectives-title": "Objectifs",
      "objectives-1":
        "Nous visons à collaborer avec des organisations publiques et privées locales et mondiales. Notre objectif est de débloquer de nouvelles possibilités et ressources qui améliorent l'accès des filles aux stages, à la formation, aux voyages de terrain, aux voyages internationaux et aux programmes de mentorat.",
      "objectives-2":
        "Notre objectif est de doter les jeunes filles des compétences et qualifications nécessaires pour sécuriser leur admission dans les meilleures universités du monde entier. Mais ce n'est pas tout. Nous les encourageons également à retourner dans leurs communautés, à assumer des rôles de leadership et à créer des impacts positifs durables.",
      "objectives-3":
        "Nous nous efforçons de connecter les jeunes filles avec les leaders mondiaux à travers des programmes de mentorat en groupe et individuels. De cette façon, nous les dotons des compétences et de la formation dont elles ont besoin pour devenir d'exemplaires citoyens du monde, des leaders responsables et des catalyseurs de changement positif.",
      "footer-sign-up": "Rejoignez la prochaine génération de leaders.",
      "footer-sign-up-btn": "S'inscrire",
      "learn-more": "En savoir plus",
      // prettier-ignore
      "students": "Étudiants",
      // prettier-ignore
      "staff": "Personnel",
      "corporate-partners": "Partenaires corporatifs",
      "how-it-started": "Comment ça a commencé",
      "why-ameri-steam": "Pourquoi Ameri-STEAM",
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
