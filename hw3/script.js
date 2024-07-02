// Ex 1

let cube = numb => Number(numb) * Number(numb) * Number(numb);

console.log(cube(3) + cube(2));

// Ex 2

// let userInput = +prompt("Enter your salary size");

// function taxationIsATheft(salary){
//     if (typeof salary != "number"){
//         alert("Wrong input");
//     }
//     else {
//         alert(`Your payment after taxes is ${salary * 0.87}`)
//     }
// }

// taxationIsATheft(userInput);

// Ex 3

// let number1 = +prompt("Enter first number");
// let number2 = +prompt("Enter second number");
// let number3 = +prompt("Enter third number");

// function maxOfThree(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3){
//         alert(`The greatest number is ${num1}`);
//     }
//     else if (num2 >= num1 && num2 >= num3){
//         alert(`The greatest number is ${num2}`);
//     }
//     else if (num3 >= num1 && num3 >= num2){
//         alert(`The greatest number is ${num3}`);
//     }
// }

// maxOfThree(number1, number2, number3);

// Ex 4

let inputNumber1 = +prompt("Enter any number");
let inputNumber2 = +prompt("Enter any number again");

let sum = function(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1;
}

let mult = function(num1, num2)  {
    return num1 * num2;
}

let div = function(num1, num2) {
    if (num2 === 0) {
        return "Division by 0 is prohibited";
    }
    else {
        return num1 / num2;
    }
}

console.log(`Sum of ${inputNumber1} and ${inputNumber2} is: ${sum(inputNumber1, inputNumber2)}`);
console.log(`Substraction of ${inputNumber1} and ${inputNumber2} is: ${sub(inputNumber1, inputNumber2)}`);
console.log(`Multiplication of ${inputNumber1} and ${inputNumber2} is: ${mult(inputNumber1, inputNumber2)}`);
console.log(`Division of ${inputNumber1} and ${inputNumber2} is: ${div(inputNumber1, inputNumber2)}`);