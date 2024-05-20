/* exported initial */
function initial(array: any): any {
  if (array.length <= 1) {
    return [];
  }
  const answer: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    answer.push(array[i]);
  }
  return answer;
}
