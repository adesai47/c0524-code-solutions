'use strict';
/* exported tail */
function tail(array) {
  if (array.length <= 1) {
    return [];
  }
  const answer = [];
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}
