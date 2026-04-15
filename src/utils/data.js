export function createLookupMap(items, key = "slug") {
  return Object.fromEntries(items.map((item) => [item[key], item]));
}
