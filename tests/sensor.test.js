const request = require("supertest");
const { Sensor } = require("../models/sensor");
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

  describe("POST /", () => {
    let temperature;
    let airHumidity;
    let soilMoisture;
    let timestamp;

    const exec = async () => {
      return await request(server)
        .post("/api/sensors")
        .send({ temperature, airHumidity, soilMoisture, timestamp });
    };

    beforeEach(() => {
      temperature = 30;
      airHumidity = 65;
      soilMoisture = 45.6;
      timestamp = new Date().getTime().toString();
    });

    it("should return 400 if temperature is NaN", async () => {});
  });
});
