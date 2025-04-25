(() => {
    interface TimelineData {
        year: string;
        title: string;
        description: string;
        image: string;
        alt: string;
    }

    const data: TimelineData[] = [
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

    let currentIndex: number = 0;

    const backgroundImage = document.getElementById("backgroundImage") as HTMLImageElement;
    const yearText = document.getElementById("yearText") as HTMLElement;
    const titleText = document.getElementById("titleText") as HTMLElement;
    const descriptionText = document.getElementById("descriptionText") as HTMLElement;
    const yearList = document.getElementById("yearList") as HTMLElement;
    const btnUp = document.getElementById("btnUp") as HTMLButtonElement;
    const btnDown = document.getElementById("btnDown") as HTMLButtonElement;

    function updateContent(index: number): void {
      if (index < 0) index = data.length - 1;
      if (index >= data.length) index = 0;
      currentIndex = index;

      // Fade out image
      backgroundImage.style.opacity = "0";

      setTimeout(() => {
        // Update image src and alt
        backgroundImage.src = data[index].image;
        backgroundImage.alt = data[index].alt;

        // Fade in image
        backgroundImage.style.opacity = "1";
      }, 300);

      // Update text content
      yearText.textContent = data[index].year;
      titleText.innerHTML = data[index].title;
      descriptionText.textContent = data[index].description;

      // Update active year in sidebar
      [...yearList.children].forEach((li, i) => {
        if (i === index) {
          li.classList.add("active");
          li.setAttribute("aria-current", "true");
          (li as HTMLElement).tabIndex = 0;
          (li as HTMLElement).focus();
        } else {
          li.classList.remove("active");
          li.removeAttribute("aria-current");
          (li as HTMLElement).tabIndex = -1;
        }
      });
    }

    // Click on year in sidebar
    yearList.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "LI") {
        const idx = parseInt(target.dataset.index || "0", 10);
        updateContent(idx);
      }
    });

    // Keyboard navigation on year list (Enter or Space)
    yearList.addEventListener("keydown", (e: KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && (e.target as HTMLElement).tagName === "LI") {
        e.preventDefault();
        const idx = parseInt((e.target as HTMLElement).dataset.index || "0", 10);
        updateContent(idx);
      }
    });

    // Up button
    btnUp.addEventListener("click", () => {
      updateContent(currentIndex - 1);
    });

    // Down button
    btnDown.addEventListener("click", () => {
      updateContent(currentIndex + 1);
    });

    // Keyboard support for buttons
    btnUp.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        updateContent(currentIndex - 1);
      }
    });
    btnDown.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        updateContent(currentIndex + 1);
      }
    });

    // Initialize
    updateContent(0);
})();
