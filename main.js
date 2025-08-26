// CONFIG
const TYPING_CONFIG = {
  texts: ["Student.", "Programmer.", "Developer.", "Tech Enthusiast."],
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseBeforeDeleting: 2000
};

const SOCIALS = [
  { name: 'github', url: 'https://github.com/plongdev' },
  { name: 'facebook', url: 'https://facebook.com/' },
  { name: 'discord', url: 'https://discord.gg/' }
];

let textIndex = 0, charIndex = 0, isDeleting = false;

// Typing Effect
function typeText() {
  const currentText = TYPING_CONFIG.texts[textIndex];
  const typedTextElement = document.getElementById("typed-text");

  if (!isDeleting && charIndex < currentText.length) {
    typedTextElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, TYPING_CONFIG.typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    typedTextElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeText, TYPING_CONFIG.deletingSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, TYPING_CONFIG.pauseBeforeDeleting);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % TYPING_CONFIG.texts.length;
    setTimeout(typeText, TYPING_CONFIG.typingSpeed);
  }
}

// Skill Bars Animation
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent;
  });
}

function handleSkillsAnimation() {
  const skillSection = document.querySelector('.skills-section');
  if (isInViewport(skillSection)) {
    animateSkillBars();
    window.removeEventListener('scroll', handleSkillsAnimation);
  }
}

// Social Buttons
function createSocialButtons() {
  const container = document.querySelector('.social-buttons');
  if (!container) return;
  SOCIALS.forEach(social => {
    const btn = document.createElement('button');
    btn.classList.add('social-btn', 'box-shadow');
    btn.innerHTML = `<img src="img/logo/${social.name}.png" class="logo" alt="${social.name}"/>`;
    btn.onclick = () => window.open(social.url, "_blank");
    container.appendChild(btn);
  });
}

// Init
function init() {
  typeText();
  createSocialButtons();
  handleSkillsAnimation();
  window.addEventListener('scroll', handleSkillsAnimation);
}
document.addEventListener('DOMContentLoaded', init);
