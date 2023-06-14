const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const localDB = process.env.LOCAL_DB;

mongoose
  .connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const clientRoute = require("./routes/clientRoutes");
app.use("/client", clientRoute);

const freelanceApplicationRoute = require("./routes/freeLanceApplicationRoutes");
app.use("/freelance-application", freelanceApplicationRoute);

const freelanceOfferRoute = require("./routes/freelanceOfferRoutes");
app.use("/freelance-offer", freelanceOfferRoute);

const freelancerRoute = require("./routes/freelancerRoutes");
app.use("/freelancer", freelancerRoute);

const jobApplicationRoute = require("./routes/jobApplicationRoutes");
app.use("/job-application", jobApplicationRoute);

const jobOfferRoute = require("./routes/jobOfferRoutes");
app.use("/job-offer", jobOfferRoute);

const jobSeekerRoute = require("./routes/jobSeekerRoutes");
app.use("/job-seeker", jobSeekerRoute);

const userRoute = require("./routes/userRoutes");
app.use("/user", userRoute);

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
