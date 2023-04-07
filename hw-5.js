// 1

// function min(a, b) {
//     if (a < b) {
//         return console.log(a);
//     } else {
//         return console.log(b);
//     }
// }
// min(8, 4)
// min(5, 9)
// min(6, 6)


// 2

// function num() {
//     let num = Number(prompt('Введите пожалуйста число'));
//     if (num % 2 === 0) {
//         String(alert(`Число ${num} чётное`));
//     } else {
//         String(alert(`Число ${num} нечётное`));
//     } 
// }
// num()


// 3
// 3.1

// function num(a) {
//     let num = Math.pow(a, 2);
//     console.log(num);
// }
// num(5)
// num(10)
// num(20)
// num(50)

// // 3.2

// function num(a) {
//     let num = Math.pow(a, 2);
//     return console.log(num);
// }
// num(5)
// num(10)
// num(20)
// num(50)


// 4

// const sayHi = function() {
//     let sayHi = Number(prompt('Сколько тебе лет?'));
//     if (sayHi < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (sayHi <= 12 || sayHi === 0) {
//         alert('Привет, друг!')
//     } else if (sayHi >= 13) {
//         alert('Добро пожаловать!')
//     } 
// }
// sayHi()


// 5

// function mult(a, b) {
//     let result = a * b;
//     if (isNaN(a) || isNaN(b)) {
//         return console.log('Одно или оба значения не являются числом');
//     } else if (Number(a) && Number(b)) {
//         return console.log(result);
//     }
// }
// mult(2, 4)
// mult(2, 5)
// mult(10, 2)
// mult('string', 2)
// mult(2, 'string')
// mult('string', 'string')


// function mult() {
//     let a = prompt('Введите первое число');
//     let b = prompt('Введите второе число');
//     let result = a * b;
//     if (isNaN(a) || isNaN(b)) {
//         return console.log('Одно или оба значения не являются числом');
//     } else if (Number(a) && Number(b)) {
//         return console.log(result);
//     }
// }
// mult()


// 6

// function cube() {
//     let n = prompt('Введите число');
//     if (isNaN(n)) {
//         return console.log('Переданный параметр не является числом');
//     } else if (Number(n)) {
//         return console.log(`${n} в кубе равняется ${Math.pow(n, 3)}`);
//     }
// }
// cube()


// 7

// Формула расчета периметра круга: C = 2 · π · r , где C это периметр, r – радиус, π – число пи.

// function getRectangleArea () {
//     return Math.PI * Math.pow(this.radius, 2);
// }
// function getRectanglePerimeter () {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 10,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }

// const circle2 = {
//     radius: 20,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// }

// console.log(`Площадь первой окружности равна ${circle1.getArea()}`);
// console.log(`Периметр первой окружности равен ${circle1.getPerimeter()}`);
// console.log(`Площадь второй окружности равна ${circle2.getArea()}`);
// console.log(`Периметр второй окружности равен ${circle2.getPerimeter()}`);


// 8

function gameMonthNumber() {
    let monthNumber = Number(prompt('Введите номер месяца'));
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        return alert(`Зима!`)
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return alert(`Весна!`)
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return alert(`Лето!`)
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return alert(`Осень!`)
    } else {
        return alert('Введите корректное число')
    }
}











