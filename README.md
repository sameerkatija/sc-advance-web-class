# Day 14

## Code

- [Javascript](./main.js)

## What is Decision Making?

`Decision-making` is the process of choosing the best option from several alternatives to solve a problem or achieve a goal.

## Decision-Making in JS

In JavaScript, decision-making is typically handled using `control flow statements` that allow your code to make decisions based on conditions. The main decision-making constructs are `if`, `else if`, `else`, `switch`, and `conditional (ternary) operators`.

> A `control flow statement` in programming directs the order in which code is executed based on conditions or loops. It determines whether certain blocks of code run or how many times they should run.

## Role of Comparison operators

Comparison operators in JavaScript are used to compare two values and determine their relationship. They return a `boolean value (true or false)` based on the comparison.

These operators are essential for making decisions in code and controlling the flow of execution based on conditions.

If you don't know about comparison operators, [read here](https://github.com/sameerkatija/sc-advance-web-class/tree/day-12?tab=readme-ov-file#3-comparison-relational-operators)

## `if` Statement

The `if` statement executes a block of code if a specified condition is true.

```js
if (condition) {
  // code to execute if condition is true
}

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

## `if...else` Statement

The `if...else` statement executes one block of code if the condition is true, and another block if it is false.

```js
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

## `if...else if...else` Statement

This construct allows you to test multiple conditions.

```js
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if none of the conditions are true
}
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
```

## `switch` Statement

The `switch` statement executes code based on the value of a variable or expression, which can be more readable than multiple `if...else if` statements.

```js
switch (expression) {
  case value1:
    // code to execute if expression equals value1
    break;
  case value2:
    // code to execute if expression equals value2
    break;
  default:
  // code to execute if expression does not match any case
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Weekend");
}
```

## Conditional (Ternary) Operator

The `conditional (ternary) operator` is a shorthand for if...else statements. It returns one of two values depending on a condition.

```js
condition ? expression1 : expression2;

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"
```

## `break` statement

The `break` statement in JavaScript is used to exit from a loop (for, while, do...while) or a switch statement before it naturally completes. It immediately terminates the loop or switch block and transfers control to the code following the loop or switch.
