const { getSensorsData, pumpWater } = require("../api/sensorsApi");

describe("arduino communication service api", () => {
  describe("GET /api/sensors", () => {
    it("should have all 3 properties of sensors data or should have an error message if calling to communication service is failed", async () => {
      getSensorsData(
        (response) => {
          expect(response.data).toHaveProperty("temperature");
          expect(response.data).toHaveProperty("humidity");
          expect(response.data).toHaveProperty("soilMoisture");
        },
        (err) => expect(err).toBeDefined()
      );
    });
  });

  describe("GET /api/pumpWater", () => {
    it('should have a "Done" message property or should have an error message if calling to communication service is failed', async () => {
      pumpWater(
        (response) => {
          expect(response.data).toHaveProperty("message");
        },
        (err) => expect(err).toBeDefined()
      );
    });
  });
});
