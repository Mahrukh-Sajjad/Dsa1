//  Find the second max element of the array
// let arr = [7, 3, 1, 10, 10];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log("Second Max ", sMax);

// Reverse an array
// let arr = [1, 2, 3, 4, 5, 6];
// let temp = new Array(arr.length);
// let i = 0;
// for (let j = arr.length - 1; j >= 0; j--) {
//   temp[i] = arr[j];
//   i++;
// }
// console.log(temp);

// Reverse of an array without creating a new array
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = arr.length - 1; i >= 0; i--) {
//   process.stdout.write(arr[i].toString());
// }

// third approach to reverse an array
// let a = [1, 2, 3, 4, 5];
// let i = 0;
// let j = a.length - 1;
// while (i < j) {
//   temp = a[i];
//   a[i] = a[j];
//   a[j] = temp;
//   i++;
//   j--;
// }
// console.log(a);
// All zeros to left and all ones to right
// let a = [1, 0, 1, 1, 0];
// let i = 0,
//   j = 0;
// while (i < a.length) {
//   if (a[i] == 0) {
//     temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(a);

// Left rotation of elements by 1
// let a = [1, 2, 3, 4, 5];
// let temp = a[0],
//   i = 0;
// while (i < a.length) {
//   a[i] = a[i + 1];
//   i++;
// }
// a[a.length - 1] = temp;
// console.log(a);

// Right rotation of elements by 1
let a = [1, 2, 3, 4, 5];
let i = a.length - 1,
  temp = a[a.length - 1];
while (i > 0) {
  a[i] = a[i - 1];
  i--;
}
a[0] = temp;
console.log(a);
