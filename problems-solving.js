
// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

const swapVar = (a,b) =>  {
    const [xa,xb] = [b, a];
    console.log(`a = ${xa}, b = ${xb}`); 
}

 
 
// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

const isEven = (x) => {
    const result = x % 2 === 0 ? "true" : "false" ; 
    console.log(result);
}
 
 
 
// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

const largest = (a,b,c) => {
    const res = Math.max(a,b,c);
    console.log(res);
}


 
// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

 
const toFahrenheit = (c) => {
    const f = (c * 9/5) + 32 ;
    console.log(f);
} 


// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

const checkSign = (n) => {
    if (n > 0) {
        console.log('positive'); 
    } else if(n < 0) {
        console.log('negative');
    } else {
        console.log('zero');
    }
}




 
// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

const reverseString = (str) => {
    const res = str.split('').reverse().join('')
    console.log(res);
}



 
 
 
 
 
// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

 const countVowels = (str) => {
    const res = str.split('')
    
    let count = 0 ;
    for (const r of res) {
        if(r === "a" || r === "e" || r === "i" || r === "o" || r === "u"){
             count = count + 1 ;
        } 
         
    }
    console.log(count);
 }


 
 
 
 
 
// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

const isPalindrome = (str) => {
    const palindrome = str.split('').reverse().join('');

    const res = palindrome === str ? "true" : "false"
    console.log(res);
}

 
 
 
 
// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

 
const titleCase = (str) =>  {
    const arr = str.split(" ")
    const res = arr.map(x => {
        const y = x.split("");
        y[0] = y[0].toUpperCase();
       
        const z = y.join("")
        return z
    })
    
    console.log(res.join(" "));
}


 
 
 
 
// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

function countChar(str, char) {
    const arr = str.split("")

    let count = 0;
    for (const i of arr) {
        if (i === char) {
            count++
        }
    }
    console.log(count);
}

countChar("banana", "a")