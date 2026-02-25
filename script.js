// ===============================
// 1. SPLASH SCREEN
// ===============================
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");

    if (splash) {
        setTimeout(() => {
            splash.classList.add("hide");
            
            // Boa prática: Remove o splash do HTML após a animação (1s) 
            // para não atrapalhar cliques invisíveis na tela
            setTimeout(() => splash.remove(), 1000); 
        }, 2600);
    }
});

// ===============================
// 2. LOGO SUAVE AO CARREGAR
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const logoTopo = document.querySelector(".logo-topo img");

    if (logoTopo) {
        // Estado inicial
        logoTopo.style.opacity = "0";
        logoTopo.style.transform = "translateY(-15px)";
        logoTopo.style.transition = "all 1.2s ease";

        // Anima após um breve momento
        setTimeout(() => {
            logoTopo.style.opacity = "0.95";
            logoTopo.style.transform = "translateY(0)";
        }, 300);
    }
});

// ===============================
// 3. ANIMAÇÃO DOS CARDS (Alta Performance)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-estudo");

    // Configuração do Observador (Avisa quando o elemento aparece na tela)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o card entrou na tela...
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // Para de observar o card depois que ele já apareceu uma vez
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Dispara quando 10% do card estiver visível
        rootMargin: "0px 0px -20px 0px"
    });

    // Prepara cada card antes de ser observado
    cards.forEach(card => {
        // Esconde o card no JS (Progressive Enhancement)
        // Se o JS falhar, o CSS normal garante que o card continue visível
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        
        // Começa a observar
        observer.observe(card);
    });
});
