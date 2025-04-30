// Sum of digits of a number using loops
// let n = 563;
// let sum = 0;
// while (n > 0) {
//   let rem = n % 10;
//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }
// console.log(sum);
// solving this question using recursion
// let n1 = 56321;
// function SOD(n1) {
//   if (n1 < 10) return n1;
//   return (n1 % 10) + SOD(Math.floor(n1 / 10));
// }
// console.log(SOD(n1));

// Reverse a number by iterative way
// let n2 = 891;
// let rev = 0;
// while (n2 > 0) {
//   let rem = n2 % 10;
//   rev = rev * 10 + rem;
//   n2 = Math.floor(n2 / 10);
// }
// console.log(rev);

// Now i'm doing reverse the digit by using recursion
// function reverseDigit(n, rev) {
//   if (n === 0) return rev;
//   let rem = n % 10;
//   rev = rev * 10 + rem;
//   n = Math.floor(n / 10);
//   return reverseDigit(n, rev);
// }
// let n = 891;
// console.log(reverseDigit(n, 0));

// Greatest common divisor of two numbers is  highest number of numbers that completely divide both numbers.
// we always run the loop in smaller number to look for common factors.
let a = 32, //The time complexity for this particular solution is O(min(a,b))
  b = 20;
for (i = Math.min(a, b); i <= 1; i--) {
  // we used loop backward to find the biggest no that is common factor.
  if (a % i == 0 && b % i == 0) {
    console.log(i);
    break;
  }
}

//Finding highest common factor using euclidean formaula which says always subtract
// smaller number from larger number and store the answer in big number.

let e = 16, //The time complexity of this algorithem is O(max(a,b)) because in worst
  // case if we subatract smaller number from larger one when will subtract it untill
  // larger number is completed.
  f = 24;
while (e != f) {
  if (e > f) e = e - f;
  else f = f - e;
}
console.log(e);

// we will find gcd of two numbers using recursive approach.
function gcd(c, d) {
  if (c == d) return c;
  if (c > d) return gcd(c - d, d);
  return gcd(c, d - c);
}
let c = 16,
  d = 24;
console.log(gcd(c, d));
