// In js we can use variable without declaring it with var keyword.
a = 12;
console.log(a);

// we can use varible without declariing it first with var keyword
// undrfined is printed on screen.
// but we can do it with let.
console.log(b);
var b = 13;

// if we concatenate  a number into a string it + sign acts as concatenation operator
// Here c+d prints 1213 on console as a string
let c = 12;
let d = "13";
console.log(c + d);

// to check datatype of a value we use typeof();
let e = 12;
let f = "13";
console.log(typeof (c + d));

// Add two numbers and concatenate the sum with a string.
let g = 14;
let h = 15;
console.log("The sum of two numbers is" + (g + h));

// if we add first and two numbers then concatinate the string it will
// print sum of numbers and concatinate with a string.
console.log(g + h + " is sum of two numbers");

// if we subtract, multiply or divide a string with a number it will
// implicitly convert string to a number and this is called
// type coercion
let i = "1";
let j = 1;
console.log(i - j);
console.log(i * j);
console.log(i / j);
// thisb will print 0,1,1 respectively for each statement.

// Type casting or type conversion is converting one type of value to another.
let k = Number("10");
console.log(k);

// Swapping the value of two variables by using third variable
let l = 10;
let m = 20;
let n;
n = l;
l = m;
m = n;
console.log("Swapping is done " + l, m);

// swapping without a third varible.
let o = 10;
let p = 20;
o = o + p; //30;
p = o - p; //10;
o = o - p; //20;
console.log(o);
console.log(p);

// swapping with destructing the array
let q = 1;
let r = 2;
[r, q] = [q, r];
console.log(q);
console.log(r);

// when we take modulus of a number with 10 it it gives the last
// digit of the number
let s = 1234;
console.log(s % 10);

// we can remove the last digit by diving with 10 and using Math.floor
let t = 1234;
console.log(Math.floor(1234 / 10));

// Question relevant to increment and decremnet operator
let u = 11;
u = u++ + ++u;
console.log(u);
//
let v = 11;
let w = 22;
let x = v + w + v++ + w++ + ++v + ++w;
console.log("v = " + v);
console.log("w = " + w);
console.log("x = " + x);

// if we use increment or decrement operator with boolean
// it will convert true to 1 and false to 0
let a = true;
a++;
console.log(a);
