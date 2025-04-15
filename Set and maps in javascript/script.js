// jewels and stones.
// this question will traverse stones string and check whether that ch is present in jewels string if is it is present we
// will count the no of jewels to avoid duplicate elements we wil add jewels in a set.
// let jewels = "aA";
// let stones = "aAAbbbb";
// let set = new Set();
// let count = 0;
// for (let i = 0; i < jewels.length; i++) {
//   set.add(jewels.charAt(i));
// }
// for (let i = 0; i < stones.length; i++) {
//   let ch = stones.charAt(i);
//   if (set.has(ch)) {
//     count++;
//   }
// }
// console.log(count);
// Get a number from user and check either it is happy no or not
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number");
// let set = new Set();
// function happy() {
//   while (true) {
//     let sum = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       sum = sum + rem * rem;
//       n = Math.floor(n / 10);
//     }
//     if (sum == 1) return true;
//     if (set.has(sum)) return false;
//     set.add(sum);
//     n = sum;
//   }
// }
// let happyNo = happy();
// if (happyNo) console.log("The no you entered is happy no");
// else {
//   console.log("The no you entered is not a happy no  ");
// }

// Map is a linear datastructure it also contains bunch of values.
// map => {key,value}
// in map we can't have dupliacte keys are always unique but we can have duplicate value  which means
// value is not  unique.
// We can have different type of values in map

// let map = new Map();
// map.set("ajay", 5); //here we are adding key value pair in map where ajay is key and 5 is value
// map.set("name", "raghav");
// map.set("age", 25);
// map.set("isFail", true);
// console.log(map);
// map.set("raj", 5);
// map.set("ali", 8);
// map.set("amit", 3);
// map.set("sonu", 2);
// map.set("raj", 2); //At this point the value of raj will be replaced by 2 instead of 5 it's not goint to take duplicate key.
// console.log(map);
// map.delete("ali"); // this is going to delete element with key ali in map.
// console.log(map);
// console.log(map.has("adarsh")); // it checks whether a particular element is present in map or not
// console.log(map.size); // it gives the size of map.
// console.log(map.get("sonu")); //it gives the value of sonu present in map
// map.clear();
// console.log(map);// it deletes every entry from the map.

// console.log(map.keys()); // This function just gives keys
// console.log(map.values()); // it will just give us values.

// // Traversing in map
// // traversing through key
// for (let a of map.keys()) {
//   console.log(a);
// }
// //traversing through values
// for (let a of map.values()) {
//   console.log(a);
// }
// // getting every entry in map
// for (let a of map) {
//   console.log(a);
// }
// // To store keys and values in saparate variables.
// for (let [key, value] of map) {
//   console.log(key + " => " + value);
// }

let arr = [1, 10, 2, 4, 2, 2, 2, 6, 1, 1, 10];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
console.log(map);
