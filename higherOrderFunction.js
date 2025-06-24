import { sumUp } from "./functions.js"; //destructed data we are taking sumUp form our function.js file

console.log(sumUp(50,550,80))
//Functions can be assigned to a variable and can be passed to other funtions as parameter and be returned as a value.
// This is known as a higher order funtion - a funtion that accepts a funtion as a parameter and returns a value.
let plusFive = (num) => num + 5;
console.log(plusFive(8)); //13

//We can assign plusFive funtion to a variable name
let plusTen = plusFive;
console.log(plusTen(10)); //15 - plusTen inherits plusFive funtion.

function callMe() {
  console.log("Call Me");
}

function higherCallMe(cc) {
  cc();
}
higherCallMe(callMe);

// Higher order funtion types 
//the map method this take a data(obj or array) and applies a callback on each element in the data. It does not alter the original array - it's non mutating.

const arr = [2, 3, 4, 5, 6]
//the return keyword must be used if the curly bracket is introduced
const arrs = arr.map((item) => item * 3);
console.log(arrs)


// clw 
const actors = [
    {
        name: "Keanu Reevs",
        networth: 1001010,
    },
    {
        name: "Dam jam",
        networth: 1050,
    },
    {
        name: "Reevs james",
        networth: 11010,
    },
];
// print out actors name using map

let namess = actors.map((act) => act.name);
console.log(namess)

// filter method - takes an array and supplies a callback on the elements that fulfills a specified condition. This also does not alter the original array
const newNumbers = [1, 2, 4, 5, 6]
const num4 = newNumbers.filter((num) => num > 4)
console.log(num4);
let num3s2 = newNumbers.filter((num) => num > 3 || num < 2 );
console.log(num3s2);
let actN = actors.filter((namesA) => namesA.name === "Keanu Reevs"  );
console.log(actN)




