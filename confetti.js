/*
 * Slightly modified Code from George Hastings over on Codepen: https://codepen.io/georgehastings/pen/pVOevW
 * Check out his website: https://georgehastings.com/
 */

const confettiAmount = 150;
const colors = ["#4579FF", "#29EAFC", "#FAB1C0", "#50E3C2", "#FFFC9D", "#1A04B3", "#F81C4D"];

const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

/**
 * @param {number} min
 * @param {number} max
 */
function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Confetti {
    /**
     * @param {number} width
     * @param {number} height
     * @param {string} color
     * @param {number} speed
     * @param {number} x x-Coordinate
     */
    constructor(width, height, color, speed, x) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;
        this.x = x;

        this.y = -20;
        this.rotation = 0;
    }

    update() {
        const y = this.y < windowHeight ? this.y += this.speed : -20;
        const x = this.x + Math.sin(this.y * (this.speed / 100));
        this.x = x > windowWidth ? 0 : x;
        this.y = y;

        ctx.fillStyle = this.color;
        ctx.save();
        ctx.translate(x + (this.width / 2), y + (this.height / 2));
        ctx.rotate((y * this.speed) * Math.PI / 180);
        ctx.scale(Math.cos(y / 10), 1);
        ctx.fillRect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        ctx.restore();
    }
}

/**
 * @type {Confetti[]}
 */
const confetties = [];

function drawConfetti() {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    confetties.forEach(confetti => {
        confetti.update();
    });

    requestAnimationFrame(drawConfetti);
}

canvas.width = windowWidth;
canvas.height = windowHeight;

let count = 0;
let stagger = setInterval(() => {
    if (count < confettiAmount) {
        const speed = random(2.2, 2.8);

        const confetti = new Confetti(
            24 / speed,
            48 / speed,
            colors[Math.floor(random(0, colors.length))],
            speed,
            random(0, windowWidth)
        );
        confetties.push(confetti);
    } else {
        clearInterval(stagger);
    }

    count++;
}, 50);

drawConfetti();
