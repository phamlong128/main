// Typing Effect
const texts = ["Programmer. ", "Developer. ", "Seller. "];
let count = 0, index = 0, isDeleting = false;
const typedText = document.getElementById("typed-text");
const typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000;

function type() {
  const current = texts[count];
  typedText.textContent = isDeleting ? current.substring(0, index--) : current.substring(0, index++);
  let speed = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && index === current.length) {
    speed = delayBetween; isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    speed = typingSpeed;
  }
  setTimeout(type, speed);
}
type();

// Skill Bar Animation
const skillFills = document.querySelectorAll(".skill-fill");
function showSkills() {
  const triggerBottom = window.innerHeight * 0.9;
  skillFills.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom) bar.style.width = bar.getAttribute("data-percent");
  });
}
window.addEventListener("scroll", showSkills);

// Social Buttons
const SOCIALS = [
  {name:'facebook', url:'https://www.facebook.com/share/1AzKp6p2NJ/'},
  {name:'tiktok', url:'https://tiktok.com/@plongdev_'},
  {name:'messenger', url:'https://m.me/j/Abb7x2Ql4c0-_b_r/'},
  {name:'zalo', url:'https://zalo.me/0372868397'}
];
const socialContainer = document.querySelector(".social-buttons");
SOCIALS.forEach(s=>{
  const btn = document.createElement("button");
  btn.className="social-btn box-shadow";
  btn.innerHTML=`<img src="assets/image/${s.name}.png" class="logo" alt="${s.name}"/>`;
  btn.onclick = ()=>window.open(s.url,'_blank');
  socialContainer.appendChild(btn);
});

// Dark Mode Toggle
const colorModeBtn = document.getElementById("colorMode");
let darkMode = false;
let rotation = 0; // góc hiện tại

colorModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);

  // luân phiên chiều quay: lần lẻ → +180, lần chẵn → -180
  rotation += (rotation % 360 === 0 ? 180 : -180);

  colorModeBtn.style.transform = `rotate(${rotation}deg)`;
});


// Menu toggle for mobile
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", ()=>navLinks.classList.toggle("show"));

// Entrance animation
const enterEl = document.querySelector(".enter");
if(enterEl){
  for(let i=20;i>=0;i--){
    setTimeout(()=>{
      enterEl.style.backdropFilter = `blur(${i}px)`;
      enterEl.style.WebkitBackdropFilter = `blur(${i}px)`;
    },40*(20-i));
  }
}

