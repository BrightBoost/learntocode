let arrOfArrays = [
  ["tea", "foot spa", "lamp"],
  [12, 4, "hat"],
  [true, "tv", "laptop", 4],
];

let lengthArrOfArrays = arrOfArrays.length;
for (let i = 0; i < lengthArrOfArrays; i++) {
  console.log(arrOfArrays[i]);
  let lengthArr = arrOfArrays[i].length;
  for (let j = 0; j < lengthArr; j++) {
    console.log(arrOfArrays[i][j]);
  }
}
