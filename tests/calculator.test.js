const request = require("supertest");
const app = require("../server");
const jwt = require("jsonwebtoken");

describe("Calculator API", () => {
  let token;

  beforeAll(() => {
    const mockUser = { id: 1, username: "testUser" };
    token = jwt.sign(mockUser, process.env.SECRET_KEY);
  });

  it("should add two numbers correctly", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "add")
      .send({ num1: 1, num2: 2 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(3);
  });

  it("should subtract two numbers correctly", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "subtract")
      .send({ num1: 5, num2: 2 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(3);
  });

  it("should multiply two numbers correctly", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "multiply")
      .send({ num1: 3, num2: 2 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(6);
  });

  it("should divide two numbers correctly", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "divide")
      .send({ num1: 10, num2: 2 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(5);
  });

  it("should return an error when dividing by zero", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "divide")
      .send({ num1: 10, num2: 0 });

    expect(res.statusCode).toEqual(400);
  });
});
