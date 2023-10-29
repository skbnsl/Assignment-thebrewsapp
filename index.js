const express = require("express");
const port = 8000;
const app = express();
const connectdb = require("./config/mongoose");
const route = require("./routes/bookroute");

app.use(express.json());

app.use("/book", route);

app.listen(port, function (err) {
  if (err) {
    console.log("error port");
    return;
  }
  console.log(`server is running on ${port}`);
});
