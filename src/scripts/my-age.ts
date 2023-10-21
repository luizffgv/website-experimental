/**
 * @file
 * Provides ways to calculate my current age.
 */

/**
 * Returns my age in years.
 */
export function getMyAge(): number {
  const date_diff = Date.now() - +new Date(2001, 6, 1);
  return Math.floor(date_diff / 3.154e10);
}

/**
 * Applies my age to an element as its `textContent`.
 */
export function applyMyAge(selector: string): void {
  const myAge = getMyAge();

  for (const element of document.querySelectorAll(selector))
    element.textContent = myAge.toString();
}
