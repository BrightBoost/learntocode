// "use strict";

// var result = Math.pow(2, 4); //browser safe
// var result2 = 2 ** 4; //ES7 style

// var name; // undefined
// var nr = name + 1; //NaN
// console.log(name + nr);

var base = Math.sqrt(25);
console.log(base);

// price difference
var oldPrice = 435;
var newPrice = 234;
var difference = Math.abs(oldPrice - newPrice);
console.log(difference);

// logic to round 15 to 20, round 21 to 20, round 98 to 100 and 93 to 90
var nr = 93;
var roundTo10s = 10 * Math.round(nr /10);
console.log(roundTo10s);

// min and max function
console.log("minimum value:", Math.min(1, 3, 2, 4, 6, 8, -8));
console.log("maximum value:", Math.max(1, 3, 2, 4, 6, 8, -8));

// random 0 - 1
var random = Math.random();
console.log("random:", random);

// unary operators
var x = -10;
x = x + 1;
x++; // x = x + 1
x = Math.abs(++x);
console.log(x);
console.log("after:", x);

var x1 = 123;
var y1 = parseInt("10.1");
var z1 = x1 * y1;
console.log(z1);

console.log(+undefined)
console.log(Number(undefined))