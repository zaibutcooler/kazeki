const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/job_platform";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Db is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const jobRoutes = require("./routes/jobRoutes");
app.use("/jobs", jobRoutes);

const freelanceRoutes = require("./routes/freelanceRoutes");
app.use("/jobs", freelanceRoutes);

app.listen(5000, () => {
  console.log("Working so far so goood. At port 5000");
});
