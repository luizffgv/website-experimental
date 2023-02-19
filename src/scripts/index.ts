import "Styles/index.scss";

import "./components.ts";

addEventListener("DOMContentLoaded", () => {
  const age_tag = document.getElementById("age");

  // Calculate my age and add it to the page
  if (age_tag) {
    const date_diff = Date.now() - +new Date(2001, 6, 1);
    const age = Math.floor(date_diff / 3.154e10);

    age_tag.textContent = age.toString();
  }
});
