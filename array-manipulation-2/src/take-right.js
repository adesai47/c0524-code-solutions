'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const answer = [];
  const take = Math.max(array.length - count, 0);
  for (let i = take; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}
