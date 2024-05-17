/* exported filterOutNulls */
function filterOutNulls(values: number[]): number[] {
  const filter: number[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filter.push(values[i]);
    }
  }
  return filter;
}
