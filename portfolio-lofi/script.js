const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-menu a");
const lofiPlayer = document.querySelector(".lofi-player");
const playToggle = document.querySelector(".play-toggle");
const contactForm = document.querySelector(".contact-form");

document.documentElement.classList.add("js");

function setMenuState(isOpen) {
  navbar.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
}

navToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.contains("menu-open");
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

playToggle.addEventListener("click", () => {
  const isPlaying = lofiPlayer.classList.toggle("is-playing");

  playToggle.textContent = isPlaying ? "Pause" : "Play";
  playToggle.setAttribute("aria-pressed", String(isPlaying));
  playToggle.setAttribute(
    "aria-label",
    isPlaying ? "Pause lofi study mode" : "Start lofi study mode"
  );
});

const observerOptions = {
  threshold: 0.18,
  rootMargin: "0px 0px -80px 0px",
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  fadeObserver.observe(element);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Simulated message sent. Connect this form to a real service later.");
  contactForm.reset();
});
