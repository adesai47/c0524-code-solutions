/* exported last */
function last(array: unknown[]): unknown {
  if(array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}
