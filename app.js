// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((el) => observer.observe(el));

("use strict");

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});

// Init
var $ = jQuery;
var animationTime = 20,
  days = 7;

$(document).ready(function () {
  // timer arguments:
  //   #1 - time of animation in mileseconds,
  //   #2 - days to deadline

  $("#progress-time-fill, #death-group").css({
    "animation-duration": animationTime + "s",
  });

  var deadlineAnimation = function () {
    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "1.5s" });
    }, 0);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "1s" });
    }, 4000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.7s" });
    }, 8000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.3s" });
    }, 12000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.2s" });
    }, 15000);
  };

  function timer(totalTime, deadline) {
    var time = totalTime * 1000;
    var dayDuration = time / deadline;
    var actualDay = deadline;

    var timer = setInterval(countTime, dayDuration);

    function countTime() {
      --actualDay;
      $(".deadline-days .day").text(actualDay);

      if (actualDay == 0) {
        clearInterval(timer);
        $(".deadline-days .day").text(deadline);
      }
    }
  }

  var deadlineText = function () {
    var $el = $(".deadline-days");
    var html =
      '<div class="mask-red"><div class="inner">' +
      $el.html() +
      '</div></div><div class="mask-white"><div class="inner">' +
      $el.html() +
      "</div></div>";
    $el.html(html);
  };

  deadlineText();

  deadlineAnimation();
  timer(animationTime, days);

  setInterval(function () {
    timer(animationTime, days);
    deadlineAnimation();

    console.log("begin interval", animationTime * 1000);
  }, animationTime * 1000);
});
