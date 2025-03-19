// check either it is ISBN number or not
// let isbn = prompt("Enter isbn number");
// let count = 0,
//   sum = 0;
// for (let i = 0; i < isbn.length; i++) {
//   count++;
//   sum = sum + isbn[i] * count;
// }
// if (sum % 11 == 0) {
//   console.log("valid isbn");
// } else console.log("Invalid isbn");

// check if a number is harshad number or not.
// A number is a Harshad number if it is divisible by the sum of its digits.
// let n = Number(prompt("Enter a number"));
// sum = 0;
// while (n != 0) {
//   rem = n % 10;
//   sum = sum + rem;
//   n = n / 10;
// }
// if (n % sum == 0) {
//   console.log("Harshad number");
// } else console.log("Not a harshad number");

// Abundant no.A number is abundant if the sum of its proper divisors is greater
// than the number itself.
// let n1 = Number(prompt("Enter a number"));
// sum = 0;
// for (let m = 1; m <= n1 / 2; m++) {
//   if (n1 % m == 0) {
//     sum = sum + m;
//   }
// }
// if (sum > n1) console.log("Abundant Number");
// else console.log("Not abundant no");
// Write a program to find fibonacci numbers upto n
// let n2 = Number(prompt("Enter a number"));
// let a = 0,
//   b = 1;
// while (a < n2) {
//   console.log(a);
//   nextFib = a + b;
//   a = b;
//   b = nextFib;
// }
// Write a program to check a number is perfect square or not
// let n3 = Number(prompt("Enter a number"));
// if (Math.sqrt(n3) % 1 == 0) {
//   console.log("Perfect square");
// } else console.log("Not perfect square");
// Find the area of circle,ractangle and triangle get choice from user
// let choice = prompt(
//   "Do you want to find area of circle,reatangle or triangle?"
// ).toLowerCase();
// let area;
// switch (choice) {
//   case "circle":
//     let r = Number(prompt("Enter radius"));
//     area = Math.PI * Math.pow(r, 2);
//     console.log(Math.floor(area));
//     break;
//   case "triangle":
//     let b = Number(prompt("Enter base"));
//     let h = Number(prompt("Enter height"));
//     area = (1 / 2) * (b * h);
//     console.log(area);
//     break;
//   case "rectangle":
//     let l = Number(prompt("Enter length"));
//     let w = Number(prompt("Enter width"));
//     area = l * w;
//     console.log(area);
//     break;
//   default:
//     console.log("Plz enter valid shape");
// }

// 10. Neon Number A number where the sum of digits of its square equals the number itself.
// let n5 = Number(prompt("Enter a number"));
// let sq = n5 * n5;
// let sum = 0;
// while (sq != 0) {
//   let d = sq % 10;
//   sum = sum + d;
//   sq = Math.floor(sq / 10);
// }
// if (sum == n5) console.log("neon");
// else console.log("Not neon");

// Find the sum of Fibonacci numbers at even indices up to the 2Nth Fibonacci number.
// let n6 = Number(prompt("Enter a  number"));
// let arr = [];
// let a = 0,
//   b = 1;
// for (let k = 0; k <= 2 * n6; k++) {
//   arr[k] = a;
//   let nextFib1 = a + b;
//   a = b;
//   b = nextFib1;
// }
// let sum1 = 0;
// for (let l = 0; l < arr.length; l = l + 2) {
//   sum1 = sum1 + arr[l];
// }
// console.log(sum1);

// Find the largest digit in a given number.
// let n7 = Number(prompt("Enter a number"));
// let maxdigit = 0;
// while (n7 != 0) {
//   lastdigit = n7 % 10;
//   if (lastdigit > maxdigit) {
//     maxdigit = lastdigit;
//   }
//   n7 = Math.floor(n7 / 10);
// }
// console.log(maxdigit);

// Find the sum of even digits in a given no
// let n8 = Number(prompt("Enter a number"));
// let eSum = 0;
// while (n8 !== 0) {
//   let r = n8 % 10;
//   if (r % 2 == 0) {
//     eSum = eSum + r;
//   }
//   n8 = Math.floor(n8 / 10);
// }
// console.log(eSum);
