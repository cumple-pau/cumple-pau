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
/* OBJETOS PROTAGONISTAS */
/* ================================================= */

const themeObjects = {

    1: {
        icon: "✨",
        name: "Estrella"
    },

    2: {
        icon: "🗺️",
        name: "Mapa de aventuras"
    },

    3: {
        icon: "🌹",
        name: "Rosa encantada"
    },

    4: {
        icon: "✉️",
        name: "Carta"
    },

    5: {
        icon: "👑",
        name: "Corona"
    },

    6: {
        icon: "❄️",
        name: "Cristal de hielo"
    },

    7: {
        icon: "🪄",
        name: "Varita"
    },

    8: {
        icon: "🦋",
        name: "Mariposa"
    },

    9: {
        icon: "🌺",
        name: "Detalle veraniego"
    }

};


/* ================================================= */
/* SISTEMA DE OBJETOS ACUMULATIVOS */
/* ================================================= */

let unlockedObjects = [];


/* Crear contenedor automáticamente
   sin modificar el HTML */

const objectsContainer =
    document.createElement("div");

objectsContainer.id =
    "theme-objects-container";

document.body.appendChild(
    objectsContainer
);


/* ================================================= */
/* DESBLOQUEAR OBJETO */
/* ================================================= */

function unlockThemeObject(index) {

    if (!themeObjects[index]) return;

    /* Si ya existe, no lo duplicamos */

    if (
        unlockedObjects.some(
            object => object.index === index
        )
    ) {

        return;

    }


    const objectData =
        themeObjects[index];


    const object =
        document.createElement("div");


    object.className =
        "theme-object";


    object.dataset.index =
        index;


    object.setAttribute(
        "aria-hidden",
        "true"
    );


    object.innerHTML = `

        <div class="theme-object-glow"></div>

        <div class="theme-object-icon">
            ${objectData.icon}
        </div>

    `;


    objectsContainer.appendChild(
        object
    );


    unlockedObjects.push({
        index,
        element: object
    });


    positionThemeObjects();


    /* Pequeño efecto especial al desbloquear */

    object.classList.add(
        "theme-object-new"
    );


    setTimeout(() => {

        object.classList.remove(
            "theme-object-new"
        );

    }, 1200);

}


/* ================================================= */
/* POSICIÓN DE LOS OBJETOS */
/* ================================================= */

function positionThemeObjects() {

    const total =
        unlockedObjects.length;


    unlockedObjects.forEach(
        (item, index) => {

            const object =
                item.element;


            /* El objeto más reciente
               es el protagonista */

            if (index === total - 1) {

                object.classList.add(
                    "theme-object-current"
                );

                object.classList.remove(
                    "theme-object-memory"
                );

                object.style.setProperty(
                    "--object-x",
                    "0px"
                );

                object.style.setProperty(
                    "--object-y",
                    "0px"
                );

                return;

            }


            object.classList.remove(
                "theme-object-current"
            );

            object.classList.add(
                "theme-object-memory"
            );


            /*
                Los objetos antiguos se
                distribuyen alrededor de
                la pantalla.
            */

            const memoryPositions = [

                [-42, -18],
                [42, -18],
                [-48, 28],
                [48, 28],
                [-38, 55],
                [38, 55],
                [-52, 0],
                [52, 0]

            ];


            const position =
                memoryPositions[
                    index % memoryPositions.length
                ];


            object.style.setProperty(
                "--object-x",
                `${position[0]}vw`
            );


            object.style.setProperty(
                "--object-y",
                `${position[1]}vh`
            );

        }
    );

}


/* ================================================= */
/* REUNIÓN FINAL — 100/10 */
/* ================================================= */

function gatherThemeObjects() {

    objectsContainer.classList.add(
        "objects-gathering"
    );


    unlockedObjects.forEach(
        (item, index) => {

            const object =
                item.element;


            object.classList.remove(
                "theme-object-current",
                "theme-object-memory"
            );


            object.classList.add(
                "theme-object-gathered"
            );


            const positions = [

                [-28, -22],
                [0, -27],
                [28, -22],

                [-34, 0],
                [34, 0],

                [-28, 24],
                [0, 28],
                [28, 24],

                [0, 0]

            ];


            const position =
                positions[
                    index % positions.length
                ];


            object.style.setProperty(
                "--gather-x",
                `${position[0]}vw`
            );


            object.style.setProperty(
                "--gather-y",
                `${position[1]}vh`
            );


            object.style.setProperty(
                "--gather-delay",
                `${index * 0.08}s`
            );

        }
    );

}


