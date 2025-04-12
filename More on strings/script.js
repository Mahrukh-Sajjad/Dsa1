//Every character has a ascii value. Main purpose of ascii value is language conversion.
// ascii value for capital letter is 65 to 90 and for small letters it is from 97 to 122.
// The difference between uppercase character ascii value and lower case character
// ascii value is 32. for example a has ascii value 97 and A has ascii value 65 so
// 97-65 is 32. if our character is upper case we will add 32 to its acii value
// to get the lower case chracter and if lower case chracter we will minus 32 to get uppercase chracter.

// Get a string from user and convert it's lowercase chracters to uppercase and uppercase to lowercase.
// let prompt = require("prompt-sync")();
// let s = prompt("Enter a string");
// let ans = "";
// for (let i = 0; i < s.length; i++) {
//   let asci = s.charCodeAt(i);
//   if (asci >= 65 && asci <= 90) {
//     ans = ans + String.fromCharCode(asci + 32);
//   } else if (asci >= 97 && asci <= 122) {
//     ans = ans + String.fromCharCode(asci - 32);
//   }
// }
// console.log(ans);

//Create an array of strings called words get a prefix and count the number of strings in
// words array that start from that particular prefix.
// if we want to check either a string starts from a particular prefix or not we will use s.startsWith(substring)
let word = ["attention", "people", "attire", "hello", "attend"];
let pref = "at";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (word[i].startsWith(pref)) count++;
}
console.log(count);

// captalize the first and last character of each word in the sentence and print the new sentence.
// The split method is used to break the string on basis of saparator and an array will be formed
// that will not contain that saparator and split the string and will make the array of it's parts.
// let str = "hello bhai kiya hal chal";
// let arr = str.split(" ");
// console.log(arr);

let str = "hello bhai kiya hal chal";
let ans = "";
let arrStr = str.split(" ");
for (let i = 1; i < arrStr.length; i++) {
  let word = arrStr[i];
  if (word.length <= 2) ans = ans + word.toUpperCase();
  else {
    ans =
      ans +
      word.charAt(0).toUpperCase() +
      word.substring(1, word.length) +
      word.charAt(word.length - 1).toUpperCase() +
      " ";
  }
}
console.log(ans);
