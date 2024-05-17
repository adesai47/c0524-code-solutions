/* exported tail */
function tail(array: unknown[]): unknown {
  if(array.length <= 1) {
    return [];
  }
const answer: unknown[] = [];
  for (i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}
