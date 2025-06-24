// numbers are rep by
const integer = 42; //regular integer
const float = 42.5; //floating point number
const scientific = 1e5; //scientific notation
const binary = 0b1010; //binary number
const hexadecimal = 0xff //hexadecimal numbers

//NAN - not a number 
console.log(5-"hello")//NaN

//Number method
const myNum = 123.456;
console.log(typeof myNum.toString()); //convert a number to a string
console.log(myNum.toFixed(2)) //to a round estimate of 2 decimal place

//isInteger method returns true if it is a number
console.log(Number.isInteger(5))//true
console.log(Number.isInteger(5.5))//false

// parseFloat - converts a string value and returns the first number
console.log(parseFloat("400 year")); //400
console.log(parseFloat("40 10")); //40
console.log(parseFloat("year 10")); //NAN

//parseInteger - converts a string value and returns the first integer
console.log(parseInt("10.88")); //10
console.log(parseInt("30 50 80")); //30
console.log(parseInt("I am Topa 50")); //NAN

// number method - converts a string to a number
let www = "50"
console.log(Number(www)); //www has been converted to a number
// console.log(${www});

// math operations
// Math.round - rounds to nearest integer
console.log(Math.round(4.7)); //5
//Math.ceil - rounds up to the nearest integer
console.log(Math.ceil(4.3)); //5
// Math.floor - rounds a number down to the nearest integer 
console.log(Math.floor(4.7)); //4
// Math.power
console.log(Math.pow(2, 3)); //2 raised to the power of 3 - 8
// square root
console.log(Math.sqrt(16)); //4
// Math.min - returns the minimum value
console.log(Math.min(2, 5, 1));
// Math.max - returns the maximum value
console.log(Math.max(2, 5, 1)); //5
// Math.random - returns a random number between 0 (0 is inclusive) and 1 (1 is excluded)
console.log(Math.random()); //returns a random num value btw 0 and 1
