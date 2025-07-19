// Merge two sorted linked lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Algorithem
// Create a Dummy Node:

// Initialize a dummy node (e.g., dummy = new Node(-1)).

// This node helps simplify edge cases and keeps track of the head of the new list.

// Create a pointer temp and set it to the dummy node.

// Traverse Both Lists:

// Use a while loop to iterate as long as both list1 and list2 are not null.

// Compare Values:

// At each step, compare the current values of list1 and list2.

// If list1.val < list2.val, set temp.next = list1, and move list1 to list1.next.

// Otherwise, set temp.next = list2, and move list2 to list2.next.

// Move the Temp Pointer:

// After adding a node to the merged list, move temp to temp.next.

// Append Remaining Nodes:

// Once one of the lists becomes null, the other list may still have remaining nodes.

// Attach the remaining nodes by doing:

// js
// Copy
// Edit
// if (list1 == null) temp.next = list2;
// else temp.next = list1;
// Return Result:

// Return the merged list starting from dummy.next (since dummy was just a placeholder).

// code
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let temp = dummy;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  if (list1 == null) temp.next = list2;
  else temp.next = list1;
  return dummy.next;
};

// 876. Middle of the Linked List
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Steps:
// Initialize Two Pointers:

// Create two pointers: slow and fast.

// Set both pointers to the head of the linked list.

// Traverse the List:

// Move fast two steps at a time: fast = fast.next.next

// Move slow one step at a time: slow = slow.next

// Loop Condition:

// Continue looping while fast != null and fast.next != null:

// This ensures fast can safely move two steps forward without error.

// When Loop Ends:

// When fast reaches the end of the list (null) or just before it (fast.next == null),

// slow will be at the middle of the list.

// Return the Middle Node:

// Return the node where slow is pointing.
