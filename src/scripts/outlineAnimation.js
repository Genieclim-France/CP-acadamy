export function initOutlineAnimation(imgSelector, svgSelector, pathId) {
  document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(imgSelector);
    const svgContainer = document.querySelector(svgSelector);
    const path = document.getElementById(pathId);

    // Alignement du SVG
    function alignSvg() {
      const imgRect = img.getBoundingClientRect();
      svgContainer.style.width = `${imgRect.width}px`;
      svgContainer.style.height = `${imgRect.height}px`;

      // Décalage fixe de quelques pixels vers la droite
      svgContainer.style.right = "-5px"; // Valeur en pixels pour un décalage précis et minime

      if (window.innerWidth >= 768) {
        svgContainer.style.bottom = "0";
      } else {
        svgContainer.style.bottom = `${window.innerHeight - imgRect.bottom}px`;
      }
    }

    alignSvg();
    window.addEventListener("resize", alignSvg);

    // Animation
    const pathLength = path.getTotalLength();
    const visibleSegment = pathLength * 0.03;
    const invisibleSegment = pathLength * 0.97;

    path.style.strokeDasharray = `${visibleSegment} ${invisibleSegment}`;
    path.style.strokeDashoffset = `${pathLength}`;

    let startTime = null;
    const duration = 15000;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const dashOffset =
        pathLength - ((elapsed % duration) / duration) * pathLength;
      path.style.strokeDashoffset = dashOffset.toString();

      requestAnimationFrame(animate);
    }

    setTimeout(() => {
      svgContainer.style.opacity = "0.75";
      path.style.strokeOpacity = "0.75";
      requestAnimationFrame(animate);
    }, 2000);
  });
}
