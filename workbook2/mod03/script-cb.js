"use strict";

window.onload = function () {
  const govt = document.getElementById("govt");
  govt.onclick = checkRoadside;
};

function checkRoadside() {
  let govtChecked = document.getElementById("govt");
  let roadsideCheckbox = document.getElementById("roadside");
  let roadsideDiv = document.getElementById("roadsideDiv");

  if (govtChecked.checked) {
    roadsideCheckbox.checked = true;
    roadsideDiv.style.display = "block";
    roadsideDiv.style.color = "pink";
  } else {
    roadsideCheckbox.checked = false;
    roadsideDiv.style.display = "none";
  }
}
