// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

const prompt = require("prompt-sync")();
// let n = prompt("Enter a number");
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// let k = Number(prompt("Enter a number"));
// for (let l = 1; l <= k; l++) {
//   for (let m = 1; m <= l; m++) {
//     process.stdout.write(m + " ");
//   }
//   console.log();
// }

// let p = prompt("Enter a number");
// let Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let q = 1; q <= 5; q++) {
//   let row = "";
//   for (let r = 0; r < q; r++) {
//     row = row + Alpha[r] + " ";
//   }
//   console.log(row);
// }

let temp = 5;
for (let s = 1; s <= 5; s++) {
  for (let i = 1; i <= temp; i++) {
    process.stdout.write("* ");
  }
  temp--;
  console.log();
}
