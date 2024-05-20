'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return word === word.toUpperCase();
}
