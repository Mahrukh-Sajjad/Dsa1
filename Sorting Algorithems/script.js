// // Quick sort is also based on divide and conquer and also pivot and partition
// // Worst case time complexity is n2.
// Base Case:
// If the first index is greater than or equal to last, stop (i.e., array of size 0 or 1 is already sorted).

// Choose a Pivot (in this case, the last element of the current subarray).

// Partition the Array:

// Move all elements smaller than the pivot to the left.

// Move all elements greater than or equal to the pivot to the right.

// Place the pivot in its correct sorted position.

// Return the pivot index.

// Recursively apply Quick Sort to:

// The left subarray (elements before the pivot)

// The right subarray (elements after the pivot)

// 🔁 Partitioning Logic
// Loop from first to last - 1:

// If current element is less than pivot, increment i and swap it forward.

// After the loop, swap pivot to its correct position (i + 1).

// let arr = [18, 5, 3, 40, 10, 30];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
// function quickSort(arr, first, last) {
//   //logn
//   if (first >= last) return;
//   let pIdx = findPivotIndex(arr, first, last);
//   quickSort(arr, first, pIdx - 1);
//   quickSort(arr, pIdx + 1, last);
// }

// function findPivotIndex(arr, first, last) {
//   //n
//   let pivot = arr[last];
//   i = first - 1;
//   for (let j = first; j < last; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, last);
//   return i + 1;
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// Cyclic sort
// Time complexity for this algorithem is O(n) and space complexity is O(1)
// 🔄 Cyclic Sort – High-Level Steps
// Goal: Place each number at its correct index.
// For an array of n elements with values from 1 to n, the correct index of a number x is x - 1.

// Start from index i = 0 and loop until the end of the array.

// Find the correct index for the current element:
// correctIdx = nums[i] - 1

// Check if the element is in the correct place:

// If not, swap it with the element at its correct position.

// If yes, move to the next index by doing i++.

// Repeat until the entire array is sorted.
let nums = [8, 5, 7, 2, 1, 3, 4, 6];
let i = 0;
while (i < nums.length) {
  let correctIdx = nums[i] - 1;
  if (nums[i] != nums[correctIdx]) {
    let temp = nums[i];
    nums[i] = nums[correctIdx];
    nums[correctIdx] = temp;
  } else i++;
}
console.log(nums);
