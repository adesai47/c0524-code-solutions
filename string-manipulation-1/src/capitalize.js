'use strict';
/* exported capitalize */
function capitalize(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
