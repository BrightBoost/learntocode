let holidayDestinations = [
  { location: "Cabo", type: "beach" },
  { location: "Park City", type: "mountain" },
  { location: "Idaho", type: "potato farm" },
  { location: "Miami", type: "beach" },
  { location: "Courtney's house", type: "mountain" },
];



// we call the function to filter on mountain destinations
let mountainDestinations = holidayDestinations.filter(d => d.type == "mountain");
console.log(mountainDestinations);
// we call the function to filter on beach destinations
let beachDestinations = holidayDestinations.find(d => d.type == "beach");
console.log(beachDestinations);
