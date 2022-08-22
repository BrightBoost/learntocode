let fruits = ["grapefruit", "melon", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}

let food = [fruits, ["carrot", "onions", "broccoli"]];

for (let foodItems of food) {
  for (let item of foodItems) {
    console.log(item);
  }
}
