let grade = 9;
let gradeLetter;

switch (grade) {
  case 1:
  case 2:
  case 3:
  case 4:
    gradeLetter = "F";
    break;
  case 5:
    gradeLetter = "D";
    break;
  case 6:
    gradeLetter = "C";
    break;
  case 7:
    gradeLetter = "B";
    break;
  case 8:
  case 9:
  case 10:
    gradeLetter = "A";
    break;
  default:
    console.log("I don't know that grade:", grade);
    break;
}

console.log(gradeLetter);
