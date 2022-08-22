window.onload = function () {
  const contentDiv = document.getElementById("somecontent");

  let p1 = document.createElement("p");
  p1.innerText = "Hello!";

  contentDiv.appendChild(p1);

  let paragraph = document.getElementById("paragraph");
  contentDiv.removeChild(paragraph);

  let p2 = document.createElement("p");
  p2.innerText = "irreplaceable";

  const name = document.getElementById("name");  
  contentDiv.replaceChild(p2, name);
};
