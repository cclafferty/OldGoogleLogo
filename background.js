(function (chrome) {
  "use strict";

  // Main logo
  chrome.webRequest.onBeforeRequest.addListener(function () {
    return {redirectUrl: chrome.extension.getURL('assets/logo.png')};
  }, {urls: ['*://*/*images/branding/googlelogo/2x/googlelogo_color_272x92dp.png']}, ['blocking']);

  // Smaller logo on subpages
  chrome.webRequest.onBeforeRequest.addListener(function () {
    return {redirectUrl: chrome.extension.getURL('assets/logo-small.png')};
  }, {urls: ['*://*/*images/branding/googlelogo/1x/googlelogo_color_116x41dp.png']}, ['blocking']);

  // Favicon and shortcut icon
  chrome.webRequest.onBeforeRequest.addListener(function () {
    return {redirectUrl: chrome.extension.getURL('assets/favicon.ico')};
  }, {urls: ['*://*/*images/branding/product/ico/googleg_*.ico', '*://*/favicon.ico']}, ['blocking']);

  // Png favicon
  chrome.webRequest.onBeforeRequest.addListener(function () {
    return {redirectUrl: chrome.extension.getURL('assets/favicon.png')};
  }, {urls: ['*://*/*images/branding/googleg/1x/googleg_standard_color_128dp.png']}, ['blocking']);
}(chrome));