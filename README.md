# Day 16

## Type Casting

In JavaScript, `typecasting` (or `type conversion`) refers to the process of converting a value from one data type to another. JavaScript is a loosely typed language, meaning that variables can hold values of any type and types can be implicitly or explicitly converted.

### Implicit Type Conversion

JavaScript often performs implicit type conversions automatically. This is also known as type coercion.

```js
let num = 5;
let str = "The number is " + num; // Implicitly converts num to string
console.log(str); // Output: "The number is 5"

let str = "10";
let result = str * 2; // Implicitly converts str to number
console.log(result); // Output: 20

let value = "Hello";
if (value) {
  console.log("This is true"); // "Hello" is truthy
}
```

### Explicit Type Conversion

Explicit type conversion is when you manually convert values to a specific type using built-in functions.

#### Type Conversion Functions

JavaScript provides several functions for converting values:

`String(value)`: Converts value to a string.

`Number(value)`: Converts value to a number.

`Boolean(value)`: Converts value to a boolean.

```js
let num = 123;
let str = String(num); // Converts number to string
console.log(str); // Output: "123"

let str = "123";
let num = Number(str); // Converts string to number
console.log(num); // Output: 123

let intVal = parseInt("123"); // Converts string to integer
let floatVal = parseFloat("123.45"); // Converts string to floating-point number

let str = "Hello";
let bool = Boolean(str); // Converts string to boolean
console.log(bool); // Output: true
```

## Truthy Values

A value is considered `"truthy"` if it evaluates to true in a boolean context.

> Almost all values are truthy, except for those that are explicitly falsy.

## Falsy Values

A value is considered "falsy" if it evaluates to false in a boolean context. JavaScript has exactly seven falsy values.

### Values

1. `false`: The boolean value false.

2. `0`: The number zero. `-0`: The negative zero (treated as equal to 0).

3. `0n`: The BigInt zero.

4. `"" (empty string)`: A string with no characters.

5. `null`: Represents the intentional absence of any object value.

6. `undefined`: Represents a variable that has been declared but not assigned a value.

7. `NaN`: Stands for `"Not-a-Number"`, representing a computation that does not yield a valid number.

## Method

Function defined inside object is known as method.

```js
const person = {
  name: "John",
  age: 19,
  //  defining method
  greet: function () {
    console.log("Hello");
  },
};

// method calling

person.greet();
```

## Higher Order Functions

In JavaScript, a `higher-order function` is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

Higher-order functions are a key concept in functional programming and are used extensively in JavaScript for tasks such as manipulating arrays, handling asynchronous operations, and creating more abstract and reusable code.

### FUNCTIONS AS ARGUMENTS (Callback functions)

> In JavaScript, a callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are fundamental in JavaScript and are commonly used for handling asynchronous operations, such as responding to events, making network requests, or working with timers.

```js
function applyOperation(value, func) {
  let answer = func(value);
  return answer;
}

function square(num) {
  return num ** 2;
}

function double(num) {
  return num * 2;
}

console.log(applyOperation(5, double)); // Output: 10
console.log(applyOperation(5, square)); // Output: 25
```

### RETURNING FUNCTIONS

```js
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Alice")); // Output: "Hello, Alice!"
console.log(sayHi("Bob")); // Output: "Hi, Bob!"
```

## Error

An error generally refers to an issue that occurs during the execution of a program which typically indicates a serious problem that cannot be handled by the program itself. Errors often represent fundamental problems that prevent the program from continuing its normal execution.

## Exception

An exception is a specific kind of error that occurs during the execution of a program and can be handled by the program itself using mechanisms provided by the programming language. Exceptions represent conditions that a program can potentially recover from.

> Errors indicate unrecoverable system issues beyond program control. In contrast, exceptions represent unexpected events within the program that can often be handled gracefully.

JavaScript uses the `try`, `catch`, `finally`, and `throw` statements to handle exceptions.

```js
try {
  // Code that might throw an exception
  let result = someFunction(); // This function might throw an exception
} catch (error) {
  // Handling the exception
  console.error("An error occurred:", error);
} finally {
  // Code that will always execute, regardless of whether an exception occurred
  console.log("Cleanup or finalization code.");
}
```

## Arrow function

Arrow functions are a feature introduced in `ECMAScript 6 (ES6)` that provide a concise syntax for writing functions in JavaScript. They are often used to make function expressions more readable and to handle some specific cases involving the `this` keyword.

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5

// Implicit Return

const square = (x) => x * x;

console.log(square(4)); // Output: 16
```

## Some more Array Methods

### 1. `forEach`

Executes a provided function once for each array element.

```js
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num));
```

### 2. `map`

Creates a new array with the results of calling a provided function on every element.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### 3. `filter`

Creates a new array with all elements that pass the test implemented by the provided function.

```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

