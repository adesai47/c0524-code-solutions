/* exported compact */
function compact(array: any[]): any[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
