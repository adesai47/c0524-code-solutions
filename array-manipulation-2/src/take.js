'use strict';
/* exported take */
function take(array, count) {
  const answer = [];
  const limit = Math.min(count, array.length);
  for (let i = 0; i < limit; i++) {
    answer.push(array[i]);
  }
  return answer;
}
