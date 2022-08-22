"use strict";

const SOMETHING = "fixed";

let x = 9;
if(true) {
    let x = 7;
    console.log("x:", x);
}

console.log("x:", x);