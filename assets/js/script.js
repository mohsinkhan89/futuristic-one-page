const navLinks = document.querySelectorAll(".nav-link");
const navTargets = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const form = document.querySelector(".signup-form");
const message = document.querySelector(".form-message");

const setActiveLink = () => {
  const current = navTargets.reduce((active, target) => {
    const top = target.getBoundingClientRect().top;
    return top <= 190 ? target.id : active;
  }, "home");

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  message.textContent = email
    ? "Thank you. Mission updates are now on standby."
    : "";
  form.reset();
});
