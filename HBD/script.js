document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const confettiContainer = document.querySelector('.confetti-container');
    const starsContainer = document.querySelector('.stars-container');

    surpriseButton.addEventListener('click', () => {
        playSound();
        createConfetti();
        createStars();
        surpriseButton.classList.add('shake');
        setTimeout(() => {
            surpriseButton.classList.remove('shake');
        }, 500);
    });

    function playSound() {
        const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
        audio.play();
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * 100}vh`;
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.innerHTML = '';
        }, 4000);
    }

    function createStars() {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.backgroundColor = getRandomColor();
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            starsContainer.appendChild(star);
        }

        setTimeout(() => {
            starsContainer.innerHTML = '';
        }, 8000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
