'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return word === word.toLowerCase();
}
