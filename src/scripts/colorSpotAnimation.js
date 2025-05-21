/**
 * Animation des taches de couleur au scroll
 * Permet d'illuminer/éteindre les taches en fonction de la direction du scroll
 */
export function initColorSpotAnimation() {
  const containers = document.querySelectorAll('[id^="image-container-"]');
  if (containers.length === 0) return;

  // Détection de Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Ajuster les propriétés CSS des taches spécifiquement pour Safari
  if (isSafari) {
    // Créer une feuille de style pour Safari
    const safariStyleSheet = document.createElement("style");
    safariStyleSheet.textContent = `
      .blue-spot, .pink-spot-left, .yellow-spot, .pink-left-spot {
        transform: scale(0.85) !important;
        filter: blur(20px) !important;
        opacity: 0.6 !important;
        transition: filter 0.3s ease, opacity 0.3s ease !important;
      }
      .blue-spot.scroll-active, .pink-spot-left.scroll-active, 
      .yellow-spot.scroll-active, .pink-left-spot.scroll-active {
        filter: blur(25px) !important;
        opacity: 0.75 !important;
      }
    `;
    document.head.appendChild(safariStyleSheet);
  }

  // Animation des taches au scroll
  const handleScroll = () => {
    // Déterminer la direction du scroll - compatible Safari
    const currentScrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const isScrollingDown = currentScrollY > (handleScroll.lastScrollY || 0);
    handleScroll.lastScrollY = currentScrollY;

    // Si on est tout en haut de la page, s'assurer que toutes les taches sont éteintes
    if (currentScrollY < 50) {
      containers.forEach((container) => {
        const blueSpot = container.querySelector(".blue-spot");
        const pinkSpot = container.querySelector(
          ".pink-spot-left, .pink-left-spot"
        );
        const yellowSpot = container.querySelector(".yellow-spot");

        [blueSpot, pinkSpot, yellowSpot].filter(Boolean).forEach((spot) => {
          spot.classList.remove("scroll-active");
        });
      });
      return; // Sortir de la fonction si on est en haut de page
    }

    // Calculer la vitesse de scroll (0-100)
    const scrollSpeed = Math.min(
      100,
      Math.abs(currentScrollY - (handleScroll.previousY || 0)) * 5
    );
    handleScroll.previousY = currentScrollY;

    // Adaptation de la durée de transition basée sur la vitesse de scroll
    const transitionDuration = Math.max(0.05, 0.25 - scrollSpeed / 500);

    containers.forEach((container) => {
      // Vérifier si le container est visible
      const rect = container.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      // Calculer la position relative dans la fenêtre (0 à 1)
      const viewportPosition = 1 - rect.top / window.innerHeight;

      // Récupérer les spots avec fallback pour différentes nomenclatures de classe
      const blueSpot = container.querySelector(".blue-spot");
      const pinkSpot = container.querySelector(
        ".pink-spot-left, .pink-left-spot"
      );
      const yellowSpot = container.querySelector(".yellow-spot");

      // Appliquer la transition à tous les spots existants en vérifiant leur existence
      [blueSpot, pinkSpot, yellowSpot].filter(Boolean).forEach((spot) => {
        // Ne pas modifier directement la propriété de transition sur Safari
        // car elle est définie dans la feuille de style
        if (!isSafari) {
          spot.style.transition = `all ${transitionDuration}s ease`;
        }
      });

      // Définir les seuils d'activation avec des valeurs plus élevées
      const thresholds = {
        blue: 0.5, // Le bleu s'allume à 50% de la fenêtre (était 0.3)
        pink: 0.65, // Le rose s'allume à 65% de la fenêtre (était 0.45)
        yellow: 0.8, // Le jaune s'allume à 80% de la fenêtre (était 0.6)
      };

      if (isScrollingDown) {
        // Mode descente : allumer dans l'ordre bleu → rose → jaune
        if (blueSpot && viewportPosition >= thresholds.blue) {
          blueSpot.classList.add("scroll-active");
        }

        if (pinkSpot && viewportPosition >= thresholds.pink) {
          pinkSpot.classList.add("scroll-active");
        }

        if (yellowSpot && viewportPosition >= thresholds.yellow) {
          yellowSpot.classList.add("scroll-active");
        }
      } else {
        // Mode remontée : éteindre dans l'ordre jaune → rose → bleu
        if (yellowSpot && viewportPosition < thresholds.yellow) {
          yellowSpot.classList.remove("scroll-active");
        }

        if (pinkSpot && viewportPosition < thresholds.pink) {
          pinkSpot.classList.remove("scroll-active");
        }

        if (blueSpot && viewportPosition < thresholds.blue) {
          blueSpot.classList.remove("scroll-active");
        }
      }
    });
  };

  // Variables statiques pour le suivi du scroll
  handleScroll.lastScrollY = 0;
  handleScroll.previousY = 0;

  // Gestion du scroll avec requestAnimationFrame pour fluidité
  let isScrolling = false;
  let scrollHandler = () => {
    if (!isScrolling) {
      // Utiliser setTimeout comme fallback pour Safari si requestAnimationFrame n'est pas bien supporté
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrolling = false;
        });
      } else {
        setTimeout(() => {
          handleScroll();
          isScrolling = false;
        }, 16); // Environ 60fps
      }
      isScrolling = true;
    }
  };

  // Utiliser les événements passive pour améliorer les performances
  window.addEventListener("scroll", scrollHandler, { passive: true });

  // Déclencher manuellement l'animation lors du chargement initial
  handleScroll();

  // S'assurer que l'animation s'ajuste lors du redimensionnement
  window.addEventListener("resize", handleScroll, { passive: true });

  // Fix pour Safari - forcer un recalcul lors du chargement initial
  setTimeout(handleScroll, 100);
}
