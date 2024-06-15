"use strict";

const http = require("http");
const app = require("./server");

// Extract server port from BASE_URL
const [, , serverPort] = process.env.BASE_URL.split(":");

if (!serverPort) {
  throw new Error(
    "Invalid BASE_URL format. Please provide a valid URL with port"
  );
}

http.createServer(app).listen(serverPort, function () {
  console.log(
    `Your server is listening on port ${serverPort} (${process.env.BASE_URL})`
  );
  console.log(`Swagger-ui is available on ${process.env.BASE_URL}/docs`);
});
