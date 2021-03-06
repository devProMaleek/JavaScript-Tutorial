// For of / For in Loops

// const person = { fname: "Abdulmalik", lname: "Adebayo", age: 22 };
// const output = document.getElementById("output");
// let txt = ""

// for (let x in person) {
//     txt += person[x] + "<br>";
// }

// output.innerHTML = txt

// testing something
// const output = document.getElementById("output")
// const cars = ["Toyota", "Lexus", "Benz", "Honda", "Acura"]
// let txt = ""

// for (let x in cars) {
//     txt += cars[x] + "<br>"
// }

// JavaScript Errors - Throw and Try to Catch.

// const output = document.getElementById("output")

// try {
//     addlert("Welcome my dear student")
// }

// catch (err) {
//     output.innerHTML = err.message;
// }

// Throw Statement - Input Validation Example
// const message = document.getElementById("message");

// Default message
// message.innerHTML = "";
// function myFunction() {
//   let value = document.getElementById("value").value;
//   try {
//     // If field is empty
//     if (value === "") {
//       throw "This field is empty";
//     }
//     // If value is not a number
//     if (isNaN(value)) {
//       throw "The value is not a Number";
//     }
//     // Convert the value to number.
//     value = Number(value);
//     // If the value is less than 5
//     if (value < 5) {
//       throw "The value is less than 5";
//     }
//     // If the value is greater than 10
//     if (value > 10) {
//       throw "The value is greater than 10";
//     }
//     // If the value meet the condition.

// //Create an object
// const person = {
//   firstName: "Adebayo",
//   lastName: "Abdulmalik",
//   nickName: "devProMaleek",
//   id: '1999',
//   fullName: function () {
//     return this.firstName + " " + this.lastName
//   }
// }

// // Display data from the object
// output.innerHTML = person.fullName();

// Arrow function

// let hello;
// hello = () => {
//   return "Hello World!"
// }

// if the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

// hello = () => "Hello World!"
// output.innerHTML = hello();

// If you have one parameters, you can skip the parentheses as well.
// hello = Universe => "Hello" +  " " + Universe;
// output.innerHTML = hello("Universe");

// JavaScript Class.

// Create a class
// class car {
//   constructor(name, year, model) {
//     this.name = name;
//     this.year = year;
//     this.model = model;
//   }
// }

// // Create an object
// const myCar = new car("Lexus", 2021, "IS250");
// output.innerHTML = myCar.name + " " + myCar.year + " " + myCar.model;

// Class Methods

// class car {
//   constructor(name, year, model) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }

//   // Add a method i.e a function.
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new car("Toyota", "2015", "Corolla");

// output.innerHTML = "My car age is " + myCar.age() + " year(s)";

// JavaScript Objects
//Creating an Objects

// declare global variable.
// const result = document.getElementById('results');
// const person = {firstName: "Abdulmalik", lastName: "Adebayo", age: 30, nickName: "devProMaleek", eyeCol0r: "black"};
// // console.log(result)
//  //,Output Results
// //  output.innerHTML = "My name is " + person.firstName + " " + person.lastName  + ". You can also call me " + person.nickName;

//  // Add more property to an object.

//  person.level = 500;
//  person.department = "Electronic and computer Engineering";

// //  output.innerHTML = person;

//  // Javascript Objects are mutable.

//  const x = person;
//  x.age = 10; // This will change both x.age and person.age.

//  // Results
// result.innerHTML = person.age;

// // Displaying an Object

// const myArray = Object.values(person);

// result.innerHTML = myArray;

// Using JSON Stringify

// let myString = JSON.stringify(person);

// result.innerHTML = myString;

// JavaScript Callbacks

// Sequence Control on Functions

// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:


// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(10, 5);
// myDisplayer(result);

// Callback Example.
// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(20, 10, myDisplayer);

// Waiting for a timeout.

// setTimeout(myFunction, 3000)

// function myFunction() {
//     output.innerHTML = "I fallen in love with JavaScript."
// }

// Waiting for Intervals.
// setInterval(myFunction, 1000)
// function myFunction() {
//     let d = new Date();
//     output.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

// Waiting for files

// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback("Error: " + req.status)
//         }
//      }
//      req.send();
// }

// getFile(myDisplayer);

// JavaScript Promise

// Promise Syntax
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject(); //when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function(value) {/* code if successful */},
//     function(error) {/* code if some error */}
// );

// Promise Example

// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;

//     // Producing code
//     if (x == 0) {
//         myResolve("OK");

//         myReject("Error");
//     }
// });

// // Consuming Code

// myPromise.then(
//     value => {myDisplayer(value);},
//     error => {myDisplayer(error);}
// );

// Waiting for a timeout (Promise Example)

// const myPromise = new Promise(function(myResolve, myReject) {
//     // Producing code.
//     setTimeout(() => {myResolve("I have fallen in love with JavaScript");
//     }, 3000);
// });

// myPromise.then(
//     value => {output.innerHTML = value;}
// )

// Waiting for a file. (Promise Example)
// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// const myPromise = new Promise(function (myResolve, myReject) {
//   // Producing Code
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.html");
//   req.onload = function () {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//     value => {myDisplayer(value);},
//     error => {myDisplayer(error);}
// )

// JavaScript Async/Await

// function myDisplayer(some) {
//     output.innerHTML = some;
// }

// // Async : The keyword async before a function makes the function return a promise:
// async function myFunction() {
//     return "Hello";
// }

// myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );

// Await: The keyword await before a function makes the function wait for a promise:
// async function myDisplay() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//         myResolve("I have fallen in love with Javascript.");
//     });
//     output.innerHTML = await myPromise;
// }

// myDisplay()

// Waiting for a Timeout (Async/Await example)
// async function myDisplay() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//         setTimeout(function() {myResolve("I love you");}, 3000)
//     });
//     output.innerHTML = await myPromise;
// }

// myDisplay()

// Javascript Class Getter/Setter

// const output = document.getElementById("output");
// class Car {
//     constructor(brand) {
//         this.carName = brand;
//     }
//
//     get cnam() { return this.carName}
//
//     set cnam(value) { this.carName = value}
// }
//
// let myCar = new Car("Ford");
//
// output.innerHTML = myCar.cnam;

// JavaScript Display Objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
output.innerHTML = person;