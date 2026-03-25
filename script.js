function playSound() {
  let sound = document.getElementById("clickSound");
  sound.play();
}

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    let pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});