/**
 * @file
 * Inserts a text containing my age in the `#age` element if it exists.
 */

import { applyMyAge } from "Scripts/my-age";

document.addEventListener("DOMContentLoaded", () => {
  applyMyAge("#age");
});
