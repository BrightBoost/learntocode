"use strict";

let quote = 
  `If at first you don\'t succeed,\n \t  + 
   destroy all evidence that you tried.`;
console.log(quote);

let sport = "cricket";
let upperCaseSport = sport.toUpperCase();
console.log(upperCaseSport.toLowerCase() + sport + upperCaseSport);

let hobby = "  playing the violin   ";
console.log(hobby);
let hobbyTrimmed = hobby.trim();
console.log(hobby.trim());

console.log(hobbyTrimmed.indexOf("z")); // -1 when it's not there\
console.log(hobbyTrimmed.indexOf("y")); // index 3 (0 based)
console.log(hobbyTrimmed.lastIndexOf("n")); // index 17

let subHobby = hobby.substring(14, 20);
console.log(subHobby);
let subHobby2 = hobby.substring(5);
console.log(subHobby2);

let sliceHobby = hobby.slice(-5); // pretty much the same as substring, but also supports negative numbers
console.log(sliceHobby);

