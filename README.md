# Understanding Web Server Basics: Ports, Routing, HTTP Methods, and Node.js Implementation

- [Understanding Web Server Basics: Ports, Routing, HTTP Methods, and Node.js Implementation](#understanding-web-server-basics-ports-routing-http-methods-and-nodejs-implementation)
  - [What is `PORT` and Why we need it?](#what-is-port-and-why-we-need-it)
  - [Routes](#routes)
  - [Method:](#method)
  - [Request](#request)
  - [Response Status Code](#response-status-code)
  - [Request Body](#request-body)
  - [Headers](#headers)
  - [Creating server in Node Js](#creating-server-in-node-js)
  - [Example of Node Process](#example-of-node-process)
  - [Routing in Node Server](#routing-in-node-server)

## What is `PORT` and Why we need it?

A port is a communication endpoint that allows different applications or services to connect and exchange data over a network. It helps direct network traffic to the appropriate service or application on a computer. For example, web servers commonly use port `80` for HTTP and port `443` for HTTPS. Ports are essential for managing multiple services and ensuring data is routed correctly.

## Routes

Routes define how an application responds to specific client requests. They map URLs to functions or handlers that process the request and return a response. Routes are crucial for organizing and managing different parts of an application, such as handling different web pages or API endpoints.

> Think of routes like street signs in a city. Just as street signs direct drivers to different destinations (like restaurants, parks, or museums), routes in an application guide incoming requests to specific functions or handlers, directing them to the appropriate "destination" (such as displaying a webpage or processing data).

## Method:

In HTTP/HTTPS, a method defines the action to be performed on a resource. Common methods include GET (retrieve data), POST (submit data), PUT (update data), and DELETE (remove data).

## Request

An HTTP request is sent by a client to a server, asking for or sending data. It includes a method, URL, headers, and often a body.

## Response Status Code

A status code in an HTTP response indicates the outcome of the request. Codes like 200 mean success, 404 means the resource was not found, and 500 indicates a server error.

## Request Body

The request body contains data sent by the client to the server, typically used with POST or PUT methods. It includes the data that needs to be processed or stored, such as form submissions or JSON payloads.

## Headers

Headers are key-value pairs sent in HTTP requests and responses that provide metadata about the request or response. They convey information such as content type, length, encoding, and caching policies. Headers help clients and servers understand how to handle the data being transmitted and control various aspects of the communication. For example, `Content-Type` specifies the media type of the resource, and Authorization provides credentials for authentication.

## Creating server in Node Js

```js
const http = require("http");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Write the response body
  res.end("Hello, World!\n");
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Example of Node Process

```js
console.log(`Hello Mr. ${process.argv[2]}`);

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", () => {
  console.log("Good Bye");
});

process.on("SIGINT", () => {
  console.log(`Don't ever dare to close me like this`);
  process.exit();
});
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
```

## Routing in Node Server

```js
const http = require("http");
const url = require("url");

// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle different routes
  if (pathname === "/") {
    // Root route
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } else if (pathname.startsWith("/hello/")) {
    // Handle /hello/:name route
    const name = pathname.split("/")[2];
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Hello, ${name}!\n`);
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found\n");
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
