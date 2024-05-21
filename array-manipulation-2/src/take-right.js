'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const take = Math.max(array.length - count, 0);
  return array.slice(take);
}
