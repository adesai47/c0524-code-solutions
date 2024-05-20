/* exported getLastChar */
function getLastChar(string: string): unknown {
  if (string.length === 0) {
    return undefined;
  }
  return string[string.length - 1];
}
