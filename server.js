"use strict";

const path = require("path");
const oas3Tools = require("oas3-tools");
const dotenv = require("dotenv");
const verifyToken = require("./utils/tokenUtils");

// Load environment variables from .env file
dotenv.config();

const CONTROLLERS_PATH = path.join(__dirname, "./controllers");
const OPENAPI_PATH = path.join(__dirname, "api/openapi.yaml");

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

module.exports = app;
