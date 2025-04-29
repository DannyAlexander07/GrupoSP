// Obtener los elementos del menú y los íconos
const botonMenu: HTMLElement | null = document.getElementById('boton-menu');
const botonEquis: HTMLElement | null = document.getElementById('boton-equis');
const menuMovil: HTMLElement | null = document.getElementById('menu-movil');

// Función para abrir el menú
if (botonMenu && menuMovil) {
    botonMenu.addEventListener('click', () => {
        menuMovil.classList.add('activo');
    });
}

// Función para cerrar el menú
if (botonEquis && menuMovil) {
    botonEquis.addEventListener('click', () => {
        menuMovil.classList.remove('activo');
    });
}
