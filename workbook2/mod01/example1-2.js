let name = "Joelle";

sayHi("Pradeepa");
sayHi("John");
sayHi(name);

function sayHi(someName, done) {
  console.log("Hi", someName);
  console.log(done);
  if (done) {
    console.log("wow that's fast!");
  } else {
    console.log("keep working, and you'll get there!");
  }
}

let someName = "Valerie";
let done = false;

sayHi(done, someName);


