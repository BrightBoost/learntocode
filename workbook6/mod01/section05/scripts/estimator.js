$(function () {
  $("#estimatePrice").on("click", onEstimateBtnClicked);
});
function onEstimateBtnClicked() {
  let price = Number($("#weight").val()) * 0.55;
  if ($("#tracking").prop("checked") == true) {
    price += 1.75;
  }
  if ($("#returnReceipt").prop("checked") == true) {
    price += 1.25;
  }
  $("#messageDiv").text("Estimate: $" + price.toFixed(2));
}
