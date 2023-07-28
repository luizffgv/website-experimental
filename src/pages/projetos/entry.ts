import "Styles/global.scss?apply";
import "./styles.scss?apply";
import { throwIfNull, trySpecify } from "@luizffgv/ts-conversions";
import NavigationBar from "Components/NavigationBar";
import entries from "Scripts/navbar-entries";
import { html } from "Scripts/tags";
import { add } from "Scripts/functional";
import rawProjects from "./projects.json";
import * as bubbles from "Scripts/bubbles";

/**
 * Project tag.
 */
type Tag = string;

/**
 * Raw project obtained from JSON.
 */
type ProjectRaw = {
  name: string;
  description: string;
  tags?: Tag[];
  license?: string;
  url?: string;
  repository?: string;
};

/**
 * Represents one of my projects.
 */
class Project {
  name: string;
  description: string;
  tags: Tag[];
  license?: string;
  url?: string;
  repository?: string;

  /**
   * Creates a new {@link Project} from its raw object obtained from JSON.
   */
  constructor(raw: ProjectRaw) {
    this.name = raw.name;
    this.description = raw.description;
    this.tags = raw.tags ?? [];
    if (raw.license != null) this.license = raw.license;
    if (raw.url != null) this.url = raw.url;
    if (raw.repository != null) this.repository = raw.repository;
  }

  /**
   * Returns HTML representing the project.
   */
  asHTML(): string {
    let buttons = "";
    if (this.url != null)
      buttons += html`<a class="button" href=${this.url}>
        <span class="material-symbols-outlined">link</span> Ver
      </a>`;
    if (this.repository != null)
      buttons += html`<a class="button" href=${this.repository}>
        <span class="material-symbols-outlined">code</span> Repositório
      </a>`;

    return html`<div class="project">
      <div>
        <p class="project-name">${this.name}</p>
        <p class="project-description">${this.description}</p>
      </div>
      <div class="project-buttons">${buttons}</div>
    </div>`;
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
   * Returns the resulting projects as HTML.
   */
  asHTML(): string {
    return this.projects.map((p) => p.asHTML()).reduce(add, "");
  }
}

/**
 * Helper for querying for projects from an array.
 */
class ProjectQueryBuilder {
  #projects: Project[];
  #tags: Set<Tag> = new Set();

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
  withTags(...tags: Tag[]) {
    for (const tag of tags) this.#tags.add(tag);

    return this;
  }

  /**
   * Gets the results of the query.
   */
  get(): ProjectQueryResult {
    return new ProjectQueryResult(
      this.#projects.filter((p) => {
        for (const tag of this.#tags) {
          if (!p.tags.includes(tag)) return false;
        }
        return true;
      })
    );
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
  label.classList.add("checkbox");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(tag));

  return label;
}

/**
 * Refreshes the displayed list of projects.
 *
 * Must be called for filters to apply.
 */
function refreshProjects() {
  const projectsElement = throwIfNull(document.getElementById("projects"));

  const filteredProjects = new ProjectQueryBuilder(projects)
    .withTags(...requiredTags)
    .get();

  if (filteredProjects.projects.length == 0)
    projectsElement.textContent =
      "Que pena, nenhum projeto se encaixa em todas essas categorias.";
  else projectsElement.innerHTML = filteredProjects.asHTML();
}

const projects = rawProjects.map((raw) => new Project(raw));

const tags = new Set(
  projects.flatMap((p) => p.tags).sort(caseInsensitiveComparer)
);

const requiredTags: Set<string> = new Set();

addEventListener("DOMContentLoaded", () => {
  bubbles.addToPage();

  const navbar = trySpecify(document.getElementById("navbar"), NavigationBar);
  navbar.addEntries(...entries);

  refreshProjects();

  const tagsElement = throwIfNull(document.getElementById("tags"));
  for (const tag of tags) {
    tagsElement.appendChild(createTagElement(tag));
  }
});
