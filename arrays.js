// arrays are special type of object in JavaScript.they are used to store multiple values in a single variable.

//examples listing out all the items i the class
const item1 = "chair";
const item2 = "table"; //etc

// the above is a note of how we can store a value in a single variable hence we can use an array

const items = ["chair", "table", "lamp", "sofa"]; // this is an array
console.log(items); // this will print the array => [ 'chair', 'table', 'lamp', 'sofa' ]

// they are denoted by square brackets []

// how create an array
// using square brackets
const fruits = ["apple", "banana", "orange"]; // this is an array of fruits
console.log(fruits); // this will print the array => [ 'apple', 'banana', 'orange' ]

//intializing an empty bracket then list out the items
const numb = []; // this is an empty array
numb[0] = 1; // this will add the value 1 to the first index of the array
numb[1] = 2; // this will add the value 2 to the second index of the array
numb[2] = 3; // this will add the value 3 to the third index of the array
numb[3] = 4; // this will add the value 4 to the fourth index of the array
console.log(numb); // this will print the array => [ 1, 2, 3, 4 ]

// use the new keyword to create an array
const colors = new Array("red", "green", "blue"); // this is an array of colors 
console.log(colors); // this will print the array => [ 'red', 'green', 'blue' ]

// arrays can hold any type of data and are zero-indexed

// accessing array elements
console.log(colors[0]); // this will print the first item in the array => red

//modifying array elements
colors[1] = "yellow"; // this will change the second item in the array to yellow
console.log(colors); // this will print the array => [ 'red', 'yellow', 'blue' ]

// converting an array to a string
console.log(colors.toString()); // this will print the array as a string => red,yellow,blue

// adding items to an array - using push method and unshift method
colors.push("purple"); // this will add the value purple to the end of the array
console.log(colors); // this will print the array => [ 'red', 'yellow', 'blue', 'purple' ]
colors.unshift("orange"); // this will add the value orange to the beginning of the array
console.log(colors); // this will print the array => [ 'orange', 'red', 'yellow', 'blue', 'purple' ]

// removing items from an array - using pop method and shift method
colors.pop(); // this will remove the last item in the array
console.log(colors); // this will print the array => [ 'orange', 'red', 'yellow', 'blue' ]
colors.shift(); // this will remove the first item in the array
console.log(colors); // this will print the array => [ 'red', 'yellow', 'blue' ]

// slicing an array - using slice method
console.log(colors.slice(1, 2)); // this will return a new array with the items from index 1 to index 2 (not inclusive) meaning it will return the item at index 1 only => [ 'yellow' ] 
// splicemethod is used to add or remove items from an array
let fruits2 = ["apple", "banana", "orange", "grape"];
// using splice to remove items
let removedfruites= fruits2.splice(1, 2); // this will remove 2 items from index 1 (banana and orange)
console.log(fruits2); // this will print the array => [ 'apple', 'grape' ]

// using splice to add items 
fruits2.splice(1, 0, "kiwi", "mango"); // this will add kiwi and mango at index 1 without removing any items
console.log(fruits2); // this will print the array => [ 'apple', 'kiwi', 'mango', 'grape' ]

// replacing items using splice 
let number = [1, 2, 3, 4, 5];
number.splice(2, 1, 10); // this will remove the item at index 2 (3) and add 10 at that index

//indexOf method returns the first occurrence of a value in an array, it will return -1 if the value is not found
console.log(number.indexOf("sss")); // this will print the index of -1 
console.log(number.indexOf(10)); // this will print the index of 2

// merge two arrays using concat method and spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2); // using concat method
console.log(mergedArray); // this will print the array => [ 1, 2, 3, 4, 5, 6 ]
// spread operator is a more modern way to merge arrays using ... 
const mergedArray2 = [...array1, ...array2]; // using spread operator

// includes method checks if an array contains a value, it will return true or false
console.log(array1.includes(2)); // this will print true
console.log(array1.includes(7)); // this will print false

// creating a array from a string using from method
const str = "hello world"; // this is a string
const strArray = Array.from(str); // this will create an array from the string
console.log(strArray); // this will print the array => [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
// using split method to create an array from a string
const str2 = "i love javascript"; // this is a string
const strArray2 = str2.split(" "); // this will create an array from the string by splitting it at the spaces
console.log(strArray2); // this will print the array => [ 'i', 'love', 'javascript' ]

// using join method retrns a array joined by a seperator
const info = ["alice", "bob", "charlie"];
console.log(info.join("|"));