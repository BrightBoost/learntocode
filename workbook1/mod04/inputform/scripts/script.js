function getMessage() {
  const nameField = document.getElementById("nameField");
  const ageField = document.getElementById("ageField");
  const messageP = document.getElementById("messageP");

  //let message = "Hi " + nameField.value + ". You're " + ageField.value;
  let message = `Hi ${nameField.value} You're ${ageField.value}`;

  messageP.innerHTML = message;
}

function calcYob() {
  const ageField = document.getElementById("ageField");
  const yobField = document.getElementById("yobField");

  yobField.value = 2022 - Number(ageField.value);
}
