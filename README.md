## RESTful APIs

RESTful APIs, or Representational State Transfer APIs, are a popular architectural style for designing networked applications.

### Example Workflow

Suppose you have a RESTful API for managing a collection of books.

- `GET` `/books`: Retrieve a list of books.
- `GET` `/books/1`: Retrieve details of the book with ID 1.
- `POST` `/books`: Add a new book to the collection (data would be sent in the request body).
- `PUT` `/books/1`: Update the book with ID 1 (data would be sent in the request body).
- `DELETE` `/books/1`: Delete the book with ID 1.

## Express JS

Express is a popular web application framework for Node.js that simplifies building and managing web servers. It sits on top of Node.js’s built-in HTTP module and provides a higher-level abstraction that makes it easier to handle common tasks in web development.

### Why Use Express Instead of Node's Built-in HTTP Module?

1. **Simplified Syntax:** Express abstracts away much of the complexity of handling `HTTP` requests and responses. With Node.js’s built-in `HTTP` module, you’d need to manually handle request and response parsing, routing, and more. Express provides a more intuitive and readable syntax for these tasks.

   - Example with Node's HTTP Module:

     ```js
     const http = require("http");

     const server = http.createServer((req, res) => {
       if (req.url === "/") {
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end("Hello, world!\n");
       } else {
         res.writeHead(404, { "Content-Type": "text/plain" });
         res.end("Not Found\n");
       }
     });

     server.listen(3000, () => {
       console.log("Server running at http://localhost:3000/");
     });
     ```

   - Example with Express:

     ```js
     const express = require("express");
     const express = require("express");
     const app = express();

     app.get("/", (req, res) => {
       res.send("Hello, world!");
     });

     app.use((req, res) => {
       res.status(404).send("Not Found");
     });

     app.listen(3000, () => {
       console.log("Server running at http://localhost:3000/");
     });
     ```

2. **Routing:** Express provides a robust routing system with support for route parameters, query strings, and middleware. This makes it easy to organize routes and handle different types of requests.
3. **Middleware**: Express supports middleware functions that can be used to process requests and responses. Middleware functions are functions that have access to the request object, response object, and the next middleware function in the stack. This modular approach is great for adding functionality like logging, authentication, and body parsing.
4. **Error Handling**: Express has built-in mechanisms for error handling, making it easier to catch and respond to errors in a consistent way.
5. **Template Engines**: Express integrates easily with various template engines (like Pug, EJS, or Handlebars), which simplifies rendering dynamic HTML.
6. **Community and Ecosystem**: Express has a large and active community, which means there are numerous plugins and extensions available to extend its functionality.
7. **Request and Response Handling**: Express simplifies parsing and handling of incoming data (e.g., URL-encoded forms, JSON bodies) through middleware like body-parser.

### Conclusion

While Node.js’s built-in `HTTP` module provides the fundamental capabilities for handling `HTTP` requests and responses, Express offers a more developer-friendly interface and additional features that streamline web development tasks. It’s especially useful for building RESTful APIs and web applications where you need to manage routing, middleware, and templating more efficiently.

## Building your first web server using `express`

- Step 1: Set Up Your Project
  1. Create a New Directory
  2. Create a New File named `app.js` (or `server.js`, if you prefer).
  3. Initialize a New Node.js Project
  ```bash
    npm init -y
  ```
  4. Install Express
  ```js
    npm install express
  ```
- Step 2: Create Your Express Server

  ```js
  const express = require("express");
  const app = express();
  const port = 3000;

  // Define a route for the root URL
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  ```

- Step 3: Run Your Server

  ```bash
  node app.js
  ```
