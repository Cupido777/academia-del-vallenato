// Sistema de traducción para la Academia del Vallenato
class TranslationSystem {
    constructor() {
        this.currentLang = 'es';
        this.translations = {
            'es': {
                // Header
                'hero.title': 'Descubre el Alma del Vallenato',
                'hero.subtitle': 'Aprende los secretos del acordeón, la caja y la guacharaca con los mejores maestros de la música colombiana.',
                'hero.cta1': 'Ver Clases',
                'hero.cta2': 'Contactar',
                
                // About Section
                'about.title': 'Sobre la Academia',
                'about.subtitle': 'Preservando y enseñando la tradición vallenata desde 2010',
                'about.mission.title': 'Nuestra Misión',
                'about.mission.text': 'Formar músicos integrales en el género vallenato, preservando sus raíces tradicionales mientras incorporamos técnicas modernas de enseñanza.',
                'about.vision.title': 'Nuestra Visión',
                'about.vision.text': 'Ser el centro de enseñanza de vallenato más reconocido de Colombia, formando a las nuevas generaciones de acordeoneros y músicos tradicionales.',
                'about.history.title': 'Nuestra Historia',
                'about.history.text': 'Fundada en 2010 por el maestro acordeonero Rafael Martínez, la Academia del Vallenato ha formado a más de 500 músicos que hoy en día llevan nuestra tradición por todo el mundo.',
                
                // Services Section
                'services.title': 'Nuestros Servicios',
                'services.subtitle': 'Todo lo que necesitas para tu formación musical',
                'services.pedagogy.title': 'Pedagogía Musical',
                'services.pedagogy.description': 'Metodología especializada para niños, jóvenes y adultos. Aprende a tu ritmo con nuestro sistema progresivo.',
                'services.classes.title': 'Clases de Música',
                'services.classes.description': 'Clases prácticas de acordeón, caja vallenata, guacharaca, bajo eléctrico y canto. Enfoque 100% práctico.',
                'services.liveMusic.title': 'Música en Vivo',
                'services.liveMusic.description': 'Contrata nuestras agrupaciones vallenatas para eventos privados, bodas, fiestas y presentaciones especiales.',
                'services.learnMore': 'Más información',
                
                // Instruments Section
                'instruments.title': 'Instrumentos Vallenatos',
                'instruments.subtitle': 'Encuentra los mejores instrumentos para tu práctica musical',
                'instruments.accordion.name': 'Acordeón Hohner Corona II',
                'instruments.accordion.description': 'Acordeón profesional de 34 notas, ideal para vallenato tradicional.',
                'instruments.accordion.price': '$4.500.000 COP',
                'instruments.caja.name': 'Caja Vallenata Profesional',
                'instruments.caja.description': 'Caja artesanal en madera de roble con parches de cuero natural.',
                'instruments.caja.price': '$350.000 COP',
                'instruments.guacharaca.name': 'Guacharaca Tradicional',
                'instruments.guacharaca.description': 'Guacharaca artesanal en madera de guayacán con rascador de metal.',
                'instruments.guacharaca.price': '$120.000 COP',
                'instruments.viewDetails': 'Ver detalles',
                'instruments.seeAll': 'Ver todos los instrumentos',
                
                // Testimonials
                'testimonials.title': 'Testimonios',
                'testimonials.subtitle': 'Lo que dicen nuestros estudiantes',
                'testimonials.testimonial1.text': '"La Academia del Vallenato transformó mi forma de entender la música. En 6 meses ya podía tocar varias canciones tradicionales."',
                'testimonials.testimonial1.author': 'Carlos Mendoza',
                'testimonials.testimonial1.role': 'Estudiante de acordeón',
                'testimonials.testimonial2.text': '"Los profesores son excelentes y la metodología es muy práctica. Mi hijo de 10 años ya toca la guacharaca como un profesional."',
                'testimonials.testimonial2.author': 'María González',
                'testimonials.testimonial2.role': 'Madre de estudiante',
                
                // CTA
                'cta.title': '¿Listo para comenzar tu viaje musical?',
                'cta.text': 'Únete a nuestra comunidad y descubre el fascinante mundo del vallenato.',
                'cta.contact': 'Contáctanos',
                'cta.classes': 'Ver clases',
                
                // Footer
                'footer.description': 'Formando a los músicos vallenatos del futuro desde 2010.',
                'footer.links.title': 'Enlaces rápidos',
                'footer.links.home': 'Inicio',
                'footer.links.services': 'Servicios',
                'footer.links.classes': 'Clases',
                'footer.links.instruments': 'Instrumentos',
                'footer.links.contact': 'Contacto',
                'footer.contact.title': 'Contacto',
                'footer.contact.address': 'Calle 45 # 12-34, Valledupar, Colombia',
                'footer.newsletter.title': 'Boletín informativo',
                'footer.newsletter.description': 'Suscríbete para recibir noticias sobre cursos y eventos.',
                'footer.newsletter.placeholder': 'Tu correo electrónico',
                'footer.newsletter.subscribe': 'Suscribirse',
                'footer.copyright': '© 2023 Academia del Vallenato. Todos los derechos reservados.',
                'footer.privacy': 'Política de privacidad',
                'footer.terms': 'Términos de servicio'
            },
            'en': {
                // Header
                'hero.title': 'Discover the Soul of Vallenato',
                'hero.subtitle': 'Learn the secrets of the accordion, caja and guacharaca with the best teachers of Colombian music.',
                'hero.cta1': 'View Classes',
                'hero.cta2': 'Contact Us',
                
                // About Section
                'about.title': 'About the Academy',
                'about.subtitle': 'Preserving and teaching the vallenato tradition since 2010',
                'about.mission.title': 'Our Mission',
                'about.mission.text': 'To train comprehensive musicians in the vallenato genre, preserving its traditional roots while incorporating modern teaching techniques.',
                'about.vision.title': 'Our Vision',
                'about.vision.text': 'To be the most recognized vallenato teaching center in Colombia, training the new generations of accordionists and traditional musicians.',
                'about.history.title': 'Our History',
                'about.history.text': 'Founded in 2010 by master accordionist Rafael Martínez, the Vallenato Academy has trained more than 500 musicians who today carry our tradition around the world.',
                
                // Services Section
                'services.title': 'Our Services',
                'services.subtitle': 'Everything you need for your musical training',
                'services.pedagogy.title': 'Music Pedagogy',
                'services.pedagogy.description': 'Specialized methodology for children, youth and adults. Learn at your own pace with our progressive system.',
                'services.classes.title': 'Music Classes',
                'services.classes.description': 'Practical classes in accordion, vallenato drum, guacharaca, electric bass and singing. 100% practical approach.',
                'services.liveMusic.title': 'Live Music',
                'services.liveMusic.description': 'Hire our vallenato groups for private events, weddings, parties and special presentations.',
                'services.learnMore': 'Learn More',
                
                // Instruments Section
                'instruments.title': 'Vallenato Instruments',
                'instruments.subtitle': 'Find the best instruments for your musical practice',
                'instruments.accordion.name': 'Hohner Corona II Accordion',
                'instruments.accordion.description': 'Professional 34-note accordion, ideal for traditional vallenato.',
                'instruments.accordion.price': '$4,500,000 COP',
                'instruments.caja.name': 'Professional Vallenato Drum',
                'instruments.caja.description': 'Artisanal drum made of oak wood with natural leather patches.',
                'instruments.caja.price': '$350,000 COP',
                'instruments.guacharaca.name': 'Traditional Guacharaca',
                'instruments.guacharaca.description': 'Artisanal guacharaca made of guayacán wood with metal scraper.',
                'instruments.guacharaca.price': '$120,000 COP',
                'instruments.viewDetails': 'View Details',
                'instruments.seeAll': 'See All Instruments',
                
                // Testimonials
                'testimonials.title': 'Testimonials',
                'testimonials.subtitle': 'What our students say',
                'testimonials.testimonial1.text': '"The Vallenato Academy transformed my understanding of music. In 6 months I could already play several traditional songs."',
                'testimonials.testimonial1.author': 'Carlos Mendoza',
                'testimonials.testimonial1.role': 'Accordion Student',
                'testimonials.testimonial2.text': '"The teachers are excellent and the methodology is very practical. My 10-year-old son already plays the guacharaca like a professional."',
                'testimonials.testimonial2.author': 'María González',
                'testimonials.testimonial2.role': 'Student\'s Mother',
                
                // CTA
                'cta.title': 'Ready to Start Your Musical Journey?',
                'cta.text': 'Join our community and discover the fascinating world of vallenato.',
                'cta.contact': 'Contact Us',
                'cta.classes': 'View Classes',
                
                // Footer
                'footer.description': 'Training the vallenato musicians of the future since 2010.',
                'footer.links.title': 'Quick Links',
                'footer.links.home': 'Home',
                'footer.links.services': 'Services',
                'footer.links.classes': 'Classes',
                'footer.links.instruments': 'Instruments',
                'footer.links.contact': 'Contact',
                'footer.contact.title': 'Contact',
                'footer.contact.address': 'Street 45 # 12-34, Valledupar, Colombia',
                'footer.newsletter.title': 'Newsletter',
                'footer.newsletter.description': 'Subscribe to receive news about courses and events.',
                'footer.newsletter.placeholder': 'Your email address',
                'footer.newsletter.subscribe': 'Subscribe',
                'footer.copyright': '© 2023 Vallenato Academy. All rights reserved.',
                'footer.privacy': 'Privacy Policy',
                'footer.terms': 'Terms of Service'
            }
        };
        
        this.init();
    }
    
