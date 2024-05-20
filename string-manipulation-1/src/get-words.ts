/* exported getWords */
function getWords(string: string): string[] {
  return string.split(' ').filter((word) => word.length > 0);
}
