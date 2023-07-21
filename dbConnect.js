const mongoose = require("mongoose");
const connetDb = async url => {
  await mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("Connected to DB");
  });
};

module.exports = connetDb;
