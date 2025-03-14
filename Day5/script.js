// //  Find the factorial of a number entered by user
// let n = Number(prompt("Enter a number"));
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);
// Get a number from user and print even sum and odd sum upto that number
// let num = Number(prompt("Enter a number"));
// let evenSum = 0;
// oddSum = 0;
// for (let m = 1; m <= num; m++) {
//   if (m % 2 == 0) evenSum = evenSum + m;
//   else oddSum = oddSum + m;
// }
// console.log("evenSum" + evenSum);
// console.log("oddSum" + oddSum);

// Get a number from user and print it's factors
// The second last factor is always less than or equal to half of that number

// let num1 = Number(prompt("Enter a number"));
// for (let p = 1; p <= num1 / 2; p++) {
//   if (num1 % p == 0) console.log(p);
// }
// console.log(num1);

// check if a number is prime or not
// let num2 = Number(prompt("Enter a number"));
// let isPrime = true;
// for (let q = 2; q <= num2 / 2; q++) {
//   if (num2 % q == 0) isPrime = false;
// }
// if (isPrime) console.log("Given number is prime number");
// else console.log("Given number is not a prime no");

// There is  another approach to check if a number is prime or not
function checkPrime(num4) {
  if (num4 < 1) return false;
  if (num4 == 2) return true;
  if (num4 % 2 == 0) return false;
  for (let s = 3; s <= Math.floor(Math.sqrt(num4)); q += 2) {
    if (num4 % s == 0) return false;
  }
  return true;
}
let num3 = Number(prompt("Enter a number"));
let isPrime1 = checkPrime();
if (isPrime1) console.log("prime no");
else console.log("not a prime no");
