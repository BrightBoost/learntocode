"use strict";

window.onload = function () {
  const button = document.getElementById("submit");
  const cupRadioButton = document.getElementById("cup");
  const coneRadioButton = document.getElementById("cone");

  button.onclick = calculatePrice;
  cupRadioButton.onclick = onHideOrShowTopping;
  coneRadioButton.onclick = onHideOrShowTopping;
};

function calculatePrice() {
  const oneScoopRadioButton = document.getElementById("onescoop");
  const twoScoopsRadioButton = document.getElementById("twoscoops");
  const threeScoopsRadioButton = document.getElementById("threescoops");

  const cupRadioButton = document.getElementById("cup");
  const coneRadioButton = document.getElementById("cone");

  const sprinkles = document.getElementById("sprink");
  const fudge = document.getElementById("hfudge");
  const whippedCream = document.getElementById("whipcream");
  const cherry = document.getElementById("cherry");

  const icecreamTotalP = document.getElementById("icecreamtotal");

  // reset error field
  icecreamTotalP.style.color = "black";

  let cupTotal;
  let coneTotal;
  let baseCup = 3.5;
  let baseCone = 3.75;
  let extraScoop = 1.25;

  if (oneScoopRadioButton.checked) {
    cupTotal = baseCup;
    coneTotal = baseCone;
  } else if (twoScoopsRadioButton.checked) {
    cupTotal = baseCup + extraScoop;
    coneTotal = baseCone + extraScoop;
  } else if (threeScoopsRadioButton.checked) {
    cupTotal = baseCup + extraScoop * 2;
    coneTotal = baseCone + extraScoop * 2;
  }

  let extra = 0;
  if (sprinkles.checked) {
    extra = extra + 0.5;
  }
  if (fudge.checked) {
    extra = extra + 1.0;
  }
  if (whippedCream.checked) {
    extra = extra + 0.6;
  }
  if (cherry.checked) {
    extra = extra + 0.25;
  }

  let total = 0;
  // total result: conetotal + extra OR cuptotal + extra
  if (cupRadioButton.checked) {
    total = cupTotal + extra;
    icecreamTotalP.innerHTML = "$" + total.toFixed(2);
  } else if (coneRadioButton.checked) {
    total = coneTotal + extra;
    icecreamTotalP.innerHTML = "$" + total.toFixed(2);
  } else {
    icecreamTotalP.style.color = "red";
    icecreamTotalP.innerHTML = "You need to select a cup or cone.";
  }
  console.log(cupTotal, coneTotal, extra, total);

  return false;
}

function onHideOrShowTopping() {
  const coneRadioButton = document.getElementById("cone");
  const optionsField = document.getElementById("options-fields");
  const sprinkles = document.getElementById("sprink");
  const fudge = document.getElementById("hfudge");
  const whippedCream = document.getElementById("whipcream");
  const cherry = document.getElementById("cherry");

  if (coneRadioButton.checked) {
    optionsField.style.display = "none";
    sprinkles.checked = false;
    fudge.checked = false;
    whippedCream.checked = false;
    cherry.checked = false;
  } else {
    optionsField.style.display = "block";
  }
}
