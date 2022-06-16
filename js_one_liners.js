// reverse a string

let firstName = "kishore";

document.write("The reverse of a string  is: ", firstName.split("").reverse().join("") + "<br/>")

let names = ['kishore', 'pavan', 'dolly', 'harry'];

document.write(names[0].split("") + '<br>')

// Loops in JS

for(let i=0; i<names.length;i++){
    let z = names[i];
    console.log(z)
   document.write(z + "<br>")
    
}

for (namer in names) {
    let x = names[namer] 
    document.write(x + '<br>')
}

let employees = {
    employeeName : 'Kishore',
    id : '007',
    salary : "can't disclose"
}

for (employee in employees){
    let y = employees[employee];
    document.write(y + "<br>")
}


// while loop

let loop_value =10;

while(loop_value<100){
    console.log(loop_value)
    loop_value++;

}


// check a number is palindrome or not
let input = 7887, temp = input, sum = 0, rem;
while(input!=0){
  rem = input%10;
  sum = sum*10+rem;
  input = parseInt(input/10);
}

if(temp==sum){
  console.log('palindrome')
}else{
  console.log('not a palindrome')
}
// missing array element
let a = [1,2,3,5];
let missing = [];

for (let i = 1; i <= 4; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
// Remove duplicate elements in a string and print output
    function removeDuplicateCharacters(string) {
      return string.split('').filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
        }).join('');
    }
  let output = removeDuplicateCharacters('anubhav');
  console.log(output)

