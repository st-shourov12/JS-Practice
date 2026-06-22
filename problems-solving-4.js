
/* Problem 16: Count Object Properties  [Easy]
Description: Write a function countProperties(obj) that returns the number of properties in an object.
Example:
Input: {a: 1, b: 2, c: 3}  → Output: 3
Hint: Use Object.keys().length. */

 
 const countProperties = (obj) => {
    const arr = []
    for (const key in obj) {
        if (!Object.hasOwn(obj, key)) continue;
        
        const element = obj[key].length;
        arr.push(element)
        
    }
    console.log(arr.length);
 }
 
 
 
/* Problem 17: Merge Two Objects  [Easy]
Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
Example:
Input: {a:1}, {b:2}  → Output: {a:1, b:2}
Hint: Use the spread operator or Object.assign(). */

 
 const mergeObjects = (obj1, obj2) => {
    const a = {...obj1, ...obj2}
    console.log(a);
 }

//  alternative
 const mergeObjects2 = (obj1, obj2) => {
    const res = Object.assign(obj1, obj2);
    console.log(res);
 }


 
 
 
/* Problem 18: FizzBuzz  [Easy]
Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
Example:
Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
Hint: Check divisibility with the % operator in the right order. */

const fizzBuzz = (n) => {
    let x = [];
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 && index % 5 !== 0) {
             x.push('Fizz');
             
        }
         else if (index % 3 !== 0 && index % 5 === 0) {
            x.push('Buzz');
        }
         else if (index % 3 === 0 && index % 5 === 0) {
            x.push('FizzBuzz');
        } else {
           
             x.push(index);
        }
        
        
    }
    const res = x.join(',');
    console.log(res);
}


 
 
 
 
 
/* Problem 19: Invert an Object  [Easy]
Description: Write a function invertObject(obj) that swaps the keys and values of an object.
Example:
Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
Hint: Use Object.entries() and reduce(). */

const invertObject = (obj) => {
    const newObj = {};
    const entries = Object.entries(obj);
   
    

    for (const element of entries) {
        
            
            newObj[element[1]] = element[0]
        
    }

    console.log(newObj);
}


 

 
 
 
 
/* Problem 20: Find Duplicate Values in Array of Objects  [Medium]
Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
Example:
Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
Hint: Use a frequency map (object) to count occurrences. */

const findDuplicateNames = (arr) => {
    const values = [];
    for (const e of arr) {
        const v = Object.values(e);
        values.push(v[0])
    }
    console.log(values);

    const count = 0 ;
    
}

findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Ali'}])