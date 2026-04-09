let generateEl = document.getElementById("generate-btn");
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let passwordLengthEl = document.getElementById("password-length");

generateEl.addEventListener("click", generatePassword);
passwordOneEl.addEventListener("click", copyToClipBoardOne);
passwordTwoEl.addEventListener("click", copyToClipBoardTwo);

function generatePassword() {
  const passwordLength = passwordLengthEl.valueAsNumber;
  const userCharacters = get_characters();

  let randomPasswordOne = getRandomPassword(passwordLength, userCharacters);
  let randomPasswordTwo = getRandomPassword(passwordLength, userCharacters);
  if (randomPasswordOne === undefined) {
    return;
  }
  passwordOneEl.textContent = randomPasswordOne;
  passwordTwoEl.textContent = randomPasswordTwo;
}

function getRandomPassword(length, characters) {
  let randomPassword = "";

  if (characters.length === 0) {
    return undefined;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters[randomIndex];
  }
  return randomPassword;
}

function get_characters() {
  let isUpperCaseChecked = document.getElementById("upperCase").checked;
  let isLowerCaseChecked = document.getElementById("lowerCase").checked;
  let isNumbersChecked = document.getElementById("numbers").checked;
  let isSymbolsChecked = document.getElementById("symbols").checked;
  const upperCaseCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowerCaseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  let characters = [];

  if (isLowerCaseChecked) {
    characters.push(...lowerCaseCharacters);
  }
  if (isUpperCaseChecked) {
    characters.push(...upperCaseCharacters);
  }
  if (isSymbolsChecked) {
    characters.push(...symbols);
  }
  if (isNumbersChecked) {
    characters.push(...numbers);
  }
  console.log(characters);
  return characters;
}

function copyToClipBoardOne() {
  const text = passwordOneEl.textContent;
  navigator.clipboard.writeText(text);
  alert("Copied Password: " + text);
}
function copyToClipBoardTwo() {
  const text = passwordTwoEl.textContent;
  navigator.clipboard.writeText(text);
  alert("Copied Password: " + text);
}
