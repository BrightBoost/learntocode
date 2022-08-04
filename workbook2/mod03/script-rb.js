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

  let raspberries = document.getElementById("raspberries").checked;
  let strawberries = document.getElementById("strawberries").checked;
  let watermelon = document.getElementById("watermelon").checked;
  let mango = document.getElementById("mango").checked;

  if (raspberries) {
    messageDiv.innerHTML = "I love raspberries too!";
  } else if (strawberries) {
    messageDiv.innerHTML = "I love strawberries too!";
  } else if (watermelon) {
    messageDiv.innerHTML = "I love watermelon too!";
  } else if (mango) {
    messageDiv.innerHTML = "I love mango too!";
  }
}
