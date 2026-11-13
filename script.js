// CONFIGURACIÓN DEL SITIO
// Cuando el informe esté publicado en Power BI, pega aquí la URL de inserción.
// Ejemplo: https://app.powerbi.com/view?r=...
// Usa una URL de inserción autorizada para compartir el informe con el docente.
// No pegues contraseñas, tokens privados ni credenciales.
const POWER_BI_EMBED_URL = "";

const dashboardFrame = document.getElementById("dashboardFrame");
const dashboardPlaceholder = document.getElementById("dashboardPlaceholder");

if (POWER_BI_EMBED_URL.trim() !== "") {
  const iframe = document.createElement("iframe");
  iframe.title = "Dashboard de contaminación acústica en Power BI";
  iframe.src = POWER_BI_EMBED_URL;
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("loading", "lazy");
  dashboardFrame.replaceChildren(iframe);
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

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

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
