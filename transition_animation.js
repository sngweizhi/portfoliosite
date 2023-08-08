const threshold = 0.2;
const options = {
  root: null,
  rootMargin: "0px",
  threshold,
};


function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove("reveal");
      observer.unobserve(entry.target);
    }
  });
}

document.documentElement.classList.add("reveal-loaded");

function animateOnScroll() {
  
  const a_blocks = [
    
    // Hero
    { id: "block-160e419fb1e6438f9a4ed9033e4e92b6", class: "reveal-1" },
    { id: "block-6045708d56d7467a888de67ac78a2315", class: "reveal-2" },
    { id: "block-eb41dcba0a784bb9ba8ff77f1451bd20", class: "reveal-3" },
    { id: "block-f667b297baec4a138de37dcc008fd046", class: "reveal-1" },
    { id: "block-c36e69ea2e1e406393db07719790f5d6", class: "reveal-2" },
    { id: "block-3360bfc3d1d841239559c52e570998c2", class: "reveal-3" },
  
    
    //Projects
    { id: "block-b152895395ff4dde8b536916aa4f1374", class: "reveal-4" },
    
    
    //Know more
    { id: "block-240fe9514f7a49d1be9397abcaa415d1", class: "reveal-1" },
    { id: "block-9b1df09f344147bd9e1dd5d950accda9", class: "reveal-1" },
    { id: "block-1c94a31365dd4c92b3b3387070f0fa92", class: "reveal-2" },
    { id: "block-20fdf2b5bbfe4ed291d0f037beb298e1", class: "reveal-2" },
    { id: "block-5a7ddeb4873445eabc2b095c9d1728e3", class: "reveal-2" },
  ];
  
  a_blocks.forEach((block) => {
    const el = document.querySelector(`#${block.id}`);
    if (el) {
      el.classList.add(block.class);
    }
  });

  const observer = new IntersectionObserver(handleIntersect, options);
  const targets = document.querySelectorAll(".reveal");

  targets.forEach(function (target) {
    observer.observe(target);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  animateOnScroll();
});



  const observer = new IntersectionObserver(handleIntersect, options);
  const targets = document.querySelectorAll(".reveal");
  console.log("targets: ", targets);
  targets.forEach(function (target) {
    observer.observe(target);
  });
