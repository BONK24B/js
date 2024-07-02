// Ex 1

function dayOfTheWeek(num) {
    if (Number(num) > 7 || Number(num) < 1){
        alert("Wrong input");
    }
    else {
        if (Number(num) === 1) {
            alert("Понедельник");
        }
        else if (Number(num) === 2) {
            alert("Вторник");
        }
        else if (Number(num) === 3) {
            alert("Среда");
        }
        else if (Number(num) === 4) {
            alert("Четверг");
        }
        else if (Number(num) === 5) {
            alert("Пятница");
        }
        else if (Number(num) === 6) {
            alert("Суббота");
        }
        else{
            alert("Воскресенье");
        }
    }
}

dayOfTheWeek(2);

// Ex 2

let hour = +prompt("What hour is it?");
let uname = prompt("What is your name?");

function greet(hour) {
    if (hour >= 0 && hour <= 6) {
        alert(`Good night ${uname}`);
    }
    else if (hour > 6 && hour <= 12) {
        alert(`Good morning ${uname}`);
    }
    else if (hour > 12 && hour <= 18){
        alert(`Good day ${uname}`);
    }
    else if (hour > 18 && hour <= 23){
        alert(`Good evening ${uname}`);
    }
    else {
        alert("Wrong input");
    }
}

greet(hour)