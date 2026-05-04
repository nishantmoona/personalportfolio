function createCircularProgress(elementSelector, valueSelector, endValue, color, speed) {
  const progressElement = document.querySelector(elementSelector);
  const valueElement = document.querySelector(valueSelector);

  if (!progressElement || !valueElement) return;

  let startValue = 0;

  const progress = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue >= endValue) {
      clearInterval(progress);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", function () {
  createCircularProgress(".html-css", ".html-progress", 70, "#57c9c2", 25);
  createCircularProgress(".javascript", ".javascript-progress", 90, "#f5c857", 25);
  createCircularProgress(".php", ".php-progress", 50, "#6f7f3a", 25);
  createCircularProgress(".reactjs", ".reactjs-progress", 70, "#4f5d2f", 25);

  const navbar = document.getElementById("navbar-top");
  const backToTopButton = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      navbar.classList.add("shadow-sm");
    } else {
      navbar.classList.remove("shadow-sm");
    }

    if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

$(document).ready(function () {
  $(".filter-item").click(function () {
    $(".filter-item").removeClass("active-filter");
    $(this).addClass("active-filter");

    const value = $(this).attr("data-filter");

    if (value === "all") {
      $(".post").fadeIn(300);
    } else {
      $(".post").hide();
      $(".post." + value).fadeIn(300);
    }
  });
});
