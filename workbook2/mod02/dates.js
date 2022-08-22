let now = new Date();
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toUTCString());

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString("default", { month: "long" }));

let d = new Date(2022, 0, 31);
d.setMonth(1);
console.log(d);
