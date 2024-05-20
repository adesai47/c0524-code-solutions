/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  if (typeof word !== 'string') {
    return false;
  }
  return word === word.toUpperCase();
}
