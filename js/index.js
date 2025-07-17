// Navbar
// const navRight = document.querySelector(".nav-right");
// const menu = document.querySelector(".icon");
// menu.addEventListener("click", () => {
//   navRight.classList.toggle("active");
// });

// Navbar
const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".icon");
const icon = menu.querySelector("i");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");

  // Toggle icon classes
  const isMenuOpen = navRight.classList.contains("active");

  if (isMenuOpen) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    document.body.classList.add("no-scroll"); // optional: stop scrolling when menu is open
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    document.body.classList.remove("no-scroll");
  }
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
const countElements = document.querySelectorAll(".count");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        countUp(el, target);
        obs.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);
countElements.forEach((element) => observer.observe(element));

// Show button when user scrolls down 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
