// for (let i = 0; i <= 10; i++) {
//     console.log(i);

// }

// for (let i = 2; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log("Even numbers : ", i);

//     }

// }


// i = 5
// while (i >= 1) {
//     console.log(i);
//     i--

// }


// let i = 1
// do {
//     console.log(i);
//     i++
// } while (i <= 5);


// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue
//     }
//     console.log(i);

// }


// for (let i = 1; i <= 10; i++) {
//     if (i === 7) {
//         break
//     }
//     console.log(i);

// }


// function showAge(age) {
//     console.log("My age is " + age);

// }
// showAge(21)


// function multiply(a, b) {
//     return a * b
// }
// let result = multiply(4, 6)
// console.log(result);


// const square = function (num) {
//     return num * num
// }
// console.log(num(5));


// let cube = (num) => {
//     return num ** 3
// }
// console.log(cube(3));


// function greet(name = "Guest") {
//     console.log("Welcome ", name);

// }
// greet("Saad")
// greet()


// function calculate(a, b, callback) {

//     callback(a, b)
// }

// function add(a, b) {
//     console.log(a + b);

// }
// calculate(10, 5, add)


let x = 10;

function test() {
    let y = 20;
    console.log("Output : ", x + y);
}

test();
console.log("Valur of x : " , x);