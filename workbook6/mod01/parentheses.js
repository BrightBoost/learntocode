function doStuff() {
  console.log("doing stuff");
  return 5;
};

function doSpecifiedStuff(func) {
  func();
}

function logStuff2(x) {
  console.log(x);
}

logStuff2(doStuff);
doSpecifiedStuff(doStuff);
doSpecifiedStuff(function () {
  console.log("doing stuff from anonymous function");
  return 5;
});
