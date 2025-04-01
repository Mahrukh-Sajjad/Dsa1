// in stable sorting algorithem arrays are sorted in the manner that the order in which duplicate
// elements are written  is maintained in sorted array otherwise it is unstable.
// Common patterns observed in bubble sort is every element takes a phase to reach it's position and in every
// phase no of iterations reduces by one and our phases are 1 less than array length because we dont need
// to run a phase for last element because it is already in it's position.

// Bubble sort
// let a = [1, 4, 3, 2, 9, 10];
// let n = a.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (a[j] > a[j + 1]) {
//       let temp = a[j];
//       a[j] = a[j + 1];
//       a[j + 1] = temp;
//     }
//   }
// }
// console.log(a);

// Selection sort
// selection sort takes an element and compares it with rest of the elements in array if we get any element smaller than
// than ith element we give save it's index in small and swap it  outer loop is takes an element from the array
// and inner loop compares it with rest of the elements.
// let arr = [1, 4, 3, 2, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) {
//       small = j;
//     }
//   }
//   if (i != small) {
//     let temp = arr[small];
//     arr[small] = arr[i];
//     arr[i] = temp;
//   }
// }
// console.log(arr);

// Insertion sort
let arr = [1, 4, 3, 2, 9, 10];
for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
console.log(arr);
