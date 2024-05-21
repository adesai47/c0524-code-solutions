'use strict';
/* exported chunk */
function chunk(array, size) {
  if (size <= 0) {
    return [];
  }
  const answer = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === size || i === array.length - 1) {
      answer.push(chunk);
      chunk = [];
    }
  }
  return answer;
}
