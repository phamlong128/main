// Typing effect
const texts = [
    "Student. ",
    "Programmer. ",
    "Developer. ",
    "Tech Enthusiast. "
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
    currentText = texts[count];

    if (isDeleting) {
        typedText.textContent = currentText.substring(0, index--);
    } else {
        typedText.textContent = currentText.substring(0, index++);
    }

    let speed = 100;

    if (!isDeleting && index === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        speed = 500;
    }

    setTimeout(type, speed);
}
type();


// Skill bar animation khi scroll tới
const skillFills = document.querySelectorAll(".skill-fill");

function showSkills() {
    const triggerBottom = window.innerHeight * 0.9;

    skillFills.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const targetPercent = bar.getAttribute("data-percent");

        if (barTop < triggerBottom) {
            bar.style.width = targetPercent; // chạy đến % mong muốn
        }
    });
}

window.addEventListener("scroll", showSkills);
