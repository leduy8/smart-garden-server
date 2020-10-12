const { response } = require("express");
const { getSensorsData, pumpWater } = require("../api/sensorsApi");

describe("arduino communication service api", () => {
  describe("GET /api/sensors", () => {
    it("should have all 3 properties", async () => {
      getSensorsData((response) => {
        expect(response.data).toHaveProperty("temperature");
        expect(response.data).toHaveProperty("humidity");
        expect(response.data).toHaveProperty("soilMoisture");
      });
    });
  });

  describe("GET /api/pumpWater", () => {
    it("should have all 3 properties", async () => {
      pumpWater((response) => {
        expect(response.data).toHaveProperty("message");
      });
    });
  });
});
