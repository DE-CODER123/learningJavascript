//strings are used to output text
let pc = "mac"
let year = "2025"

// length  it used to count things
// by defaualt js starts counting from 0 except when we use length that it counts from 1

 let text = "Today is Tuesday"
 console.log(text.length)

//  sting methods 
// slice method - used to extract a part of a string it takes two argument
console.log(text.slice(9, 16)); // Tuesday

// indexOf - used to find the index of a character in a string provided that the character exists in the string and returns -1 if it does not exist and returns the index of the character if it exists and returns the index of the first occurrence of the character

let findText = "Please find me in this text find it here"
console.log(findText.indexOf("find")); // 7

// lastIndexOf - used to find the index of the last occurrence of a character in a string

console.log(findText.lastIndexOf("find")); // 28

// replace method - this replaces a part of a string with another string it takes two arguments the first is the part to be replaced and the second is the new string it is case sensitive

findText = "if you find me please find me"
console.log(findText.replace("find", "search")); // if you search me please find me

//replaceAll - this replaces all occurrences of a part of a string with another string it takes two arguments the first is the part to be replaced and the second is the new string it is case sensitive
console.log(findText.replaceAll("find", "search")); // if you search me please search me

findText = "I love to code in JavaScript and I Love to code in Python"
console.log(findText.replaceAll("love", "enjoy")); // I enjoy to code in JavaScript and I Love to code in Python

// toUpperCase - this converts a string to uppercase
console.log(findText.toUpperCase()); // I LOVE TO CODE IN JAVASCRIPT AND I LOVE TO CODE IN PYTHON
// toLowerCase - this converts a string to lowercase
console.log(findText.toLowerCase()); // i love to code in javascript and i love to code in python

//concat - this concatenates two strings together
let firstName = "John";
let lastName = " Doe";
console.log(firstName.concat(lastName)); // John Doe
console.log(firstName + lastName); // John Doe

//excersise
//ouput a string sentence and check it length
// slice the string to extract the third syllable word
// reassign the original sentence and replace the last word
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length); // 43
console.log(sentence.slice(10, 15)) //brown
sentence = "The quick brown fox jumps over the lazy cat";
console.log(sentence.replace("cat", "pig")) // The quick brown fox jumps over the lazy pig

