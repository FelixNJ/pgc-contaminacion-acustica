// CONFIGURACIÓN DEL INFORME POWER BI
const POWER_BI_EMBED_URL = "https://app.powerbi.com/view?r=eyJrIjoiYTkyZmU3MzktNzlkMi00YTQ2LTgyMDAtNWZiMGM0OTdjOGNlIiwidCI6IjA3ZGE2N2EwLTFmNDMtNGU4Yy05NzdmLTVmODhiNjQ3MGVlNiIsImMiOjR9";

const dashboardFrame = document.getElementById("dashboardFrame");

if (POWER_BI_EMBED_URL.trim() !== "" && dashboardFrame) {
  const iframe = document.createElement("iframe");

  iframe.title = "Dashboard de contaminación acústica en Power BI";
  iframe.src = POWER_BI_EMBED_URL;
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("loading", "lazy");

  dashboardFrame.replaceChildren(iframe);
}

// MENÚ PARA DISPOSITIVOS MÓVILES
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// BOTÓN PARA VOLVER AL INICIO
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (backTop) {
    backTop.classList.toggle("visible", window.scrollY > 500);
  }
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