### 4. `find`

Returns the first element in the array that satisfies the provided testing function. If no elements satisfy the function, undefined is returned.

```js
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find((num) => num > 3);
console.log(found); // Output: 4
```

### 5. `some`

Tests whether at least one element in the array passes the test implemented by the provided function. Returns `true` if at least one element passes; otherwise, returns `false`.

```js
const numbers = [1, 2, 3, 4];
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // Output: false
```

### 6. `every`

Tests whether all elements in the array pass the test implemented by the provided function. Returns true if all elements pass; otherwise, returns false.

```js
const numbers = [1, 2, 3, 4];
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true
```

### 7. `reduce`

Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 10
```

## Newer JavaScript Features

### 1. Spread Operator

The spread operator is used to expand an iterable (like an array or object) into individual elements.

```js
const numbers = [1, 2, 3];
const moreNumbers = [0, ...numbers, 4];
console.log(moreNumbers); // Output: [0, 1, 2, 3, 4]

Math.max(...moreNumbers);

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };
console.log(updatedPerson); // Output: { name: 'Alice', age: 26 }
```

### 2. Rest params

The rest operator collects multiple elements into a single array or object.

> It looks like spread but it's not

> In JavaScript, the `arguments` object is an array-like object available within all `non-arrow` functions that contains the values of the arguments passed to that function. It provides a way to access and manipulate the arguments of a function dynamically, especially when you don’t know the number of arguments ahead of time.

```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### The difference between rest parameters and the arguments object

There are three main differences between rest parameters and the arguments object:

1. The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.

2. In a `non-strict` function with simple parameters, the arguments object syncs its indices with the values of parameters. The rest parameter array never updates its value when the named parameters are re-assigned.

3. The rest parameter bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam. The arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.

### 3. Destructuring

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

```js
const [a, b, c] = [1, 2, 3];
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

const person = { name: "Alice", age: 25, city: "Wonderland" };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

const values = [10, 20, 30, 40];
const [, , third, fourth] = values;

console.log(third); // Output: 30
console.log(fourth); // Output: 40

const numbers = [1, 2, 3, 4, 5];

// Destructure first two elements and gather the rest
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

## `BOM` and `DOM`

BOM `(Browser Object Model)` and DOM `(Document Object Model)` are two key concepts in web development that interact with the web browser environment and the web page content. They serve different purposes but are closely related in the context of web programming.

## BOM (Browser Object Model)

The BOM provides the objects and methods for interacting with the web browser itself. It includes functionality for handling the browser window, history, navigation, and other browser-specific tasks.

### 1. `window` Object

The `window` object represents the browser window and is the top-level object in the BOM hierarchy. It contains methods for managing the browser environment and interacting with the document.

#### Methods

- `alert(message)`: Displays an alert dialog with a message.

- `confirm(message)`: Displays a confirmation dialog with "OK" and "Cancel"

- `prompt(message, default)`: Displays a prompt dialog that asks the user for input. Returns the input value or null if canceled.

- `setTimeout(callback, delay)`: Executes a function after a specified delay (in milliseconds).

- `setInterval(callback, interval)`: Repeatedly executes a function at specified intervals (in milliseconds).

- `clearTimeout(timeoutId)`: Cancels a timeout previously set by setTimeout.

- `clearInterval(intervalId)`: Cancels an interval previously set by setInterval.

- `location`: Provides access to the URL of the current document and allows navigation.

- `history`: Provides access to the browser's session history.

```js
window.alert("This is an alert message.");
window.confirm("Do you confirm this action?");
prompt("What is your name?", "Guest");

// Define a function to be executed
function showMessage() {
  console.log("This message is shown after 3 seconds.");
}

// Set a timeout to execute the function after 3000 milliseconds (3 seconds)
const timeoutId = setTimeout(showMessage, 3000);

// Optionally, you can cancel the timeout if needed
// clearTimeout(timeoutId);

// Define a function to be executed repeatedly
function updateClock() {
  const now = new Date();
  console.log(`Current time: ${now.toLocaleTimeString()}`);
}

// Set an interval to execute the function every 1000 milliseconds (1 second)
const intervalId = setInterval(updateClock, 1000);

// Optionally, you can cancel the interval if needed
// clearInterval(intervalId);

console.log(`Current URL: ${location.href}`);

// Go back one page in the history

history.back();
history.go(-2);
```

### 2. screen object

The screen object provides information about the screen's dimensions and color depth.

#### Methods

- `width`: Returns the width of the screen in pixels.
- `height`: Returns the height of the screen in pixels.

```js
console.log(`Screen width: ${screen.width}`);
console.log(`Screen height: ${screen.height}`);
```

### DOM (Document Object Model)

The DOM represents the structure of an HTML document as a tree of objects. It allows programs to manipulate the content, structure, and style of web pages dynamically.
