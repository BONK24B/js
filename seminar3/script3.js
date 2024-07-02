// Ex 1

let number1 = +prompt("Enter any number");
let number2 = +prompt("Enter second number");

function squareRoot(num1, num2){
    num1 = Number(Math.sqrt(num1));
    num2 = Number(Math.sqrt(num2));

    return num1 + num2;
}

alert(squareRoot(number1, number2));

// Ex 2

function findMinimum(num1, num2) {
    if (num1 > num2) {
        return num2;
    }
    else {
        return num1;
    }
}

console.log(findMinimum(number1, number2));