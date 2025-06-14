var hamburger = document.querySelector(".hamb");
var navbar = document.querySelector(".navbar");
var links = document.querySelector(".navbar li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navbar.classList.toggle("open");
})