// ===============================
// SPLASH SCREEN
// ===============================

window.addEventListener("load", function(){

    const splash = document.getElementById("splash");

    setTimeout(function(){
        splash.classList.add("hide");
    }, 2600);

});


// ===============================
// LOGO SUAVE
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    const logoTopo = document.querySelector(".logo-topo img");

    if(logoTopo){
        logoTopo.style.opacity = "0";
        logoTopo.style.transform = "translateY(-15px)";
        logoTopo.style.transition = "all 1.2s ease";

        setTimeout(function(){
            logoTopo.style.opacity = "0.95";
            logoTopo.style.transform = "translateY(0)";
        }, 300);
    }

});


// ===============================
// ANIMAÇÃO DOS CARDS AO ROLAR
// ===============================

window.addEventListener("scroll", function(){

    const cards = document.querySelectorAll(".card-estudo");

    cards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(cardTop < windowHeight - 100){
            card.classList.add("show");
        }

    });

});