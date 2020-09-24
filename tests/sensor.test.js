const request = require("supertest");
let server;

describe("/api/sensor", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("GET /", () => {
    it("should return sensor numbers to client", async () => {
      const res = await request(server).get("/api/sensor");
      expect(res.status).toBe(200);
      expect(res.body).toBeDefined();
    });
  });
});
