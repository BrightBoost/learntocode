"use strict";

printSomething();
greet("John");
greet("Courtney");
greet("Joey");
greet("Maaike");


function printSomething() {
  console.log("hi!");
}

function greet(name) {
  if (name == "Maaike") {
    console.log("YOU AGAIN?!");
  } else {
    console.log("Hi", name);
  }
}

