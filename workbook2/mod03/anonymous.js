let x = 45;

let action = function () {
  console.log("So much action!");
};

let inActive = function () {
  console.log("I'm so lazy");
};

wrapFunction(action);
wrapFunction(inActive);

function withName() {
  console.log("I'm a named function");
}

wrapFunction(withName);


function wrapFunction(func) {
  console.log("This function has no clue what will happen next!")
  func();
}
