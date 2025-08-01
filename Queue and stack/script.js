// Queue works on fifo principal (first in first out).
// in operating system processes are scedule in form of a queue.
// when we insert an element in queue that's called enqueue, offer or add.
// removing elements from queue is dequeue ,poll or remove.
// in queue first element is called front and last element is called rear.

// class Queue {
//   constructor() {
//     this.items = [];
//     this.front = 0;
//     this.rear = 0;
//   }
//   offer(val) {
//     // this function is also called  insertAtLast
//     // this.items.push(val); //O(1)
//     this.items[this.rear] = val;
//     this.rear++;
//   }

//   insertAtFirst(val) {
//     this.front--;
//     this.items[this.front] = val;
//   }
//   deleteAtLast() {
//     this.rear--;
//     const data = this.items[this.rear];
//     delete this.items[this.rear];
//     return data;
//   }
//   poll() {
//     // this function is also call deleteAtFirst
//     if (this.isEmpty()) {
//       console.log("queue is empty");
//       return;
//     }
//     // this.items.shift(); // this method takes O(n) time complexity because first element
//     // // is removed so all the remaining elements will move towards left.
//     const data = this.items[this.front];
//     delete this.items[this.front]; //optional
//     this.front++;
//     return data;
//   }
//   isEmpty() {
//     // return this.items.length == 0;
//     return this.front == this.rear;
//   }
//   print() {
//     for (let i = this.front; i < this.rear; i++) {
//       process.stdout.write(this.items[i] + " ");
//     }
//   }
// }

// let obj = new Queue();
// obj.offer(10);
// obj.offer(20);
// obj.insertAtFirst(30);
// obj.insertAtFirst(40);
// obj.print();
// console.log();
// obj.poll();
// obj.deleteAtLast();
// obj.print();

// deque is a data structure which means double ended queue.in this datastaructure we can
// delete at last and insert at first as well.

// Stack works on lifo(last in first out) inserting element in stack is called push and removing
// element from stack is called pop. the element on top is called peak.

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

let obj1 = new Stack();
obj1.push(10);
obj1.push(20);
obj1.push(30);
obj1.push(40);
console.log(obj1.items);
console.log();
obj1.pop();
console.log(obj1.items);
