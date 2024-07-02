// Ex 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++){
    if (i === 0) {
        console.log(`${i} is zero`);
    }
    else if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}

// Ex 2

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
const arr = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] != 4 && array[i] != 5){
        arr.push(array[i]);
    }
}

console.log(arr);

// Ex 3

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const numbers = [];

fillArray(numbers);
console.log(numbers);
console.log(findMinimum(numbers));

if (numbers.indexOf(3) >= 0){
    console.log("There is 3 in this array");
}
else {
    console.log("3 is nowhere to be found");
}

function fillArray(array) {
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
}

function findMinimum(array) {
    let minNumber = Infinity;

    for (let i = 0; i < array.length; i++){
        if (array[i] <= minNumber){
            minNumber = array[i];
        }
    }

    return minNumber;
}
