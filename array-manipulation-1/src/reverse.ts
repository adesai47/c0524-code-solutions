/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const reversed: unknown[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
