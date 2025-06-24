// Loops are used to execute an action a number  of times.
const clubs = ["Madrid", "Chelsea", "Barcelona"];
//If we were to list out the club names, we would do:
clubs[0]; //Madrid
clubs[1]; //Chelsea
//The above is not an ideal way to print out things if the data is large hence loops

//Types of loops

//For loop - the for loop iterates over elements in an array for a fixed number of times. It takes 3 arguments - the initialization, the condition for the loop to run and the increament.

for (let i = 0; i < clubs.length; i++) {
  console.log(clubs[i]);
}

//Count numbers from 1 to 9
const numbers = [1,2,3,4,5,6,7,8,9]
for (let n = 0; n<numbers.length; n++){
    console.log(numbers[n]);
}

//for of loop - this iterates over arrays, objects, strings.
const testScores = [4,5, 6, 7];
for (let score of testScores){
    console.log(score + 10);
}

const words = "javascriptloop";
for (const t of words){
    console.log(t);
    
}


//Write a function that takes a parameter, whose argument is an array of numbers 
//Your functions should return each numbers multiiplied by 2, and return them in a new array.


const doubleNums = (numbers) => {
  const result = [];
  for (const n of numbers) {
    result.push(n * 2);
  }
  return result;
}

console.log(doubleNums([20, 40, 60]));


//for in loop - iterates over objects
const myObjs = {
    name: "Stineking",
    money: 300,
};

for (const item in myObjs){
    console.log(myObjs[item]);
    
}

// ===========
const newObjs = {
    a: 4,
    b: 6,
    c: 12,
};
//Perform a for in over the newObj and return each value multiplied by 3.

for (const item in newObjs){
    console.log(newObjs[item] * 3);
}

//Write a function that takes a parameter, whose argument is an object consisting of keys and their values (at least 4). The values should be of type number.
//Your funtion should use the for in loop to add each value in your object by an addition of 4, and as well return only the first two item in a new array.

function objNumbers(num){
  let result = [];
  for (const item in num){
    result.push(num[item] + 4);
  }
  return result.slice(0, 2);
};
console.log(objNumbers({
  a: 10,
  b: 20,
  c: 30,
}))