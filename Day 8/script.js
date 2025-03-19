const prompt = require("prompt-sync")();
// let n = prompt("Enter no of rows");
// for (let i = 1; i <= n; i++) {
//   temp = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(temp) + " ");
//     temp++;
//   }
//   console.log();
// }

// Print mirror pattern
// let n = prompt("Enter no of rows");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Print cross pattern
// let n = Number(prompt("Enter no of rows"));
// for (let i = 1; i <= n; i++) {
//   for (j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// Array is a linear data structure that contains multiple values
// of different types(values are of different types in js only) in a contineous memory allocation
let arr = [10, 81, 11, 67, true, "mahrukh"];
console.log(arr);
