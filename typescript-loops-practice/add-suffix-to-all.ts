/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const answer: string[] = [];
  for (let i = 0; i < words.length; i++) {
    answer.push(words[i] + suffix);
  }
  return answer;
}
