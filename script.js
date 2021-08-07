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
const message = document.getElementById("message");

// Default message
message.innerHTML = "";
function myFunction() {
  let value = document.getElementById("value").value;
  try {
    // If field is empty
    if (value === "") {
      throw "This field is empty";
    }
    // If value is not a number
    if (isNaN(value)) {
      throw "The value is not a Number";
    }
    // Convert the value to number.
    value = Number(value);
    // If the value is less than 5
    if (value < 5) {
      throw "The value is less than 5";
    }
    // If the value is greater than 10
    if (value > 10) {
      throw "The value is greater than 10";
    }
    // If the value meet the condition.
    if (value > 5 && value < 10) {
      throw "Perfect value. Good job";
    }
  } catch (err) {
    message.innerHTML = err;
  } finally {
    document.getElementById("value").value = "";
  }
}
