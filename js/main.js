// category slider
if (document.querySelector("#category-slider")) {
  let categorySlider = tns({
    container: "#category-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    navContainer: "#customize-thumbnails",
    navAsThumbnails: true,
    controls: true,
    controlsPosition: "bottom",
    mouseDrag: true,
    animateDelay: 1000,
    rewind: true,
    touch: true,
    swipeAngle: 60,
    onInit: loadWideImages,
    reponsive: {
      761: {
        nav: false,
      },
    },
  });

  var customizedFunction = function (info) {
    if (info.navItems[info.displayIndex - 1]) {
      const src = info.navItems[info.displayIndex - 1].dataset.image;
      document.querySelector(".header-bg .img img").src = src;
      if (info.navItems[info.displayIndex - 1].dataset.loaded == "true") {
        info.navItems[info.displayIndex - 1].dataset.image =
          info.navItems[info.displayIndex - 1].dataset.src;
      } else {
        var imgs = [];
        imgs[info.displayIndex - 1] = new Image();
        imgs[info.displayIndex - 1].src =
          info.navItems[info.displayIndex - 1].dataset.src;
        imgs[info.displayIndex - 1].onload = function () {
          if (imgs[info.displayIndex - 1].complete) {
            info.navItems[info.displayIndex - 1].dataset.image =
              info.navItems[info.displayIndex - 1].dataset.src;
            document.querySelector(".header-bg .img img").src =
              info.navItems[info.displayIndex - 1].dataset.src;
          }
        };
      }
    }
  };

  categorySlider.events.on("indexChanged", customizedFunction);

  //loading wide images
  function loadWideImages() {
    const customizeThumbnails = document
      .getElementById("customize-thumbnails")
      .querySelectorAll("li");
    var imgs = [];

    customizeThumbnails.forEach(function (item, index) {
      imgs[index] = new Image();
      imgs[index].src = item.dataset.src;
      imgs[index].onload = function () {
        if (imgs[index].complete) {
          item.dataset.loaded = "true";
          item.dataset.image = imgs[index].src;
          if (index == 0) {
            document.querySelector(".header-bg .img img").dataset.src =
              imgs[index].src;
          }
        }
      };
    });
  }
}

// secProjectImages
if (document.querySelector("#sec-project__images")) {
  let secProjectImages = tns({
    container: "#sec-project__images",
    items: 1,
    navPosition: "bottom",
    controls: true,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: false,
    controlsText: [
      `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.9167 17L7.08341 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 26.9167L7.08333 17.0001L17 7.08341" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
      `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.08325 17H26.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 7.08325L26.9167 16.9999L17 26.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    ],
  });
}
// secEquipmentSlider
if (document.querySelector("#sec-equipment-slider")) {
  let secEquipmentSlider = tns({
    container: "#sec-equipment-slider",
    items: 3,
    gutter: 160,
    swipeAngle: false,
    speed: 400,
    navPosition: "bottom",
    controls: false,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: true,
  });
}

// secClientSlider
if (document.querySelector("#sec-client-slider")) {
  let secClientSlider = tns({
    container: "#sec-client-slider",
    items: 3,
    gutter: 52,
    swipeAngle: false,
    speed: 400,
    navPosition: "bottom",
    controls: false,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: true,
  });
}

// header-fixed
window.addEventListener("scroll", navbarAoutoControl);
const navbar = document.querySelector("nav.navbar");
const navbarFixed = document.querySelector("div.navbar-fixed");
function navbarAoutoControl() {
  if (window.pageYOffset < 500) {
    navbarFixed.style.display = "none";
  } else {
    if (document.body.offsetWidth > 1200) {
      navbarFixed.style.display = "block";
    }
  }
}

window.addEventListener("resize", navbarWidthResize);
navbarWidthResize();
function navbarWidthResize() {
  if (document.body.offsetWidth < 1200) {
    navbar.style.display = "none";
    navbarFixed.style.display = "none";
  } else {
    navbar.style.display = "flex";
    navbarFixed.style.display = "none";
  }
}
// btnUp
const btnUp = document.querySelector(".btn-up");
btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", srollBtnUp);
function srollBtnUp() {
  if (window.pageYOffset < 500) {
    btnUp.style.display = "none";
  } else {
    btnUp.style.display = "block";
  }
}
// Dropdown menu
const menuInitItem = document.querySelectorAll(".menu-init__item");
