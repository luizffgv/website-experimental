var fullscreen_icon;

document.addEventListener("DOMContentLoaded", (e) => {
  fullscreen_icon = document.getElementById("fullscreen-icon");
  document.getElementById("fullscreen").onclick = fullscreenToggle;
});

document.onfullscreenchange = (e) => {
  fullscreen_icon.classList.toggle("fa-expand-alt");
  fullscreen_icon.classList.toggle("fa-compress-alt");
};

function fullscreenToggle() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}
