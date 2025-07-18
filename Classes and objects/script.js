// Object oriented programming system
// oops is a paradigm(procedure) based on object(real world entity)
// why we need oops
// object->collection of data(property) and behaviour.
// student -> age(property)
//    -> student 7 bjay uthta hai behaviuor.
// oops v/s functional programming

// function
// data(property) and behaiviour (method) are saparated. hard to manage
//oops
// collection of data and behaviour:object . easy to manage
// reusseability
// efficiency
// security
// oops 4 pillar(inheritance,abstraction,polymorphism,encapsulation)

// class and object

// object literal

let ravi = {
  name: "ravi",
  age: 22,
  getSurname() {
    return "sharma";
  },
};

console.log(ravi.getSurname());

// to make 1000 objects we will repeat the same code

// class act as a blueprint -> no real world entity -> no space occupied in memory
// it gives set of instructions to object and object needs to follow those instructions to exist.
// constructor -> constructor is a special type of method which initailze/create an object in memory.

// constructor function
let Animal = function (username, age, gender) {
  (this.name = username), (this.age = age), (this.gender = gender); // This is a current calling object
};
let obj = new Animal("ravi", 22, "M");
console.log(obj.age);
// Constructor funcion was used before es6 after es6 there was class and object.

class Student {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}
let amit = new Student("amit", 21);
let aman = new Student("aman", 20);

console.log(amit, aman);

// js is not an object oriented language it is prototype based language
// there is no class in javascript so we transfer properties from object to object like inheritance through prototype.

let obj2 = {
  name: "Ayesha",
  age: 22,
};

let obj3 = {
  name: "amina",
  age: 23,
};

obj2.__proto__ = obj3;
console.log(obj2);
