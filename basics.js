// print hello world in console
console.log('hello world');

// print variable value in console 
const x =5;
console.log(x)

// print hello world with alert() method
// alert('Hello Kishore');

// print hello world in html document
document.write('Hello, World...!')


// Arithmetic operations in JS

const a = 10;
const b =20;

console.log("Addition of 2 numbers is " + (a+b));
console.log("Subtraction of 2 numbers is " + (a-b));
console.log("Multiplication of 2 numbers is " + (a*b));
console.log(`Division of 2 numbers is ${(a/b)}`);

// Arithmetic operations using user input

const result = document.getElementById('result')
let res;
// const calculator = (e) => {
//     e.preventDefault();
//     const num1 = parseInt(document.getElementById('first-value').value);
//     const num2 = parseInt(document.getElementById('second-value').value);
  
//     console.log(typeof num1, num1);
//     console.log(typeof num2, num2);
//     const add = () => {
//         res = num1 + num2;
//         result.textContent = `Addition of 2 numbers is ${res}`;
//     }
   
//     const mul = () => {
//         res = num1 * num2;
//         result.textContent = `Multiplication of 2 numbers is ${res}`;
//     }
//     const sub = () => {
//         res = num1 - num2;
//         result.textContent = `Subtraction of 2 numbers is ${res}`;
//     }
//     const div = () => {
//         res = num1 / num2;
//         result.textContent = `Division of 2 numbers is ${res}`;
//     }
  
//     sub();
//     mul();
//     div();
//     add();
// }

// form.addEventListener('click', calculator);

const form = document.getElementById('form');

const para = document.getElementById('para')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = parseInt(document.getElementById('num').value)
    console.log(num)
    res = Math.sqrt(num);
    console.log(res)
    para.innerHTML = `Root of given number is ${res}`;

    

});

let var1 = 10; // a = 10

let var2 = 20; // b =20

console.log("Before Swapping " + var1 + "," +var2)
let temp = var1; // temp = 10

var1=var2; // var1 = 20

var2 =temp; // var2 = 10

console.log(`After swapping ${var1}, ${var2}`)

// Using ES6 destructuring

let val1 = 30;
let val2 = 40;

// using destructuring assignment
[val1, val2] = [val2,val1]

console.log(val1 + "," + val2)

// Swapping numbers using arithmetic operators

let value1 = 100;
let value2 = 33;

value1 = value1 + value2; // 133
value2 = value1-value2;   // 100
value1 = value1-value2;   // 33

// swapping elements using bitwise XOR operator example
let i = 12; 
let  me = 25; 

i = i ^ me; 
console.log(i)
me = i ^ me;
console.log("Swapped value of me:" + me)
i = i ^ me; 
console.log("Swapped value od i:" + i)

// converting km into mts
const km = 5;
const mts = 1000 * km;
console.log(mts + " mts")

// converting mts into km

const meters = 1200;
const kilometer = meters/1000;
console.log("Given meters is "+ meters + " it is equal to " +kilometer + " kms")


/*
    ================== CONVERT CELSIUS INTO FARHENHEIT================
    fahrenheit = (celsiuis * (9//5)) + 32;
*/

const celsius = 35.8;
let factor;
factor  = 9/5;
const fahrenheit = (celsius * factor) + 32;

console.log(`Given celsius temparature is ${celsius}C and it is converted into ${fahrenheit}F`);


/*
    ================== CONVERT FARHENHEIT INTO CELSIUS  ================
    fahrenheit = (celsiuis * 1.8) + 32;
    celsius = F-32 * (5/9)
*/
const F = 96.44;
factor = 5/9;
const cel = (F-32) * factor;

console.log(`Given fahrenheit temparature is  ${F}F  and it is converted into ${cel}C`);

// working with const keyword
const xyz = 30;
{
    const xyz = 40;
    console.log(xyz); // 40
}
console.log(xyz); // 30

const arr = [1,2,3,4,5];
arr[5] = 6; // added new element into the array
arr[4] = 4;  // modified element value in array
console.log(arr);

// passing function to console
function printMessage(){
    return "Hello Kishore"
}
console.log(printMessage())