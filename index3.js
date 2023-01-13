// Write a program to swap two numbers without using third variable?
var a = 5;
var b = 10;

// output b=5; a=10;
a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
