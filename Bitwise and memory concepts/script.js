// Right shift operator.(>>)
// if we say 25>>2 first of all we will convert 25 to binary  and then we will shift it's bits
// towards right two steps. binary of 25 is 11001 so by shifting it's bits to right we will get
// 110 which is equal to 6.
// console.log(25 >> 2); //6
// The easiest way to do this is that remove 3 bits from end.
// console.log(32 >> 3); //4

// left shift operator (<<)
// 25<<2 first of all we will create binary of 25 which is 11001 as
// binary has 5 bits so we will create 2 extra spaces and  we will
// left shift every element by 2 in this case we will have two spaces
// left at right so we will add zero at each empty space.
// in case if we have spaces left at left side we will leave them empty.
// console.log(25 << 2); //100   for left shift  we add two zeros at end.

// swap two  integers without using third variable.
// let a = 10,
//   b = 5;
// a = a ^ b; //a=15
// b = a ^ b; //b=10
// a = a ^ b; //a=5
// console.log(a, b);

//check if a number is even or odd using bitwise operator
//  if we have binary 1000 to it's Most significant bit(1) and least significant bit is 0.
// so even numbers have least significant bit 0 and  odd numbers have lsb one.
// so if we do n&1 at it gives us zero then n is even otherwise odd.
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number"));
// if ((n & 1) == 0) console.log("even no");
// else console.log("odd no");

// check a given no is power of 2
// so our question says  check if a number is result of 2 power something.
// if a no result of two power something  then it's binary will have msb 1 and rest of the bits will be zero.
// for example 2 power 2 is 4  so binary of 4 is 100 you can see that its msb is 1 and rest of the bits are zero.
// every no before the power of two no has binary representation having all ones for exanple the no before 4 is
// 3 so it's binary representation is 11.
let n1 = 32;
if ((n1 & (n1 - 1)) == 0) {
  console.log("power of two");
} else {
  console.log("Not a power of two");
}
