'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  const answer = [];
  const updateLength = array.length - count;
  for (let i = 0; i < updateLength; i++) {
    answer.push(array[i]);
  }
  return answer;
}
