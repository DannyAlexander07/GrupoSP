"use strict";
(() => {
    const data = [
        {
            year: "2013",
            description: "Mathias Stimman y Vasco Romero, socios fundadores, crean Mood como agencia digital con el proposito de ofrecer una propuesta diferente en un mercado altamente competitivo.",
            image: "../IMG/2013.jpg",
            alt: "Fundadores"
        },
        {
            year: "2015",
            description: "Mood incorpora talentos publicitarios de diferentes especialidades (ATL / BTL / Digital) y se posiciona como una agencia integrada.",
            image: "../IMG/2015.jpg",
            alt: "Equipo Mood"
        },
        {
            year: "2016",
            description: "Se crea la productora Vatio enfocada en generar contenido multiplataforma de alto impacto. Posteriormente, Vatio es absorbida por Mood incorporando perfiles audiovisuales al equipo.",
            image: "../IMG/2016-vatio.jpg",
            alt: "Equipo Audiovisual"
        },
        {
            year: "2017",
            description: "Jose Franco se incorpora como socio y se adquiere la productora de eventos y conciertos Southbound. Se empieza la creacion del holding Grupo SP con el objetivo de crecer sobre una base de eficiencia, orden y solidez.",
            image: "../IMG/2017.jpg",
            alt: "Nuevo Socio"
        },
        {
            year: "2018",
            description: "En el mismo año se crea Conexo, una empresa que ofrecce servicios de contact center y BPO liderada por su gerente Danniel Mendoza.",
            image: "../IMG/2018-2.jpg",
            alt: "Creacion de BPO"
        },
        {
            year: "2018",
            description: "El Grupo SP adquiere una nueva agencia creativa en Perú y la incorpora como Lunar, la agencia hermana de Mood.",
            image: "../IMG/2018-lunar.jpg",
            alt: "Creacion Lunar"
        },
        {
            year: "2019",
            description: "Se crea PublicPartners, una agencia especializada en comunicación corporativa y relaciones públicas liderada por su gerente general Martín León.",
            image: "../IMG/2019-2.jpg",
            alt: "Creacion de PublicPartners"
        },
        {
            year: "2019",
            description: "Se inicia el proceso de internacionalización con las oficinas de Mood en Bogotá y Ciudad de Panamá, lideradas por los country managers Daniel Esguerra y Lorena Navarro, respectivamente.",
            image: "../IMG/2019.jpg",
            alt: "Internacionalizacion Mood"
        },
        {
            year: "2020",
            description: "Se crea SP Ventures como unidad de innovación y aceleración de nuevos negocios. De esta manera, el Grupo SP aplica metodologías agiles para ingresar a nuevos sectores (gastronomían, e-retail y fintech).",
            image: "../IMG/2020.jpg",
            alt: "Creacion de SP Ventures"
        },
        {
            year: "2020",
            description: "Se ingresa al sector gastronómico creando foodpartners, foodtech que desarrolla y opera nuevas marcas de comida que incluyen Brasa21, Melt Burger, La Brava Burger, Mangia, entre otras",
            image: "../IMG/2020-3.jpg",
            alt: "Bosque verde con flores"
        },
        {
            year: "2021",
            description: "Se abre la nueva oficina de PublicPartners Ecuador liderada por su directora general Paloma Garcia",
            image: "../IMG/2021.jpg",
            alt: "Nueva Oficina Ecuador"
        },
        {
            year: "2021",
            description: "En una coyuntura compleja y adversa, se abre la nueva oficina de PublicPartners en Santiago de Chile y con ello el ingreso de Grupo SP al mercado chileno",
            image: "../IMG/2021-1.jpeg",
            alt: "Bosque verde con flores"
        },
        {
            year: "2022",
            description: "Se crea Spyze, una productora y BTL multidisciplinaria, combinando tecnologia y creatividad para crear experiencias que impacten.",
            image: "../IMG/2022.jpg",
            alt: "Bosque verde con flores"
        },
        {
            year: "2022",
            description: "El Grupo SP continúa con su plan de expansión a nivel regional, con la consolidación de sus operaciones en los mercados que ya opera y con el ingreso de nuevos rubros estratégicos, acompañado del crecimiento laboral de sus colaboradores",
            image: "../IMG/2022-1.png",
            alt: "Bosque verde con flores"
        }
    ];
    let currentIndex = 0;
    const backgroundImage = document.getElementById("imagenes");
    const yearText = document.getElementById("yearText");
    const descriptionText = document.getElementById("descriptionText");
    const yearList = document.getElementById("yearList");
    const btnUp = document.getElementById("arriba");
    const btnDown = document.getElementById("abajo");
    const yearScrollContainer = document.querySelector(".contenedor-anios");
    function scrollToActive(index) {
        const activeLi = yearList.children[index];
        if (activeLi && yearScrollContainer) {
            const offsetTop = activeLi.offsetTop;
            const liHeight = activeLi.offsetHeight;
            const containerHeight = yearScrollContainer.clientHeight;
            const scrollTo = offsetTop - (containerHeight / 2) + (liHeight / 2);
            yearScrollContainer.scrollTo({
                top: scrollTo,
                behavior: "smooth"
            });
        }
    }
    function updateContent(index) {
        if (index < 0 || index >= data.length)
            return;
        currentIndex = index;
        backgroundImage.style.opacity = "0";
        setTimeout(() => {
            backgroundImage.src = data[index].image;
            backgroundImage.alt = data[index].alt;
            backgroundImage.style.opacity = "1";
        }, 300);
        yearText.textContent = data[index].year;
        descriptionText.textContent = data[index].description;
        [...yearList.children].forEach((li, i) => {
            if (i === index) {
                li.classList.add("active");
                li.setAttribute("aria-current", "true");
                li.tabIndex = 0;
            }
            else {
                li.classList.remove("active");
                li.removeAttribute("aria-current");
                li.tabIndex = -1;
            }
        });
    }
    yearList.addEventListener("click", (e) => {
        const target = e.target;
        if (target.tagName === "LI") {
            const idx = parseInt(target.dataset.index || "0", 10);
            updateContent(idx);
        }
    });
    yearList.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target.tagName === "LI") {
            e.preventDefault();
            const idx = parseInt(e.target.dataset.index || "0", 10);
            updateContent(idx);
        }
    });
    btnUp.addEventListener("click", () => {
        console.log("btnUp fue clickeado");
        if (currentIndex > 0) {
            updateContent(currentIndex - 1);
        }
    });
    btnDown.addEventListener("click", () => {
        if (currentIndex < data.length - 1) {
            updateContent(currentIndex + 1);
        }
    });
    btnUp.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (currentIndex > 0) {
                updateContent(currentIndex - 1);
            }
        }
    });
    btnDown.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (currentIndex < data.length - 1) {
                updateContent(currentIndex + 1);
            }
        }
    });
    updateContent(0);
})();
//# sourceMappingURL=nosotros.js.map