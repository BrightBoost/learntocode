"use strict";
let a = 4;

function test5() {
  a = 7;
  again();
  function again() {
    let a = 8;
    console.log("a = " + a);
    function dontDoThis() {
      console.log("inner inner function");
    }
    dontDoThis();
  }
  // dontDoThis(); //  not available outside the function, because it's out of scope
  console.log("a = " + a);
}

test5();
// again(); // not available outside the function, because it's out of scope
console.log("a = " + a);
