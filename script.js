const messageText = "May your life be filled with love, laughter, magical moments and endless happiness 🎉✨";

let index = 0;

function showBirthday() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("birthdaySection").classList.remove("hidden");
}

function lightCandle() {
    document.getElementById("instruction").innerText = "🎂 Now touch the cake 🎂";
    document.getElementById("candle").style.display = "none";
    document.getElementById("cakeSection").classList.remove("hidden");

    document.getElementById("bgMusic").play();

    typingEffect();
    createBalloons();
    createBirthdayEmojis();
}

function typingEffect() {
    if (index < messageText.length) {
        document.getElementById("typedMessage").innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typingEffect, 40);
    }
}

function cutCake() {
    document.getElementById("knife").classList.remove("hidden");

    createConfetti();

    setTimeout(() => {
        document.getElementById("instruction").innerText =
        "🎉 Happy Birthday, Anwoyee! 🎉 You truly deserve all the success and happiness in the world. This year has been amazing because of your hard work and achievements, and I’m excited to see you reach even greater heights in the years to come. Wishing you a year full of joy, growth, and unforgettable moments!";
    }, 1200);
}

function createBalloons() {
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.background = randomColor();
        balloon.style.animationDuration = (6 + Math.random() * 5) + "s";
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 10000);
    }
}

function createBirthdayEmojis() {
    const emojis = ["🎉", "🎊", "✨", "🎈"];

    setInterval(() => {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.bottom = "0px";
        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 6000);
    }, 900);
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background = randomColor();
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-10px";
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

function randomColor() {
    const colors = ["#ff4da6", "#ffcc70", "#c77dff", "#80ffdb", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);