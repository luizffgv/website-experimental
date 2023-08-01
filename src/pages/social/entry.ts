import "Styles/global.scss?apply";
import { applyMyAge } from "Scripts/my-age";

document.addEventListener("DOMContentLoaded", () => {
  applyMyAge("#age");
});
