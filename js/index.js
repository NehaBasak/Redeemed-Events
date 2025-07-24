// Nav-Bar

  function toggleNav() {
    document.getElementById("navRight").classList.add("active");
  }

  function closeNav() {
    document.getElementById("navRight").classList.remove("active");
  }


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



// Range
const slider = document.querySelector(".slider");

function updateSliderColor() {
  const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, var(--third-clr) ${val}%, #383838 ${val}%)`;
}

slider.addEventListener("input", updateSliderColor);
updateSliderColor();
