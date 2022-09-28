// create an elemenet div when submit is pressed
const open = document.querySelector("#open");
const modal_container = document.querySelector("#modal_container");
const close = document.querySelector("#close");

// grab info using querySelector and the class

open.addEventListener("click", function () {
  modal_container.classList.add("show");
});

close.addEventListener("click", function () {
  modal_container.classList.remove("show");
});
