import "Styles/global.scss?apply";
import { trySpecify } from "@luizffgv/ts-conversions";
import NavigationBar from "Components/NavigationBar";
import entries from "Scripts/navbar-entries";
import * as bubbles from "Scripts/bubbles";
import { applyMyAge } from "Scripts/my-age";

addEventListener("DOMContentLoaded", () => {
  bubbles.addToPage();

  const navbar = trySpecify(document.getElementById("navbar"), NavigationBar);
  navbar.addEntries(...entries);

  applyMyAge("#age");
});
