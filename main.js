let x = 5; // x holds the value 5
x = 10; // Now x holds a new value 10

let num = 42; // num holds value 42
const PI = 3.14; // pi is constant and holds 3.14 number

let name = "John"; // string
let greeting = "Hello, world!"; // string

// Boolean

let isTrue = true;
let isFalse = false;

// undefined

let notDefined; //All these data types are built upon the fundamental object type, but they come with additional functionality and specific use cases.
console.log(notDefined); // undefined

// null

let emptyValue = null;

// Symbol

let sym = Symbol("description");

// bitint

let bigIntNumber = 1234567890123456789012345678901234567890n;

// object

let person = {
  name: "Alice",
  age: 30,
  favColor: "red",
};

// array

let students = ["nitesh", "farrukh", "aftab", "qazi farrukh"];

// array of objects

const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Emily", lastName: "Johnson" },
];

// Example usage
console.log(people);

// alert()  //only work in browser
// prompt() //only work in browser
// console.log() //works in both node and browser
console.log("Hello, World!");
let number = 42;
console.log("The number is:", number);

console.log(typeof NaN); // Outputs: 'number'

let result3 = "hello" * 2; // NaN
console.log(result3); // Outputs: NaN

let sum = 5 + 3; // 8
console.log(sum); // Output: 8

let difference = 5 - 3; // 2
console.log(difference); // Output: 2

let product = 5 * 3; // 15
console.log(product); // Output: 15

let quotient = 6 / 3; // 2
console.log(quotient); // Output: 2

let remainder = 5 % 2; // 1
console.log(remainder); // Output: 1

let power = 2 ** 3; // 8
console.log(power); // Output: 8

// Variables for demonstration
let a = true;
let b = false;
let c = true;

// Logical AND (&&)
const andResult = a && b; // false because b is false

// Logical OR (||)
const orResult = a || b; // true because a is true

// Logical NOT (!)
const notResult = !a; // false because a is true

// Output results
console.log("Logical AND (a && b):", andResult); // Output: false
console.log("Logical OR (a || b):", orResult); // Output: true
console.log("Logical NOT (!a):", notResult); // Output: false

// Initial value for demonstration
a = 10;

// Assignment (=)
a = 5; // Assigns the value 5 to a
console.log("After assignment (a = 5):", a); // Output: 5

// Addition Assignment (+=)
a += 3; // Equivalent to a = a + 3
console.log("After addition assignment (a += 3):", a); // Output: 8

// Subtraction Assignment (-=)
a -= 2; // Equivalent to a = a - 2
console.log("After subtraction assignment (a -= 2):", a); // Output: 6

// Multiplication Assignment (*=)
a *= 4; // Equivalent to a = a * 4
console.log("After multiplication assignment (a *= 4):", a); // Output: 24

// Division Assignment (/=)
a /= 2; // Equivalent to a = a / 2
console.log("After division assignment (a /= 2):", a); // Output: 12

// Modulus Assignment (%=)
a %= 5; // Equivalent to a = a % 5
console.log("After modulus assignment (a %= 5):", a); // Output: 2

// Example values
num = 5;
let str = "5";
let otherNum = 6;

// Equal to (==)
const equalToResult = num == str; // true because == does type coercion
console.log("Equal to (num == str):", equalToResult); // Output: true

// Strict Equal to (===)
const strictEqualToResult = num === str; // false because === does not do type coercion
console.log("Strict Equal to (num === str):", strictEqualToResult); // Output: false

// Not equal to (!=)
const notEqualToResult = num != "6"; // true because '6' is not equal to 5
console.log("Not equal to (num != '6'):", notEqualToResult); // Output: true

// Strict Not Equal to (!==)
const strictNotEqualToResult = num !== str; // true because 5 and '5' are different types
console.log("Strict Not Equal to (num !== str):", strictNotEqualToResult); // Output: true

// Greater than (>)
const greaterThanResult = num > 3; // true because 5 is greater than 3
console.log("Greater than (num > 3):", greaterThanResult); // Output: true

// Less than (<)
const lessThanResult = num < 3; // false because 5 is not less than 3
console.log("Less than (num < 3):", lessThanResult); // Output: false

// Greater than or equal to (>=)
const greaterThanOrEqualToResult = num >= 5; // true because 5 is equal to 5
console.log("Greater than or equal to (num >= 5):", greaterThanOrEqualToResult); // Output: true

// Less than or equal to (<=)
const lessThanOrEqualToResult = num <= otherNum; // true because 5 is less than or equal to 6
console.log(
  "Less than or equal to (num <= otherNum):",
  lessThanOrEqualToResult
); // Output: true

a = 5;

// Increment (++)
a++; // Increments a by 1, so a becomes 6
console.log("After increment (a++):", a); // Output: 6

// Decrement (--)
a--; // Decrements a by 1, so a becomes 5 again
console.log("After decrement (a--):", a); // Output: 5

a = 6; // Reset value of a
let preDecrementResult = --a; // First decrement a, then use the value
console.log("Prefix Decrement (--a):", preDecrementResult); // Output: 5
console.log("Value of a after prefix decrement:", a); // Output: 5

a = 5; // Reset value of a
let preIncrementResult = ++a; // First increment a, then use the value
console.log("Prefix Increment (++a):", preIncrementResult); // Output: 6
console.log("Value of a after prefix increment:", a); // Output: 6
