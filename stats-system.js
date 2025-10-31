=== ARCHIVO: stats-system.js ===
/* ==========================================================
   SISTEMA DE ESTADÍSTICAS — ACADEMIA DEL VALLENATO
   ----------------------------------------------------------
   Registra visitas, clics e interacciones del sitio.
   Permite ver las métricas en un panel visual.
   ========================================================== */

class StatsSystem {
  constructor() {
    this.stats = {
      totalVisits: 0,
      pageViews: {},
      clickEvents: {},
      lastVisit: null
    };
    this.init();
  }

  // Inicialización general
  init() {
    this.loadStats();
    this.trackVisit();
    this.trackClicks();
    this.setupStatsPanel();

    // Guardar estadísticas al salir
    window.addEventListener("beforeunload", () => this.saveStats());
  }

  // Carga los datos previos del almacenamiento local
  loadStats() {
    const saved = localStorage.getItem("academia-vallenato-stats");
    if (saved) this.stats = JSON.parse(saved);
  }

  // Guarda las estadísticas actualizadas
  saveStats() {
    localStorage.setItem("academia-vallenato-stats", JSON.stringify(this.stats));
  }

  // Registra visitas a la web
  trackVisit() {
    const page = window.location.pathname;
    const now = new Date().toISOString();

    this.stats.totalVisits++;
    if (!this.stats.pageViews[page]) this.stats.pageViews[page] = 0;
    this.stats.pageViews[page]++;
    this.stats.lastVisit = now;

    console.log(`📊 Visitas totales: ${this.stats.totalVisits}`);
    console.log("📄 Páginas vistas:", this.stats.pageViews);

    this.saveStats();
  }

  // Registra clics en enlaces, botones o productos
  trackClicks() {
    const trackedLinks = document.querySelectorAll(
      "a[data-section], .btn, .service-link, .instrument-actions a"
    );
    trackedLinks.forEach(link => {
      link.addEventListener("click", () => {
        const section = link.getAttribute("data-section") || link.textContent.trim();
        this.stats.clickEvents[section] = (this.stats.clickEvents[section] || 0) + 1;
        console.log(`🖱️ Clic en: ${section}`);
        this.saveStats();
      });
    });

    // Seguimiento de compras
    const buyButtons = document.querySelectorAll(".buy-btn, .purchase-btn");
    buyButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const product = btn.getAttribute("data-product") || "Producto desconocido";
        const key = `compra_${product}`;
        this.stats.clickEvents[key] = (this.stats.clickEvents[key] || 0) + 1;
        console.log(`🛒 Intento de compra: ${product}`);
        this.saveStats();
      });
    });
  }

  // Configura el panel visual de estadísticas
  setupStatsPanel() {
    this.createStatsButton();

    const closeBtn = document.getElementById("close-stats");
    if (closeBtn) closeBtn.addEventListener("click", () => this.hideStatsPanel());

    // Mostrar panel con doble clic en el logo
    const logo = document.querySelector(".logo");
    if (logo) {
      let count = 0;
      let timer;
      logo.addEventListener("click", () => {
        count++;
        if (count === 1) {
          timer = setTimeout(() => (count = 0), 500);
        } else if (count === 2) {
          clearTimeout(timer);
          count = 0;
          this.toggleStatsPanel();
        }
      });
    }
  }

  // Crea el botón flotante del panel
  createStatsButton() {
    const btn = document.createElement("button");
    btn.id = "stats-toggle";
    btn.className = "stats-toggle";
    btn.innerHTML = '<i class="fas fa-chart-bar"></i>';
    btn.setAttribute("aria-label", "Mostrar estadísticas");
    btn.addEventListener("click", () => this.toggleStatsPanel());
    document.body.appendChild(btn);
  }

  // Alterna la visibilidad del panel
  toggleStatsPanel() {
    const panel = document.getElementById("stats-panel");
    panel.classList.contains("visible") ? this.hideStatsPanel() : this.showStatsPanel();
  }

  // Muestra el panel con los datos actualizados
  showStatsPanel() {
    const panel = document.getElementById("stats-panel");
    const totalEl = document.getElementById("total-visits");
    const pagesEl = document.getElementById("top-pages");

    // Mostrar total de visitas
    totalEl.textContent = this.stats.totalVisits.toLocaleString();

    // Mostrar páginas más vistas (máx. 5)
    const sorted = Object.entries(this.stats.pageViews)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    pagesEl.innerHTML = "";
    sorted.forEach(([page, views]) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="page-name">${this.getPageName(page)}</span>: <span class="page-views">${views}</span>`;
      pagesEl.appendChild(li);
    });

    panel.classList.add("visible");
  }

  // Oculta el panel
  hideStatsPanel() {
    const panel = document.getElementById("stats-panel");
    panel.classList.remove("visible");
  }

  // Traduce rutas en nombres legibles
  getPageName(path) {
    const names = {
      "/": "Inicio",
      "/index.html": "Inicio",
      "/pages/servicios.html": "Servicios",
      "/pages/clases.html": "Clases",
      "/pages/musica-en-vivo.html": "Música en Vivo",
      "/pages/instrumentos.html": "Instrumentos",
      "/pages/contacto.html": "Contacto"
    };
    return names[path] || path;
  }

  // Retorna todas las métricas (para integraciones futuras)
  getStats() {
    return {
      ...this.stats,
      topPages: this.getTopPages(5),
      popularSections: this.getPopularSections(5)
    };
  }

  getTopPages(limit = 5) {
    return Object.entries(this.stats.pageViews)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([page, views]) => ({ page, views }));
  }

  getPopularSections(limit = 5) {
    return Object.entries(this.stats.clickEvents)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([section, clicks]) => ({ section, clicks }));
  }
}
