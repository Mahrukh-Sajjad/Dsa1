// String is collection of characters
//Anything that is printed black in console is string and blue is number
// people say that string is a array of characters(wrong)
// people say this because it behaves like an array it shows indexing behaiviour like arrays
let s = "sheriyans"; // if we want to print 'r' in from the string s we will use it's index.indexing starts from zero.
// console.log(s[3]);
//  String is immutable which means if we want to change the string like we do we do with arrays we can do it.
// s[3] = "x"; // This statement is not going to change the string. but in case of arrays we can change arrays through this statement.
// console.log(s); // that's why the statement string is array of characters is wrong.

// s = "ali"; // here  previous value is discarted and new element took the place of it.
// console.log(s);

// console.log(s.substring(3)); //In this statement we are just giving starting index. So it goes up to the last index.
// console.log(s.substring(3, 8)); // will print element upto 7 index the ending index limit is excluded.

// console.log(s.slice(3)); // it works as substring it  we havent given the ending index so it will go upto the last index.
// console.log(s.slice(3, 8)); // same it will go upto 7th index excluding the 8 index.

// for slice we can  give negative index and it starts from last element like last character has -1 index.
// console.log(s.slice(-4)); // it starts from -4 index upto -1 which is the last element
// console.log(s.slice(-4, -1)); // so the difference between slice and substring is that substring does not ecommpany
// negative indexes.

// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.concat(" is ", "located ", "at ", "bhopal "));

// console.log(s);
// console.log(s.trim()); // removes spaces from both sides.
// console.log(s.indexOf("yans"));
// for (let i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }
// s.charAt(i)  it gets a character of a string at a particular index

// check if a string is palinrome or not
let prompt = require("prompt-sync")();
let str = prompt("Enter a string");
let palindrome = true;
let i = 0,
  j = str.length - 1;
while (i < j) {
  if (str[i] != str[j]) palindrome = false;
  i++;
  j--;
}
if (palindrome == true) console.log("palindrome");
else console.log("not palindrome");
