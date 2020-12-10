// let a = 10;
// let b = 20;

// function add(a, b) {
//     console.log('Function Scope', a, b);
//     return a + b;
// }

// add(100, 200);
// add(1000, 2000);
// console.log('Global Scope', a, b);

// let x = 2;
// let add = function() {
//     let y = 1;
//     return x + y;
// };

// console.log(add());

function greeting(who) {
    console.log(sayHi(who));
    return "Bye, " + who;
}

function sayHi(who) {
    return "Hello! " + who;
}
console.log(greeting("Harry"));