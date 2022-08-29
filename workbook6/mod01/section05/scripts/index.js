$(function () {
  $("#addBtn").on("click", onAddClicked);
  $("#subtractBtn").on("click", onSubtractClicked);
  // the other buttons are left as an exercise
  // for your imagination
});
function onAddClicked() {
  let num1 = Number($("#num1").val());
  let num2 = Number($("#num2").val());
  let result = num1 + num2;
  $("#outputArea").text("The answer is " + result);
}
function onSubtractClicked() {
  let num1 = Number($("#num1").val());
  let num2 = Number($("#num2").val());
  let result = num1 - num2;
  $("#outputArea").text("The answer is " + result);
}
