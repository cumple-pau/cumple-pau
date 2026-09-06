/* ================================================= */
/* 🎂 PRESENTACIÓN DE CUMPLEAÑOS */
/* ================================================= */


/* ================================================= */
/* ESTADO PRINCIPAL */
/* ================================================= */

let currentSlide = 0;
let isTransitioning = false;


/* ================================================= */
/* REFERENCIAS */
/* ================================================= */

const slides =
    document.querySelectorAll(".slide");

const prevButton =
    document.getElementById("prev-btn");

const nextButton =
    document.getElementById("next-btn");

const confettiContainer =
    document.getElementById("confetti-container");

const heartsContainer =
    document.getElementById("hearts-container");

const decorationsContainer =
    document.getElementById("decorations-container");


/* ================================================= */
/* TEMAS */
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
/* AÑADIR TEMAS A LOS SLIDES */
/* ================================================= */

slides.forEach((slide, index) => {

    if (themes[index]) {

        slide.classList.add(
            themes[index]
        );

    }

});


/* ================================================= */
/* NAVEGACIÓN */
/* ================================================= */

function updateNavigation() {

    /* Ocultar navegación en portada */

    if (currentSlide === 0) {

        prevButton.style.display = "none";
        nextButton.style.display = "none";

        return;

    }


    /* Mostrar navegación */

    prevButton.style.display = "flex";
    nextButton.style.display = "flex";


    /* Botón anterior */

    if (currentSlide <= 1) {

        prevButton.style.opacity = "0.35";

    } else {

        prevButton.style.opacity = "1";

    }


    /* Botón siguiente */

    if (
        currentSlide >=
        slides.length - 1
    ) {

        nextButton.style.opacity = "0.35";

    } else {

        nextButton.style.opacity = "1";

    }

}


/* ================================================= */
/* MOSTRAR SLIDE */
/* ================================================= */

