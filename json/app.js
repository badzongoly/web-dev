myText = '{"name": "John","age": 30, "city": "New York"}';
myObj = JSON.parse(myText);
console.log(myObj.name);


myJSON = JSON.stringify(myObj);
console.log(myJSON);

function myDisplay(some) {
    document.getElementById("demo").innerHTML = some;
}

function myFirstFunction() {
    myDisplay("Hello");
}

function mySecondFunction() {
    myDisplay("Goodbye");
}

//A function to calculate a sum of two numbers
function mySum(a, b) {
    return a + b;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}


//setTimeout(myFirstFunction, 3000, "I love JavaScript");
//myFirstFunction();
//mySecondFunction();

let result = mySum(5, 10);
myDisplay(result);

myCalculator(5, 10, myDisplay);


let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    myResolve("OK");
    myReject("Error");
});

myPromise.then(
    function(value) {myDisplay(value);},
    function(error) {myDisplay(error);}
);  


