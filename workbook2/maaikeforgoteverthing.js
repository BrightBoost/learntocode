let areWeDoneYet = false;
console.log(areWeDoneYet);

let evenNr = 6;

function isEven(evenNr) {
  if (evenNr % 2 !== 0) {
    console.log("It's odd!");
  }
}

isEven(5);

let name = "Austin";
switch (name) {
  case "Austin":
  case "Joelle":
    console.log("Loves coffee!");
    break;
  case "Shizuka":
    console.log("Loves tea!");
    break;
  default:
    console.log("water");
}

let a = 4, b = 2, c = 3;
console.log(a + b * c + a);

function sum(x, y, z) {
  return x + y + z;
}

function printResult() {
  console.log(a);
}

b = sum(a, b, c);
b = sum(a, a, c);
printResult(b);

let quote = "Maaike said: \"It's not a bug, it's a feature\"";

let day = new Date();
console.log(day);
//8/5/2022

console.log((day.getMonth() + 1) + "/" + day.getDate() + "/" + day.getFullYear());


window.onload = function () {
  const itemsDiv = document.getElementById("items");
  itemsDiv.onclick = doSomething;
}

function doSomething() {
  if(document.getElementById("premium").checked) {
    alert("Great choice!");
  }
}

function testStuff() {
  console.log(3);
}

testStuff(44);