/* =========================
   LAIBA AMIN
   BIRTHDAY EXPERIENCE
========================= */


/* INTRO + MUSIC */

const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const birthdayMusic = document.getElementById("birthdayMusic");

enterBtn.addEventListener("click", () => {

    intro.style.transition = "1.5s ease";
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.classList.add("hidden");
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1200);


    /* Music */

    birthdayMusic.volume = 0.45;

    birthdayMusic.play().catch(() => {
        console.log("Music needs user interaction.");
    });


    createPetals(25);
});


/* =========================
   FLOATING PETALS
========================= */

const petalsContainer = document.getElementById("petals");

function createPetals(amount = 15) {

    for (let i = 0; i < amount; i++) {

        const petal = document.createElement("div");

        petal.classList.add("petal");

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        petal.style.animationDelay =
            Math.random() * 4 + "s";

        petal.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        petalsContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 13000);
    }
}


/* =========================
   LETTER
========================= */

const openLetter = document.getElementById("openLetter");
const envelope = document.getElementById("envelope").querySelector(".envelope");

let letterOpened = false;

openLetter.addEventListener("click", () => {

    if (!letterOpened) {

        envelope.classList.add("open");

        openLetter.textContent = "♡ Letter opened";

        letterOpened = true;

    } else {

        envelope.classList.remove("open");

        openLetter.textContent = "Open the letter";

        letterOpened = false;
    }
});


/* =========================
   WISH / CAKE
========================= */

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

wishBtn.addEventListener("click", () => {

    const flames = document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.animation = "none";
        flame.style.opacity = "0";
        flame.style.transform = "scale(0)";

    });

    wishMessage.classList.add("show");

    wishBtn.textContent = "✨ Wish Made";

    celebrate();

});


/* =========================
   SURPRISE POPUPS
========================= */

const surpriseCards =
    document.querySelectorAll(".surprise-card");

const popup =
    document.getElementById("popup");

const popupMessage =
    document.getElementById("popupMessage");

const closePopup =
    document.getElementById("closePopup");


surpriseCards.forEach(card => {

    card.addEventListener("click", () => {

        const message =
            card.getAttribute("data-message");

        popupMessage.textContent = message;

        popup.classList.add("show");

        createPetals(12);

    });

});


closePopup.addEventListener("click", () => {

    popup.classList.remove("show");

});


popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.classList.remove("show");
    }

});


/* =========================
   CELEBRATION
========================= */

function celebrate() {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("div");

        particle.className = "petal";

        particle.style.left = "50%";
        particle.style.top = "45%";

        particle.style.width = "7px";
        particle.style.height = "12px";

        particle.style.background =
            Math.random() > .5
                ? "#e889aa"
                : "#d6a85d";

        particle.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        particle.style.transform =
            `translate(${(Math.random() - .5) * 500}px,
             ${(Math.random() - .5) * 500}px)`;

        petalsContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}


/* =========================
   AUTO PETALS
========================= */

setInterval(() => {

    if (!document.hidden) {
        createPetals(2);
    }

}, 2500);


/* =========================
   MUSIC VOLUME
========================= */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        birthdayMusic.volume = 0.15;

    } else {

        birthdayMusic.volume = 0.45;

    }

});
