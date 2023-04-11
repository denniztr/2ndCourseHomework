// Задание 1

// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 0) break;   
//     console.log(numbers[i]);
// }

// Задание 2

// const num = [1, 5, 4, 10, 0, 3];
// console.log(num.indexOf(4));

// Задание 3

// const num = [1, 3, 5, 10, 20];
// console.log(num.join(' '));

// Задание 4

// let arr = [];
// for (i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (j = 0; j < 3; j++) { 
//         arr[i].push(1);
//     }
// }
// console.log(arr);

// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);

// Задание 7  

// const arr = [9, 8, 7, 6, 5];
// let answer = Number(prompt('Введите число'));
// if (arr.includes(answer)) {
//     console.log('Такое число есть в массиве');
// } else {
//     console.log('Такого числа в массиве нет');
// }

// Задание 8

// let string = 'abcdef';
// console.log(string);
// const arr = Array.from(string);
// console.log(arr.reverse());
// console.log(arr.join(''));

// Задание 9

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(arr);

// const array = [...arr[0], ...arr[1]];
// console.log(array);

// Задание 10

// const array = [2, 4, 6, 8, 10];
// for (let i = -1; i < array.length - 1; i++) {
//     console.log(array[i + 1] ** 2);
// }

// Задание 11

// const getNum = () => {
//     let amount = array.map(item => Math.pow(item, 2));
//     return amount;
// }
// console.log(getNum(array = [2, 4, 6, 8, 10]));

// Задание 12

// const getLengthWords = (words) => {
//     const arr = [];
//     for (let word of words) {
//         arr.push(word.length);
//     }
//     return arr;
// }
// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 13

// const getNumbers = () => {
//     let numbers = array.filter(item => item < 0);
//     return numbers;
// }
// console.log(getNumbers(array = [1, -2, 3, -4, -5, 6, 10, -15]));