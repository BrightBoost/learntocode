let company = {
  name: "ice cream shop",
  address: {
    street: "HartCodeLane",
    number: 121,
    zipcode: 12345,
    city: "HartCodeCity"
  },
  famousFor: "cookies and cream"
};

let dog = {
  name: "Piper",
  owner: {
    name: "Courtney",
    dog: {
      name: "Piper",
      owner: {
        name: "Courtney",
        dog: {
          name: "Piper2",
          owner: {

          }
        }
      }
    }
  }
}
console.log(dog.owner.dog.owner.dog.name);
console.log(company.famousFor);
console.log(company.address.zipcode);
