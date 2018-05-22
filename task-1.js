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
	const parsedInput = input.replace(/[^a-z]/gi, '');
	// flatten case 
	const lowerCaseInput = parsedInput.toLowerCase();
	// reverse the parsed/flattened input
	const reversedInput = lowerCaseInput.split('').reverse().join(''); 
	// check if the parsed, flattened input matches the reversed, parsed, flattened input
	return reversedInput === lowerCaseInput;
}

