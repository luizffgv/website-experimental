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
  static template = html` <div id="resize-helper">
      <!-- The resize-helper element is watched for changes in the document
           width. Its size is never changed during the ResizeObserver callback,
           so it doesn't cause undelivered notification errors.
           Watching document.body isn't appropriate as its height changes when
           switching between navigation bar and hamburger menu. Watching other
           elements of the NavigationBar also isn't suitable since they also
           change their sizes during the callback.
          -->
    </div>
    <div id="container">
      <slot id="hamburger"></slot>
      <nav id="entries"></nav>
    </div>`;

  static styles = [style];

  /**
   * `true` if the element is connected to the document.
   */
  #connected: boolean = false;

  /**
   * Watches for resizes on `resize-helper` to toggle between navigation bar and
   * hamburger menu.
   */
  #resizeObserver: ResizeObserver;

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

    const hamburgerIcon = document.createElement("span");
    hamburgerIcon.classList.add("material-symbols-outlined");
    hamburgerIcon.textContent = "menu";

    const hamburgerButton = document.createElement("button");
    hamburgerButton.onclick = () => this.#toggleExpanded();
    hamburgerButton.appendChild(hamburgerIcon);

    this.appendChild(hamburgerButton);

    this.#resizeObserver = new ResizeObserver(this.#checkOverflow.bind(this));
    this.#resizeObserver.observe(
      throwIfNull(shadowRoot.getElementById("resize-helper"))
    );
  }

  /**
   * The element containing the entries.
   */
  get #entries(): HTMLElement {
    return trySpecify(
      throwIfNull(this.shadowRoot).getElementById("entries"),
      HTMLElement
    );
  }

  /**
   * The element inside the shadow root, containing the navbar.
   */
  get #container(): HTMLElement {
    return trySpecify(
      throwIfNull(this.shadowRoot).getElementById("container"),
      HTMLElement
    );
  }

  /**
   * Toggles the hamburger menu expanded state.
   *
   * @param expanded - Forces a specific state.
   */
  #toggleExpanded(expanded?: boolean): void {
    if (expanded == undefined)
      if (this.#container.hasAttribute("data-expanded"))
        this.#container.removeAttribute("data-expanded");
      else this.#container.setAttribute("data-expanded", "");
    else if (expanded) this.#container.setAttribute("data-expanded", "");
    else this.#container.removeAttribute("data-expanded");
  }

  /**
   * Switches between a navigation bar and a hamburger menu as appropriate.
   */
  #checkOverflow(): void {
    // Can't get the style when disconnected
    if (!this.#connected) return;

    const gapCss = getComputedStyle(this.#entries).columnGap;
    if (!gapCss.endsWith("px"))
      throw new Error(
        "Gap between navigation bar entries is not measured in px"
      );

    const gap = parseFloat(gapCss.substring(0, gapCss.length - "px".length));

    const containerStyle = getComputedStyle(this.#container);

    const padding = [containerStyle.paddingLeft, containerStyle.paddingRight]
      .map((padding) => {
        if (!padding.endsWith("px"))
          throw new Error("Navigation bar padding is not measured in px");
        return padding;
      })
      .map(parseFloat)
      .reduce(add);

    const children = [...this.#entries.children].map((child) =>
      trySpecify(child, HTMLElement)
    );

    const requiredWidth = children
      .map((child) => child.offsetWidth)
      .reduce((lhs, rhs) => lhs + gap + rhs);

    if (requiredWidth > this.#entries.clientWidth - padding)
      this.#container.setAttribute("data-hamburger", "");
    else {
      this.#container.removeAttribute("data-hamburger");
      this.#toggleExpanded(false);
    }
  }

  connectedCallback(): void {
    this.#connected = true;

    this.#checkOverflow();
  }

  disconnectedCallback(): void {
    this.#connected = false;
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
  addEntries(...entries: NavigationBarEntry[]): void {
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

    this.#checkOverflow();
  }
}

customElements.define("x-navigationbar", NavigationBar);
