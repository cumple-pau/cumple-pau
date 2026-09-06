let currentSlide = 0;
let isTransitioning = false;

const slides = document.querySelectorAll(".slide");

const navigation = document.querySelector(".navigation");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");


/* ================================================= */
/* TEMAS DE CADA DIAPOSITIVA */
/* ================================================= */

const themes = [
    "theme-cover",        // 0 - Portada
    "theme-narnia",       // 1 - Narnia
    "theme-outerbanks",   // 2 - Outer Banks
    "theme-bella",        // 3 - Bella y la Bestia
    "theme-bridgerton",   // 4 - Bridgerton
    "theme-princess",     // 5 - Princesas / Disney
    "theme-narnia",       // 6 - Narnia
    "theme-harrypotter",  // 7 - Harry Potter
    "theme-narnia",       // 8 - Narnia
    "theme-outerbanks",   // 9 - Outer Banks
    "theme-final",        // 10 - 100/10
    "theme-infinity"      // 11 - Infinito
];


/* ================================================= */
/* PREPARAR DIAPOSITIVAS */
/* ================================================= */

slides.forEach((slide, index) => {

    slide.classList.add(themes[index] || "theme-cover");

});


/* ================================================= */
/* NAVEGACIÓN */
/* ================================================= */

function updateNavigation() {

    if (currentSlide === 0) {

        navigation.style.display = "none";

        return;

    }

    navigation.style.display = "flex";


    /* FLECHA IZQUIERDA */

    if (currentSlide <= 0) {

        prevButton.style.display = "none";

    } else {

        prevButton.style.display = "block";

    }


    /* FLECHA DERECHA */

    if (currentSlide >= slides.length - 1) {

        nextButton.style.display = "none";

    } else {

        nextButton.style.display = "block";

    }

}


/* ================================================= */
/* CAMBIAR DIAPOSITIVA */
/* ================================================= */

function showSlide(index) {

    if (isTransitioning) return;


    if (index < 0) {

        index = 0;

    }

    if (index >= slides.length) {

        index = slides.length - 1;

    }

    if (index === currentSlide) return;


    isTransitioning = true;


    const oldIndex = currentSlide;

    const oldSlide = slides[oldIndex];

    const newSlide = slides[index];


    /* DIRECCIÓN */

    const direction =
        index > oldIndex
            ? "forward"
            : "backward";


    /* ================================================= */
    /* LIMPIAR CLASES DE ANIMACIÓN */
    /* ================================================= */

    slides.forEach(slide => {

        slide.classList.remove(
            "slide-enter",
            "slide-leave",
            "forward",
            "backward"
        );

    });


    /* ================================================= */
    /* PREPARAR NUEVA DIAPOSITIVA */
    /* ================================================= */

    newSlide.classList.add(
        "slide-enter",
        direction
    );


    /* ================================================= */
    /* PREPARAR DIAPOSITIVA ANTERIOR */
    /* ================================================= */

    oldSlide.classList.add(
        "slide-leave",
        direction
    );


    /* ================================================= */
    /* FORZAR AL NAVEGADOR A RECONOCER LA ANIMACIÓN */
    /* ================================================= */

    void newSlide.offsetWidth;


    /* ================================================= */
    /* ACTIVAR NUEVA */
    /* ================================================= */

    newSlide.classList.add("active");


    /* ================================================= */
    /* ACTUALIZAR ÍNDICE */
    /* ================================================= */

    currentSlide = index;


    updateNavigation();


    /* ================================================= */
    /* CONFETI */
    /* ================================================= */

    if (index > 0) {

        createConfetti(25);

    }


    if (index === slides.length - 1) {

        createConfetti(80);

    }


    /* ================================================= */
    /* TERMINAR TRANSICIÓN */
    /* ================================================= */

    setTimeout(() => {

        oldSlide.classList.remove(
            "active",
            "slide-leave",
            "forward",
            "backward"
        );


        newSlide.classList.remove(
            "slide-enter",
            "forward",
            "backward"
        );


        isTransitioning = false;

    }, 1300);

}


/* ================================================= */
/* SIGUIENTE */
/* ================================================= */

function nextSlide() {

    if (
        currentSlide <
        slides.length - 1
    ) {

        showSlide(
            currentSlide + 1
        );

    }

}


/* ================================================= */
/* ANTERIOR */
/* ================================================= */

function previousSlide() {

    if (currentSlide > 0) {

        showSlide(
            currentSlide - 1
        );

    }

}


/* ================================================= */
/* TECLADO */
/* ================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            event.preventDefault();

            nextSlide();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);


/* ================================================= */
/* SWIPE MÓVIL */
/* ================================================= */

let touchStartX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);


document.addEventListener(
    "touchend",
    event => {

        const touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchStartX - touchEndX;


        if (
            Math.abs(difference) > 50
        ) {

            if (difference > 0) {

                nextSlide();

            } else {

                previousSlide();

            }

        }

    }
);


/* ================================================= */
/* CONFETI */
/* ================================================= */

function createConfetti(amount = 40) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti"
        );


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDuration =
            (
                Math.random() * 2 + 2
            ) + "s";


        piece.style.animationDelay =
            Math.random() * .5 + "s";


        piece.innerHTML =
            [
                "💗",
                "✨",
                "⭐",
                "🎉"
            ][
                Math.floor(
                    Math.random() * 4
                )
            ];


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}


/* ================================================= */
/* CORAZONES */
/* ================================================= */

function createHeart() {

    const container =
        document.getElementById(
            "hearts-container"
        );


    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    heart.innerHTML = "💗";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            Math.random() * 15 + 14
        ) + "px";


    heart.style.animationDuration =
        (
            Math.random() * 5 + 6
        ) + "s";


    container.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(
    createHeart,
    1100
);


/* ================================================= */
/* FIGURAS DEL FONDO */
/* ================================================= */

function createDecoration() {

    const container =
        document.getElementById(
            "decorations-container"
        );


    const decoration =
        document.createElement("div");


    decoration.classList.add(
        "floating-decoration"
    );


    const figures = [

        "⭐",
        "✨",
        "👑",
        "🎈",
        "🦋",
        "🌸",
        "💫"

    ];


    decoration.innerHTML =
        figures[
            Math.floor(
                Math.random() *
                figures.length
            )
        ];


    decoration.style.left =
        Math.random() * 100 + "vw";


    decoration.style.fontSize =
        (
            Math.random() * 14 + 14
        ) + "px";


    decoration.style.animationDuration =
        (
            Math.random() * 6 + 7
        ) + "s";


    container.appendChild(
        decoration
    );


    setTimeout(() => {

        decoration.remove();

    }, 14000);

}


setInterval(
    createDecoration,
    1500
);


/* ================================================= */
/* CONFETI INICIAL */
/* ================================================= */

setTimeout(() => {

    createConfetti(45);

}, 900);


/* ================================================= */
/* INICIO */
/* ================================================= */

if (slides.length > 0) {

    slides[0].classList.add("active");

}

updateNavigation();
