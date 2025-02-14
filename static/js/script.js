document.querySelector(".envelope").addEventListener("click", function () {
  const flap = document.querySelector(".flap");
  const letter = document.querySelector(".letter");
  const heartsContainer = document.querySelector(".hearts"); // Reference the hearts container

  if (!this.classList.contains("open")) {
    // Open envelope
    this.classList.add("open");

    flap.addEventListener(
      "transitionend",
      function () {
        flap.style.zIndex = "2"; // Move flap behind letter after opening
      },
      { once: true }
    );
  } else {
    // Close envelope
    letter.classList.add("closing"); // Add closing class
    letter.addEventListener(
      "transitionend",
      function () {
        letter.classList.remove("closing");
        document.querySelector(".envelope").classList.remove("open");
        flap.style.zIndex = "5"; // Bring flap back in front
      },
      { once: true }
    );
  }
});
