const fruits = ["Mango", "Lichi","Banana","Apple"] ;
const vegetables = ["Potato", "Ladies finger", "Chily", "Carrot"] ;
const numbers = [1,2,3,4,5,6,7,8]


// console.log(fruits); //[ 'Mango', 'Lichi', 'Banana', 'Apple' ]


// new keyword
const bike = new Array("Kawasaki", "R15")
// console.log(bike);

// array check
// console.log(Array.isArray(bike)); //true


// arrtostr
// console.log(`veg ${vegetables.toString()}`);

// at
// console.log(`At ${vegetables.at(2)}`); //At Chily

// join
// console.log(`join ${fruits.join(" + ")}`); //join Mango + Lichi + Banana + Apple


// push, pop for adding or remove element in array in last number
const push = numbers.push(9)
// console.log(numbers); // [1,2,3,4,5,6,7,8,9]

const pop = numbers.pop()
// console.log(numbers); // [1,2,3,4,5,6,7,8]


// unshift , shift for adding or remove element in array in first

const unshift =  numbers.unshift(0);
console.log(numbers); // [0,1,2,3,4,5,6,7,8]

const shift =  numbers.shift();
console.log(numbers); // [1,2,3,4,5,6,7,8]
