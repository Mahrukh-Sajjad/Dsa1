// // you are given an array nums of integers and an integer target give the indeces of any two numbers
// // that sum upto the target when added from the array
// let nums = [11, 2, 15, 7];
// let target = 9;
// let map = new Map();
// let ans = [-1, -1];
// for (let i = 0; i < nums.length; i++) {
//   if (map.has(target - nums[i])) {
//     ans[0] = i;
//     ans[1] = map.get(target - nums[i]);
//   } else {
//     map.set(nums[i], i);
//   }
// }
// console.log(ans);
// // get a string and check the frequency of each element return the first element having 2 frequency.
// /**
//  * @param {string} s
//  * @return {character}
//  */
// var repeatedCharacter = function(s) {
//   let map = new Map();
//   for(let i =0;i<s.length; i++){
//       let ch = s.charAt(i)
//       if(map.has(ch)){
//           map.set(ch, map.get(ch)+1)
//           if(map.get(ch)==2) return ch;
//       }else{
//           map.set(ch,1)
//       }
//   }

// };

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

let names = ["marry", "john", "emma"];
let heights = [180, 165, 170];
let map = new Map();
for (let i = 0; i < names.length; i++) {
  map.set(heights[i], names[i]);
}
heights.sort((a, b) => b - a);
let ans = new Array(names.length);
for (let i = 0; i < heights.length; i++) {
  ans[i] = map.get(heights[i]);
}
console.log(ans);
