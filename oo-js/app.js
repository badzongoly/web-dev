//import { randomImage, generateRandomImageSize  } from './picsum.js';

//const imgSize = generateRandomImageSize();
//const img2 = randomImage(imgSize);
//document.body.append(img2);


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    eyeColor: 'blue',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }

};

console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe
console.log(person.fullName()); // Output: John Doe

//create object using new keyword
const car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2020;

console.log(car.make); // Output: Toyota

console.log(this); // Output: Window object (in a browser)


//using call and bind
const person1 = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
};

console.log(person1.fullName.call(person2)); // Output: Jane Smith

const boundFullName = person1.fullName.bind(person2);
console.log(boundFullName()); // Output: Jane Smith


function Student(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}
const student1 = new Student('Nabin', 'Chitra', 20, 'blue');
console.log(student1.firstName); // Output: John

Student.nationality = 'American';
console.log(Student.nationality); // Output: American

Student.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(student1.fullName()); // Output: Nabin Chitra