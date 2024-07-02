function helloName(uname){
    console.log(uname);
}

helloName("Penis");

let count = 5;

function counter(){
    return count++;
}

counter();
console.log(count);

let age = +prompt("How old are you?");

const birthday = () => {
    return age + 5;
}

console.log(`You will be ${birthday()} in 5 years`);