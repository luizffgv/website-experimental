import "./styles.scss?apply";
import {
  throwIfNull,
  trySpecify,
  uncheckedCast,
} from "@luizffgv/ts-conversions";
import { html } from "Scripts/tags";
import rawProjects, { ProjectRaw, Tag } from "./projects-list";
import Modal from "RaiarComponents/modal.js";

if (document.readyState == "loading")
  throw new Error("This module requires the document to be loaded.");

/**
 * Represents one of my projects.
 */
class Project {
  #element: HTMLElement | null = null;

  readonly name: string;
  readonly description: string;
  readonly details?: string;
  readonly tags: Tag[];
  readonly license?: string;
  readonly url?: string;
  readonly repository?: string;
  readonly wip: boolean;
  readonly imageOverride?: string;

  /**
   * Creates a new {@link Project} from its raw object representation.
   */
  constructor(raw: ProjectRaw) {
    this.name = raw.name;
    this.description = raw.description;
    if (raw.details != null) this.details = raw.details;
    this.tags = raw.tags ?? [];
    if (raw.license != null) this.license = raw.license;
    if (raw.url != null) this.url = raw.url;
    if (raw.repository != null) this.repository = raw.repository;
    this.wip = raw.wip ?? false;
    if (raw["image-override"] != null)
      this.imageOverride = raw["image-override"];
  }

  /** An element representing the object. */
  get element(): HTMLElement {
    if (!this.#element) {
      let buttons = "";
      if (this.url != null)
        buttons += html`
          <a class="project__button-view button" href=${this.url}>
            <span class="material-symbols-outlined" aria-hidden="true"
              >visibility</span
            >
            Visualizar
          </a>
        `;
      if (this.repository != null)
        buttons += html`
          <a
            class="project__button-repository button"
            href=${this.repository}
            aria-label="Repositório"
          >
            <span
              class="project__button-repository-icon material-symbols-outlined"
              aria-hidden="true"
              >code</span
            >
            <span class="project__button-repository-text" aria-hidden="true"
              >Repositório</span
            >
          </a>
        `;

      const license = this.license
        ? html`<small class="project__license">${this.license}</small>`
        : "";

      const container = document.createElement("div");

      container.classList.add(
        "project__container",
        "align-center",
        "raiar-card",
        "raiar-vertical",
        "raiar-gap",
        "justify-between"
      );
      if (this.wip) container.classList.add("wip");

      container.role = "group";
      container.ariaLabel = this.name;

      container.innerHTML = html`
        <!-- Here we use a min-height equal to the image height so project
             titles stay at the same height whether or not an image is present
         -->
        <div
          class="raiar-horizontal raiar-gap raiar-wrap align-center justify-center"
          style="min-height: 48px"
        >
          <img
            src="assets/project-images/${this.imageOverride ?? this.name}.webp"
            alt="${this.name}"
            onerror="this.style.display = 'none'"
          />
          <div class="raiar-horizontal raiar-gap raiar-wrap align-baseline">
            <h3>${this.name} ${this.wip ? "(em progresso)" : ""}</h3>
            ${license}
          </div>
        </div>
        <p>${this.description}</p>
        <div class="project__buttons raiar-horizontal raiar-gap raiar-wrap">
          ${buttons}
        </div>
      `;

      if (this.details != null) {
        const buttonsContainer = uncheckedCast<HTMLElement>(
          container.querySelector(".project__buttons")
        );

        const detailsButton = document.createElement("button");
        detailsButton.classList.add("project__button-details");
        detailsButton.innerHTML = html`
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          Detalhes
        `;
        detailsButton.addEventListener("click", () => {
          const modal = new Modal();

          modal.userDismissible = true;
          modal.innerHTML = uncheckedCast(this.details);

          const titleElement = document.createElement("h2");
          titleElement.textContent = this.name;
          modal.insertBefore(titleElement, modal.firstChild);

          const tagsElement = document.createElement("div");
          tagsElement.classList.add("project-tags");
          tagsElement.append(
            ...this.tags.map((tag) => {
              const tagElement = document.createElement("span");
              tagElement.textContent = `#${tag}`;
              return tagElement;
            })
          );
          titleElement.before(tagsElement);

          document.body.append(modal);
        });

        buttonsContainer.insertBefore(
          detailsButton,
          buttonsContainer.firstChild
        );
      }

      this.#element = document.createElement("li");
      this.#element.classList.add("project");
      this.#element.append(container);
    }

    return this.#element;
  }

  /**
   * Returns a set of matches between the project's tags and the provided tags.
   *
   * @param tags - Tags to check the project against.
   * @returns - Set of matched tags.
   */
  matchingTags(tags: Set<Tag>): Set<Tag> {
    return new Set(this.tags.filter((tag) => tags.has(tag)));
  }
}

