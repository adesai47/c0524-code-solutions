/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  if (size <= 0) {
    return [];
  }

  const answer: unknown[] = [];
  let chunk: unknown[] = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);

    if (chunk.length === size || i === array.length - 1) {
      answer.push(chunk);
      chunk = [];
    }
  }

  return answer;
}
