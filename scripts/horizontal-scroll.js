const button = document.getElementById("slide");
button.onclick = function () {
  const container = document.querySelector(".nav");
  sideScroll(container, "right", 25, 100, 10);
};

const back = document.getElementById("slide-back");
back.onclick = function () {
  const container = document.querySelector(".nav");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
