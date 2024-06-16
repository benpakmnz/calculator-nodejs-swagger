"use strict";

const http = require("http");
const app = require("./server");

// Extract server port from BASE_URL
const { BASE_PORT, PROTOCOL, HOST_NAME, DOCKER_PORT } = process.env;
const port = DOCKER_PORT || BASE_PORT;
const fullUrl = `${PROTOCOL}://${HOST_NAME}:${port}`;

if (!port) {
  throw new Error("Invalid port format. Please provide a valid port");
}

http.createServer(app).listen(BASE_PORT, function () {
  console.log(`Your server is listening on port ${port} (${fullUrl})`);
  console.log(`Swagger-ui is available on ${fullUrl}/docs`);
});
