let orderNum = "1234";
let orderStatus = "in proces";
let message = "Order: " + orderNum + "'s status: " + orderStatus;

const orderStatusMessage = document.getElementById("orderStatusPara");
orderStatusMessage.innerHTML = message;