/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  if (size <= 0) {
    return [];
  }

  const answer: unknown[] = [];
  for (let i = 0; i < array.length; i += size) {
    answer.push(array.slice(i, i + size));
  }
  return answer;
}
