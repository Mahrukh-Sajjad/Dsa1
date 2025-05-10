// One is not a prime number so will start from 2  prime which is factor
//multiple of another number that partiular no is not prime
//for example 2 is a prime number 2 is multiple of 6 so 6 is not a prime number.
// if a number is not completely divisible till it's square root so it will not be divisible after that.
// zero is not a prime number.
//  if we have a number 30 and we want to how many numbers from 1 to 30 are prime so for that we will create
// an array of length 31 and we will fill it with  true values  we will ignore zero and one and we will start
// with 2 and check till the square root of 30   which is 5. so for prime numbers will mark their multiples as false.
// The indices represent the numbers it's self.

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
checkRangeInPrime(n);
function checkRangeInPrime(n) {
  let isPrime = new Array(n + 1).fill(true);
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (isPrime[i] == true) {
      for (let j = i * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) process.stdout.write(i + " ");
  }
}
