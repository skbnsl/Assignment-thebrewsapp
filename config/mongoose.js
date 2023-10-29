const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bansalsagar13:MS7atyrcF3mJfVh8@cluster0.ubi0n4m.mongodb.net/?retryWrites=true&w=majority"
);

const connectdb = mongoose.connection;

connectdb.on(
  "error",
  console.error.bind(console, "Error in connecting to database")
);

connectdb.once("open", function () {
  console.log("Connected to database : MongoDB");
});

module.exports = connectdb;
