window.onload = function () {
  const form = document.getElementById("myForm");
  form.onsubmit = processForm;
};

function processForm() {
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("firstNameInput").value;
  console.log(firstName, lastName);
  return false;
}
