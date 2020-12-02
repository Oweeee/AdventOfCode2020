import { entries } from "./data/entries";

function findTwoAndMultiply(entries: number[]) {
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      if (entries[i] + entries[j] === 2020) {
        return entries[i] * entries[j];
      }
    }
  }
  return false;
}

function findThreeAndMultiply(entries: number[]) {
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      if (entries[i] + entries[j] >= 2020) continue;
      for (let k = j + 1; k < entries.length; k++) {
        if (entries[i] + entries[j] + entries[k] === 2020)
          return entries[i] * entries[j] * entries[k];
      }
    }
  }
  return false;
}

function main(entries: number[]) {
  console.log(findTwoAndMultiply(entries));
}

main(entries);
