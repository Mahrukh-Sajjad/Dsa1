// Initialize

// Create an empty array ans to store results.

// Create an empty stack st to store elements for comparison.

// Iterate from right to left (starting at last index down to 0):

// Remove smaller or equal elements

// While st is not empty and the top element of st is ≤ arr[i], pop the stack.

// Set the next greater element

// If st is empty, set ans[i] = -1 (no greater element to the right).

// Otherwise, set ans[i] = top element of st.

// Push current element onto stack

// Push arr[i] onto st for use in future comparisons.

// Output the result array ans.
let arr = [6, 8, 0, 1, 3];
let ans = [];
let st = [];
for (let i = arr.length - 1; i >= 0; i--) {
  while (st.length != 0 && st[st.length - 1] <= arr[i]) {
    st.pop();
  }
  if (st.length == 0) ans[i] = -1;
  else ans[i] = st[st.length - 1];
  st.push(arr[i]);
}
console.log(ans);
