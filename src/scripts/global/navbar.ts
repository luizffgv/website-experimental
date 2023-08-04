import NavigationBar from "Components/NavigationBar";
import entries from "Scripts/navbar-entries";

addEventListener("DOMContentLoaded", () => {
  const navbar = new NavigationBar();
  navbar.addEntries(...entries);
  document.body.insertBefore(navbar, document.body.firstChild);
});
