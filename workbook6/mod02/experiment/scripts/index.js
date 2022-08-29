$(function () {
  $("input[name='holder']").on("change", onChangeHolder); //with click you can click same radio twice, and it still gets toggled
  // $("#cone").on("change", onHideExtras);
  // $("#cup").on("change", onShowExtras);
  // connect other event
});

function onChangeHolder() {
    $("#extras").toggleClass("unavailable");
}
// function onHideExtras() {
//   $("#extras").addClass("unavailable");
// }
// function onShowExtras() {
//   $("#extras").removeClass("unavailable");
// }
