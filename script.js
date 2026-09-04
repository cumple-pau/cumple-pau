let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");

function showSlide(index) {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    currentSlide = index;

    counter.textContent =
        String(index + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");

    if (index > 0) createConfetti(35);
    if (index === slides.length - 1) createConfetti(100);
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }

});

let touchStartX = 0;

document.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", event => {

    const touchEndX = event.changedTouches[0].screenX;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 50) {

        if (difference > 0) {
            nextSlide();
        } else {
            previousSlide();
        }

    }

});

function createConfetti(amount = 50) {

    const container = document.getElementById("confetti-container");

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        piece.style.animationDelay =
            Math.random() * .5 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.innerHTML =
            ["💗", "✨", "🎉", "⭐"]
            [Math.floor(Math.random() * 4)];

        container.appendChild(piece);

        setTimeout(() => piece.remove(), 4500);
    }
}

function createHeart() {

    const container =
        document.getElementById("hearts-container");

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);

setTimeout(() => {
    createConfetti(60);
}, 800);
