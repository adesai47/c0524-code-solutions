/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  if (typeof word !== 'string') {
    return false;
  }
  return word === word.toLowerCase();
}
