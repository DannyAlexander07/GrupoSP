"use strict";
const botonMenu = document.getElementById('boton-menu');
const botonEquis = document.getElementById('boton-equis');
const menuMovil = document.getElementById('menu-movil');
if (botonMenu && menuMovil) {
    botonMenu.addEventListener('click', () => {
        menuMovil.classList.add('activo');
        menuMovil.animate([
            { transform: 'translateX(100%)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 0.9 }
        ], {
            duration: 700,
            easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            fill: 'both'
        });
    });
}
if (botonEquis && menuMovil) {
    botonEquis.addEventListener('click', () => {
        const anim = menuMovil.animate([
            { transform: 'translateX(0)', opacity: 0.9 },
            { transform: 'translateX(100%)', opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.5, 0, 0.75, 0)',
            fill: 'both'
        });
        anim.onfinish = () => {
            menuMovil.classList.remove('activo');
        };
    });
}
//# sourceMappingURL=menu-movil.js.map