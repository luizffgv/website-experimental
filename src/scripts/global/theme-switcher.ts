/**
 * @file
 * Adds a theme switcher to the start of the page.
 */

import { uncheckedCast } from "@luizffgv/ts-conversions";
import Modal from "RaiarComponents/modal";
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
    <div class="raiar-horizontal justify-center raiar-gap raiar-wrap">
      <button id="button-theme-toggle" aria-label="Toggle theme">
        <span></span>
      </button>
      <button id="button-primary-choose" aria-label="Choose primary color">
        <span class="material-symbols-outlined">brush</span>
      </button>
    </div>
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

const primaryChooseElement = uncheckedCast<HTMLButtonElement>(
  document.getElementById("button-primary-choose")
);

primaryChooseElement.addEventListener("click", () => {
  const oldColor = getComputedStyle(document.body).getPropertyValue(
    "--raiar-color-primary"
  );

  const colorPickerModal = new Modal();
  colorPickerModal.userDismissible = false;

  const header = document.createElement("h2");
  header.textContent = "Selecione uma cor";

  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.value = "#2d9bf0";
  document.body.style.setProperty("--raiar-color-primary", "#2d9bf0");
  colorPicker.addEventListener("change", () => {
    document.body.style.setProperty("--raiar-color-primary", colorPicker.value);
  });

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("raiar-color-danger");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", () => {
    document.body.style.setProperty("--raiar-color-primary", oldColor);
    colorPickerModal.dismiss();
  });

  const applyButton = document.createElement("button");
  applyButton.textContent = "Aplicar";
  applyButton.addEventListener("click", () => {
    colorPickerModal.dismiss();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("raiar-horizontal", "raiar-gap");
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(applyButton);

  const container = document.createElement("div");
  container.classList.add("raiar-vertical", "align-center", "raiar-gap");
  container.appendChild(header);
  container.appendChild(colorPicker);
  container.appendChild(buttonContainer);

  colorPickerModal.appendChild(container);

  document.body.appendChild(colorPickerModal);
});
