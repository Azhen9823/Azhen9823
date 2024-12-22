window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.style.opacity = 1 - window.pageYOffset / 200;
  if (nav.style.opacity < 0.2) {
    nav.style.opacity = 0.2;
  }
});

/*以下部分用来控制更多按钮（12.22）*/
document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("load-more-btn");
  const hiddenArticles = document.querySelectorAll(".hidden-article");
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const loadMoreBtnOffsetTop =
      loadMoreBtn.getBoundingClientRect().top + scrollTop;
    if (loadMoreBtnOffsetTop - windowHeight < 0) {
      hiddenArticles.forEach(function (article) {
        article.style.display = "block";
      });
      loadMoreBtn.style.display = "none";
    }
  });
  loadMoreBtn.addEventListener("click", function () {
    hiddenArticles.forEach(function (article) {
      article.style.display = "block";
    });
    loadMoreBtn.style.display = "none";
  });
});
