/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  if (count >= array.length) {
    return [];
  }
  const answer: unknown[] = [];
  const updateLength = array.length - count;

  for (let i = 0; i < updateLength; i++) {
    answer.push(array[i]);
  }
  return answer;
}
