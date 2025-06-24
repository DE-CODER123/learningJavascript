//function are designed to perform a patricular task
//it is a reuseable piece of code that performs a logic, returning different result based on the argument supplied
//it is executed when called

//how to declare a function
//1 using the function keyword
function myName() {
  console.log("Hello Monday");
}

//2 arrow function
const arrowFunction = () => {
  console.log("This is an arrow function");
};

//invoking a function means calling a function for execution
myName();
arrowFunction();

//the return keywprd - used only when writting functions, the return the final computation of your code logic, Nothing should be written after the return statement as Jacascript will not recongize it.
function addMe() {
  return 3 + 4;
}
console.log(addMe());
//returns 7
//parameters and placeholders
//parameters are like placeholders/proxy that receivesvariables. They are used when defining funvtions.
//Argumengs are the actual values thae function recienvs from each parameters.
function sumUp(a, b, c) {
  return a + b + c;
}
console.log(sumUp(18, 20, 30)); //b,c are the parameteers fpr pir fimctopm amd 10, 20. 30 are the actual values the funtion needs to order to return a value, they are known as arguments.
console.log(sumUp(30, 50, 70)); //same function but with a different argument

// EXERCIRSE
//1 write a splitbill function whose job is to split the among users
//if its a single person, the function should return back the total
//if it were more than one person, the function should divdide the total by the the number of persons who ate the meal and return back the amount of each person
function calcFoodTotal(Foodamt, tip) {
  return Foodamt + tip;
}
let bill = calcFoodTotal(7000, 500);

function splitBill(bill, noPeople) {
  if (noPeople === 1) {
    console.log(bill);
  } else {
    console.log(bill / noPeople);
  }
}
splitBill(bill, 2);

//2. create an array named todos
//this array should be an array of objects
//each object should have the keys - title, id, duedate
// you are to suoply the object vallues
//write a function that lets you add a new item to your tods array
// for the new item, you are to use the js date gettime method as the value for the key due date

let todos = [
  {
    title: "Wash plate",
    id: 1,
    dueDate: "Monday",
  },
  {
    title: "Read a Book",
    id: 2,
    dueDate: "Saturday",
  },
];
console.log(todos);

function newTodos(title, id) {
  let dueDate = new Date().getTime();
todos.push({
    title: title,
    id: id,
    dueDate: dueDate,
  });
}
newTodos("boy", 1);
console.log(todos)

//3 write a function cart, taking a parameter
//parameter will be an array of two objects
// the objects should keys price and quantity
//the data for the objects should be a datatype of numbers
//your price and quantity of each property and get the return their sum

let orders = [
    {
        price: 120,
        quantity: 3,
    },
    {
        price: 360,
        quantity: 4,
    }
]
function cart(orders){
    let arrayss1 = orders[0];
    let price1 = arrayss1.price;
    let quantity = arrayss1.quantity;
    let sum1 = price1 * quantity
   
    let arrayss2 = orders[1];
    let price2 = arrayss2.price;
    let quantitys = arrayss2.quantity;
    let sum2 = price2 * quantitys;

    let total = sum1 + sum2
    console.log(total)

}

cart(orders)

// the above code can be rewrittten as 
// function cart(orders){
//   let value1 = orders[0].price * orders[0].quantity;
//   let  value2 = orders[1].price * orders[1].quantity;
//   let total = value1 + value2;
//   console.log(total) 
// }

// cart(orders)

//we can function to be used to be used in other files, either we use export default statement or just export statement alone.
// the export dafault allows only a single file export, while export staement alone mutliple export specifing type of module on your js file allows this to happens

//we are expecting our function sumUp to be used elsewhere

export { sumUp }; //to export mutiple files or functions

// export default calcFoodTotal - to export a single file

