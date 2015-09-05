(function (window, chrome) {
  "use strict";

  function replaceLogoImage(logo) {
    // Google keep a variable around called 'logo' we can use this to change the image
    if (logo.childNodes.length) {
      var image = logo.childNodes[0];
      if (image.tagName === 'IMG') {
        image.style.opacity = 0;
        image.src = chrome.extension.getURL('assets/nav_logo.png');
        image.onload = function () {
          image.height = 305;
          image.width = 167;
          image.style.opacity = 1;
        };
      }
    } else if (logo.tagName === 'A') {
      logo.style.backgroundImage = 'url(' + chrome.extension.getURL('assets/nav_logo.png') + ')';
    }
  }

  var check = setInterval(function () {
    if (window.logo !== undefined) {
      clearInterval(check);
      replaceLogoImage(window.logo);
    }
  }, 0);
}(window, chrome));