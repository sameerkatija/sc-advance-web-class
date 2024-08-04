# Day 15

## Code

- [Javascript](./main.js)

## What is Data Structure

A `data structure` is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. It defines how data is related and how it can be manipulated.

> `Data Type` defines the kind of single value and its operations (e.g., number, string), while `Data Structure` organizes and manages collections of values and their relationships (e.g., arrays, trees).

## Array in JS

In JavaScript, an `array` is a `data structure` used to store a collection of elements, which can be of any type, including `numbers`, `strings`, `objects`, or even `other arrays`. Arrays are ordered and indexed, meaning each element has a numeric `index` starting from `0`.

## Common Operations

### 1. Creating an Array

```js
let fruits = ["apple", "banana", "cherry"];
```

### 2. Accessing Elements

```js
console.log(fruits[0]); // Output: "apple"
```

### 3. Adding Elements

```js
fruits.push("date"); // Adds "date" to the end of the array
fruits.unshift("apple"); // Adds "apple" to the front
```

### 4. Removing Elements

```js
fruits.pop(); // Removes the last element
fruits.shift(); // Removes the first element
```

### 5. Finding the Length:

```js
console.log(fruits.length); // Output: Number of elements in the array
```
