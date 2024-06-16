const request = require("supertest");
const app = require("../server");
const jwt = require("jsonwebtoken");

describe("Bearer Authentication", () => {
  it("should authenticate a request with a valid token", async () => {
    const mockUser = { id: 1, username: "testUser" };
    const token = jwt.sign(mockUser, process.env.SECRET_JWT_KEY);

    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", `Bearer ${token}`)
      .set("operation", "add")
      .send({ num1: 1, num2: 2 });

    expect(res.statusCode).toEqual(200);
  });

  it("should reject a request with an invalid token", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("Authorization", "Bearer invalidtoken")
      .set("operation", "add")
      .send({ num1: 1, num2: 2 });

    expect(res.statusCode).toEqual(401);
  });

  it("should reject a request without a token", async () => {
    const res = await request(app)
      .post("/calc-api/1.0.0/calculate")
      .set("operation", "add")
      .send({ num1: 1, num2: 2 });

    expect(res.statusCode).toEqual(401);
  });
});
