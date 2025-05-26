// let arr1 = [2, 4, 5];
// let arr2 = [1, 4, 7];
// let ans = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     ans[k] = arr1[i];

//     i++;
//   } else {
//     ans[k] = arr2[j];

//     j++;
//   }
//   k++;
// }

// while (i < arr1.length) {
//   ans[k] = arr1[i];
//   i++;
//   k++;
// }

// while (j < arr2.length) {
//   ans[k] = arr2[j];
//   j++;
//   k++;
// }
// console.log(ans);

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// let m = 3,
//   n = 3;
// let i = m - 1,
//   j = n - 1,
//   k = nums1.length - 1;
// while (i >= 0 && j >= 0) {
//   if (nums1[i] > nums2[j]) {
//     nums1[k--] = nums1[i--];
//   } else {
//     nums1[k--] = nums2[j--];
//   }
// }
// while (j >= 0) {
//   nums1[k--] = nums2[j--];
// }
// console.log(nums1);

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// var removeDuplicates = function(nums) {
//     let j =1;
//     for(let i =0; i<nums.length-1; i++){
//         if(nums[i]!=nums[i+1]){
//             nums[j]= nums[i+1];
//             j++;
//         }
//     }
//     return j;

// }; // Time complecity of this algorithem is O(n) and space complexity is O(1)

// Duplicate zeros
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

//Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    count++;
  }
}
let i = arr.length - 1,
  j = arr.length - 1 + count;
while (i != j) {
  if (j < arr.length) {
    arr[j] = arr[i];
  }
  j--;
  if (arr[i] == 0) {
    if (j < arr.length) {
      arr[j] = arr[i];
    }
    j--;
  }
  i--;
}
console.log(arr);
