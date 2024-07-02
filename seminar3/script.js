// Ex 1

let uname = String(prompt("Enter your first name"));
let ulastName = String(prompt("Enter your last name"));
let age = +prompt("How old are you?");

function greet(firstName, lastName, age) {
    alert(`Hello, ${firstName} ${lastName}, your age is ${age}`);
}

greet(uname, ulastName, age);

// Ex 2
let num = +prompt("Enter any number");

function square(number) {
    return number * number;
}

alert(square(num));

// Ex 3

let uinput = +prompt("Enter any number to check if it is positive or negative");

function checkSign(number) {
    if (number < 0) {
        console.log("---");
    }
    else {
        console.log("+++");
    }
}

checkSign(uinput);