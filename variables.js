// variables a like contains reusable data that can be used across different parts of the application.

// rules for defing variables in javascript
// 1. using underscore ( _ ) 
// 2. using dollar sign ( $ )       
// 3. using an alphabet (a-z, A-Z)
// example:
today = "Monday"; 
$tomorrow = "tuesday"
_nextTomorrow ="wednesday"

// all the above method used are automatic name declaration of variables in javascript and it is not recommended to use them in production code. instead we should use the keyword var, let or const to declare variables.

console.log($tomorrow)
// numbers can not begin a variable name
// js is case sensitive

var joshua = "Joshua";
let john = "John";
const jane = "Jane";

// var is used to declare variables that can be reassigned later - this is outdated and should only be used if you need to support very old browsers.
// let is used to declare variables that can be reassigned later - this is the preferred way to declare variables in modern JavaScript.
// const is used to declare variables that cannot be reassigned later - this is used for constants that should not change throughout the program.

// redeclaring and reassigning a variable
var car = "Toyota";
var car = "Honda"; // reassigning a variable

// you can redeclare a variable name that begin with let but you cant reassign it value 
let book = "JavaScript Basics";
// let book = "Python Basics"; // this will throw an error because you cannot redeclare a variable with let
book = "Python Basics"; // this is allowed because you are reassigning the value of the variable

// const-doesnt allow redeclarion or reassigning
const pi = 3.14;
// pi = 3.14159; // this will throw an error because you cannot reassign a constant variable

// global scope variables are variables that can be accessed from anywhere in the code.
// local scope variables are variables that can only be accessed within the block of code they are defined in. usuallly  encased in curly braces { }.

var x = 20
console.log(x)

{
    var x = 30; // this will not throw an error because var is local scoped, not block scoped
    console.log(x); // this will output 30 because the variable x is redeclared in the block scope
}

console.log(x); // this will output 30 because the variable x is redeclared in the block scope
