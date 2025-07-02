// Algorithm: Find Intersection of Two Arrays (Unique Elements Only)
// Create a set from the first array:

// Convert nums1 to a Set to allow O(1) lookup time for checking presence of elements.

// This also ensures all elements in nums1 are unique.

// Initialize an empty array for the result:

// Create an empty array ans to store the intersection result.

// Loop through each element in the second array (nums2):

// For each element:
// a. Check if it exists in the set created from nums1.
// b. Also check that it is not already in the result array (ans).
// c. If both conditions are true, add it to ans.

// Return the result array.

// var intersection = function(nums1, nums2) {
//     let set = new Set(nums1);
//     let ans = [];
//     for(let i =0; i<nums2.length; i++){
//         if(set.has(nums2[i]) && !ans.includes(nums2[i])){
//             ans.push(nums2[i])
//         }
//     }
//       return ans

// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// ✅ Correct and Understandable Algorithm:
// Initialize sum = 0 and count = 0

// sum will store the running total (prefix sum).

// count will store the number of subarrays that sum to k.

// Create a map (prefixSumMap) to store frequency of prefix sums

// Initialize with:
// prefixSumMap.set(0, 1)
// (This is to count subarrays starting from index 0 when sum equals k.)

// Loop through the array:

// For each element:

// Add the current element to sum.

// Check if (sum - k) exists in the map:

// If yes, add the frequency of (sum - k) to count.

// Update the frequency of the current sum in the map:

// If sum already exists in the map, increment its frequency by 1.

// Otherwise, set its frequency to 1.

// Return count at the end.

// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

// ✅ Algorithm: Longest Subarray with Sum = k
// Initialize variables:

// sum = 0 → keeps track of the running sum of elements.

// longest = 0 → stores the length of the longest subarray found so far.

// Create a map (hashmap) to store the first occurrence of each prefix sum.

// Add the pair (0, -1) to the map to handle subarrays starting from index 0.

// Loop through the array:

// For each index i from 0 to length of array - 1:

// Add the current element to sum.

// Check if (sum - k) exists in the map:

// If it does, it means a subarray with sum k ends at index i.

// Calculate the length of this subarray: i - map.get(sum - k).

// Update longest if this length is greater than the current value.

// If the current sum is not already in the map:

// Store it with the current index i to preserve the earliest occurrence.

// Return or print longest as the result.

// 📌 Key Intuition (sum - k):
// We use the formula sum - k because:

// If total sum till index i is sum, and there was a previous prefix sum of sum - k at index j, then the subarray from index j+1 to i has a sum of exactly k.

// Let me know if you want this in JavaScript code as well!
