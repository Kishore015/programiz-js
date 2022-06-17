// Quadratic equations 
let root1, root2;

// take values
let a = 15;
let b =21;
let c = 0;


// discreminint
let dis = (b*b)-(4*a*c);

// quadratic equations
if(dis>0){
    root1 = (-b + (Math.sqrt(dis)))/(2*a)
    root2 = (-b - (Math.sqrt(dis)))/(2*a)
    console.log(`The roots for following eqaution is ${root1} and ${root2}`)
} 
else if(disc == 0){
    root1 = root2 = -b/(2*a)
    console.log(`The roots for following eqaution is ${root1} and ${root2}`)
}
else {
        let realPart = (-b/(2*a)).toFixed(2)
        let imagPart = (Math.sqrt(-dis)/(2*a)).toFixed(2)
        console.log(`The roots for following eqaution is ${realPart}+${imagPart}i and ${realPart}-${imagPart}i`)
}


//Program to Check if a number is Positive, Negative, or Zero
let number = -10;
if(number>0){
    console.log(`Given number is a positive number`, number)
}
else if(number == 0){
    console.log(`Given number is zero`, number)
}
else {
    console.log('Given number is a negative number', number)
}

// check if the number is positive, negative or zero
const another_number = 0;

if (another_number >= 0) {
    if (another_number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}

// Check Even or Odd
let checkNumber = 5;
if(checkNumber%2 == 0){
    console.log('Even Number',checkNumber)
}
else{
    console.log('Odd Number',checkNumber)
}

// Program to Find the Largest Among Three Numbers
const L_num1 = 20, L_num2 = 50, L_num3 = 51;
// if(L_num1 >= L_num2 && L_num1 >= L_num3){
//     console.log(`${L_num1} is larger than ${L_num2} and ${L_num3}`)
// } else if(L_num2 >= L_num3  && L_num2 >= L_num1) {
//     console.log(`${L_num2} is larger than ${L_num3} and ${L_num1}`)
// } else {
//     console.log(`${L_num3} is larger than ${L_num1} and ${L_num2}`)
// }

// shortcut

let Largest = Math.max(L_num1, L_num2, L_num3);
let Min = Math.min(L_num1, L_num2, L_num3)
console.log(`Largest number is ${Largest} and minimum number is ${Min}`)

// Program to check a number is prime or not
let user_input = 1;
let isPrime = true;

if(user_input <=0){
    console.log("Enter a positive number")
}

if(user_input >=1){
    if(user_input == 1){
        console.log('Given number is neither prime nor composite')
    } else{
        for(check = 2; check < user_input;check++){
            if(user_input%check == 0){
                isPrime = false;
                // console.log('Not a prime number')
                break;   
            }
        }
        if(isPrime){
            console.log("Prime Number")
        } else {
            console.log('Not a prime number')
        }
    }
}
