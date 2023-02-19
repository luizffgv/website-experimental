import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Information about a project
 */
@customElement("x-project")
export class Project extends LitElement {
  /**
   * Name of the project
   */
  @property()
  project?: string;

  /**
   * Comma-separated list of tools used for the project
   */
  @property()
  tools?: string;

  /**
   * License used by the project
   */
  @property()
  license?: string;

  @property()
  description?: string;

  /**
   * Link to the project's repository
   */
  @property()
  repository?: string;

  /**
   * Link to the project itself
   */
  @property()
  url?: string;

  /**
   * Link to the docs
   */
  @property()
  docs?: string;

  /**
   * @returns The HTML for a tool icon
   */
  private getToolIcon(tool: string) {
    return html`<img
      title="${tool}"
      class="devicon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg"
    />`;
  }

  /**
   * @returns The HTML for the tool icons
   */
  private getTools() {
    return this.tools
      ? html`<div id="tools">
          <span>feito com</span>
          <div id="tools-icons">
            ${this.tools.split(", ").map(this.getToolIcon)}
          </div>
        </div>`
      : "";
  }

  /**
   * @returns The HTML for the anchors (URL and/or repository)
   */
  private getAnchors() {
    return html`<div id="anchors">
      ${this.url
        ? html`<a hrel="noopener noreferrer" target="_blank" href=${this.url}>
            <ion-icon class="anchor_icon" name="link"></ion-icon>
          </a>`
        : ""}
      ${this.repository
        ? html`<a
            hrel="noopener noreferrer"
            target="_blank"
            href=${this.repository}
          >
            <ion-icon class="anchor_icon" name="logo-github"></ion-icon>
          </a>`
        : ""}
      ${this.docs
        ? html`<a hrel="noopener noreferrer" target="_blank" href=${this.docs}>
            <ion-icon name="document-text-outline"></ion-icon>
          </a>`
        : ""}
    </div>`;
  }

  static styles = unsafeCSS(require("Styles/components/x-project.scss"));

  render() {
    return html`<article>
      <div id="title-bar">
        <div>
          <h1>${this.project}</h1>
          <p id="license">${this.license}</p>
        </div>
        ${this.getTools()}
      </div>
      <p id="desc">${this.description}</p>
      <div>${this.getAnchors()}</div>
    </article>`;
  }
}

@customElement("x-hero")
export class Hero extends LitElement {
  @property()
  content?: string;

  static styles = unsafeCSS(require("Styles/components/x-hero.scss"));

  render() {
    return html`<div><h1>${this.content}</h1></div>`;
  }
}

@customElement("x-header")
export class Header extends LitElement {
  render() {
    return html`<header></header>`;
  }
}
