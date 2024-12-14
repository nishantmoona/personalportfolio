// Reusable function for circular progress bars
function createCircularProgress(elementSelector, valueSelector, endValue, color, speed) {
  let progressElement = document.querySelector(elementSelector);
  let valueElement = document.querySelector(valueSelector);

  let startValue = 0;

  let progress = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progressElement.style.background = `conic-gradient(${color} ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue == endValue) {
      clearInterval(progress);
    }
  }, speed);
}

// Circular progress bars initialization
createCircularProgress(".html-css", ".html-progress", 90, "#fca61f", 30);
createCircularProgress(".javascript", ".javascript-progress", 75, "#7d2ae8", 30);
createCircularProgress(".php", ".php-progress", 80, "#20c997", 30);
createCircularProgress(".reactjs", ".reactjs-progress", 30, "#3f396d", 30);

// Filter functionality using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show(1000);
    } else {
      $(".post").not("." + value).hide(1000);
      $(".post").filter("." + value).show(1000);
    }
  });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar-top");
  const body = document.body;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
      navbar.classList.remove("fixed-top");
      body.style.paddingTop = "0";
    }
  });
});

// Back-to-top button functionality
const backToTopButton = document.getElementById("btn-back-to-top");

// Show/hide button on scroll
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top on button click
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
