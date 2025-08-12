// Reverse a queue
let queue = [1, 2, 3, 4, 5];
// let st = [];
// while (queue.length > 0) {
//   st.push(queue.shift());
// }
// while (st.length > 0) {
//   queue.push(st.pop());
// }
// console.log(queue);

// Now solving this question using recursion

function solve(q) {
  if (q.length == 0) return;
  let temp = q.shift();
  solve(q);
  q.push(temp);
}
solve(queue);
console.log(queue);

// Use a Stack (st)

// Think of the stack like a box where you put opening brackets on top and remove them when you find their matching closing bracket.

// Loop through each character of the string (s)

// If it’s an opening bracket → push it onto the stack and immediately go to the next character (continue skips the closing checks for this round).

// If it’s a closing bracket:

// Check if the stack is empty → if yes, invalid (because there’s nothing to match it with).

// If the top of the stack matches the correct opening bracket → pop it from the stack (remove the match).

// Otherwise → mark invalid (isFlag = false) and stop checking (break).

// After the loop ends

// If the stack still has elements → invalid (some opening brackets never got closed).

// If everything matched and stack is empty → return true.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let st = [];
  let isFlag = true;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch == "(" || ch == "{" || ch == "[") {
      st.push(ch);
      continue;
    }
    if (st.length == 0) return false;
    if (ch == ")") {
      if (st[st.length - 1] == "(") st.pop();
      else {
        isFlag = false;
        break;
      }
    }
    if (ch == "}") {
      if (st[st.length - 1] == "{") st.pop();
      else {
        isFlag = false;
        break;
      }
    }
    if (ch == "]") {
      if (st[st.length - 1] == "[") st.pop();
      else {
        isFlag = false;
        break;
      }
    }
  }
  if (st.length != 0) return false;
  return isFlag;
};
