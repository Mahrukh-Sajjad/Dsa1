// Write a program that prints numbers from 1 to 5
// In this program the values on hold print out when the functions are popping or we can say back tracking.
let prompt = require("prompt-sync")();
// let n = prompt("Enter a number");
// fun(n);
// function fun(n) {
//   if (n == 0) return;
//   fun(n - 1);
//   process.stdout.write(n + " ");
// }
// Print the sum of numbers from n to 1
// let n1 = Number(prompt("Enter a number"));

// function func(n1) {
//   if (n1 == 1) return n1;
//   return n1 + func(n1 - 1);
// }
// console.log(func(n1));
// When our previous stack don't wait the current stack to give an answer before calculatiind
// it's answer than we dont need to use return statement with our recursive function call.

// Find the factorial of a number.
// let n2 = Number(prompt("Enter a number"));

// function func(n2) {
//   if (n2 == 1) return n2;
//   return n2 * func(n2 - 1);
// }
// console.log(func(n2));

// fibonacci series till n
// let n3 = 10;
// let first = 0,
//   second = 1;
// process.stdout.write(first + " " + second + " ");
// for (let i = 1; i <= n3 - 2; i++) {
//   let third = first + second;
//   process.stdout.write(third + " ");
//   first = second;
//   second = third;
// }

// Doing the fibonacci code using recursion series.
// function fiboNTerms(n4, first, second) {
//   if (n4 == 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   fiboNTerms(n4 - 1, second, third);
// }
// let n4 = 10;
// let first = 0,
//   second = 1;
// process.stdout.write(first + " " + second + " ");
// fiboNTerms(n4 - 2, first, second);

//finding sum of n terms in fibonacchi series this is another variant of fabonacci series
function fibo(n5) {
  if (n5 == 0) return 0;
  if (n5 == 1) return 1;
  return fibo(n5 - 1) + fibo(n5 - 2);
}
let n5 = 6;
console.log(fibo(n5));
