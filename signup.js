let caret = document.querySelector(".caret");
let option = document.querySelector(".options");

let dropdown = document.querySelector(".dropdown");

option.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
  caret.classList.toggle("fa-angle-up");
  caret.classList.toggle("fa-angle-down");
});

