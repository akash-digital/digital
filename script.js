// Button Click

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {

  alert("Welcome to Akash Digital!");

});


// Mobile Menu Icon Animation

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle("active");

});