("use strict");

if ("") {
  console.log("in if");
} else {
  console.log("in else");
}

// leap year

var year = 1990;
var result;

// Formula to calculate if given year is a leap year in Gregorian calendar
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      result = "Leap year.";
    } else {
      result = "Not a leap year.";
    }
  } else {
    result = "Leap year.";
  }
} else {
  result = "Not a leap year.";
}

console.log(result);

// leap year if
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    result = "It's a leap year!";
} else {
    result = "It's NOT a leap year";
}