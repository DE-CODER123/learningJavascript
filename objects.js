//objects can store a collection of data types in one entity,in a key-value pair

const person = {
    name: "John",
    age: 30,
    isStudent: false,
}
console.log(person); // { name: 'John', age: 30, isStudent: false } 

// Accessing object properties
// dots notation
console.log(person.name); // John

// bracket notation
console.log(person["age"]); // 30

//modifying object properties
person.age = 31;

//adding new properties
person.isEmployed = true;
console.log(person); // { name: 'John', age: 31, isStudent: false, isEmployed: true }

//deleting properties
delete person.isStudent;
console.log(person); // { name: 'John', age: 31, isEmployed: true }

// second method of creating objects
cars = new Object({
    make: "Toyota",
    model: "Camry",
    year: 2020,
    hobbies: ["driving", "traveling", "reading"],
    scores: {
        math: 90,
        science: 85,
        english: 88
    },
    greet: function(){
        console.log("Hello, I am a car!");
    }
}); // using the new keyword 
console.log(cars.scores.english); // 88
console.log(cars.hobbies); // ['driving', 'traveling', 'reading']
console.log(cars.hobbies[2]) //reading
cars.greet(); // Hello, I am a car!

//Object.create creating objects from an existing object

let animal = {
    name: "Dog",
    speciality: "bark",
    run: true,
}
console.log(animal); // { name: 'Dog', specaliaty: 'bark', run: true }

let livingThing = Object.create(animal); // creating a new object from animal. this will inherit all key properties from animal
livingThing.name = "Cat"; // modifying the name property
livingThing.specaliaty = "meow"; // modifying the specaliaty property
livingThing.run = false; // modifying the run property
livingThing.feed = "fish"; // adding a new property

console.log(livingThing); // { name: 'Cat', specaliaty: 'meow', run: false, feed: 'fish' }


// deleting properties from an object
delete livingThing.feed; // deleting the feed property
console.log(livingThing); // { name: 'Cat', specaliaty: 'meow', run: false }

//in method it returns a boolean value and it check if a prpoerty exists in an object
console.log("make" in cars); // true
console.log("color" in cars); // false

//Object.assign method copies prpoerties from one or more source objects to a target object
console.log(Object.assign(animal, cars)); // { name: 'Toyota', speciality: 'bark', run: true, make: 'Toyota', model: 'Camry', year: 2020, hobbies: [ 'driving', 'traveling', 'reading' ], scores: { math: 90, science: 85, english: 88 }, greet: [Function (anonymous)] }

// Object.entries method returns an array of a given object's own enumerable string-keyed property [key, value] pairs in an array 
let carsObjectArray = Object.entries(cars);
console.log(carsObjectArray); // [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ], [ 'hobbies', [ 'driving', 'traveling', 'reading' ] ], [ 'scores', { math: 90, science: 85, english: 88 } ], [ 'greet', [Function (anonymous)] ] ]

//Object.fromEntries method creates an object from an array of key-value pairs
console.log(Object.fromEntries(carsObjectArray)); // { make: 'Toyota', model: 'Camry', year: 2020, hobbies: [ 'driving', 'traveling', 'reading' ], scores: { math: 90, science: 85, english: 88 }, greet: [Function (anonymous)] }

// Object.keys method returns an array of a given object'a keys
console.log;(Object.keys(animal)); // [ 'name', 'speciality', 'run' ]

// Object.values method returns an array of a given object's values
console.log(Object.values(animal)); // [ 'Toyota', 'bark', true ]

// Object.freeze method freezes an object, preventing new properties from being added to it and marking all existing properties as read-only
Object.freeze(animal);
animal.feed = "fish"; // this will not work because the object is frozen
console.log(animal); // { name: 'Toyota', speciality: 'bark', run: true }