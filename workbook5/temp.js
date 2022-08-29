// loop that executes 10 times
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (let i = 0; i < 10; i++) {
  i++;
}

let color = "black";
let fiveDoorsCar = true;
let price = getCarQuote(color, fiveDoorsCar);

function getCarQuote(color, fiveDoors) {
  let basePrice = 10000;
  if (color == "black") {
    basePrice += 500;
  } else if (color == "sparkly glittery") {
    basePrice += 500;
  }
  if (fiveDoors) {
    basePrice += 150;
  }
  return basePrice;
}

let arr = [2, 4, 5];
arr[3] = 0;

for (let i = 0; i < 4; i++) {
  if (arr[i] == 4) {
    break;
  }
}

let dog = { name: "Bobbi", cute: true };
let x = "name";
console.log(dog.name);

console.log(JSON.stringify(dog));

let dog2 = {
  name: "Bobbi",
  cute: true,
  owners: [
    { name: "Maaike", phone: "123" },
    { name: "Joelle", phone: "543" },
  ]
};

console.log(dog2.owners[1].phone);

alert("pops up")

const allParagraphs = document.getElementsByTagName("p")

document.getElementsById("blabla").value.trim()

let table = document.getElementById("tableUsers");
let row = table.insertRow(-1);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
cell1.innerHTML = "blabla";
cell2.innerHTML = "blabla";

let image = document.getElementById("elephant");
image.src = "images/betterElephant.png";
image.alt = "Amazing picture of elephant";
