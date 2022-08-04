"use strict";

function display() {
  number = 7;
  console.log("in display", number);
}

console.log("above function call", number);
display();
console.log("after function call", number);
var number = 4;
console.log("after declaration", number);