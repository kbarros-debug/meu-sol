// Atualizar ano no footer automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});

// Animações suaves quando elementos entram na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação de entrada para cards e seções
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.love-card, .memory-card, .playlist-card, .section-header');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Efeito parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth scroll para navegação (caso adicione menu no futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar efeito hover nas músicas
document.addEventListener('DOMContentLoaded', function() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    
    playlistItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Prevenção de erro de imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Erro ao carregar imagem:', this.src);
            // Pode adicionar uma imagem placeholder aqui se necessário
        });
    });
});

// Função para criar corações flutuantes (efeito especial)
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '1.5rem';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.transition = 'all 3s linear';
    
    document.body.appendChild(heart);
    
    // Animar o coração
    setTimeout(() => {
        heart.style.top = '-10vh';
        heart.style.opacity = '0';
    }, 100);
    
    // Remover após animação
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3100);
}

// Ativar corações flutuantes ocasionalmente
setInterval(createFloatingHeart, 8000);

// Adicionar funcionalidade especial no clique dos corações
document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart-icon');
    
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            // Criar múltiplos corações pequenos
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createFloatingHeart(), i * 200);
            }
        });
    });
});