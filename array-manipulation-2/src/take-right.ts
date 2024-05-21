/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const take = Math.max(array.length - count, 0);
  return array.slice(take);
}
