
document.addEventListener('DOMContentLoaded', () => {
    const subtitulos = document.querySelectorAll<HTMLHeadingElement>('.subtitulo2');
  
    subtitulos.forEach((subtitulo) => {
      subtitulo.addEventListener('click', () => {
        const lista = subtitulo.nextElementSibling as HTMLElement;
  
        if (lista && lista.classList.contains('lista')) {
          const isHidden = getComputedStyle(lista).display === 'none';
  
          if (isHidden) {
            lista.style.display = 'flex';
            lista.animate([
              { opacity: 0, transform: 'translateY(-10px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ], {
              duration: 2000,
              easing: 'ease-out',
              fill: 'both'
            });
          } else {
            const animation = lista.animate([
              { opacity: 1, transform: 'translateY(0)' },
              { opacity: 0, transform: 'translateY(-10px)' }
            ], {
              duration: 800,
              easing: 'ease-in',
              fill: 'both'
            });
  
            animation.onfinish = () => {
              lista.style.display = 'none';
            };
          }
        }
      });
    });
  });
  