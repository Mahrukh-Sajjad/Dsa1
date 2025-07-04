// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// let longest =0, count=0;
// add each element of the array to set
// run a loop to the array check
//  Algorithm: Longest Consecutive Sequence (O(n) approach)
// Initialize Variables

// Create a variable longest = 0 to store the length of the longest sequence.

// Convert the array into a Set (let’s call it set) to allow O(1) lookup for elements.

// Iterate through the array

// For each number num in the array:

// Check if it's the start of a sequence:

// Only start counting if set does not contain num - 1 (this means num is the beginning of a sequence).

// If it's the start:

// Initialize count = 1.

// While set contains num + count, increment count.

// Update longest = max(longest, count).
// Return longest as the final answer.

// Pseudocode
// function longestConsecutive(nums) {
//     let set = new Set(nums);
//     let longest = 0;

//     for (let num of nums) {
//         if (!set.has(num - 1)) {
//             let count = 1;
//             while (set.has(num + count)) {
//                 count++;
//             }
//             longest = Math.max(longest, count);
//         }
//     }

//     return longest;
// }
