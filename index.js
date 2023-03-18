// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Daniel Cornejo";
console.log(hacker1);

let hacker2 = "Amber Moody";
console.log(hacker2);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

let newDriver = '';
let reverseDriver = '';

for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i].toUpperCase() + " "
  console.log(newDriver);
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseDriver += hacker2[i];
  }
   
console.log(reverseDriver);
  
if (hacker1 > hacker2) {
console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
console.log("Yo, the navigator goes first, definitely.");
} else {
console.log("What?! You both have the same name?");
}

//Generated 3 paragraphs, 199 words, 1323 bytes of Lorem Ipsum
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at auctor nisl, et vehicula ligula. Phasellus pulvinar sit amet mauris sed iaculis. Sed ultricies vel magna a tempus. Donec sed leo hendrerit, mollis est in, auctor risus. Praesent dignissim justo vel elementum aliquam. Praesent blandit in metus sed pretium. Curabitur sit amet cursus dolor. Quisque fringilla neque eu neque luctus condimentum. Aenean augue urna, commodo nec venenatis et, tincidunt interdum orci. Integer gravida sodales venenatis. Aenean ullamcorper nisi massa, vel eleifend nibh pharetra eget. Aenean sollicitudin, ante quis finibus pulvinar, nibh enim dictum nunc, sit amet vestibulum odio nisi sed leo. Nullam placerat ipsum varius facilisis blandit. Cras viverra sapien ex, vitae rhoncus leo dapibus id. Nunc a fermentum dui, in rhoncus dui. Cras pretium turpis eu metus egestas mattis. Cras ultricies interdum accumsan. Etiam vitae facilisis lorem, nec pellentesque erat. Aliquam ultricies dignissim nisi. Vestibulum nunc urna, viverra id molestie eget, vehicula at tortor. Duis lacinia fringilla justo, sed rutrum velit varius vitae. Nam vestibulum vehicula ante, et rutrum mi dapibus non. Nulla sit amet augue vel quam tristique mattis non nec sapien. In hac habitasse platea dictumst. Etiam nec sem quis nunc egestas ultrices ac nec mi.";

let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
}

wordCount++;

console.log(wordCount);


// Define a string to check for palindrome
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Remove all non-alphanumeric characters and convert to lowercase
let cleanedString = phraseToCheck.replace(/[^0-9a-z]/gi, '').toLowerCase();

// Check if the cleaned string is a palindrome
let isPalindrome = true;
for (let i = 0; i < cleanedString.length / 2; i++) {
  if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${phraseToCheck} is a palindrome!`);
} else {
  console.log(`${phraseToCheck} is not a palindrome!`);
}