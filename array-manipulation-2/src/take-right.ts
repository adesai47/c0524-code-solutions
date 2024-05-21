/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const answer: unknown[] = [];
  const take = Math.max(array.length - count, 0);
  for (let i = take; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}
