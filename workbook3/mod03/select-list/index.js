window.onload = function () {
  initStatesList();

}

function initStatesList() {
  let states = ["Alabama", "Alaska", "Arizona"];
  let abbrev = ["AL", "AK", "AZ"];

  const statesList = document.getElementById("statesList");

  let numStates = states.length;
  for (let i = 0; i < numStates; i++) {
    // let newOption = document.createElement("option");
    // newOption.value = abbrev[i];
    // newOption.textContent = states[i];

    let newOption = new Option(states[i], abbrev[i]);

    statesList.appendChild(newOption);
  }
};
