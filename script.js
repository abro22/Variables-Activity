
console.log ("hello")

// 1. Write an improved version of hello world that says
//    hello firstName lastName

// gave each variable a variable
const greeting = "Hello";
const firstName = "Autumn"; 
const lastName = "Brown";

console.log (greeting , firstName , lastName)

// string concatenation- uses plus 
console.log ("Hello " + firstName + " " + lastName)

//string interpolation
  console.log (`Hello ${firstName} ${lastName}`)


// 2. Display the sum of 5 + 10, using two variables: x and y.


const x = 5;
const y = 10;

console.log (x + y)

// 3. Create a variable called z, assign x + y to it, and log
// the result.

const z = x + y; 

console.log (z)

// 4.Write a program that takes a temperature in Celsius
// degrees, then logs it in Fahrenheit degrees. The conversion formula is [°F] =[°C] x 9/5 + 32.
// **
// log= what F would equal
// program = create a equation to see what F would equal
// First give C a value (let/const). Then write out the equation.
//give a fraction () when wrting an equation to render correctly

// let C = 10;
// let F = C * (9/5) + 32;

// console.log (F)

// 5. Look at the following code and try to predict the final
// values of its variables. Run the code too see if you were correct

    let a = 2;  
    console.log (a)

// subtracts 1 from 2
    a -= 1;
console.log (a)

// adds 4 to a answer (1)
a +=4

// adds 1 to what (a) is equal too
    a++; 

    // a=6
///--------------------

    let b = 8;
    b += 2;
    console.log (b)

    const c = a + b * b;
    console.log (c)

    const d = a * b + b;
    console.log (d)

    const e = a * (b + b)
    console.log (e)

    const f = a * b / a;
    console.log (f)

    const g = b / a * a;
    console.log (g)


// 6. Bonus: Swap the values of the 2 variables without creating any new variables:

let firstNumber = 4;
let secondNumber = 9;

firstNumber = firstNumber + secondNumber; //13
secondNumber = firstNumber-secondNumber; //4
firstNumber = firstNumber - secondNumber; //9
