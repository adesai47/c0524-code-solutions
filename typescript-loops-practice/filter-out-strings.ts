/* exported filterOutStrings */
function filterOutStrings(values: number[]): number[] {
  const filter: number[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filter.push(values[i]);
    }
  }
  return filter;
}
