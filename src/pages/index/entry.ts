import "Styles/global.scss?apply";
import { applyMyAge } from "Scripts/my-age";

addEventListener("DOMContentLoaded", () => {
  applyMyAge("#age");
});
