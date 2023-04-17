// Задание 1

// let str = 'Hello, I am Dutch';
// console.log(str.toUpperCase());


// Задание 2

// function searchStart (arr, str) {
//     arr.forEach((item) => {
//         if (item.toLowerCase().startsWith(str.toLowerCase())) {
//             console.log(item);
//         }
//     })
// };

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []


// Задание 3

// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));


// Задание 4

// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));


// Задание 5

// const randomNumber = (a, b) => {
//     console.log(Math.random() * (a - b) + b);
// }
// randomNumber(1, 10);


// Задание 6

// const getRandomArrNumbers = (a) => {
//     array = [];
//     for (i = 0; i < Math.floor(a / 2); i++) {
//         array[i] = Math.floor(Math.random() * a);
//     }
//     return array;
// }
// getRandomArrNumbers(7);
// console.log(array);
// getRandomArrNumbers(12);
// console.log(array);


// Задание 7

// const randomNumber = (minValue, maxValue) => {
//     console.log(Math.round(Math.random() * (maxValue - minValue) + minValue));
// }
// randomNumber(15, 30);


// Задание 8

// console.log(Date());


// Задание 9

// let currentDate = new Date();
// console.log(currentDate);
// currentDate.setDate(currentDate.getDate() + 78);
// console.log(`Через 78 дней будет ${currentDate}`);


// Задание 10

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function getTime(date) {
//     let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] + ". Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//     return fullDate;
// }

// console.log(getTime(new Date()));


// Задание 11

let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function rememberWords() {
    alert(array = array.sort(() => Math.random() - 0.5));

    let firstAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondAnswer = prompt('Чему равнялся второй элемент массива?');

    if (firstAnswer.toLowerCase() == array[0].toLowerCase() && secondAnswer.toLowerCase() == array[array.length - 1].toLowerCase()) {
        alert('Поздравляю. Вы всё угадали!'); 
    } else if (firstAnswer.toLowerCase() == array[0].toLowerCase() || secondAnswer.toLowerCase() == array[array.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}


















