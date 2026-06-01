function greetings (name) {
  return console.log(`Hello ${name}`) 
} 

greetings(Shourov) 
greetings(Shuvro)


const sayHello = (name) => console.log(`Hello ${name}`)  

sayHello(Shuvro) 

function addition (a, b) {
  return console.log(a+b) 
} 
addition(7,8)

const add =(a, b) =>{console.log(a+b) } 

function subtraction (a, b) {
  if(a >= b) {
    return console.log(a - b) 
  } else {
    return console.log(b - a) 
  } 
} 

const sub = (a, b) =>{
  a >= b? console.log(a - b) : console.log(b - a) 
} 

subtraction(7,9);
sub(7,9)