function showSlide(index) {

    /* Limitar índice */

    if (index < 0) {

        index = 0;

    }

    if (
        index >=
        slides.length
    ) {

        index =
            slides.length - 1;

    }


    /* Evitar cambios innecesarios */

    if (
        index === currentSlide ||
        isTransitioning
    ) {

        return;

    }


    isTransitioning = true;


    /* Dirección */

    const direction =
        index > currentSlide
            ? "forward"
            : "backward";


    const oldSlide =
        slides[currentSlide];

    const newSlide =
        slides[index];


    /* ================================================= */
    /* LIMPIAR ANIMACIONES ANTERIORES */
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
    /* PREPARAR NUEVO SLIDE */
    /* ================================================= */

    newSlide.classList.add(
        "slide-enter",
        direction
    );


    /* ================================================= */
    /* PREPARAR SLIDE ANTERIOR */
    /* ================================================= */

    oldSlide.classList.add(
        "slide-leave",
        direction
    );


    /* ================================================= */
    /* FORZAR REFLOW */
/* ================================================= */

    void newSlide.offsetWidth;


    /* ================================================= */
    /* ACTIVAR NUEVO SLIDE */
    /* ================================================= */

    newSlide.classList.add(
        "active"
    );


    newSlide.classList.remove(
        "slide-enter"
    );


    /* ================================================= */
    /* ACTUALIZAR ÍNDICE */
    /* ================================================= */

    currentSlide =
        index;


    /* ================================================= */
    /* CAMBIAR ATMÓSFERA */
/* ================================================= */

    startThemeAtmosphere(
        themes[currentSlide] ||
        "theme-cover"
    );


    /* ================================================= */
    /* ACTUALIZAR NAVEGACIÓN */
/* ================================================= */

    updateNavigation();


    /* ================================================= */
    /* CONFETI */
/* ================================================= */

    if (index > 0) {

        createConfetti(25);

    }


    /* ================================================= */
    /* EFECTO ESPECIAL AL LLEGAR AL FINAL */
/* ================================================= */

    if (
        index ===
        slides.length - 1
    ) {

        createConfetti(80);

    }


    /* ================================================= */
    /* LIMPIAR TRANSICIÓN */
/* ================================================= */

    setTimeout(() => {

        oldSlide.classList.remove(
            "active",
            "slide-leave",
            "forward",
            "backward"
        );


        newSlide.classList.remove(
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

    if (
        currentSlide > 0
    ) {

        showSlide(
            currentSlide - 1
        );

    }

}


/* ================================================= */
/* BOTONES */
/* ================================================= */

nextButton.addEventListener(
    "click",
    nextSlide
);

prevButton.addEventListener(
    "click",
    previousSlide
);


/* ================================================= */
/* TECLADO */
/* ================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "ArrowRight" ||
            event.key ===
            " "
        ) {

            event.preventDefault();

            nextSlide();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            event.preventDefault();

            previousSlide();

        }

    }
);


/* ================================================= */
/* SWIPE PARA MÓVIL */
/* ================================================= */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener(
    "touchstart",
    event => {

        const touch =
            event.changedTouches[0];

        touchStartX =
            touch.screenX;

        touchStartY =
            touch.screenY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        const touch =
            event.changedTouches[0];

        const touchEndX =
            touch.screenX;

        const touchEndY =
            touch.screenY;


        const deltaX =
            touchEndX -
            touchStartX;

        const deltaY =
            touchEndY -
            touchStartY;


        /* Solo considerar swipe horizontal */

        if (
            Math.abs(deltaX) <
            50
        ) {

            return;

        }


        /* Evitar interpretar scroll vertical */

        if (
            Math.abs(deltaX) <
            Math.abs(deltaY)
        ) {

            return;

        }


        if (deltaX < 0) {

            nextSlide();

        } else {

            previousSlide();

        }

    },
    {
        passive: true
    }
);


/* ================================================= */
/* 🎉 CONFETI */
/* ================================================= */

function createConfetti(
    amount = 20
) {

    const figures = [
        "💗",
        "✨",
        "⭐",
        "🎉"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.textContent =
            figures[
                Math.floor(
                    Math.random() *
                    figures.length
                )
            ];


        /* Posición */

        confetti.style.left =
            Math.random() * 100 +
            "%";


        /* Tamaño */

        confetti.style.fontSize =
            10 +
            Math.random() * 16 +
            "px";


        /* Duración */

        const duration =
            2 +
            Math.random() * 3;


        confetti.style.animationDuration =
            duration +
            "s";


        /* Retraso */

        confetti.style.animationDelay =
            Math.random() *
            .8 +
            "s";


        confettiContainer.appendChild(
            confetti
        );


        /* Eliminar */

        setTimeout(() => {

            confetti.remove();

        }, (duration + 1) * 1000);

    }

}


/* ================================================= */
/* 💗 CORAZONES */
/* ================================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        "💗";


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        12 +
        Math.random() * 14 +
        "px";


    const duration =
        4 +
        Math.random() * 4;


    heart.style.animationDuration =
        duration +
        "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


/* ================================================= */
/* ❤️ CORAZONES AMBIENTALES */
/* ================================================= */

const heartTimer =
    setInterval(() => {

        /*
         * Los corazones siguen existiendo,
         * pero no queremos saturar las
         * diapositivas temáticas.
         */

        if (
            currentSlide === 0 ||
            currentSlide === 10 ||
            currentSlide === 11
        ) {

            createHeart();

        }

    }, 1400);


/* ================================================= */
/* ✨ CONTENEDOR DE PARTÍCULAS TEMÁTICAS */
/* ================================================= */

const themeParticleContainer =
    document.createElement(
        "div"
    );


themeParticleContainer.id =
    "theme-particles";


document.body.appendChild(
    themeParticleContainer
);


/* ================================================= */
/* CONFIGURACIÓN DE ATMÓSFERAS */
/* ================================================= */

const themeEffects = {


    /* ================================================= */
    /* PORTADA */
    /* ================================================= */

    "theme-cover": {

        types: [
            "cross-spark"
        ],

        interval: 950,

        amount: 1,

        duration: [
            2.5,
            4
        ]

    },


    /* ================================================= */
    /* NARNIA */
    /* ================================================= */

    "theme-narnia": {

        types: [
            "narnia-star",
            "narnia-star",
            "narnia-snow",
            "narnia-snow"
        ],

        interval: 700,

        amount: 1,

        duration: [
            4,
            7
        ]

    },


    /* ================================================= */
    /* OUTER BANKS */
    /* ================================================= */

    "theme-outerbanks": {

        types: [
            "outer-sand",
            "outer-sand",
            "outer-light"
        ],

        interval: 500,

        amount: 1,

        duration: [
            3.5,
            6
        ]

    },


    /* ================================================= */
    /* BELLA Y LA BESTIA */
    /* ================================================= */

    "theme-bella": {

        types: [
            "rose-petal",
            "rose-petal",
            "rose-petal",
            "cross-spark"
        ],

        interval: 650,

        amount: 1,

        duration: [
            4,
            6.5
        ]

    },


    /* ================================================= */
    /* BRIDGERTON */
    /* ================================================= */

    "theme-bridgerton": {

        types: [
            "bridge-gold",
            "bridge-gold",
            "bridge-spark"
        ],

        interval: 650,

        amount: 1,

        duration: [
            3.5,
            5.5
        ]

    },


    /* ================================================= */
    /* DISNEY */
    /* ================================================= */

    "theme-princess": {

        types: [
            "disney-star",
            "disney-star",
            "disney-twinkle",
            "cross-spark"
        ],

        interval: 550,

        amount: 1,

        duration: [
            3,
            5
        ]

    },


    /* ================================================= */
    /* HARRY POTTER */
    /* ================================================= */

    "theme-harrypotter": {

        types: [
            "hp-magic",
            "hp-magic",
            "hp-spark",
            "hp-spark"
        ],

        interval: 500,

        amount: 1,

        duration: [
            3,
            5.5
        ]

    },


    /* ================================================= */
    /* 100/10 */
    /* ================================================= */

    "theme-final": {

        types: [
            "final-confetti"
        ],

        interval: 230,

        amount: 2,

        duration: [
            3.5,
            5
        ]

    },


    /* ================================================= */
    /* INFINITO */
    /* ================================================= */

    "theme-infinity": {

        types: [
            "infinity-light",
            "infinity-light",
            "cross-spark"
        ],

        interval: 1500,

        amount: 1,

        duration: [
            7,
            11
        ]

    }

};


/* ================================================= */
/* ESTADO DE ATMÓSFERA */
/* ================================================= */

let themeParticleTimer = null;

let activeTheme =
    themes[currentSlide] ||
    "theme-cover";


/* ================================================= */
/* CREAR PARTÍCULA TEMÁTICA */
/* ================================================= */

function createThemeParticle(
    themeName
) {

    const config =
        themeEffects[themeName];


    if (!config) {

        return;

    }


    for (
        let i = 0;
        i < config.amount;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        /* ================================================= */
        /* TIPO */
        /* ================================================= */

        const type =
            config.types[
                Math.floor(
                    Math.random() *
                    config.types.length
                )
            ];


        particle.className =
            "theme-particle " +
            type;


        /* ================================================= */
        /* POSICIÓN */
        /* ================================================= */

        const x =
            Math.random() * 100;


        let y;


        if (
            type ===
            "final-confetti"
        ) {

            y = -5;

        } else {

            y =
                20 +
                Math.random() * 70;

        }


        particle.style.left =
            `${x}vw`;


        particle.style.top =
            `${y}vh`;


        /* ================================================= */
        /* TAMAÑO */
        /* ================================================= */

        let size;


        if (

            type ===
            "narnia-star" ||

            type ===
            "disney-star" ||

            type ===
            "disney-twinkle" ||

            type ===
            "bridge-spark" ||

            type ===
            "hp-spark"

        ) {

            size =
                8 +
                Math.random() * 9;

        } else {

            size =
                2.5 +
                Math.random() * 4;

        }


        particle.style.setProperty(
            "--size",
            `${size}px`
        );


        /* ================================================= */
        /* OPACIDAD */
        /* ================================================= */

        let opacity =
            .25 +
            Math.random() * .45;


        if (
            type ===
            "cross-spark"
        ) {

            opacity =
                .5 +
                Math.random() * .4;

        }


        particle.style.setProperty(
            "--opacity",
            opacity
        );


        /* ================================================= */
        /* MOVIMIENTO HORIZONTAL */
        /* ================================================= */

        const drift =
            (
                Math.random() -
                .5
            ) * 100;


        const driftEnd =
            (
                Math.random() -
                .5
            ) * 180;


        /* ================================================= */
        /* MOVIMIENTO VERTICAL */
        /* ================================================= */

        const vertical =
            -80 -
            Math.random() * 170;


        particle.style.setProperty(
            "--start-x",
            "0px"
        );


        particle.style.setProperty(
            "--middle-x",
            `${drift}px`
        );


        particle.style.setProperty(
            "--middle-y",
            `${vertical * .5}px`
        );


        particle.style.setProperty(
            "--end-x",
            `${driftEnd}px`
        );


        particle.style.setProperty(
            "--end-y",
            `${vertical}px`
        );


        /* ================================================= */
        /* ROTACIÓN */
        /* ================================================= */

        particle.style.setProperty(
            "--rotate-mid",
            `${
                (
                    Math.random() -
                    .5
                ) * 120
            }deg`
        );


        particle.style.setProperty(
            "--rotate-end",
            `${
                (
                    Math.random() -
                    .5
                ) * 260
            }deg`
        );


        /* ================================================= */
        /* ESCALA FINAL */
        /* ================================================= */

        particle.style.setProperty(
            "--scale-end",
            .6 +
            Math.random() * .8
        );


        /* ================================================= */
        /* DURACIÓN */
        /* ================================================= */

        const duration =
            config.duration[0] +

            Math.random() *

            (
                config.duration[1] -
                config.duration[0]
            );


        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );


        /* ================================================= */
        /* RETRASO */
        /* ================================================= */

        particle.style.setProperty(
            "--delay",
            `${Math.random() * .25}s`
        );


        /* ================================================= */
        /* TEXTO DE LAS PARTÍCULAS */
        /* ================================================= */

        if (
            type ===
            "narnia-star"
        ) {

            particle.textContent =
                "✦";

        }


        if (
            type ===
            "bridge-spark"
        ) {

            particle.textContent =
                "✦";

        }


        if (
            type ===
            "disney-star"
        ) {

            particle.textContent =
                "✦";

        }


        if (
            type ===
            "disney-twinkle"
        ) {

            particle.textContent =
                "✧";

        }


        if (
            type ===
            "hp-spark"
        ) {

            particle.textContent =
                "✦";

        }


        /* ================================================= */
        /* AÑADIR */
        /* ================================================= */

        themeParticleContainer.appendChild(
            particle
        );


        /* ================================================= */
        /* ELIMINAR */
        /* ================================================= */

        setTimeout(() => {

            particle.remove();

        }, (duration + .5) * 1000);

    }

}


/* ================================================= */
/* ARRANCAR ATMÓSFERA */
/* ================================================= */

function startThemeAtmosphere(
    themeName
) {

    activeTheme =
        themeName;


    /* Limpiar partículas anteriores */

    themeParticleContainer.innerHTML =
        "";


    /* Detener intervalo anterior */

    if (
        themeParticleTimer
    ) {

        clearInterval(
            themeParticleTimer
        );

        themeParticleTimer =
            null;

    }


    const config =
        themeEffects[themeName];


    if (!config) {

        return;

    }


    /* ================================================= */
    /* RÁFAGA INICIAL */
/* ================================================= */

    let initialAmount;


    if (
        themeName ===
        "theme-final"
    ) {

        initialAmount = 12;

    } else if (
        themeName ===
        "theme-infinity"
    ) {

        initialAmount = 3;

    } else {

        initialAmount = 5;

    }


    for (
        let i = 0;
        i < initialAmount;
        i++
    ) {

        setTimeout(() => {

            createThemeParticle(
                themeName
            );

        }, i * 90);

    }


    /* ================================================= */
    /* GENERADOR CONTINUO */
/* ================================================= */

    themeParticleTimer =
        setInterval(() => {

            if (
                activeTheme !==
                themeName
            ) {

                return;

            }


            createThemeParticle(
                themeName
            );

        }, config.interval);

}


/* ================================================= */
/* 🎬 EFECTO ESPECIAL DE ENTRADA */
/* ================================================= */

function triggerThemeBurst(
    themeName
) {

    if (
        themeName ===
        "theme-final"
    ) {

        for (
            let i = 0;
            i < 35;
            i++
        ) {

            setTimeout(() => {

                createThemeParticle(
                    themeName
                );

            }, i * 45);

        }

    }


    if (
        themeName ===
        "theme-bella"
    ) {

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            setTimeout(() => {

                createThemeParticle(
                    themeName
                );

            }, i * 100);

        }

    }


    if (
        themeName ===
        "theme-princess"
    ) {

        for (
            let i = 0;
            i < 10;
            i++
        ) {

            setTimeout(() => {

                createThemeParticle(
                    themeName
                );

            }, i * 80);

        }

    }

}


/* ================================================= */
/* INICIAR ATMÓSFERA ACTUAL */
/* ================================================= */

startThemeAtmosphere(
    themes[currentSlide] ||
    "theme-cover"
);


/* ================================================= */
/* CONFETI INICIAL */
/* ================================================= */

setTimeout(() => {

    createConfetti(45);

}, 900);


/* ================================================= */
/* ESTADO INICIAL */
/* ================================================= */

slides.forEach(
    (slide, index) => {

        slide.classList.toggle(
            "active",
            index === currentSlide
        );

    }
);


updateNavigation();