    init() {
        // Cargar idioma guardado
        const savedLang = localStorage.getItem('academia-vallenato-lang');
        if (savedLang) {
            this.currentLang = savedLang;
        }
        
        // Aplicar traducciones iniciales
        this.applyTranslations();
        
        // Configurar eventos del selector de idioma
        this.setupLanguageSelector();
    }
    
    setupLanguageSelector() {
        const toggle = document.getElementById('language-toggle');
        const options = document.querySelectorAll('.language-option');
        
        // Actualizar texto del botón según el idioma actual
        this.updateLanguageButton();
        
        // Configurar eventos para cambiar idioma
        options.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }
    
    updateLanguageButton() {
        const toggle = document.getElementById('language-toggle');
        const flag = toggle.querySelector('.language-flag');
        const text = toggle.querySelector('.language-text');
        
        if (this.currentLang === 'es') {
            flag.textContent = '🇪🇸';
            text.textContent = 'ES';
        } else {
            flag.textContent = '🇺🇸';
            text.textContent = 'EN';
        }
    }
    
    changeLanguage(lang) {
        if (this.currentLang !== lang && this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('academia-vallenato-lang', lang);
            this.applyTranslations();
            this.updateLanguageButton();
        }
    }
    
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
        
        // Traducir placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            
            if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
                element.setAttribute('placeholder', this.translations[this.currentLang][key]);
            }
        });
    }
}

// Sistema de navegación y funcionalidad general
class NavigationSystem {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupActiveNavLinks();
    }
    
    setupMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.querySelector('.nav');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    setupScrollEffects() {
        // Header scroll effect
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    setupActiveNavLinks() {
        // Actualizar enlace activo basado en la sección visible
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === current) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Sistema de formularios
class FormSystem {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupNewsletterForm();
    }
    
    setupNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                if (this.validateEmail(email)) {
                    // Aquí se enviaría el email a un servicio de newsletter
                    // Por ahora solo mostramos un mensaje de éxito
                    alert('¡Gracias por suscribirte a nuestro boletín!');
                    emailInput.value = '';
                } else {
                    alert('Por favor, introduce un email válido.');
                }
            });
        }
    }
    
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar sistemas
    new TranslationSystem();
    new NavigationSystem();
    new FormSystem();
    
    // Inicializar sistema de estadísticas
    if (typeof StatsSystem !== 'undefined') {
        new StatsSystem();
    }
    
    // Animaciones de entrada
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .instrument-card, .testimonial');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .instrument-card, .testimonial');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar
    animateOnScroll();
});
