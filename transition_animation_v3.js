const options = {
  root: null,
  rootMargin: '0px 0px -200px 0px', // Top, Right, Bottom, Left
  threshold: 0.2
};

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove("reveal-on");
      observer.unobserve(entry.target);
    }
  });
}

function animateOnScroll() {


  const observer = new IntersectionObserver(handleIntersect, options);
  const targets = document.querySelectorAll(".reveal-on");

  targets.forEach(function (target) {
    observer.observe(target);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  animateOnScroll();
});
