"use strict";
(() => {
    const data = [
        {
            year: "2011",
            title: "Our nice<br>super title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "../IMG/2015.jpg",
            alt: "Paisaje de un río en un bosque con árboles verdes a la izquierda y montañas con neblina al fondo"
        },
        {
            year: "2012",
            title: "Another<br>beautiful year",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            image: "../IMG/2016-vatio.jpg",
            alt: "Paisaje de montañas con árboles verdes y cielo despejado"
        },
        {
            year: "2013",
            title: "A calm<br>and quiet place",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            image: "../IMG/2017.jpg",
            alt: "Bosque con niebla densa y árboles altos"
        },
        {
            year: "2014",
            title: "Sunset<br>in the forest",
            description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
            image: "../IMG/2018-2.jpg",
            alt: "Atardecer con luz dorada entre árboles del bosque"
        },
        {
            year: "2015",
            title: "Winter<br>wonderland",
            description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            image: "../IMG/2019-2.jpg",
            alt: "Bosque cubierto de nieve con árboles desnudos"
        },
        {
            year: "2016",
            title: "Spring<br>rebirth",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
            image: "../IMG/2020-2.png",
            alt: "Bosque verde con flores y árboles floreciendo en primavera"
        }
    ];
    let currentIndex = 0;
    const backgroundImage = document.getElementById("backgroundImage");
    const yearText = document.getElementById("yearText");
    const titleText = document.getElementById("titleText");
    const descriptionText = document.getElementById("descriptionText");
    const yearList = document.getElementById("yearList");
    const btnUp = document.getElementById("btnUp");
    const btnDown = document.getElementById("btnDown");
    function updateContent(index) {
        if (index < 0)
            index = data.length - 1;
        if (index >= data.length)
            index = 0;
        currentIndex = index;
        backgroundImage.style.opacity = "0";
        setTimeout(() => {
            backgroundImage.src = data[index].image;
            backgroundImage.alt = data[index].alt;
            backgroundImage.style.opacity = "1";
        }, 300);
        yearText.textContent = data[index].year;
        titleText.innerHTML = data[index].title;
        descriptionText.textContent = data[index].description;
        [...yearList.children].forEach((li, i) => {
            if (i === index) {
                li.classList.add("active");
                li.setAttribute("aria-current", "true");
                li.tabIndex = 0;
                li.focus();
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
        updateContent(currentIndex - 1);
    });
    btnDown.addEventListener("click", () => {
        updateContent(currentIndex + 1);
    });
    btnUp.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            updateContent(currentIndex - 1);
        }
    });
    btnDown.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            updateContent(currentIndex + 1);
        }
    });
    updateContent(0);
})();
//# sourceMappingURL=nosotros.js.map