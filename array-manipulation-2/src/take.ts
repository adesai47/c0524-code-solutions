/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const answer: unknown[] = [];
  const limit = Math.min(count, array.length);

  for (let i = 0; i < limit; i++) {
    answer.push(array[i]);
  }
  return answer;
}
