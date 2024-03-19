console.log("connected");
let hamburgerContainer = document.getElementById("hamburger-container");
let hamburger = document.getElementById("hamburger");
let navLinkContainer = document.getElementById("nav-link-container");
hamburgerContainer.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinkContainer.classList.toggle("active");
});

// let closeNav = () => {
//   document.getElementById("hamburger").classList.remove("active");
//   document.getElementById("nav-link-container").classList.remove("active");
// };

document.getElementById("nav-link-container").addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    hamburger.classList.remove("active");
    navLinkContainer.classList.remove("active");
  }
});
