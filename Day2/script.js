console.log(Math.ceil(10.1));
console.log(Math.floor(10.7));
console.log(Math.round(10.5));
console.log(Math.round(10.4));
console.log(Math.abs(-8));
console.log(Math.trunc(3.127649869875));
console.log(Math.pow(5, 2)); //5^2 =25
console.log(Math.sqrt(36)); //6
console.log(Math.cbrt(125)); //5
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));
console.log(Math.random());
let a = 123.456789;
console.log(Number(a.toFixed(3)));
// toFixed gives the value in string and if the number after the n digit
// is greater than equal to 5 it rounds up the last dight.

// Compound interest
// let p = Number(prompt("Enter principle"));
// let r = Number(prompt("Enter rate"));
// let t = Number(prompt("Enter time"));
// console.log(p * Math.pow(1 + r / 100, t) - p);

// Generate opt
console.log(Math.floor(Math.random() * 9000 + 1000));

// calculate area of triangle by hero's formula
let i = Number(prompt("Enter a number"));
let j = Number(prompt("Enter a number"));
let k = Number(prompt("Enter a number"));

if (i + j <= k || i + k <= j || j + k <= i) {
  console.log("Not possible");
} else {
  let s = (i + j + k) / 2;
  console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
}
