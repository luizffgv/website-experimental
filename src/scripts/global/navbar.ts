import { trySpecify } from "@luizffgv/ts-conversions";
import NavigationBar from "Components/NavigationBar";
import entries from "Scripts/navbar-entries";

addEventListener("DOMContentLoaded", () => {
  const navbar = trySpecify(document.getElementById("navbar"), NavigationBar);
  navbar.addEntries(...entries);
});
