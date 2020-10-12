const request = require("supertest");
const { PlantStatus } = require("../models/plantStatus");
let server;

describe("/api/plantStatus", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await PlantStatus.remove({});
    await server.close();
  });

  describe("GET /", () => {
    it("should return plant status numbers to client", async () => {
      await request(server).post("/api/plantStatus").send({
        temperature: 36,
        airHumidity: 80,
        soilMoisture: 69.9,
        healthStatus: "Good",
        imgURL: "imgURL",
        timestamp: "123456",
      });

      const res = await request(server).get("/api/plantStatus");
      expect(res.status).toBe(200);
      expect(res.body[0]).toHaveProperty("_id");
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
      return await request(server).post("/api/plantStatus").send({
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

    it("should return 400 if temperature less than -50", async () => {
      temperature = -51;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if temperature greater than 60", async () => {
      temperature = 61;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if temperature is null", async () => {
      temperature = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if airHumidity less than 0", async () => {
      airHumidity = -1;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if airHumidity greater than 100", async () => {
      airHumidity = 101;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if airHumidity is null", async () => {
      airHumidity = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if soilMoisture less than 0", async () => {
      soilMoisture = -1;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if soilMoisture greater than 100", async () => {
      soilMoisture = 101;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if soilMoisture is null", async () => {
      airHumidity = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if healthStatus is null", async () => {
      healthStatus = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if imgURL is null", async () => {
      imgURL = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if timestamp is null", async () => {
      timestamp = null;

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should save the data if inputs are valid", async () => {
      await exec();

      const plantStatus = await PlantStatus.find({ temperature: 30 });

      expect(plantStatus).not.toBeNull();
    });

    it("should return the data if saved successfully", async () => {
      const res = await exec();

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("temperature", 30);
    });
  });
});
