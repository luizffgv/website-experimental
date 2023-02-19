export function elementDepth(element: Element): number {
  let depth = 0;

  for (let cur = element; cur.parentElement != null; cur = cur.parentElement)
    ++depth;

  return depth;
}
