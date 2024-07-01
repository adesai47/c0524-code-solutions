/* exported truncate */
function truncate(length: number, input: string): string {
  if (input.length <= length) {
    return input;
  } else {
    if (input === '') {
      return '...';
    } else {
      let truncatedString = input.substr(0, length);
      if (truncatedString.length < input.length) {
        truncatedString += '...';
      }
      return truncatedString;
    }
  }
}
