const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./src/routes/routes");

const app = express();
const port = 3000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
