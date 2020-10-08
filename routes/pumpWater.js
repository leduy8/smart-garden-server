//* Keep it comment in case use route method
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const { setAutomatedTimeout } = require("../utils/automatedTimeout");

// router.get("/", (req, res) => {
//   const errMsg = {
//     data: {
//       message: "Can't pump water",
//     },
//     prompt: "pumpWaterResponse",
//   };

//   setAutomatedTimeout(() =>
//     axios
//       .get("http://localhost:3001/api/pumpWater")
//       .then((respone) => res.send(respone))
//       .catch((err) => res.send(errMsg))
//   );
// });

// module.exports = router;
