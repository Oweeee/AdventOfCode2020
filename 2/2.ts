import { entries } from "./data/entries";

interface Password {
  letter: string;
  min: number;
  max: number;
  password: string;
}

function findAndCoundValidPasswords1(entries: string[]) {
  const data = parseData(entries);
  let count = 0;
  data.forEach((e) => {
    let letterCount = 0;
    for (let i = 0; i < e.password.length; i++) {
      if (e.password[i] === e.letter) letterCount++;
    }
    if (letterCount >= e.min && letterCount <= e.max) count++;
  });
  return count;
}

function findAndCoundValidPasswords2(entries: string[]) {
  const data = parseData(entries);
  let count = 0;
  data.forEach((e) => {
    const minIsLetter = e.password[e.min - 1] === e.letter;
    const maxIsLetter = e.password[e.max - 1] === e.letter;
    if (minIsLetter ? !maxIsLetter : maxIsLetter) count++;
  });
  return count;
}

function parseData(entries: string[]): Password[] {
  return entries.map((e) => {
    const split = e.split(" ");
    const numbers = split[0].split("-");
    const [min, max] = numbers;
    const letter = split[1].charAt(0);
    const password = split[2];
    return { letter, min: parseInt(min), max: parseInt(max), password };
  });
}

function main(entries: string[]) {
  console.log(findAndCoundValidPasswords1(entries));
  console.log(findAndCoundValidPasswords2(entries));
}

main(entries);
