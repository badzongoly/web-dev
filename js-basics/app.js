console.log("Hello World!");
const name = "John";
console.log("My name is " + name);
console.log(`My name is ${name}`);


// console.assert() is used to test if a condition is true. If the condition is false, 
// it will log an error message to the console.
let x = -10;
console.assert(x > 10, "x should be 10");


//console table is used to display data in a tabular format in the console. 
// It can be used to display arrays, objects, and other data structures in a more readable way.
const students = [  { name: 'Asha', country: 'Nepal', age: 20 },  
{ name: 'Rafi', country: 'Bangladesh', age: 22 },  
{ name: 'Eugene', country: 'Ghana', age: 30 }
];
console.table(students);


// console.time() and console.timeEnd() are used to measure the time taken by a block of code to execute.
console.time('loop');

let total = 0;
for (let i = 0; i < 1000000; i++) {
  total += i;
}

console.timeEnd('loop');
console.log('total =', total);

//Boolean data type
let [a, b] = [1, "1"];
console.log(a == b); // true because == checks for value only
console.log(a === b); // false because === checks for both value and type, while == only checks for value.
console.log(a != b); // false because != checks for value only
console.log(a !== b); // true because !== checks for both value and type, while != only checks for value.
console.log(a > b); // false because 1 is not greater than "1"
console.log(a < b); // false because 1 is not less than "1"

//simple tip calculator
const billAmount = 100;
const tipPercentage = 10;
const tipAmount = (billAmount * tipPercentage) / 100;
const totalAmount = Math.round(billAmount + tipAmount);
console.log(`The tip amount is $${tipAmount}`);
console.log(`The total amount is $${totalAmount}`);

// string literals
const fullName = "John Doe";
const country = "USA";

console.log(`My name is ${fullName} and I live in ${country}.`);


//useful string methods
const email = "student@neilsbrock.dk";
console.log(email.includes("@")); // true
console.log(email.endsWith(".com")); // false
console.log(email.startsWith("student")); // true


//switch statement
const selectedOption = 2;
switch (selectedOption) {
  case 1:
    console.log("You selected Basic package");
    break;
  case 2:
    console.log("You selected Standard package"); 
    break;
  case 3:
    console.log("You selected Premium package");    
    break;
  default:
    console.log("Invalid option selected");
}

//loops for iterating over arrays
const skills = ["HTML", "CSS", "JavaScript", "React"];
for (const skill of skills) {
    console.log(skill);
}

//currency converter method
function toDKK(amount) {    
    const exchangeRate = 7.4; // Example exchange rate
    return amount * exchangeRate;
}
console.log(toDKK(100)); // Convert 100 Eur to DKK

//Arrow function
const toEur = (amount) => {
    const exchangeRate = 0.14; // Example exchange rate
    return amount * exchangeRate;
}
console.log(toEur(100)); // Convert 100 DKK to Eur


/*
A profile object with name, country, age, and skills.
makeSummary(profile) which uppercases skills using map, 
checks length with if/else, and returns a string.
Logs the final summary.
*/
const profile = {
  name: "Ava",
  country: "USA",
  age: 24,
  skills: ["html", "css", "javascript"],
};

function makeSummary(profileData) {
  const upperSkills = profileData.skills.map((skill) => skill.toUpperCase());
  const progressMessage =
    profileData.skills.length >= 3 ? "Good progress" : "Keep going";

  return `${profileData.name} (${profileData.age}) from ${profileData.country} 
  has skills: ${upperSkills.join( ", " )}. ${progressMessage}`;
}

const summary = makeSummary(profile);
console.log(summary);


const note = document.querySelector("#note");
document.querySelector("#showNote").addEventListener("click", () => { 
  note.classList.toggle("highlight");
});

console.log(note.outerHTML);
