//DOCUMENT OBJECT MODEL
// it allows manipulation of html document
//it is a  tree of nodes that allows you to manipulate the structure, style, and content of a web page
//to use dom, you first need to select the element you want to manipulate

//how to select an element
//1. by id -getElementById target element by id attached to it
const learnId = document.getElementById("learn");
console.log(learnId);

learnId.textContent = "I am learning DOM manipulation"; //to change the text content of the element

//2. by class -getElementsByClassName target elements by class attached to it
const learnClass = document.getElementsByClassName("h3s");
console.log(learnClass); //return all html elements with the class name h3
learnClass[0].textContent = "I am learning what DOM manipulation is "; //to change the text content of the element

//3. by tag -getElementsByTagName target elements by tag name
const learnTag = document.getElementsByTagName("p");
console.log(learnTag); //return all html elements with the tag name p

//4.by attributes -
const learnAttribute = document.getElementsByName("coding"); //select all elements with the data-learn attribute
console.log(learnAttribute); //return all html elements with the name attribute coding

//5. by query selector -querySelector and querySelectorAll
const learnQuery = document.querySelector(".query"); //select the first element with the class name query. we need to be specific when using querySelector as we should call it tthe way we call it in css
console.log(learnQuery); //return the first html element with the class name query
// 5b by query selector all -querySelectorAll
const learnQueryAll = document.querySelectorAll(".query"); //select all elements with the class name query
console.log(learnQueryAll); //return all html elements with the class name query

//acessing thr node tree
const learnNode = document.getElementById("parent").lastChild; //access the last child of the element with the id parent
console.log(learnNode); //return the last child of the element with the id parent

//to access by index
const learnNodeIndex = document.getElementById("parent").children[0]; //access the first child of the element with the id parent
console.log(learnNodeIndex); //return the first child of the element with the id parent

//creating new elements
const newElement = document.createElement("p"); //create a new paragraph element
console.log(newElement); //return the new paragraph element

//innerhtml allows you to add html content to an element
newElement.innerHTML = "<strong>This is a new paragraph from dom.js</strong>"; //add html content to the new paragraph element

//appending the new element to the parent element - inserting the new element into the document
const parentElement = document.getElementById("parent"); //select the parent element
parentElement.appendChild(newElement); //append the new element to the parent element

//style in dom
//js is case sensitive, so we need to use camelCase for css properties
newElement.style.color = "blue"; //change the color of the text to blue
newElement.style.fontSize = "20px"; //change the font size of the text to 20px

//event listeners and events handling
//event listeners are used to listen for events on an element and execute a function when the event occurs

//adding an event listener to the new element
// it takes two arguments, the event type and the function to be executed when the event occurs

const getBtn = document.querySelector("#btn"); //select the button element
getBtn.addEventListener("click", () => {
  getBtn.textContent = "hello button"; //change the text content of the button to hello button
  getBtn.style.backgroundColor = "green"; //change the background color of the button to green
  alert("Button clicked!"); //show an alert when the button is clicked
}); ////add an event listener to the button element that listens for a click event
