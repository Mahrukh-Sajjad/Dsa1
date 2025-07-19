// Linked list is a linear data structure which stores data in non contineous location.
// linked list contains nodes and each node contains value and address of next node
// There are three types of linked list singly, doubly and circular.
// singly linked list has a value and next which has address of next node  and last node has null at it's next
// doubly linked list has previous and next pointer pointing towards previous and next node.
// circular linked list has no null pointer.
// browser tab and phone gallery are the real world implementation of linked list.
// to reach last node you have to traverse all the nodes vin between.

// implementation
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let obj = new Node(19);
console.log(obj);

// Adding a new node as first node
// the first node is called head if we give the address of first node at the next of new node
// then technically new node becomes the first node and head is shifted  to new node
// if there is no linked list exist then head is null now new node is considered as head and
// it points to nothing.

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  //   printLL() {
  //     for (let i = 0; i <= this.size; i++) {
  //       process.stdout.write(this.head.val + "->");
  //       this.head = this.head.next;
  //     }
  //     console.log(null);
  //   }
  insertAtLast(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  deleteAtFirst() {
    if (this.head == null) {
      console.log("Empty Linked list");
    }
    this.size--;
    this.head = this.head.next;
  }
  deleteAtLast() {
    if (this.head == null) {
      console.log("empty list");
    }
    this.size--;
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }
  insertAtIndex(val, index) {
    if (index < 0 || index > this.size) {
      console.log("Not Possible");
      return;
    }
    this.size++;
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("not possible");
      return;
    }
    if (this.head == null) {
      console.log("List is empty");
      return;
    }
    this.size--;
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  printLL() {
    if (this.head == null) {
      console.log("empty list");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "->");
      temp = temp.next;
    }
    console.log(null);
  }
}

let obj1 = new LinkedList();
obj1.insertAtFirst(10);
obj1.insertAtFirst(20);
obj1.insertAtFirst(30);
obj1.insertAtFirst(40);
obj1.insertAtFirst(50);
// obj1.printLL();
// obj1.insertAtLast(100);
// obj1.insertAtLast(101);
// obj1.insertAtLast(102);

// obj1.printLL();
// obj1.deleteAtFirst();
// obj1.printLL();
// obj1.deleteAtLast();
// obj1.printLL();
obj1.insertAtIndex(1000, 4);
obj1.printLL();
obj1.deleteAtIndex(2);
obj1.printLL();
