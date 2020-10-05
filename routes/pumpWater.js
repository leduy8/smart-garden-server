const express = require("express");
const router = express.Router();
const axios = require("axios");
const { setAutomatedTimeout } = require("../utils/automatedTimeout");

router.get("/", async (req, res) => {
  const errMsg = {
    data: {
      message: "Can't pump water",
    },
    prompt: "pumpWaterResponse",
  };

  setAutomatedTimeout(() =>
    await axios
      .get("http://localhost:3001/api/pumpWater")
      .then((respone) => res.send(respone))
      .catch((err) => res.send(errMsg))
  );
});

module.exports = router;
