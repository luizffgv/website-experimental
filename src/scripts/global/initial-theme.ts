/**
 * @file
 * Sets the appropriate page theme according to the user's preferred color
 * scheme.
 */

if (matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList.add("raiar-dark");
