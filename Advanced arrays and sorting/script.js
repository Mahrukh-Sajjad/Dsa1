// // Sort the array

// // Sorting helps apply the two-pointer technique efficiently

// // It also allows us to easily detect and skip duplicates

// // Loop through each element (i)

// // This will be the first number of the triplet

// // Skip duplicate i values

// // If nums[i] === nums[i - 1], skip this iteration

// // ✅ Prevents repeating the same triplet starting with the same number

// // Set two pointers: j = i + 1 and k = nums.length - 1

// // These will be the second and third numbers in the triplet

// // Check the sum:

// // sum = nums[i] + nums[j] + nums[k]

// // If sum === 0:
// // ✅ Found a valid triplet → push to result
// // ➤ Move both pointers: j++ and k--
// // ➤ Skip duplicate j and k values:

// // js
// // Copy
// // Edit
// // while (j < k && nums[j] === nums[j - 1]) j++;
// // while (j < k && nums[k] === nums[k + 1]) k--;
// // If sum < 0:
// // ➤ Need a larger number → move j++

// // If sum > 0:
// // ➤ Need a smaller number → move k--

// // Repeat steps 5–6 until j >= k

// // Then move to the next i in the outer loop
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let ans=[]
//     nums.sort((a,b)=>a-b);
//     for(i=0; i<nums.length; i++){
//         if(i!=0 && nums[i-1]==nums[i])continue;
//         let j=i+1, k=nums.length-1;
//         while(j<k){
//             let sum = nums[i]+nums[j]+nums[k];
//             if(sum==0){
//                 let cur = [nums[i],nums[j++],nums[k--]];
//                 ans.push(cur)
//                 while(j<k&&nums[j-1]==nums[j])j++
//                 while(j<k&&nums[k+1]==nums[k])k--

//             }
//             else if(sum<0)j++;
//             else k--;
//         }
//     }
//     return ans

// };

// Merge Sort
function conquer(arr, f, l, m) {
  let temp = new Array(l - f + 1).fill(0);
  let i = f,
    j = m + 1,
    k = 0;
  while (i <= m && j <= l) {
    if (arr[i] < arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }
  while (i <= m) {
    temp[k++] = arr[i++];
  }
  while (j <= l) {
    temp[k++] = arr[j++];
  }
  (i = f), (k = 0);
  while (k < temp.length) {
    arr[i++] = temp[k++];
  }
}

function divide(arr, f, l) {
  if (f >= l) return;
  let mid = Math.floor((f + l) / 2);
  divide(arr, f, mid);
  divide(arr, mid + 1, l);
  conquer(arr, f, mid, l);
}

let arr = [10, 7, 8, 2, 19, 69, 45, 8];
divide(arr, 0, arr.length - 1);
console.log(arr);

// Time complexity for merge sort is nlogn