/**
 * Result returned by a {@link ProjectQueryBuilder}.
 */
class ProjectQueryResult {
  /**
   * All projects that match the query.
   */
  projects: Project[];

  /**
   * Creates a new {@link ProjectQueryResult}.
   *
   * This should not be called manually.
   */
  constructor(projects: Project[]) {
    this.projects = projects;
  }

  /**
   * Returns the resulting projects as {@link HTMLElement | HTML elements}.
   */
  elements(): HTMLElement[] {
    return this.projects.map((p) => p.element);
  }
}

const FILTER_LOGICS = ["best-match", "every"] as const;
type FilteringLogic = (typeof FILTER_LOGICS)[number];

/**
 * Helper for querying for projects from an array.
 */
class ProjectQueryBuilder {
  #projects: Project[];
  #tags: Set<Tag> = new Set();
  #logic: FilteringLogic = "best-match";

  /**
   * Creates a {@link ProjectQueryBuilder} for a given list of projects.
   */
  constructor(projects: Project[]) {
    this.#projects = projects;
  }

  /**
   * Specifies tags to search for.
   *
   * A project will only be included if it has **all** of the tags.
   */
  withTags(...tags: Tag[]): this {
    for (const tag of tags) this.#tags.add(tag);

    return this;
  }

  /**
   * Specifies a filtering logic to use.
   *
   * @param logic - Filtering logic to use.
   * - `"every"` — Projects must have every tag.
   * - `"best-match"` — Projects are ordered from most to least matching tags.
   */
  withLogic(logic: "every" | "best-match"): this {
    this.#logic = logic;

    return this;
  }

  /**
   * Gets the results of the query.
   */
  get(): ProjectQueryResult {
    let matching = [...this.#projects].sort(
      (p1, p2) =>
        p2.matchingTags(this.#tags).size - p1.matchingTags(this.#tags).size
    );

    if (requiredTags.size > 0)
      matching = matching.filter((p) => p.matchingTags(this.#tags).size > 0);

    if (this.#logic == "every")
      matching = matching.filter((p) => {
        for (const tag of this.#tags) {
          if (!p.tags.includes(tag)) return false;
        }
        return true;
      });

    return new ProjectQueryResult(matching);
  }
}

/**
 * Compares two strings, ignoring casing differences.
 */
function caseInsensitiveComparer(lhs: string, rhs: string): number {
  return lhs.toLocaleLowerCase().localeCompare(rhs.toLocaleLowerCase());
}

/**
 * Creates an HTML checkbox for toggling a tag for filtering.
 */
function createTagElement(tag: Tag): HTMLLabelElement {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) requiredTags.add(tag);
    else requiredTags.delete(tag);

    refreshProjects();
  });

  const label = document.createElement("label");
  label.append(checkbox, document.createTextNode(tag));

  return label;
}

/**
 * Refreshes the displayed list of projects.
 *
 * Must be called for filters to apply.
 */
function refreshProjects(): void {
  const projectsFadeOut = new Animation(
    new KeyframeEffect(
      elements.projects,
      [{ opacity: 1 }, { opacity: 0, scale: 0.95 }],
      {
        duration: 125,
        easing: "ease",
        fill: "forwards",
      }
    )
  );

  const onFadeOut = () => {
    const filterMode = trySpecify(
      elements.filterModes.querySelector(":checked"),
      HTMLInputElement
    ).value as FilteringLogic;
    if (!FILTER_LOGICS.includes(filterMode))
      throw new Error("Invalid filtering logic received.");

    const filteredProjects = new ProjectQueryBuilder(projects)
      .withTags(...requiredTags)
      .withLogic(filterMode)
      .get();

    if (filteredProjects.projects.length === 0)
      elements.projects.textContent =
        "Que pena, nenhum projeto se encaixa em todas essas categorias.";
    else elements.projects.replaceChildren(...filteredProjects.elements());

    projectsFadeOut.removeEventListener("finish", onFadeOut);
    projectsFadeOut.reverse();
  };

  projectsFadeOut.addEventListener("finish", onFadeOut);

  projectsFadeOut.play();
}

const elements = {
  projects: throwIfNull(document.getElementById("projects")),
  tags: throwIfNull(document.getElementById("tags")),
  filterModes: throwIfNull(document.getElementById("project-filter-modes")),
};

const projects = rawProjects.map((raw) => new Project(raw));

const tags = new Set(
  projects.flatMap((p) => p.tags).sort(caseInsensitiveComparer)
);

const requiredTags: Set<Tag> = new Set();

for (const filterMode of elements.filterModes.querySelectorAll("input"))
  filterMode.addEventListener("change", (event) => {
    const target = trySpecify(event.target, HTMLInputElement);
    if (target.matches(":checked")) refreshProjects();
  });

for (const tag of tags) {
  elements.tags.append(createTagElement(tag));
}

refreshProjects();
