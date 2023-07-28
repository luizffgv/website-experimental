/**
 * No-op tag function to mark a string as HTML code.
 *
 * Some IDEs and extensions will properly format and highlight code inside this
 * tag.
 */
export function html(
  strings: TemplateStringsArray,
  ...vals: unknown[]
): string {
  const valStrings = vals.map(String);
  // valStrings count could be one less than strings count, so we add a dummy
  // string
  valStrings.push("");

  return strings
    .map((string, index) => string + valStrings[index])
    .reduce((prev, cur) => prev + cur);
}

/**
 * No-op tag function to mark a string as CSS code.
 *
 * Some IDEs and extensions will properly format and highlight code inside this
 * tag.
 */
export function css(strings: TemplateStringsArray, ...vals: unknown[]): string {
  return html(strings, ...vals);
}
