const request = require("supertest");
const { PlantStatus } = require("../models/plantStatus");
let server;

describe("/api/sensor", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await PlantStatus.remove({});
    await server.close();
  });

  describe("GET /", () => {
    it("should return plant status numbers to client", async () => {
      const res = await request(server).get("/api/plantStatus");
      expect(res.status).toBe(200);
      expect(res.body).toBeDefined();
    });
  });

  describe("POST /", () => {
    let temperature;
    let airHumidity;
    let soilMoisture;
    let healthStatus;
    let imgURL;
    let timestamp;

    const exec = async () => {
      return await request(server)
        .post("/api/sensors")
        .send({
          temperature,
          airHumidity,
          soilMoisture,
          healthStatus,
          imgURL,
          timestamp,
        });
    };

    beforeEach(() => {
      temperature = 30;
      airHumidity = 65;
      soilMoisture = 45.6;
      healthStatus = "Good";
      imgURL = "imgURL";
      timestamp = new Date().getTime().toString();
    });

    it("should return 400 if temperature is null", async () => {});
    it("should return 400 if airHumidity is null", async () => {});
    it("should return 400 if soilMoisture is null", async () => {});
    it("should return 400 if healthStatus is null", async () => {});
    it("should return 400 if imgURL is missing", async () => {});
    it("should return 400 if timestamp is missing", async () => {});
    it("should save the data if inputs are valid", async () => {});
    it("should return the data if saved successfully", async () => {});
  });
});
