"use strict";

// Test Input Lists
const positiveCases = [
  "Bob",
  "BOB",
  "My age is 0, 0 si ega ym.",
  "Bob bob",
  "Bob's sbob",
  "<!-- --!<",
  "",
  "\n",
  "\\n",
  "never odd or even",
  "A man, a plan, a canal. Panama",
  "r\nr",
  "A but tuba.",
  "Bo b ",
  "o_o (: /-\\ :) o–o ",
  "0_0 (: /-\\ :) 0–0 ",
  "race car",
  "12345",
  "Amore, Roma",
  "poop"
];

const negativeCases = [
  "Robert",
  "nope",
  "almostomla",
  "fda fadf 3rf3 aq4r < 1<$#!41,,`  ` 534 d",
  "1 eye for of a 1 eye",
  "fdsafd$#@$#@$fdsgGFS GFDSAG\nF Daf333412431431 431414#_!4 31431413sdadfsa",
  "not a palindrome"
];

// Palindrome function with built in functions
function palindromeCheck(input) {
  // filter out non-alpha characters
  const parsedInput = input.replace(/[^a-z]/gi, "");
  // flatten case
  const lowerCaseInput = parsedInput.toLowerCase();
  // reverse the parsed/flattened input
  const reversedInput = lowerCaseInput.split("").reverse().join("");
  // check if the parsed, flattened input matches the reversed, parsed, flattened input
  return reversedInput === lowerCaseInput;
}

// Palindrome function using a for loop
function palindromeWithLoop(input) {
  // filter out non-alpha characters
  const parsedInput = input.replace(/[^a-z]/gi, "");
  // flatten case
  const lowerCaseInput = parsedInput.toLowerCase();
  // iterate through each character of the string, from the front and back at the same time, comparing the character from each side
  const length = lowerCaseInput.length;
  for (let i = 0; i < length/2; i++) {
    // if the characters do not match, it is not a palindrome
    if (lowerCaseInput[i] !== lowerCaseInput[length - 1 - i]) return false;
  }
  // the whole string was iterated without returning false, which means the string is a palindrome
  return true;
}

function main() {
  console.log("%cBuilt-in Fuctions Version", "color: blue; font-size: large");
  // Build-In Function tests
  console.log("%cPositive Cases", "color: green");
  for (let input of positiveCases) {
    console.log(input + ": " + palindromeCheck(input));
  }
  console.log("%cNegative Cases", "color: red");
  for (let input of negativeCases) {
    console.log(input + ": " + palindromeCheck(input));
  }
  // For Loop tests
  console.log("%cLoop Version", "color: blue; font-size: large");
  console.log("%cPositive Cases", "color: green");
  for (let input of positiveCases) {
    console.log(input + ": " + palindromeWithLoop(input));
  }
  console.log("%cNegative Cases", "color: red");
  for (let input of negativeCases) {
    console.log(input + ": " + palindromeWithLoop(input));
  }
}

main();
