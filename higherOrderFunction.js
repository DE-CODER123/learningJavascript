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

//find method - loops throughn an array and returnd the first item that meets the condition specified. if no item matches the condition, it returns undefined.

let iii = [10, 20, 30, 40, 50];
let foundMatch = iii.find((item) => item > 20);
console.log(foundMatch);//30 cos its thr first item that meets our condition eventhough others are there.

// reduce method - loops over an array and returns a single value. it takes a callback with 2 arguments - the accumulator and the current value/element . on each iteration , the acc is the value returned by the last iteration, while the current value is the current element in the array
//additionally, a 3rd argument can be passed which acts as the intitial value for the iteration to begin.
const getTotalSum = iii.reduce((acc, cv) => acc + cv);
console.log(getTotalSum);//150

const sumUpActorsNetworth = actors.reduce((acc, cv) => acc + cv.networth, 0);
console.log(sumUpActorsNetworth);

// forEach method - it iterates over an array and applies a callback on each element. it does not return anything, it is used for side effects.
//iii.forEach((item) => {
  //console.log(item * 2); //prints each item multiplied by 2
//});

//the foEach and map methods are similar, and can take up to three parameters which are:
//1. the current value the current element to iterate over
//2. the index of the current element it is optional
//3. the array itself it is optional


let numbers = [1, 2, 3, 4, 5];
let forEachResult = numbers.forEach((num) => num * 2);
console.log(forEachResult); //undefined, because forEach does not return anything. we can not transform an array using the forEach methodd method. it purpose is to execute a function on each element of the array for side effects, not to transform the array.

console.log(numbers); // [1, 2, 3, 4, 5] - the original array is not altered
let forEachResult2 = numbers.map((num) => num * 2);
console.log(forEachResult2); // [2, 4, 6, 8, 10] - the original array is not altered

// getting the index of the current element in the forEach/map method
actors.forEach((actors, index) => console.log(`${index}. ${actors.name}`)); // prints the index and name of each actor

//getting the array itself in the forEach/map method
actors.forEach((actors, index, array) => console.log(`${index}. ${actors.name} - ${array.length} actors in total`)); // prints the index, name and total number of actors

// using the forEach to get actors with networth less than 2000

actors.forEach((actor) => {
  if (actor.networth < 2000) {
    console.log(`${actor.name} has a networth of ${actor.networth}`);
  }
}
)