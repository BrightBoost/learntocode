let holidayDestinations = [
  { location: "Cabo", type: "beach" },
  { location: "Park City", type: "mountain" },
  { location: "Idaho", type: "potato farm" },
  { location: "Miami", type: "beach" },
  { location: "Courtney's house", type: "mountain" },
];

// function that filters holiday destinations by type
function filterHolidayDestinationsByType(destinations, type) {
  let filterResults = [];
  let numDestinations = destinations.length;
  for (let i = 0; i < numDestinations; i++) {
    if(destinations[i].type == type) {
      filterResults.push(destinations[i]);
    }
  }
  return filterResults;
}

// we call the function to filter on mountain destinations
let mountainDestinations = filterHolidayDestinationsByType(holidayDestinations, "mountain"); 
//console.log(mountainDestinations);
let numMountainDestinations = mountainDestinations.length;
for(let i = 0; i < numMountainDestinations; i++) {
  console.log(mountainDestinations[i].location);
}

// we call the function to filter on beach destinations
let beachDestinations = filterHolidayDestinationsByType(holidayDestinations, "beach");
console.log(beachDestinations);