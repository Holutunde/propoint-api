// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

// Import database module and survey route
const connectDB = require("./database/db");
const surveyRoute = require("./routes/SurveyRoute");

// Create express app
const app = express();

// Set port
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

// Set survey route
app.use("/survey", surveyRoute);

// Start server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
