let dateOfBirth = new Date(1961, 5, 9);
dateOfBirth.getMonth(); //0-11
if(dateOfBirth.getMonth() == 5) {
  console.log("june!" );
}
let now = new Date();

let msDateOfBirth = dateOfBirth.getTime();
let msNow = now.getTime();

let msDiff = msNow - msDateOfBirth;

let days = Math.round(msDiff / (24 * 60 * 60 * 1000));
console.log(days);