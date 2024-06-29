let age = prompt("Enter your age: ")
let uname = prompt("Enter your name: ");

if (age < 0){
    alert("Invalid value");
}
else if (age == 1){
    alert("Your age is one year old")
}
else if (age >= 2 && age <= 4){
    alert("You're a toddler");
}
else {
    alert(`Your age is ${age}`);
}

alert(`Wlecome to the site, ${uname}`);