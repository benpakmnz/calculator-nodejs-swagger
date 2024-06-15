"use strict";

const path = require("path");
const http = require("http");
const oas3Tools = require("oas3-tools");
const dotenv = require("dotenv");
const verifyToken = require("./utils/tokenUtils");

// Load environment variables from .env file
dotenv.config();

const CONTROLLERS_PATH = path.join(__dirname, "./controllers");
const OPENAPI_PATH = path.join(__dirname, "api/openapi.yaml");

// Extract server port from BASE_URL
const [, , serverPort] = process.env.BASE_URL.split(":");

if (!serverPort) {
  throw new Error(
    "Invalid BASE_URL format. Please provide a valid URL with port"
  );
}

const options = {
  routing: {
    controllers: CONTROLLERS_PATH,
  },
  openApiValidator: {
    validateSecurity: {
      handlers: {
        BearerAuth: verifyToken(process.env.SECRET_KEY),
      },
    },
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(OPENAPI_PATH, options);
const app = expressAppConfig.getApp();

http.createServer(app).listen(serverPort, function () {
  console.log(
    `Your server is listening on port ${serverPort} (${process.env.BASE_URL})`
  );
  console.log(`Swagger-ui is available on ${process.env.BASE_URL}/docs`);
});
