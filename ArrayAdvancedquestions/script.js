// movving to the left by k elements
// let k = 2;
// let arr = [1, 2, 3, 4, 5];
// k = k % arr.length;

// for (let j = 1; j <= k; j++) {
//   let tempVal = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = tempVal;
// }
// console.log(arr); // [3, 4, 5, 1, 2];

// Moving elements to left by k elements
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let temp = new Array(arr.length);
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// a better approach
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);

// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }
// console.log(arr);

// linear search algorithem
// let arr = [1, 2, 3, 4, 5];
// let target = 6;
// let index;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     index = i;
//     break;
//   } else {
//     index = -1;
//   }
// }
// if (index == -1) {
//   console.log("element not found");
// } else {
//   console.log(index);
// }

// Binary search algorithem
// let arr = [10, 23, 45, 67, 69, 190, 200];
// if (binarySearch(arr, 159) == -1) console.log("not found");
// else console.log("element found");
// function binarySearch(arr, target) {
//   let s = 0,
//     e = arr.length - 1;
//   while (s <= e) {
//     let mid = Math.floor((s + e) / 2);
//     if (arr[mid] == target) return mid;
//     else if (arr[mid] > target) e = mid - 1;
//     else s = mid + 1;
//   }
//   return -1;
// }
