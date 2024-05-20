/* exported isVowel */
function isVowel(char: string): boolean {
  if (typeof char !== 'string' || char.length === 0) {
    return false;
  }
  const lowerCaseChar = char.toLowerCase();
  return (
    lowerCaseChar === 'a' ||
    lowerCaseChar === 'e' ||
    lowerCaseChar === 'i' ||
    lowerCaseChar === 'o' ||
    lowerCaseChar === 'u'
  );
}
