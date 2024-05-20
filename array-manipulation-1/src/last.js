"use strict";
/* exported last */
function last(array) {
    if (array.length === 0) {
        return undefined;
    }
    return array[array.length - 1];
}
