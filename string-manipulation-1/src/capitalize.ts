/* exported capitalize */
function capitalize(word: string): string {
  if (typeof word !== 'string' || word.length === 0) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
