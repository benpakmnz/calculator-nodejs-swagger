const request = require("supertest");
const app = require("../server");

describe("Server setup", () => {
  it("should start the server without errors", async () => {
    const res = await request(app).get("/docs/");
    expect(res.statusCode).toEqual(200);
  });
});
