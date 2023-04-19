// Задание 1

// function mult(array) {
//     return Math.round(array.reduce((acc, curr) => acc * curr));
// };

// function sum(array) {
//     return Math.round(array.reduce((acc, curr) => acc + curr));
// };

// function getResult(array, callback) {
//     console.log(callback(array));
// };

// getResult([3, 4, 1, 9], mult);
// getResult([3, 4, 1, 9], sum);


// Задание 2 

// (первый вариант решения)


// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];

// function compareUser(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// }

// function sort(arr, compareFunction) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             const condition = compareFunction ? compareFunction(arr[i], arr[j]) > 0 : arr[i].toString() > arr[j].toString();
//             if (condition) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(users.sort(compareUser));


// Задание 2 

// (второй вариант решения)


// users.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// });

// console.log(users);


// Задание 3

// const firstArray = [1, '4', 9, 'two'];
// const secondArray = [1, '4', false, 9, 'two'];

// const reversArr = (array) => {
//     let reversed = array.reverse();
//     console.log(reversed);
//     return reversed;
// }

// const toNumber = (array) => {
//     array = array.map(str => {
//         return +str}).filter(function (value) {
//             return !Number.isNaN(value);
//         });

//         console.log(array);
//         return array;
// }

// const each = (array, cb) => {
//     cb(array);
// };

// each(firstArray, reversArr);
// each(secondArray, toNumber);


// Задание 4

// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         console.log(new Date() + ' Москва (стандартное время)');
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, deadline * 1000);
// }
// timer(30);


// Задание 5

// function calling() {
//     console.log('Звоню!')
// };

// function beeps(callback) {
//     setTimeout(() => {
//         console.log('Идут гудки...');
//         callback(talk);
//     }, 1000);
// };

// function talk() {
//     console.log('Разговор')
// };

// calling();
// beeps(talk);