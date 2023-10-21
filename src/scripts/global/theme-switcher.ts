/**
 * @file
 * Adds a theme switcher to the start of the page.
 */

import { uncheckedCast } from "@luizffgv/ts-conversions";
import { css, html } from "Scripts/tags";

const style = document.createElement("style");
style.textContent = css`
  #button-theme-toggle {
    &:is(.raiar-dark &) span::after {
      content: "Tema claro";
    }

    & span::after {
      content: "Tema escuro";
    }
  }
`;
document.head.appendChild(style);

const container = document.createElement("div");
container.classList.add("raiar-vertical", "raiar-gap", "align-center");
container.innerHTML = html`
  <div class="raiar-vertical raiar-gap align-center">
    <h2>Mudar tema</h2>
    <button id="button-theme-toggle" aria-label="Toggle theme">
      <span></span>
    </button>
  </div>
`;
document.body.insertBefore(container, document.body.firstChild);

const themeToggleButtonElement = uncheckedCast<HTMLButtonElement>(
  document.getElementById("button-theme-toggle")
);

themeToggleButtonElement.addEventListener("click", () => {
  document.documentElement.classList.toggle("raiar-dark");

  for (const card of document.querySelectorAll(".raiar-card")) {
    const direction = Math.sign(Math.random() - 0.5);

    new Animation(
      new KeyframeEffect(
        card,
        [
          {},
          { rotate: `z ${1 * direction}deg` },
          { rotate: `z ${-0.5 * direction}deg` },
          {},
        ],
        {
          duration: 500,
          easing: "ease",
        }
      )
    ).play();
  }
});
