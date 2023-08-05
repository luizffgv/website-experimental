import { html } from "Scripts/tags";
import style from "Components/NavigationBar.scss?sheet";
import { throwIfNull, trySpecify } from "@luizffgv/ts-conversions";
import { add } from "Scripts/functional";

/**
 * Represents an entry in a {@link NavigationBar}.
 */
export type NavigationBarEntry = {
  /**
   * Display name.
   *
   * @remarks
   *
   * Spaces and underscores are not differentiated.
   */
  name: string;

  /**
   * Destination URL.
   */
  url: string;

  /**
   * Alternative URLs.
   *
   * @remarks
   *
   * Both `/dog` and `/dog.html` are the same page, so one of them must be the
   * destination and one of them must be an alternative.
   *
   * The navigation bar will look up the URL and its alternatives to determine
   * which page we are in and highlight its entry.
   */
  urlAlternatives?: string[];
};

/**
 * Navigation bar element. Its tag is `x-navigationbar`.
 */
export default class NavigationBar extends HTMLElement {
  static template = html`<nav></nav>`;

  static styles = [style];

  /**
   * Generates the HTMLElement for an entry.
   *
   * @param entry - Entry to generate HTML from.
   */
  static #makeEntryElement(entry: NavigationBarEntry): HTMLElement {
    const anchor = document.createElement("a");
    anchor.href = entry.url;
    anchor.textContent = entry.name;

    const container = document.createElement("div");
    container.id = entry.name.replace(" ", "_");
    container.appendChild(anchor);

    return container;
  }

  /**
   * Creates a new {@link NavigationBar}
   */
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = NavigationBar.template;
    shadowRoot.adoptedStyleSheets = NavigationBar.styles;
  }

  /**
   * The element containing the entries.
   */
  get #entries(): HTMLElement {
    return trySpecify(throwIfNull(this.shadowRoot).children[0], HTMLElement);
  }

  /**
   * Adds entries to the navigation bar.
   *
   * @remarks
   *
   * Spaces and underscores are considered the same character in entry names.
   *
   * @param entries - Entries to add.
   */
  addEntries(...entries: NavigationBarEntry[]) {
    this.#entries.append(...entries.map(NavigationBar.#makeEntryElement));

    for (const { name, url, urlAlternatives } of entries) {
      const alternatives = [url, urlAlternatives].flat();

      for (const url of alternatives)
        if (location.pathname == url) {
          throwIfNull(this.shadowRoot)
            .getElementById(name.replace(" ", "_"))
            ?.setAttribute("data-current", "true");
          break;
        }
    }
  }
}

customElements.define("x-navigationbar", NavigationBar);
