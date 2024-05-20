/* exported getFirstChar */
function getFirstChar(string: string): unknown {
  if (string.length === 0) {
    return undefined;
  }
  return string[0];
}
