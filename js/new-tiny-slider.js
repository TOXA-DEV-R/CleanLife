// category slider
if (document.querySelector("#category-slider-two")) {
    let categorySlider = tns({
      container: "#category-slider-two",
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