"use strict";
/* exported initial */
function initial(array) {
    if (array.length <= 1) {
        return [];
    }
    const answer = [];
    for (i = 0; i < array.length - 1; i++) {
        answer.push(array[i]);
    }
    return answer;
}
