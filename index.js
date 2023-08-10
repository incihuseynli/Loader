const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

setTimeout(() => {
  loader.style.display = "none";
  content.style.display = "flex";
}, 6000);

// Confetti Effect

var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
