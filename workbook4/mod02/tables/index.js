let winningTickets = [];
window.onload = function () {
   $.getJSON("data/tickets.json", function(result) {
    winningTickets = result;
    loadWinningTicketsTable(result);
   });
};

function loadWinningTicketsTable(tickets) {
  let winningTickets = tickets;
  // Find the table
  let table = document.getElementById("winningTicketsTable");
  // loop through the array
  let numWinningTickets = winningTickets.length;
  for (let i = 0; i < numWinningTickets; i++) {
    // Create an empty <tr> element and add it to the last
    // position of the table
    let row = table.insertRow(-1);
    // Create new cells (<td> elements) and add text
    let cell1 = row.insertCell(0);
    cell1.innerHTML = winningTickets[i].tixNum;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = "$" + winningTickets[i].prize.toFixed(2);
    let cell3 = row.insertCell(2);
    cell3.innerHTML = winningTickets[i].expires;
  }
}
