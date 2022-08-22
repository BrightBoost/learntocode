let person1 = { name: "Chloe", job: "Software developer" };
let person2 = { name: "Alice", job: "Shizuka's alias" };

// console.log(person1.name, "works as a", person1.job);
// console.log(person2.name, "works as a", person2.job);

function displayPerson(p) {
  let x = 4;
  console.log(p.name, "works as a", p.job, "and here's a random value", x);
}

function getPerson(personName, personJob) {
  let person = { name: personName, job: personJob };
  return person;
}

displayPerson(person1);
displayPerson(person2);
displayPerson({ name: "Maaike", job: "A lot of talking" });
displayPerson(getPerson("Bob", "Builder"));
displayPerson(getPerson("Mary", "Farmer"));


function getNr() {
  return Math.round(Math.random() * 100);
}

function addTwoNrs(x, y) {
  console.log(x + y);
}

addTwoNrs(12, getNr());

// Exercise:
// Create a function displayPerson that takes person as an argument
// Create a function getPerson that takes a car as an argument and a name
// Create a function getCar that takes three logical car properties as argument

// Call the function getCar and use this as input for the getPerson. Do this twice:
// - once saving the result in a variable
// - once calling the function in the argument list

// Call the displayPerson, do this twice:
// - once sending the argument in as a variable
// - once sending the argument in by calling the getPerson in the argument list of displayPerson
