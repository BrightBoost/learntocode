let x = 2;

console.log("top", x);

function doSomething() {
  let x = 3;
  return x;
}
console.log("doSomething", doSomething());

function doSomethingElse() {
  x = 4;
  console.log("doSomethingElse", x);
}

doSomething();
console.log("post doSomething", x);

doSomethingElse();
console.log("post doSomethingElse", x);
