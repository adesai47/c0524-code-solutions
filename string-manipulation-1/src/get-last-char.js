'use strict';
/* exported getLastChar */
function getLastChar(string) {
  if (string.length === 0) {
    return undefined;
  }
  return string[string.length - 1];
}
