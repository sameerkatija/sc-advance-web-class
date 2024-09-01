## Object Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects." It is a way of organizing and structuring code to model real-world entities and their interactions in a way that is intuitive and modular. OOP is built on several key principles and concepts:

### Core Components of OOP

#### 1. Class:

A class is a blueprint for creating `objects`. It defines a type of `object` by specifying its `attributes` (data) and `methods` (functions).

```js

```

#### 2. Object:

An object is an instance of a `class`. It contains `data` and `methods` defined by its class.

```js
let myCar = new Car("Toyota", "Corolla");
```

#### 3. Attribute:

An attribute is a variable defined in a class that holds data about the object.

#### 4. Method:

A method is a function defined inside a class that operates on the data contained within the object.

```js
myCar.startEngine();
```

### Key Principles of OOP

#### 1. Encapsulation:

Encapsulation refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, usually called a class.

It helps in hiding the internal state of an object from the outside world and only exposes what is necessary. This can prevent unintended interference and misuse.

**Example:** A Car class with private attributes like `engineStatus` and public methods like `startEngine()` and `stopEngine()`.

#### 2. Inheritance:

Inheritance allows a new class (child or subclass) to inherit properties and methods from an existing class (parent or superclass).

It promotes code reuse and establishes a natural hierarchy between classes.

**Example:** A `SportsCar` class that inherits from a `Car` class, gaining its attributes and methods while adding new ones specific to sports cars.

#### 3. Polymorphism:

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also refers to the ability to redefine methods in derived classes.

It enables objects to be processed in a way that is independent of their specific class. This is often achieved through method overriding and method overloading.

**Example:** A method `drive()` defined in both `Car` and `Bike` classes. When called, it executes the version appropriate to the object's class.

#### 4. Abstraction:

Abstraction involves creating classes that are not instantiated directly but serve as templates for other classes. It focuses on providing a simplified interface while hiding complex implementation details.

It helps manage complexity by breaking down the problem into simpler, more manageable parts.

**Example:** An abstract Shape class with abstract methods like `draw()` that must be implemented by subclasses like `Circle` and `Rectangle`.

## Object prototypes

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

### Benefits of OOP

#### 1. Modularity:

Code is organized into classes and objects, making it easier to manage and understand.

#### 2. Reusability:

Classes and methods can be reused across different parts of a program or even different programs.

#### 3. Maintainability:

Encapsulation and abstraction help in making the code more manageable and easier to modify or extend.

#### 4. Flexibility:

Polymorphism and inheritance provide flexibility in how classes and objects interact, allowing for more adaptable and scalable designs.

OOP is widely used in many programming languages such as `Java`, `C++`, `Python`, and `JavaScript`. Each language has its own implementation and support for OOP principles, but the core concepts remain similar across different languages.

## Constructor

A constructor is a special method of a class that is automatically invoked when a new instance of the class is created. Its primary role is to initialize the object's properties and set up any necessary state.

## Destructor

A destructor is a method that is called when an object is destroyed or goes out of scope, allowing for cleanup operations like releasing resources.

> JavaScript does not have destructors in the same way that languages like C++ or Java do. In those languages

> JavaScript's memory management is handled by the garbage collector, which automatically reclaims memory used by objects that are no longer referenced. There is no explicit destructor method you can define for custom cleanup in JavaScript.

## `this` keyword

In `JavaScript`, the `this` keyword refers to the context in which a function or method is executed. Its value is determined by how a function is called, not where it is defined. Understanding how this works is crucial for working effectively with objects and methods in JavaScript.

### How `this` Works?

#### 1. Global Context:

When used in the global scope or in a regular function (not a method of an object), this refers to the global object. In a browser, this is window; in Node.js, it is global.

```js
console.log(this); // In a browser, this will log the Window object
```

#### 2. Object Method:

When `this` is used inside a method of an object, it refers to the object itself.

> Avoid arrow functions, if you are using this inside method

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Outputs: "Hello, my name is Alice"
```

#### 3. Constructor Function:

When `this` is used inside a `constructor` function, it refers to the new instance of the object being created.

```js
function Person(name) {
  this.name = name;
}

const person = new Person("Bob");
console.log(person.name); // Outputs: Bob
```

#### 4. Arrow Functions:

In arrow functions, `this` does not have its own binding. Instead, it inherits `this` from the surrounding (lexical) context where the arrow function is defined. This is often used to preserve the context of `this` in callback functions.

```js
const person = {
  name: "Charlie",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  },
};

person.greet(); // Outputs: "Hello, my name is Charlie"
```

#### 5. Event Handlers:

When this is used in an `event handler`, it refers to the element that triggered the event.

```js
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Outputs: <button id="myButton">Click me</button>
});
```

#### 6. `bind`, `call`, and `apply`:

- **`bind`:** Creates a new function with this bound to the specified value.

  ```js
  function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  const person = { name: "David" };
  const greetPerson = greet.bind(person);
  greetPerson(); // Outputs: "Hello, my name is David"
  ```

- `call` and `apply`: Immediately invoke a function with a specified this value.

  ```js
  function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  const person = { name: "Eva" };
  greet.call(person); // Outputs: "Hello, my name is Eva"
  greet.apply(person); // Outputs: "Hello, my name is Eva"
  ```

### Arrow Functions and `this`

Arrow functions do not have their own `this` context. Instead, they capture `this` from the surrounding lexical context where they are defined. This means that within an arrow function, `this` refers to the `this` value of the outer function or global context where the arrow function was created.

### Summary

- **`Global Context`:** `this` refers to the global object (`window` in browsers, `global` in Node.js).
- **`Object Method`:** `this` refers to the object from which the method was called.
- **`Constructor Function`:** `this` refers to the instance being created.
- **`Arrow Functions`:** `this` inherits from the surrounding context.
- **`Event Handlers`:** `this` refers to the element that triggered the event.
- **`bind, call, apply`:** Used to explicitly set `this` for function execution.

Understanding how `this` behaves in different contexts helps in writing more predictable and bug-free code in JavaScript.

## OOP in JS

> In JavaScript, a class is a syntactic sugar over the existing prototype-based inheritance and provides a more familiar and structured way to create objects and manage inheritance. JavaScript classes were introduced in ECMAScript 6 (ES6) and offer a cleaner and more intuitive syntax for creating objects and managing inheritance compared to using functions and prototypes directly.

```js
// Define a class
class Car {
  // Constructor method
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method
  startEngine() {
    console.log(`${this.make} ${this.model} engine started.`);
  }
}

// Create an instance of the class
const myCar = new Car("Toyota", "Corolla");

// Use the instance
myCar.startEngine(); // Outputs: "Toyota Corolla engine started."
```
