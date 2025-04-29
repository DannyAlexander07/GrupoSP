"use strict";
const botonMenu = document.getElementById('boton-menu');
const botonEquis = document.getElementById('boton-equis');
const menuMovil = document.getElementById('menu-movil');
if (botonMenu && menuMovil) {
    botonMenu.addEventListener('click', () => {
        menuMovil.classList.add('activo');
    });
}
if (botonEquis && menuMovil) {
    botonEquis.addEventListener('click', () => {
        menuMovil.classList.remove('activo');
    });
}
//# sourceMappingURL=menu-movil.js.map