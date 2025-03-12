// check if a year is leap year or not
// let year = Number(prompt("Enter a year"));
// let leapYear = false;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400) leapYear = true;
//     else leapYear = false;
//   } else {
//     leapYear = true;
//   }
// } else {
//   leapYear = false;
// }

// console.log(leapYear);

// break and continue
let n = 10;
for (let i = 1; i <= n; i++) {
  if (i == 7) break;
  console.log(i);
}

let m = 10;
for (let k = 1; k <= n; k++) {
  if (k == 6) continue;
  console.log(k);
}

// when we want to get last dight of a number we take modulus of it with 10
// when we want to remove last digit of a number we divide it by 10.
// in case of 2%10 the answer is 2 because in this case divident is smaller than divisor.
// incase of 2/10 the answer is 0 because divident is smaller than divisor.

// get a number from user and add it's digits
// let num = Number(prompt("Enter a number"));
// let sum = 0;
// while (num > 0) {
//   rem = num % 10;
//   sum = sum + rem;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// reverse a number u got from user
// let num1 = Number(prompt("Enter a number"));
// let str = "";
// while (num1 > 0) {
//   rem = num1 % 10;
//   str = str + rem;
//   num1 = Math.floor(num1 / 10);
// }
// console.log(str);
// there is another approach to solve above question
// let num2 = Number(prompt("Enter a number"));
// let rev = 0;
// while (num2 > 0) {
//   rem = num2 % 10;
//   rev = rev * 10 + rem;
//   num2 = num2 / 10;
// }
// console.log(rev);

// check if a number is automorphic or not.
// An automorphic is a number whose square last digit is that number itself.
let num3 = Number(prompt("Enter a number"));
let copy = num3;
sq = num3 * num3;

let count = 0;
while (num3 > 0) {
  count++;
  num3 = Math.floor(num3 / 10);
}
if (sq % Math.pow(10, count) == copy) {
  console.log("automorphic");
} else {
  console.log("not");
}
