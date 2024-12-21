window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.style.opacity = 1 - window.pageYOffset / 200;
  if (nav.style.opacity < 0.2) {
    nav.style.opacity = 0.2;
  }
});
