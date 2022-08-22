let arr = [23, 1, 33, 56, 8, 9, 33, 545];
let biggerThan30 = arr.find(nr => nr > 30);
console.log(biggerThan30);

function biggerThan30(nr) {
  return nr > 30;
}