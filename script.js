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
let output = document.getElementById('output');
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

class car {
  constructor(name, year, model) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  // Add a method i.e a function.
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new car("Toyota", "2015", "Corolla");

output.innerHTML = "My car age is " + myCar.age() + " year(s)";