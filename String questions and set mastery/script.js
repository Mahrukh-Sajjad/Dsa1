// from 0 to 122 we have all the useable chracters.
// we created an array of 123 elements where indeces start from 0 to 122 each index represent asci value
// of a  character and when we see a character  in a string we increase the value placed in that character index by 1.
//  and this whole method is called bit map.
// Time complexity will be n and space complexity will be also n because we are taking extra space.
let prompt = require("prompt-sync")();
// let s = prompt("Enter a string");
// let freqArr = new Array(123).fill(0);
// for (let i = 0; i < s.length; i++) {
//   let asci = s.charCodeAt(i);
//   freqArr[asci] = freqArr[asci] + 1;
// }
// for (let i = 0; i < freqArr.length; i++) {
//   if (freqArr[i] > 0) {
//     console.log(String.fromCharCode(i), freqArr[i]);
//   }
// }
// Check whether a string is anagram or not. Two strings are anagram if they have same length
// and same frequency of each chracter.

// let s1 = prompt("Enter  string one");
// let s2 = prompt("Enter string two");
// let freqArr1 = new Array(123).fill(0);
// let anagram = true;
// if (s1.length != s2.length) {
//   anagram = false;
// } else {
//   for (let i = 0; i < s1.length; i++) {
//     let asci1 = s1.charCodeAt(i);
//     freqArr1[asci1] = freqArr1[asci1] + 1;
//   }
//   for (let i = 0; i < s2.length; i++) {
//     let asci1 = s2.charCodeAt(i);
//     freqArr1[asci1] = freqArr1[asci1] - 1;
//   }
//   for (let i = 0; i < freqArr1.length; i++) {
//     if (freqArr1[i] != 0) {
//       anagram = false;
//     }
//   }
// }
// if (anagram) console.log("Anagram");
// else console.log("not anagram");

// Set is a linear datastructure that holds multiple values like array but unlike array it does
// not hold duplicate values and it is unordered.
// let set = new Set();
// set.add(10); // set.add() method is used to add an element in the set.
// set.add(10);
// set.add(20);
// set.add(20);
// console.log(set); // it will display duplicate values uniquely.
// set.delete(20); //delete function is to remove an element from string.
// console.log(set);
// console.log(set.has(10)); //set.has() method is used to check either an element is present in set or not.
// console.log(set.size);
// set.add(30);
// set.add(40);
// set.add(50);
// for (let a of set) {
//   console.log(a);
// }
// set.clear(); // This method is used to empty a set.
// console.log(set);
let arr = [1, 2, 3, 4];
let set = new Set(arr);

console.log(set);

// check if a sentence is pangram or not a pangram is a sentence having all characters of english alphabets.
// let sentence = prompt("Enter a sentence");
// let set = new Set();
// let pangram = true;
// for (let i = 0; i < sentence.length; i++) {
//   let ch = sentence[i];
//   set.add(ch);
// }
// if (set.size != 26) {
//   pangram = false;
// }
// if (pangram) console.log("Your sentence is a pangram");
// else {
//   console.log("Your sentence is not pangram");
// }
