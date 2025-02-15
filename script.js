document.addEventListener("DOMContentLoaded", function() {
    // Confetti Effect
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    function ConfettiPiece() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    ConfettiPiece.prototype.update = function() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    };

    ConfettiPiece.prototype.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    };

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            confetti.push(new ConfettiPiece());
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c) => {
            c.update();
            c.draw();
        });
        requestAnimationFrame(animateConfetti);
    }

    createConfetti();
    animateConfetti();

    // Auto-Play Music (on user click)
    const audio = document.getElementById("birthdaySong");
    document.body.addEventListener("click", function() {
        audio.play();
    });
});
