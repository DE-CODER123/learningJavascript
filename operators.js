//operators are used to perform series of actions
// we have different types of operators
// 1. assignment operators
let a = 10; // assignment operator

// 2. arithmetic operators
let b = 5;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let quotient = a / b; // division
let remainder = a % b; // modulus
let exponent = a ** b; // exponentiation

//3. icrement and  decrement
let num = 5;
console.log(num++); // increment by 1

let age = 10;
console.log(age--); // decrement by 1

//4.Comparison operator
// 4a "==" is a not strict comparison operator used to only if the  values are the same inspite of their data type

console.log(age == "10"); // true because it is the same value inspite of "10" as astring

//4b "===" is a strict comparison operator used to check if values and datatypes are the same

console.log(num === 5) //false because num is 6

//4c "!=" is a not strict comparison operator used to only if the  values are not the same inspite of their data type

console.log(age != "10") //true

// 4d "!==" is a strict comparison operator used to check if are not values and datatypes are the same

console.log(age !== "10") //true

//4e greater than or less than equal to 
console.log(30 >= 20) //true
console.log(20 <= 4) //false

// 5 logical operators - 3 types
// logical or - "||"
// logical and - "&&"
// logical not - "!"

// logical or this evaluates your operands from left to right, it will try to  convert your to a boolean value, and then it will return a truthy value or false or falsey value

//logical or - will return the first value if all the values are true
//logical or - will return the the value of true for the first true it finds
// note by default all numbers are true except 0
console.log(num || age) // 6 because is the first truthy value
console.log(0 || 1) // 1 is the first true value it saw
console.log(undefined || null || 0); // 0 because all values are false and it returns the last value of the false 

///logical and -- this returns the last value if all the operands are true
// if  there is a falsy value, it will return the first falsey operand/value
// if all operands true it will return the last value
console.log(age && num) // 6 as the num value they are all true and it must take the last truth value
console.log(0 && 40) //0 as it is the false value of false inspite of 40 being true
console.log(null || (2 && 3) || 4); //3 - 2 && 3 are both true and && returns the last true value 3 then null || 3 || 4 is 3 becuse the first true value is 3

// logical not ! converts true to false  vice versa
console.log(!true)
console.log(!false);
console.log(!0);

const day = 7
console.log(day > 14 && day < 14); //false