// 🔁 Algorithm to Reverse a Singly Linked List
// Initialize Pointers:

// Set prev to null (this will eventually become the new tail).

// Set cur to the head of the list.

// Traverse the List:

// While cur is not null:

// Store the next node: temp = cur.next

// Reverse the pointer: cur.next = prev

// Move prev forward: prev = cur

// Move cur forward: cur = temp

// Return the New Head:

// After the loop, prev will be pointing to the new head of the reversed list.

// Return prev.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur != null) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

// High-Level Algorithm: Remove Duplicates from Sorted Linked List
// Start from the head of the list:

// Initialize a pointer temp to the head node.

// Iterate while there are at least two nodes to compare:

// While temp is not null and temp.next is not null:

// Compare the value of the current node (temp.val) with the value of the next node (temp.next.val).

// If duplicate is found:

// If both values are equal:

// Skip the next node by pointing temp.next to temp.next.next (i.e., remove the duplicate node).

// If values are different:

// Move the temp pointer to the next node.

// Repeat until end of list.

// Return the updated head of the modified linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let temp = head;
  while (temp != null && temp.next != null) {
    if (temp.val == temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
//  */
// High-Level Algorithm: Detect Cycle in a Linked List
// Handle edge cases:

// If the list is empty (head == null) or has only one node (head.next == null), return false. A cycle is not possible.

// Initialize two pointers:

// slow and fast, both starting at the head of the list.

// Traverse the list using the two pointers:

// Move slow one step at a time (slow = slow.next).

// Move fast two steps at a time (fast = fast.next.next).

// Check for cycle:

// If at any point slow and fast meet, a cycle exists → return true.

// If the loop ends (i.e., fast reaches the end of the list):

// That means no cycle → return false.

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head==null || head.next==null) return false;
    let fast = head , slow=head;
     while(fast!=null && fast.next!=null){
        fast = fast.next.next;
        slow= slow.next;
        if (fast==slow) return true
     }
     return false;

    
};



