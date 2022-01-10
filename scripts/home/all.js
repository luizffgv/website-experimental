// Code block containing the main contents
let code;
// Paths to the contents of the code block
let paths = { welcome: "welcome.html" };

// Loads a file to the code block
async function content_load(url) {
  await fetch(url)
    .then((response) => response.text())
    .then((text) => {
      code.innerHTML = text;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  code = document.querySelector("#code");

  content_load(paths.welcome).then(
    () => (document.body.style.visibility = "visible")
  );
});
