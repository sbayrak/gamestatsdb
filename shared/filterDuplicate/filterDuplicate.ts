export function filterDuplicateById<T extends { id: number | string }>(
  items: T[]
): T[] {
  const seen = new Set<number | string>();
  return items.filter((item) => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
}
