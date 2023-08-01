import "Styles/global.scss?apply";
import "./styles.scss?apply";
import { applyMyAge } from "Scripts/my-age";

addEventListener("DOMContentLoaded", () => {
  applyMyAge("#age");
});
