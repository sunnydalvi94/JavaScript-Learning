"use strict";
let sm = document.querySelectorAll(".showModal").length;

for (let i = 0; i < sm; i++) {
  document
    .querySelectorAll(".showModal")
    [i].addEventListener("click", function () {
      document.querySelector(".hidden").style.display = "block";
    });
}

document.querySelector(".closeModal").addEventListener("click", function () {
  document.querySelector(".hidden").style.display = "none";
});

document.body.addEventListener("keypress", function (e) {
  if (e.key == "Escape") {
    console.log("testing");
  }
});
