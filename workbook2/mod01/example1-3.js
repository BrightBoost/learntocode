function getFavoriteNr() {
  return 12;
}

function addTwoNumbers(nr1, nr2) {
  return nr1 + nr2;
}

function something() {
  return Math.abs(getFavoriteNr() * -89);
}

let result = getFavoriteNr();
console.log(result);

console.log(getFavoriteNr() + 7);

let sum = addTwoNumbers(getFavoriteNr(), getFavoriteNr());
console.log(sum);

console.log(addTwoNumbers(getFavoriteNr(), getFavoriteNr()));
console.log("something", something());