/* ================================================= */
/* REUNIÓN FINAL — INFINITO */
/* ================================================= */

function createInfinityObjects() {

    objectsContainer.classList.remove(
        "objects-gathering"
    );


    objectsContainer.classList.add(
        "objects-infinity"
    );


    unlockedObjects.forEach(
        (item, index) => {

            const object =
                item.element;


            object.classList.remove(
                "theme-object-current",
                "theme-object-memory",
                "theme-object-gathered"
            );


            object.classList.add(
                "theme-object-infinity"
            );


            object.style.setProperty(
                "--infinity-delay",
                `${index * 0.09}s`
            );

        }
    );

}


/* ================================================= */
/* ACTUALIZAR OBJETOS SEGÚN DIAPOSITIVA */
/* ================================================= */

function updateThemeObjects(index) {

    /*
        1–9:
        desbloqueamos objetos
    */

    if (
        index >= 1 &&
        index <= 9
    ) {

        unlockThemeObject(index);

        objectsContainer.classList.remove(
            "objects-gathering",
            "objects-infinity"
        );

        return;

    }


    /*
        100/10:
        todos comienzan a reunirse
    */

if (index === 10) {

    objectsContainer.classList.remove(
        "objects-gathering",
        "objects-infinity"
    );

    unlockedObjects.forEach(item => {

        item.element.classList.remove(
            "theme-object-current",
            "theme-object-memory",
            "theme-object-gathered",
            "theme-object-infinity"
        );

        item.element.classList.add(
            "theme-object-hidden"
        );

    });

    return;

}


    /*
        ∞/10:
        composición final
    */

if (index === 11) {

    objectsContainer.classList.remove(
        "objects-gathering",
        "objects-infinity"
    );

    unlockedObjects.forEach(item => {

        item.element.classList.remove(
            "theme-object-current",
            "theme-object-memory",
            "theme-object-gathered",
            "theme-object-infinity"
        );

        item.element.classList.add(
            "theme-object-hidden"
        );

    });

    return;

}


    /*
        Portada:
        ocultamos los objetos.
    */

    if (index === 0) {

        objectsContainer.classList.remove(
            "objects-gathering",
            "objects-infinity"
        );

        unlockedObjects.forEach(
            item => {

                item.element.classList.remove(
                    "theme-object-current",
                    "theme-object-memory",
                    "theme-object-gathered",
                    "theme-object-infinity"
                );

                item.element.classList.add(
                    "theme-object-hidden"
                );

            }
        );

    }

}


/* ================================================= */
/* PREPARAR DIAPOSITIVAS */
/* ================================================= */

