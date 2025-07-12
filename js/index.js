// Navbar
const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".hamburger input");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

// Featured Section
function countUp(el, target) {
  let current = 0;
  const increment = target / 100;
  const update = () => {
    current += increment;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };
  update();
}
const counters = document.querySelectorAll(".count");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        countUp(el, target);
        obs.unobserve(el); // run once
      }
    });
  },
  { threshold: 0.5 }
);
counters.forEach((counter) => observer.observe(counter));
