window.onload = function () {
  const raspberries = document.getElementById("raspberries");
  const strawberries = document.getElementById("strawberries");
  const watermelon = document.getElementById("watermelon");
  const mango = document.getElementById("mango");

  raspberries.onclick = messageFruit;
  strawberries.onclick = messageFruit;
  watermelon.onclick = messageFruit;
  mango.onclick = messageFruit;
};

function messageFruit() {
  const messageDiv = document.getElementById("message");
  let selectedFruit = document.querySelector("input[name='fruit']:checked");

  if (selectedFruit.value == "raspberries") {
    messageDiv.innerHTML = "I love raspberries too!";
  } else if (selectedFruit.value == "strawberries") {
    messageDiv.innerHTML = "I love strawberries too!";
  } else if (selectedFruit.value == "watermelon") {
    messageDiv.innerHTML = "I love watermelon too!";
  } else if (selectedFruit.value == "mango") {
    messageDiv.innerHTML = "I love mango too!";
  }
}
