"use strict";

let teams = [
  { code: "", name: "Select team" },
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  initTeamsList();

  const formSubmit = document.getElementById("formSubmit");
  formSubmit.onsubmit = showTeamInfo;

  const teamsList = document.getElementById("teamsList");
  teamsList.onchange = clearTeamInfo;
};

function initTeamsList() {
  const teamsList = document.getElementById("teamsList");
  let length = teams.length;

  for (let i = 0; i < length; i++) {
    let theOption = document.createElement("option");
    theOption.textContent = teams[i].name;
    theOption.value = teams[i].code;
    teamsList.appendChild(theOption);
  }
}

function showTeamInfo() {
  let displayInfo = document.getElementById("teamInfo");
  const teamsList = document.getElementById("teamsList");
  let teamIndex = teamsList.selectedIndex;
  const imageLocation = document.getElementById("imageLocation");
  let image = document.createElement("img");

  let numTeams = teamsList.length;
  for (let i = 0; i < numTeams; i++) {
    if (teamIndex == 0) {
      displayInfo.innerHTML = "";
    } else if (teamIndex >= 1) {
      let teamName = teams[teamIndex].name;
      let value = teams[teamIndex].code;
      let location = teams[teamIndex].plays;
      displayInfo.innerHTML =
        "You selected the " +
        teamName +
        " (" +
        value +
        ") " +
        " Who play in " +
        location;
      image.src = "images/" + teams[teamIndex].code + ".png";
      imageLocation.appendChild(image);
    }
  }

  return false;
}

function clearTeamInfo() {
  const teamInfo = document.getElementById("teamInfo");
  teamInfo.innerHTML = "";

  const imageLocation = document.getElementById("imageLocation");
  imageLocation.innerHTML = "";
}
