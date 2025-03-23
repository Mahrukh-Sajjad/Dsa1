 // Check whether this no is strong or not
let prompt = require("prompt-sync")();
// // let n = Number(prompt("Enter a number"));
// // let ans = 0;
// // let copy = n;
// // while (n > 0) {
// //   rem = n % 10;
// //   fact = 1;
// //   for (let i = 1; i <= rem; i++) {
// //     fact = fact * i;
// //   }
// //   ans = ans + fact;
// //   n = Math.floor(n / 10);
// // }
// // if (ans == copy) console.log("strong no");
// // else console.log("no strong no");

// let arr = [1, 2, 3, 4];
// arr.push(100); //add the element at last of array.
// arr.unshift(101); // add the element at start of the array

// arr.pop(); // remove the element from end ofth array

// arr.shift(); // remove the element from start of the array.
// console.log(arr[2]);
// arr[2] = 100;
// // if we add values in 10th index as 10 index does not exist in our array so it will create empty spaces in array to reach
// // 10th index to add values to it.
// arr[10] = 200;

// // There is another approach to declare array
// let arr1 = new Array(4);
// arr1[0] = 10;
// arr1[1] = 20;
// arr1[2] = 30;
// arr1[3] = 40;
// In javascript array is dynamic because there is no fix size in it we can add any no of elements we want
// arr1[6] = 100;
// console.log(arr1);
// As we know that when we push element in an array it adds that value in end of array so if we have predefined
//  size of array  and  there are no values  in that array then all the empty spaces will be created  and element
//  will move to last of the array.
// let arr2 = new Array(4);
// arr2.push(100);
// console.log(arr2);
// Get the size of array from user and elements of array and print the array
// let size = Number(prompt("Enter size of array"));
// let arr3 = new Array(size);
// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = Number(prompt("Enter no"));
// }
// console.log(arr3);

// //  find the sum of arr3 elements
// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//   sum = sum + arr3[i];
// }
// console.log(sum);

let arr4 = [1, 2, 3, 4];
let max = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > max) {
    max = arr4[i];
  }
}
console.log(max);
