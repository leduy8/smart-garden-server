const request = require("supertest");
let server;

describe("/api/dht", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("GET /", () => {
    it("should return dht numbers to client", async () => {
      const res = await request(server).get("/api/dht");
      expect(res.body.some((g) => g.temperature === 30)).toBeTruthy();
      expect(res.body.some((g) => g.temperature === 26)).toBeTruthy();
    });
  });
});
