window.onload = function () {
  callUsersApi();
};

function callUsersApi() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      populateUsersTable(JSON.parse(this.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send(null);
}

function populateUsersTable(users) {
  let fields = ["name", "id"];
  const tableHead = document.getElementById("usersTableHead");
  const tableBody = document.getElementById("usersTableBody");

  // field to header
  let fieldsLength = fields.length;
  for (let i = 0; i < fieldsLength; i++) {
    let th = document.createElement("th");
    th.innerHTML = fields[i];
    tableHead.appendChild(th);
  }

  // users to body
  let usersLength = users.length;
  for (let i = 0; i < usersLength; i++) {
    let row = tableBody.insertRow(-1);
    for (let j = 0; j < fieldsLength; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML = users[i][fields[j]];
    }
  }
}
