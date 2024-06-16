# Node.js Calculator API

This project is a calculator API built with Node.js. It is based on a server stub generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification).

## Core NPM Modules

The project uses the following core NPM modules:

- `dotenv` for environment variable management
- `jsonwebtoken` for JSON Web Token handling
- `mongoose-unique-validator` for unique validation within Mongoose
- `jest` for testing
- `supertest` for HTTP assertions

## Running the server

To run the server, follow these steps:

1. Create a `.env` file in the root directory with the following environment variables:

   ```env
   SECRET_JWT_KEY=your_jwt_key
   BASE_PORT=8080
   PROTOCOL=http
   HOST_NAME=localhost
   ```

2. Start the server:

   ```bash
   npm start
   ```

To view the Swagger UI interface, open `http://localhost:8080/docs`

## Running with Docker

To run the server using Docker, execute the following commands:

```bash
docker build -t calculator-nodejs-swagger
docker run -e DOCKER_PORT=${port of your choice} -p ${port of your choice}:8080 calculator-nodejs-swagger
```

```
This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
```
