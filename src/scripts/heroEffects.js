/**
 * Support Safari pour la vidéo
 */
export function initSafariVideoSupport() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    const video = document.querySelector("video");
    if (video) {
      const movSource = document.createElement("source");
      movSource.src = "/assets/hero.mov";
      movSource.type = "video/quicktime";

      if (video.firstChild) {
        video.insertBefore(movSource, video.firstChild);
      } else {
        video.appendChild(movSource);
      }
    }
  }
}

/**
 * Ajuster la taille des taches en fonction de la taille d'écran
 */
export function adjustSpotSizes() {
  const width = window.innerWidth;
  const powderSpots = document.querySelectorAll(".powder-spot");

  powderSpots.forEach((spot) => {
    const spotElement = /** @type {HTMLElement} */ (spot);
    let size;

    if (width >= 1536) {
      // 2xl breakpoint
      size =
        spotElement.style.getPropertyValue("--2xl-size") ||
        spotElement.style.width;
    } else if (width >= 1280) {
      // xl breakpoint
      size =
        spotElement.style.getPropertyValue("--xl-size") ||
        spotElement.style.width;
    } else if (width >= 1024) {
      // lg breakpoint
      size =
        spotElement.style.getPropertyValue("--lg-size") ||
        spotElement.style.width;
    } else {
      size = spotElement.style.width;
    }

    if (size) {
      spotElement.style.width = size;
      spotElement.style.height = size;
    }
  });
}

/**
 * Initialiser l'effet parallaxe
 */
export function initParallax() {
  const heroSection = document.getElementById("hero-section");
  const parallaxElements = document.querySelectorAll(".parallax-element");

  if (!heroSection) return;

  // Position initiale pour chaque élément
  parallaxElements.forEach((element) => {
    const elementHtml = /** @type {HTMLElement} */ (element);

    // Stocker les positions initiales
    const computedStyle = window.getComputedStyle(elementHtml);
    elementHtml.dataset.initialBottom = computedStyle.bottom;
    elementHtml.dataset.initialLeft = computedStyle.left;
    elementHtml.dataset.initialRight = computedStyle.right;

    // S'assurer que la rotation est appliquée correctement
    if (elementHtml.classList.contains("blue-powder")) {
      elementHtml.style.transform = "rotate(15deg)";
    } else if (elementHtml.classList.contains("pink-powder")) {
      elementHtml.style.transform = "rotate(-10deg)";
    } else if (elementHtml.classList.contains("yellow-powder")) {
      elementHtml.style.transform = "rotate(5deg)";
    }
  });

  // Gérer le mouvement parallaxe
  heroSection.addEventListener("mousemove", (e) => {
    // Position de la souris par rapport à la section hero
    const rect = heroSection.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // Position X relative à la section
    const mouseY = e.clientY - rect.top; // Position Y relative à la section

    // Calculer les positions relatives entre 0 et 1
    const xPos = mouseX / rect.width;
    const yPos = mouseY / rect.height;

    // Transformer en valeurs entre -1 et 1
    const moveX = (xPos - 0.5) * 2;
    const moveY = (yPos - 0.5) * 2;

    // Appliquer le parallaxe à chaque élément
    parallaxElements.forEach((element) => {
      const elementHtml = /** @type {HTMLElement} */ (element);
      const speed = parseFloat(elementHtml.dataset.parallaxSpeed || "0.04");
      const translateX = moveX * speed * rect.width;
      const translateY = moveY * speed * rect.height;

      // Déterminer la rotation en fonction de la classe
      let rotation = "0deg";
      if (elementHtml.classList.contains("blue-powder")) {
        rotation = "15deg";
      } else if (elementHtml.classList.contains("pink-powder")) {
        rotation = "-10deg";
      } else if (elementHtml.classList.contains("yellow-powder")) {
        rotation = "5deg";
      }

      // Appliquer la transformation
      elementHtml.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation})`;
    });
  });
}

/**
 * Initialise tous les effets de la section hero
 */
export function initHeroEffects() {
  document.addEventListener("DOMContentLoaded", () => {
    initSafariVideoSupport();
    adjustSpotSizes();
    initParallax();

    // Ajuster au redimensionnement
    window.addEventListener("resize", adjustSpotSizes);
  });
}
