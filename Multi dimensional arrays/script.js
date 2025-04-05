// Accessing individual elements of multidimensional array
// let arr = [
//   [1, 2, 3, 5],
//   [4, 6, 5, 10],
//   [7, 8, 9, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log();
// }

// Dinamically creating a multidimensional array

// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter size of array"));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(3);
// }
// for (let j = 0; j < arr.length; j++) {
//   for (let k = 0; k < arr[j].length; k++) {
//     let elem = Number(prompt("Enter the element"));
//     arr[j][k] = elem;
//   }
//   console.log();
// }
// console.log(arr);

// Sum of elements of left diagonal and elements  of right diagonal
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let leftSum = 0,
//   rightSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i == j) leftSum = leftSum + arr[i][j];
//     if (i + j == arr.length - 1) rightSum = rightSum + arr[i][j];
//   }
// }
// console.log(leftSum, rightSum);

// jagged array is 2 dimensional array in which inner arrays have not same size

// Program to create jagged array dinamically
// let prompt = require("prompt-sync")();
// let arr = new Array(3);
// for (let i = 0; i < arr.length; i++) {
//   let size = Number(prompt("Enter size of array"));
//   arr[i] = new Array(size);
// }
// for (let j = 0; j < arr.length; j++) {
//   for (let k = 0; k < arr[j].length; k++) {
//     let elem = Number(prompt("Enter element"));
//     arr[j][k] = elem;
//   }
// }
// console.log(arr);

// Creating a 2d array in single line
let arr = Array.from({ length: 3 }, () => Array(4).fill(0));
console.log(arr);
