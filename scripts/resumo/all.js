/*
This needs the following scripts to work.
- vendor/ScrollMagic/assets/js/lib/greensock/TweenMax.min.js
- vendor/ScrollMagic/scrollmagic/minified/ScrollMagic.min.js
- vendor/ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js
*/

import "./animations.js";
import "./fullscreen.js";

document.addEventListener("DOMContentLoaded", (e) => {
  document.body.style.visibility = "visible";
});
