// Memory is divided in to parts stack and heap.Stack is static memory with limited size.
// stack and heap occupy  ram  in 5:95 ratio respectively.
// our stack has primitive variables  like Number, string, boolean ,undefined,null ,bigInt.
//primitive variables are defined by language.
// Another thing that is stored in stack is function call.
// Stack is based on lifo last in first out.
// When an element is added into the stack it is called push  and removing an element is
// called pop. and peak is a position.
// When a function is called it is pushed into call stack and when it is terminated it
// is pop out of call stack.
// let's learn it through example.
// greet();
// function greet() {
//   console.log("Good Morning");
//   fun();
// }
// function fun() {
//   console.log("having fun");
//   joke();
// }
// function joke() {
//   console.log("joking");
// }
// In the above lines of code first greet function will run and it is pushed in to callStack
// before it ends it calls the fun function so fun function will run  and will be pushed into call
// stack before it ends joke function is called and pushed into stack so joke function pop out of
// stack first because it is pushed into stack at last then fun function will be popped and lastly
// greet function will be popped.

// Our return statement means terminate the function. When the function terminates it pops out of the call stack.

// function temp(a) {
//   if (a == 0) return;
//   else {
//     console.log("run");
//   }
// }
// temp(10);
//Every function has return statement by default. it there is a retrun type that says which type
// of value is returned. in void return type u return something to function but dont return any value.
// In leetcode when we return a value on on condition then we have to return any random value at end.
// The main motive of recursion is to divide a big problem into  chunks and solve each chunk to solve the
// big actual problem.
//Recusrsion says a function calling it's self again and agin untill base case condition is satisfied.
//There are two ways to perform repititive tasks the iterative way and the recursive way.
//The iterative way is looping. if we want ti perform certain task n times we add that task into a function
// and that function will call it'self untill n number of times .

let prompt = require("prompt-sync")();
// let n = prompt("Enter a number");
// temp(n);
// function temp(a) {
//   console.log("Helo world");
//   temp(a);
// } // This code will give us error maximmum stack size exceeded because stack has limited size. or we can say
// stack overflow.

// let n1 = prompt("Enter a number");
// temp(n1);
// function temp(a) {
//   if (a == 0) return;
//   console.log("Helo world");
//   temp(a - 1);// here we can't run a-- because value s used before decremennt
// } // this code has a base case condition to stop it.
// for above code we have n time complexity.
let n = 5;
temp(1);
function temp(a) {
  if (a == n) return;
  process.stdout.write(a + " ");
  temp(a + 1);
}
