const request = require("supertest");
let server;

describe("arduino communication service api", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("GET /api/sensors", () => {
    it("should have all 3 properties", async () => {
      const res = await request(server).get(
        "http://localhost:3001/api/sensors"
      );
      expect(res.status).toBe(200);
      expect(res.body.data[0]).toHaveProperty("temperature");
      expect(res.body.data[1]).toHaveProperty("humidity");
      expect(res.body.data[2]).toHaveProperty("soilMoisture");
    });
  });

  describe("GET /api/pumpWater", () => {
    it("should have all 3 properties", async () => {
      const res = await request(server).get(
        "http://localhost:3001/api/pumpWater"
      );
      expect(res.status).toBe(200);
      expect(res.body.data[0]).toHaveProperty("message");
    });
  });
});
