console.log("Hello World!");
const name = "John";
console.log("My name is " + name);
console.log(`My name is ${name}`);

let x = -10;
console.assert(x > 10, "x should be 10");
const students = [  { name: 'Asha', country: 'Nepal', age: 20 },  
{ name: 'Rafi', country: 'Bangladesh', age: 22 },  
{ name: 'Eugene', country: 'Ghana', age: 30 }
];
console.table(students);


console.time('loop');

let total = 0;
for (let i = 0; i < 1000000; i++) {
  total += i;
}

console.timeEnd('loop');
console.log('total =', total);
