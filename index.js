require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./database/db");
const surveyRoute = require("./routes/SurveyRoute");

const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());

app.use("/survey", surveyRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
