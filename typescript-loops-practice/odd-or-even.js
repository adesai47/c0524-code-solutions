'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      answer.push('even');
    } else {
      answer.push('odd');
    }
  }
  return answer;
}
