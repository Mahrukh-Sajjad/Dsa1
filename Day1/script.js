// Swapping the value of a and b by using third varibale.
let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);
// Swapping using mathematical calculation
let e = 1;
let f = 2;
e = e + f; //3
f = e - f; //1
e = e - f; //2
console.log(e, f);
//  swapping through destructuring assignment operator
let l = 40;
let m = 10;
[m, l] = [l, m];
console.log(l, m);

// We can't apply increment and decrement operators von constants

// Increment and decrement operators questions
let i = 11;
i = i++ + ++i;
console.log(i);

// Q2
let n = 11,
  o = 22,
  p;
p = n + o + n++ + o++ + ++n + ++o;
console.log("n= ", n);
console.log("o= ", o);
console.log("p= ", p);

// Q3
let q = 0;
q = q++ - --q + ++q - q--;
console.log("q=", q);

// Q4
let r = true;
r++;
console.log("r= ", r);

// Q5
let s = 1,
  j = 2,
  k = 3;
let t = s-- - j-- - k--;
console.log("s = ", s);
console.log("j = ", j);
console.log("k = ", k);
console.log(t);

// Q6
let u = 1,
  v = 2;
console.log(--v - ++u + ++v - --u);

// Q7
let w = 19,
  x = 29,
  y;
y = w-- - w++ + --x - ++x + --w - x-- + ++w - x++;
console.log("w =", w);
console.log("x =", x);
console.log("y =", y);

// syntax and logical errors code

// Q8
let z=11;
let num = --(z++);
console.log(num); // z++ becomes 12 which is a constant so pre decrement operator can't be applied to constants


// Q9
let m1=0,n1=0;
let p1= --m1* --n1* n1--*m1--;
console.log(p1);