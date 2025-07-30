const request = require("supertest");
const app = require("../src/app");

describe("POST /api/scenario", () => {
  // Test if the API returns a proper scenario when valid input is sent
  it("should return a valid scenario with all input fields", async () => {
    const res = await request(app).post("/api/scenario").send({
      technology: "Cloud Computing",
      role: "System Administrator",
      environment: "Cloud Infrastructure",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.inputs).toMatchObject({
      technology: expect.any(String),
      role: expect.any(String),
      environment: expect.any(String),
    });

    expect(res.body.scenario).toHaveProperty("challenge");
    expect(res.body.scenario).toHaveProperty("incident");
    expect(res.body.scenario).toHaveProperty("troubleshooting");
  });

  // Test if the API returns a 400 error when inputs are missing
  it("should return 400 if any input field is missing", async () => {
    const res = await request(app).post("/api/scenario").send({
      technology: "Cloud Computing",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
