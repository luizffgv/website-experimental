/**
 * @file
 * Adds `noopener` and `noreferrer` to all existing anchors and also listens for
 * new anchors.
 */

/**
 * Adds `noopener` and `noreferrer` to the element's `rel` attribute.
 *
 * @param element - Target element.
 */
function addNoopenerNoreferrer(element: HTMLAnchorElement) {
  let rel = element.getAttribute("rel") ?? "";
  if (!rel.includes("noopener")) rel += " noopener";
  if (!rel.includes("noreferrer")) rel += " noreferrer";
  element.setAttribute("rel", rel);
}

/**
 * Calls {@link addNoopenerNoreferrer} for every anchor contained in the
 * element, including the element itself if it's an anchor.
 *
 * @param element - Target element.
 */
function updateAnchors(element: Element) {
  if (element instanceof HTMLAnchorElement) addNoopenerNoreferrer(element);
  else for (const child of [...element.children]) updateAnchors(child);
}

// Update anchors that were added before this script ran.
for (const element of document.getElementsByTagName("a"))
  addNoopenerNoreferrer(element);

new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type == "childList") {
      for (const element of [...mutation.addedNodes].filter(
        (element): element is HTMLElement => element instanceof HTMLElement
      ))
        updateAnchors(element);
    }
  }
}).observe(document.body, {
  subtree: true,
  childList: true,
});
