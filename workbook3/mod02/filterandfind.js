let holidayDestinations = [
  { location: "Cabo", type: "beach" },
  { location: "Park City", type: "mountain" },
  { location: "Idaho", type: "potato farm" },
  { location: "Miami", type: "beach" },
  { location: "Courtney's house", type: "mountain" },
];

// function that filters holiday destinations by type
function isMountainDestination(destination) {
  if (destination.type == "mountain") {
    return true;
  } else {
    return false;
  }
}

// function that filters holiday destinations by type
function isBeachDestination(destination) {
  if (destination.type == "beach") {
    return true;
  } else {
    return false;
  }
}



// we call the function to filter on mountain destinations
let mountainDestinations = holidayDestinations.filter(isMountainDestination);
console.log(mountainDestinations);
// we call the function to filter on beach destinations
let beachDestinations = holidayDestinations.filter(isBeachDestination);
console.log(beachDestinations);