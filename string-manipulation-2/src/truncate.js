'use strict';
/* exported truncate */
function truncate(length, input) {
  if (input.length <= length) {
    return input;
  } else {
    if (input === '') {
      return '...';
    } else {
      let truncatedString = input.substr(0, length);
      if (truncatedString.length < input.length) {
        truncatedString += '...';
      }
      return truncatedString;
    }
  }
}
