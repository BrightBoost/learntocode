window.onload = function () {
  $(".example.extra").height(300);
  $(".example").css("color", "purple").fadeOut(5000);
  $(".example").on("click", function () {
    printStuff(2);
  });
};

function printStuff(x) {
  console.log(x);
}
