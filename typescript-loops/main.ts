/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = ' ';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const doubledNumber = numbers[i] * 2;
    doubled.push(doubledNumber);
  }
  return doubled;
}

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];

  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
