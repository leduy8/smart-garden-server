const mongoose = require("mongoose");

module.exports = function () {
  if (process.env.NODE_ENV == "test") {
    mongoose.connect(
      "mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden-test?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } else {
    mongoose.connect(
      "mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  }
};
