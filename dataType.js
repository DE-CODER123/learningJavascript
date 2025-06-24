// by default js has 8 data types 
// categorized into primitive and non-primitive data types.
// primitive data types are data types that are immutable and cannot be changed. they can only hold a single value at a time.
// non-primitive data types are data types that are mutable and can hold multiple values at a time. they can be changed and modified. they can hold multiple values at a time.

// primitive datatypes = string, number, boolean, null, undefined, symbol, bigint
// non-primitive datatypes = object,

// string - a sequence of characters enclosed in single or double quotes. it is used to represent text data.
// to check a datatype we use typeof operator
console.log(typeof "Hello World"); // string    
//
// numbers are stored as decimals, floating point numbers, or integers. they can be positive or negative and can be used in mathematical operations.
console.log(typeof 42); // number
console.log(typeof 3.14); // number

// boolean - a data type that can only have two values: true or false. it is used to represent logical values.
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// undefined - a data type that represents a variable that has been declared but has not been assigned a value. it is used to indicate that a variable has no value or is empty.
console.log(typeof undefined); // undefined
let today 
// today is undefined because it has been declared but has not been assigned a value.
console.log(typeof today); // undefined

// null - a data type that represents the absence of value. it is used to indicate that a variable has no value or is empty.

console.log(typeof null); // object

//bigint - a data type that represents integers with arbitrary precision. it is used to represent large integers that cannot be represented by the number data type.

console.log(typeof 1234567890123456789012345678901234567890n); // bigint

// symbol - a data type that represents a unique identifier. it is used to create unique keys for object properties and to avoid name collisions in objects.

let apc = Symbol("Scam")
let pdp = Symbol("Scam")
console.log(apc === pdp) //this will output false because symbols are unique and cannot be compared to each other.

//object are denoted by curly bracket {} and can hold multiple values in the form of key-value pairs. they are used to represent complex data structures.
const human ={
    name: "Joshua",
    location: "Lagos",
    job: "web dev",
    age: 20,
}
console.log(human)