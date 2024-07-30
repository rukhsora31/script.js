// #1
// for (let i = 0; i < 10; i++) {
//     console.log('hello');
// }


// #2
// let i = 0
// while (i < 5) {
//   console.log(i); 
//   i++ 
// }


// #3
// let i = 0
// do {
//     console.log('rhs');
//     i++
// } while (i - 10);


// #4
// function sayHello(name) {
//     console.log('hello ' + name);
// }
// sayHello('rhs')


// #5
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(10, 5)
// sum(15, 5)
// sum(20, 5)
// sum('rhs ', 16)


// #6
// const greet = function (name) {
//     console.log('how are you ' + name);
// }
// greet('rhs')


// // #7 arrow function (стрелочная функция)
// const hi = (a, b) =>  console.log(a + b);
// hi(5, 5)

// const plus = (a, b) => console.log(a + b);
// const minus = (a, b) => console.log(a - b);
// const division = ( a, b) => console.log(a / b);
// const multiplication = (a, b) => console.log(a * b);

// plus(2, 2)
// minus(2, 2)
// division(2, 2)
// multiplication(2, 2)

// const me = function(name, surname, age) {
//     console.log('Привет меня зовут '+ name + surname + 'мне '+ age + ' лет');
// }

// me('Рухсора ', 'Ахмаджанова', '16')  


const me = function(name, surname, age) {
    console.log(`hello my name is ${name} ${surname}, i am ${age} y.o`);
}
me('Ruxsora', 'Ahmadjanova', 16)