slides.forEach((slide, index) => {

    slide.classList.add(
        themes[index] || "theme-cover"
    );

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
/* ================================================= */
/* 💗 TRANSICIÓN ESPECIAL — 100/10 */
/* ================================================= */

function createFinalTransition() {

    const overlay =
        document.createElement("div");

    overlay.className =
        "final-transition-overlay";


    overlay.innerHTML = `

        <div class="final-transition-light"></div>

        <div class="final-transition-flash"></div>

        <div class="final-transition-rays"></div>

        <div class="final-transition-ring"></div>
        <div class="final-transition-ring"></div>
        <div class="final-transition-ring"></div>

        <div class="final-transition-heart">
            💗
        </div>

    `;


    /* ================================================= */
    /* PARTÍCULAS RADIALES */
    /* ================================================= */

    const particleCount = 28;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "final-transition-particle";


        const angle =
            (360 / particleCount) * i
            + (Math.random() * 10 - 5);


        const distance =
            25 + Math.random() * 35;


        particle.style.setProperty(
            "--particle-angle",
            `${angle}deg`
        );


        particle.style.setProperty(
            "--particle-distance",
            `${distance}vw`
        );


        particle.style.animationDelay =
            `${0.15 + Math.random() * 0.45}s`;


        overlay.appendChild(
            particle
        );

    }


    document.body.appendChild(
        overlay
    );


    setTimeout(() => {

        overlay.remove();

    }, 2900);

}
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

/* ================================================= */
/* 💗 GRAN TRANSICIÓN A 100/10 */
/* ================================================= */

if (
    index === 11 &&
    oldIndex === 10
) {

    createFinalTransition();

}
    
    updateNavigation();


    /* ================================================= */
    /* ACTUALIZAR OBJETOS */
    /* ================================================= */

    updateThemeObjects(index);


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


/* ================================================= */
/* ✨ BRILLOS MÁGICOS */
/* ================================================= */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "magic-sparkle";

    sparkle.style.left =
        `${Math.random() * 100}vw`;

    sparkle.style.top =
        `${10 + Math.random() * 80}vh`;

    const size =
        3 + Math.random() * 5;

    sparkle.style.width =
        `${size}px`;

    sparkle.style.height =
        `${size}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1900);
}


/* ================================================= */
/* 💫 PARTÍCULAS FLOTANTES */
/* ================================================= */

function createMagicParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "magic-particle";

    particle.style.left =
        `${Math.random() * 100}vw`;

    particle.style.top =
        `${60 + Math.random() * 35}vh`;

    particle.style.setProperty(
        "--particle-x",
        `${(Math.random() - .5) * 120}px`
    );

    particle.style.setProperty(
        "--particle-y",
        `${-80 - Math.random() * 160}px`
    );

    particle.style.setProperty(
        "--particle-duration",
        `${2.5 + Math.random() * 2.5}s`
    );

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5500);
}


/* ================================================= */
/* ✨ GENERADOR AMBIENTAL */
/* ================================================= */

setInterval(createSparkle, 750);

setInterval(createMagicParticle, 1200);

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
/* =========================================================
   MINIJUEGO DE GALLETITAS
   ========================================================= */

(function () {

    const cookieGameState = {
        currentStep: 1,

        ingredients: [],
        requiredIngredients: 5,

        mixCount: 0,
        requiredMixes: 12,

        cookies: [],
        requiredCookies: 3,

        decorations: 0,
        requiredDecorations: 3,

        selectedTopping: "sprinkles",

        bakingInterval: null
    };


    /* -----------------------------------------------------
       ELEMENTOS
       ----------------------------------------------------- */

    const get = (id) => document.getElementById(id);


    /* -----------------------------------------------------
       OVERLAY
       ----------------------------------------------------- */

    function prepareCookieOverlay() {

        const overlay = get("cookieGameOverlay");

        if (!overlay) return;

        /*
         * MUY IMPORTANTE:
         * sacamos el overlay del slide para que no quede
         * recortado por overflow:hidden o transform.
         */

        if (overlay.parentElement !== document.body) {
            document.body.appendChild(overlay);
        }
    }


    /* -----------------------------------------------------
       ABRIR
       ----------------------------------------------------- */

    window.openCookieGame = function () {

        prepareCookieOverlay();

        const overlay = get("cookieGameOverlay");

        if (!overlay) return;

        overlay.classList.add("open");

        document.body.style.overflow = "hidden";

        restartCookieGame(false);

    };


    /* -----------------------------------------------------
       CERRAR
       ----------------------------------------------------- */

    window.closeCookieGame = function () {

        const overlay = get("cookieGameOverlay");

        if (!overlay) return;

        overlay.classList.remove("open");

        document.body.style.overflow = "";

        stopBaking();

    };


    /* -----------------------------------------------------
       CAMBIO DE PASO
       ----------------------------------------------------- */

    function goToCookieStep(step) {

        cookieGameState.currentStep = step;

        document.querySelectorAll("#cookieGame .cookie-step").forEach(
            (section) => {
                section.classList.remove("active");
            }
        );

        const target = get("cookieStep" + step);

        if (target) {
            target.classList.add("active");
        }

        document.querySelectorAll(".cookie-progress-dot").forEach(
            (dot) => {

                const dotStep = Number(dot.dataset.step);

                dot.classList.remove("active");
                dot.classList.remove("completed");

                if (dotStep === step) {
                    dot.classList.add("active");
                }

                if (dotStep < step) {
                    dot.classList.add("completed");
                }
            }
        );

        const character = get("cookieCharacter");

        if (character) {
            character.classList.remove(
                "mixing",
                "happy"
            );
        }

        if (step === 2) {

            if (character) {
                character.classList.add("mixing");
            }

            setCookieMessage(
                "¡Eso es! Ahora mezcla muy bien la masa."
            );
        }

        if (step === 3) {

            setCookieMessage(
                "Ahora vamos a darles una forma bonita."
            );
        }

        if (step === 4) {

            if (character) {
                character.classList.add("happy");
            }

            setCookieMessage(
                "¡Al horno! Esperemos a que estén listas."
            );

            startBaking();
        }

        if (step === 5) {

            setCookieMessage(
                "¡Ya están hechas! Vamos a decorarlas."
            );

            prepareDecorationCookies();
        }
    }


    /* -----------------------------------------------------
       MENSAJE
       ----------------------------------------------------- */

    function setCookieMessage(message) {

        const element = get("cookieGameMessage");

        if (element) {
            element.textContent = message;
        }
    }


    /* -----------------------------------------------------
       PASO 1 — INGREDIENTES
       ----------------------------------------------------- */

    window.addIngredient = function (button) {

        if (!button) return;

        const ingredient = button.dataset.ingredient;

        if (!ingredient) return;

        if (
            cookieGameState.ingredients.includes(ingredient)
        ) {
            return;
        }

        cookieGameState.ingredients.push(ingredient);

        button.classList.add("selected");
        button.classList.add("used");

        updateIngredientCount();

        createIngredientParticle(button);

        if (
            cookieGameState.ingredients.length >=
            cookieGameState.requiredIngredients
        ) {

            const character = get("cookieCharacter");

            if (character) {
                character.classList.add("happy");
            }

            setCookieMessage(
                "¡Perfecto! Tenemos todos los ingredientes."
            );

            setTimeout(function () {
                goToCookieStep(2);
            }, 700);
        }
    };


    function updateIngredientCount() {

        const counter = get("ingredientCount");

        if (!counter) return;

        counter.textContent =
            cookieGameState.ingredients.length +
            "/" +
            cookieGameState.requiredIngredients;
    }


    function createIngredientParticle(button) {

        const overlay = get("cookieGameOverlay");

        if (!overlay || !button) return;

        const particle = document.createElement("span");

        particle.textContent = "✨";

        particle.style.position = "fixed";
        particle.style.fontSize = "18px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "1000000";

        const rect = button.getBoundingClientRect();

        particle.style.left =
            rect.left + rect.width / 2 + "px";

        particle.style.top =
            rect.top + rect.height / 2 + "px";

        particle.animate(
            [
                {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)"
                },
                {
                    opacity: 0,
                    transform:
                        "translate(-50%, -120px) scale(1.5)"
                }
            ],
            {
                duration: 650,
                easing: "ease-out"
            }
        );

        document.body.appendChild(particle);

        setTimeout(function () {
            particle.remove();
        }, 700);
    }


    /* -----------------------------------------------------
       PASO 2 — MEZCLAR
       ----------------------------------------------------- */

    window.mixCookieDough = function () {

        if (
            cookieGameState.mixCount >=
            cookieGameState.requiredMixes
        ) {
            return;
        }

        cookieGameState.mixCount++;

        const count = cookieGameState.mixCount;
        const total = cookieGameState.requiredMixes;

        const percentage = (count / total) * 100;

        const fill = get("mixProgressFill");

        if (fill) {
            fill.style.width = percentage + "%";
        }

        const counter = get("mixCount");

        if (counter) {
            counter.textContent =
                count + " / " + total;
        }

        const button = get("mixButton");

        if (button) {

            button.animate(
                [
                    {
                        transform: "rotate(-4deg) scale(.96)"
                    },
                    {
                        transform: "rotate(4deg) scale(1)"
                    },
                    {
                        transform: "rotate(-2deg) scale(1)"
                    }
                ],
                {
                    duration: 180
                }
            );
        }

        if (count >= total) {

            const character = get("cookieCharacter");

            if (character) {
                character.classList.remove("mixing");
                character.classList.add("happy");
            }

            setCookieMessage(
                "¡Masa lista! Ahora toca formar las galletas."
            );

            setTimeout(function () {
                goToCookieStep(3);
            }, 650);
        }
    };


    /* -----------------------------------------------------
       PASO 3 — FORMAS
       ----------------------------------------------------- */

    window.createCookie = function (shape) {

        if (
            cookieGameState.cookies.length >=
            cookieGameState.requiredCookies
        ) {
            return;
        }

        cookieGameState.cookies.push(shape);

        const container = get("createdCookies");

        if (container) {

            const cookie = document.createElement("div");

            cookie.className = "created-cookie";

            if (shape === "heart") {
                cookie.textContent = "❤️";
            }

            if (shape === "star") {
                cookie.textContent = "⭐";
            }

            if (shape === "circle") {
                cookie.textContent = "🍪";
            }

            container.appendChild(cookie);
        }

        const counter = get("cookieShapeMessage");

        if (counter) {
            counter.textContent =
                cookieGameState.cookies.length +
                " / " +
                cookieGameState.requiredCookies +
                " galletitas";
        }

        if (
            cookieGameState.cookies.length >=
            cookieGameState.requiredCookies
        ) {

            const character = get("cookieCharacter");

            if (character) {
                character.classList.add("happy");
            }

            setCookieMessage(
                "¡Tenemos tres! Vamos a hornearlas."
            );

            setTimeout(function () {
                goToCookieStep(4);
            }, 700);
        }
    };


    /* -----------------------------------------------------
       PASO 4 — HORNO
       ----------------------------------------------------- */

    function startBaking() {

        stopBaking();

        let progress = 0;

        const fill = get("ovenProgressFill");
        const text = get("ovenProgressText");

        if (fill) {
            fill.style.width = "0%";
        }

        if (text) {
            text.textContent = "0%";
        }

        cookieGameState.bakingInterval =
            setInterval(function () {

                progress += 2;

                if (progress > 100) {
                    progress = 100;
                }

                if (fill) {
                    fill.style.width =
                        progress + "%";
                }

                if (text) {
                    text.textContent =
                        progress + "%";
                }

                if (progress >= 100) {

                    stopBaking();

                    const character =
                        get("cookieCharacter");

                    if (character) {
                        character.classList.remove(
                            "mixing"
                        );

                        character.classList.add(
                            "happy"
                        );
                    }

                    setCookieMessage(
                        "¡Perfectas! Solo falta decorarlas."
                    );

                    setTimeout(function () {
                        goToCookieStep(5);
                    }, 700);
                }

            }, 60);
    }


    function stopBaking() {

        if (cookieGameState.bakingInterval) {

            clearInterval(
                cookieGameState.bakingInterval
            );

            cookieGameState.bakingInterval = null;
        }
    }


    /* -----------------------------------------------------
       PASO 5 — DECORAR
       ----------------------------------------------------- */

    window.selectTopping = function (button) {

        if (!button) return;

        document.querySelectorAll(
            "#cookieGame .topping-button"
        ).forEach(
            (item) => {
                item.classList.remove("active");
            }
        );

        button.classList.add("active");

        cookieGameState.selectedTopping =
            button.dataset.topping || "sprinkles";
    };


    function prepareDecorationCookies() {

        const container =
            get("decorateCookies");

        if (!container) return;

        container.innerHTML = "";

        cookieGameState.decorations = 0;

        updateDecorationCounter();

        for (
            let i = 0;
            i < cookieGameState.requiredDecorations;
            i++
        ) {

            const cookie =
                document.createElement("div");

            cookie.className =
                "decorate-cookie";

            cookie.dataset.index = i;

            cookie.textContent = "🍪";

            cookie.addEventListener(
                "click",
                function () {

                    decorateCookie(cookie);

                }
            );

            container.appendChild(cookie);
        }
    }


    function decorateCookie(cookie) {

        if (!cookie) return;

        if (
            cookie.classList.contains("decorated")
        ) {
            return;
        }

        cookie.classList.add("decorated");

        const topping =
            cookieGameState.selectedTopping;

        if (topping === "sprinkles") {
            cookie.textContent = "🌈🍪";
        }

        if (topping === "chocolate") {
            cookie.textContent = "🍫🍪";
        }

        if (topping === "heart") {
            cookie.textContent = "💗🍪";
        }

        if (topping === "star") {
            cookie.textContent = "⭐🍪";
        }

        cookieGameState.decorations++;

        updateDecorationCounter();

        if (
            cookieGameState.decorations >=
            cookieGameState.requiredDecorations
        ) {

            const character =
                get("cookieCharacter");

            if (character) {
                character.classList.add("happy");
            }

            setCookieMessage(
                "¡Terminadas! Han quedado preciosas."
            );

            setTimeout(function () {
                showCookieResult();
            }, 700);
        }
    }


    function updateDecorationCounter() {

        const counter =
            get("decorationMessage");

        if (!counter) return;

        counter.textContent =
            cookieGameState.decorations +
            " / " +
            cookieGameState.requiredDecorations +
            " decoradas";
    }


    /* -----------------------------------------------------
       RESULTADO
       ----------------------------------------------------- */

    function showCookieResult() {

        document.querySelectorAll(
            "#cookieGame .cookie-step"
        ).forEach(
            (section) => {
                section.classList.remove("active");
            }
        );

        const result =
            get("cookieResult");

        if (result) {
            result.classList.add("active");
        }

        document.querySelectorAll(
            ".cookie-progress-dot"
        ).forEach(
            (dot) => {
                dot.classList.add("completed");
                dot.classList.remove("active");
            }
        );

        const character =
            get("cookieCharacter");

        if (character) {
            character.classList.remove(
                "mixing"
            );

            character.classList.add(
                "happy"
            );
        }

        createFinalCookieParticles();
    }


    function createFinalCookieParticles() {

        const symbols = [
            "✨",
            "💗",
            "⭐",
            "🍪"
        ];

        for (let i = 0; i < 18; i++) {

            const particle =
                document.createElement("span");

            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            particle.style.position = "fixed";
            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.top =
                (70 + Math.random() * 20) + "vh";

            particle.style.fontSize =
                (12 + Math.random() * 12) + "px";

            particle.style.pointerEvents =
                "none";

            particle.style.zIndex =
                "1000000";

            document.body.appendChild(
                particle
            );

            particle.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(20px) scale(.5)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(-40px) scale(1)"
                    },
                    {
                        opacity: 0,
                        transform: "translateY(-120px) scale(.8)"
                    }
                ],
                {
                    duration:
                        1200 +
                        Math.random() * 900,

                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                particle.remove();
            }, 2200);
        }
    }


    /* -----------------------------------------------------
       REINICIAR
       ----------------------------------------------------- */

    window.restartCookieGame = function (
        reopen = true
    ) {

        stopBaking();

        cookieGameState.currentStep = 1;

        cookieGameState.ingredients = [];

        cookieGameState.mixCount = 0;

        cookieGameState.cookies = [];

        cookieGameState.decorations = 0;

        cookieGameState.selectedTopping =
            "sprinkles";


        /* INGREDIENTES */

        document.querySelectorAll(
            "#cookieGame .ingredient"
        ).forEach(
            (button) => {

                button.classList.remove(
                    "selected",
                    "used"
                );

            }
        );


        /* MEZCLA */

        const mixFill =
            get("mixProgressFill");

        if (mixFill) {
            mixFill.style.width = "0%";
        }

        const mixCount =
            get("mixCount");

        if (mixCount) {
            mixCount.textContent = "0 / 12";
        }


        /* GALLETAS */

        const createdCookies =
            get("createdCookies");

        if (createdCookies) {
            createdCookies.innerHTML = "";
        }


        /* HORNO */

        const ovenFill =
            get("ovenProgressFill");

        if (ovenFill) {
            ovenFill.style.width = "0%";
        }

        const ovenText =
            get("ovenProgressText");

        if (ovenText) {
            ovenText.textContent = "0%";
        }


        /* TOPPINGS */

        document.querySelectorAll(
            "#cookieGame .topping-button"
        ).forEach(
            (button) => {
                button.classList.remove(
                    "active"
                );
            }
        );

        const firstTopping =
            document.querySelector(
                "#cookieGame .topping-button"
            );

        if (firstTopping) {
            firstTopping.classList.add(
                "active"
            );
        }


        /* DECORACIONES */

        const decorationContainer =
            get("decorateCookies");

        if (decorationContainer) {
            decorationContainer.innerHTML = "";
        }


        updateIngredientCount();
        updateDecorationCounter();

        setCookieMessage(
            "Prepara unas galletitas deliciosas."
        );

        goToCookieStep(1);


        if (reopen) {

            prepareCookieOverlay();

            const overlay =
                get("cookieGameOverlay");

            if (overlay) {
                overlay.classList.add("open");
            }

            document.body.style.overflow =
                "hidden";
        }
    };


    /* -----------------------------------------------------
       ESC PARA CERRAR
       ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            const overlay =
                get("cookieGameOverlay");

            if (
                overlay &&
                overlay.classList.contains("open")
            ) {
                closeCookieGame();
            }

        }
    );


    /* -----------------------------------------------------
       INICIALIZACIÓN
       ----------------------------------------------------- */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            prepareCookieOverlay();

            updateIngredientCount();

            updateDecorationCounter();

        }
    );

})();
