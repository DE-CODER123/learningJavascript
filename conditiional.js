//  if and else statements
// if stament evaluates a condition and executes a block of code if the condition is true
// use if  statement to execute a block of code if a condition is true, while else statement executes a block of code if the condition is false
// addiionaal, we have else if statement to check multiple conditions in a single if statement is true

// if statement
// if(condition) {
// block of code to be executed if the condition is true
// else{
// block of code to be executed if the condition is false
// }
// }

const foodMomey = 1000;
if (foodMomey > 500) {
  console.log("You can buy food");
} else {
  console.log("You cannot buy food");
}

// else if statement
const houseMoney = 1000;
if (houseMoney < 500) {
  console.log("You can save some more buy a house");
} else if (houseMoney <= 500) {
  console.log("You can buy a small house");
} else if (houseMoney <= 900 && houseMoney > 500) {
  console.log("You can buy a medium house");
} else {
  console.log("You can buy a big house");
}

// using ternary operator
// evaluates a condition and returns one of two values based on the result after the question mark ? it returns the value if the condition is true, and after the colon : it returns the value if the condition is false

const money = 1000;
const canBuyFood = money > 500 ? "You can buy food" : "You cannot buy food";
console.log(canBuyFood);

//test for multiple conditions using ternary operator
const houseCost = 1000;
const houseMessage =
  houseCost < 500
    ? "You can save some more buy a house"
    : houseCost <= 500
    ? "You can buy a small house"
    : houseCost <= 900 && houseCost > 500
    ? "You can buy a medium house"
    : "You can buy a big house";

console.log(houseMessage);

// prompt and alert
// prompt is used to take input from the user on the browser, while alert is used to display a message to the user on the browser

// a prompt asking who is there
// if the reply is "joshua", it should prompt for a password
// if password is "javascript", it should alert "Welcome User
// otherwise, it should alert "Wrong password"
// if there is no question at all, it should alert "Canceled"
// if user is not joshua prompt should alert "I don't know you"
let user = prompt("Who is there?");
if (user === "joshua") {
  let password = prompt("password?");
  if (password === "javascript") {
    alert("Welcome User");
  } else {
    alert("wrong password");
  }
} else if (user == "") {
  alert("Canceled");
} else {
  alert("I dont know you");
}

//switch statements this performs series of action based on different conditions. It analyses the values case by case if there is a match to the case based on the conditions provided, then the  associated block of code to that case is executed. If no match then the default code is run

//switch -  case sytnax
// switch(expression){
// case value1:
// code to be executed
// break
// case value2:
// code to be executed
// break
// default:
// code to be executed
// break
// switch is a strict comparison
// break statement is used to stop the exection of a code has been met

let date = 2025;
switch (date) {
  case 1:
    date = "2o25";
    break;
  case 2:
    date = "21";
    break;
  default:
    date = "happy new year";
    break;
}
console.log(date);
// template strings or literal $
console.log(`This is ${date}`);

let tOday = new Date().getDay();

if (tOday == 0) {
  console.log("Sunday");
} else if (tOday == 1) {
  console.log("Monday");
} else if (tOday == 2) {
  console.log("Tuesday");
} else if (tOday == 3) {
  console.log("Wednesday");
} else if (tOday == 4) {
  console.log("Thursday");
} else if (tOday == 5) {
  console.log("Friday");
} else if (tOday == 6){
  console.log("Saturday");
}
else{
  console.log("not a valid day")
}
// note getDay() is zeroindex meaning that sunday is index 0

const operators =  prompt("enter either +, -, / or * ")

const nums1 = parseFloat(prompt("enter your first number"))
const nums2 = parseFloat(prompt("enter your second number"))

if(operators == "+"){
  let Result = nums1 + nums2
    alert(`${nums1} + ${nums2} = ${Result}`)
}else if(operators == "-"){
  let Result = nums1 - nums2
    alert(`${nums1} - ${nums2} = ${Result}`)
}else if(operators == "/"){
  let Result = nums1 / nums2
    alert(`${nums1} / ${nums2} = ${Result}`)
}else if(operators == "*"){
  let Result = nums1 * nums2
    alert(`${nums1} * ${nums2} = ${Result}`)
}else{
  alert("could not carry this operation")
}