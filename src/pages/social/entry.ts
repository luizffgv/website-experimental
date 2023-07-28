import "Styles/global.scss?apply";
import { applyMyAge } from "Scripts/my-age";
import * as bubbles from "Scripts/bubbles";
import NavigationBar from "Components/NavigationBar";
import { trySpecify } from "@luizffgv/ts-conversions";
import entries from "Scripts/navbar-entries";

document.addEventListener("DOMContentLoaded", () => {
  applyMyAge("#age");

  bubbles.addToPage();

  const navbar = trySpecify(document.getElementById("navbar"), NavigationBar);
  navbar.addEntries(...entries);
});
