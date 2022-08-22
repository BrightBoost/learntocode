let arr = [
  { name: "bobby", type: "dog" },
  { name: "Fuzzy", type: "fish" },
];

console.log(arr[0].name);

let arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
  console.log(arr[i]);
}

arr = [34, 4, 21];
arr[1] = 5;
arr[30] = 67;
arr[20] = 20;
console.log(arr);

let pets = [
  "Bonnie"
  "Piper",
  "Spike",
  "Kendra",
  "Ollie",
  "Audrey",
  "Biscuit",
  "Bonnie",
  "Ollie",
  "Audrey",
  "Biscuit",
  "Bonnie",
  "Piper",
  "Spike",
  "Kendra",
  "Ollie",
  "Audrey",
  "Biscuit",
  "Bonnie",
  "Ollie",
  "Audrey",
  "Biscuit",
  "Bonnie",
  "something else"
];

let bonnieIndex = pets.indexOf("Bonnie");
let bonnieIndex2 = pets.indexOf("Bonnie", bonnieIndex + 1);
let bonnieIndex3 = pets.indexOf("Bonnie", bonnieIndex2 + 1);
let bonnieIndex4 = pets.indexOf("Bonnie", bonnieIndex3 + 1);

// do while loop to find the bonnies
let doWhileBonnieIndices = [];
let index = -1;
do {
  index = pets.indexOf("Bonnie", index + 1);
  if (index != -1) {
    doWhileBonnieIndices.push(index);
  }
} while (index != -1);

console.log("do-while", doWhileBonnieIndices);

// while loop to find the bonnies
let bIndex = 0;
let whileBonnieIndices = [];
while(bIndex != -1) {
  if(bIndex != 0) {
    bIndex++;
  }
  bIndex = pets.indexOf("Bonnie", bIndex);
  if(bIndex != -1) {
    whileBonnieIndices.push(bIndex);
  }
 
}

console.log("while", whileBonnieIndices);

// for loop to find the bonnies
let forBonnieIndices = [];
for (let i = 0; i < pets.length; i++) {
  if (pets[i] == "Bonnie") {
    forBonnieIndices.push(i);
  }
}

console.log("for", forBonnieIndices);

