// Sistema de estadísticas para la Academia del Vallenato
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
    
    init() {
        this.loadStats();
        this.trackVisit();
        this.trackClicks();
        this.setupStatsPanel();
        
        // Guardar estadísticas al cerrar la página
        window.addEventListener('beforeunload', () => {
            this.saveStats();
        });
    }
    
    loadStats() {
        const savedStats = localStorage.getItem('academia-vallenato-stats');
        
        if (savedStats) {
            this.stats = JSON.parse(savedStats);
        }
    }
    
    saveStats() {
        localStorage.setItem('academia-vallenato-stats', JSON.stringify(this.stats));
    }
    
    trackVisit() {
        const currentPage = window.location.pathname;
        const now = new Date().toISOString();
        
        // Incrementar visitas totales
        this.stats.totalVisits++;
        
        // Registrar visita a la página actual
        if (!this.stats.pageViews[currentPage]) {
            this.stats.pageViews[currentPage] = 0;
        }
        this.stats.pageViews[currentPage]++;
        
        // Registrar última visita
        this.stats.lastVisit = now;
        
        // Mostrar en consola (para administradores)
        console.log(`📊 Estadísticas - Visitas totales: ${this.stats.totalVisits}`);
        console.log(`📄 Páginas visitadas:`, this.stats.pageViews);
        
        this.saveStats();
    }
    
    trackClicks() {
        // Seguimiento de clics en enlaces importantes
        const trackedLinks = document.querySelectorAll('a[data-section], .btn, .service-link, .instrument-actions a');
        
        trackedLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const section = link.getAttribute('data-section') || link.textContent.trim();
                
                if (!this.stats.clickEvents[section]) {
                    this.stats.clickEvents[section] = 0;
                }
                this.stats.clickEvents[section]++;
                
                console.log(`🖱️ Clic registrado en: ${section}`);
                
                this.saveStats();
            });
        });
        
        // Seguimiento de clics en botones de compra
        const buyButtons = document.querySelectorAll('.buy-btn, .purchase-btn');
        
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const product = button.getAttribute('data-product') || 'Producto desconocido';
                
                if (!this.stats.clickEvents[`compra_${product}`]) {
                    this.stats.clickEvents[`compra_${product}`] = 0;
                }
                this.stats.clickEvents[`compra_${product}`]++;
                
                console.log(`🛒 Intento de compra: ${product}`);
                
                this.saveStats();
            });
        });
    }
    
    setupStatsPanel() {
        // Crear botón para mostrar estadísticas (solo visible para administradores)
        this.createStatsButton();
        
        // Configurar eventos del panel
        const closeButton = document.getElementById('close-stats');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.hideStatsPanel();
            });
        }
        
        // Mostrar estadísticas al hacer doble clic en el logo
        const logo = document.querySelector('.logo');
        if (logo) {
            let clickCount = 0;
            let clickTimer;
            
            logo.addEventListener('click', () => {
                clickCount++;
                
                if (clickCount === 1) {
                    clickTimer = setTimeout(() => {
                        clickCount = 0;
                    }, 500);
                } else if (clickCount === 2) {
                    clearTimeout(clickTimer);
                    clickCount = 0;
                    this.toggleStatsPanel();
                }
            });
        }
    }
    
    createStatsButton() {
        const statsButton = document.createElement('button');
        statsButton.id = 'stats-toggle';
        statsButton.className = 'stats-toggle';
        statsButton.innerHTML = '<i class="fas fa-chart-bar"></i>';
        statsButton.setAttribute('aria-label', 'Mostrar estadísticas');
        
        statsButton.addEventListener('click', () => {
            this.toggleStatsPanel();
        });
        
        document.body.appendChild(statsButton);
    }
    
    toggleStatsPanel() {
        const panel = document.getElementById('stats-panel');
        
        if (panel.classList.contains('visible')) {
            this.hideStatsPanel();
        } else {
            this.showStatsPanel();
        }
    }
    
    showStatsPanel() {
        const panel = document.getElementById('stats-panel');
        const totalVisitsElement = document.getElementById('total-visits');
        const topPagesElement = document.getElementById('top-pages');
        
        // Actualizar datos
        totalVisitsElement.textContent = this.stats.totalVisits.toLocaleString();
        
        // Mostrar páginas más visitadas
        const sortedPages = Object.entries(this.stats.pageViews)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        topPagesElement.innerHTML = '';
        sortedPages.forEach(([page, views]) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="page-name">${this.getPageName(page)}</span>: <span class="page-views">${views}</span>`;
            topPagesElement.appendChild(li);
        });
        
        panel.classList.add('visible');
    }
    
    hideStatsPanel() {
        const panel = document.getElementById('stats-panel');
        panel.classList.remove('visible');
    }
    
    getPageName(pagePath) {
        const pageNames = {
            '/': 'Inicio',
            '/index.html': 'Inicio',
            '/pages/servicios.html': 'Servicios',
            '/pages/clases.html': 'Clases',
            '/pages/musica-en-vivo.html': 'Música en Vivo',
            '/pages/instrumentos.html': 'Instrumentos',
            '/pages/contacto.html': 'Contacto'
        };
        
        return pageNames[pagePath] || pagePath;
    }
    
    // Método para obtener estadísticas (útil para integraciones futuras)
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
