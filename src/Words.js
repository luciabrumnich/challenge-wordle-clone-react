import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const getFile = async (fileURL) => {
  let fileContent = await fetch(fileURL);
  fileContent = await fileContent.text();
  return fileContent;
};

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  const wordRaw = await getFile(wordBank);
  const wordArray = wordRaw.split("\n");
  todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  wordSet = new Set(wordArray);
  return { wordSet, todaysWord };
};
