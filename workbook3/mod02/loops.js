let i = 0;
let word = "Hello";

while (i < word.length) {
  console.log(word.charAt(i));
  i++;
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

let k = 0;
while (k < 100) {
  if (k % 2 == 0) {
    console.log(k);
  }
  k++;
}

let l = 0;
do {
  console.log("Hello!!");
  l++;
} while (l < 5);

for (let m = 0; m < 10; m++) {
  console.log("for:", m);
  if(m > 5) {
    break;
  }
}
