const surveyModel = require("../models/surveyModel");
const pool = require("../database/db");

const addSurvey =
  "INSERT INTO sentiment(residence,simtype, geopoliticalzone, networktype, makecall, sendtext, browse, networkstrength, ratenetwork, comment) VALUES ($1,$2,$3,$4,$5,$6,$7, $8, $9, $10)";

exports.createSurvey = async (req, res) => {
  const {
    residence,
    simtype,
    geopoliticalzone,
    networktype,
    makecall,
    sendtext,
    browse,
    networkstrength,
    ratenetwork,
    comment,
  } = req.body;

  try {
    // const newSurvey = new surveyModel({
    //   residence,
    //   simtype,
    //   geopoliticalzone,
    //   networktype,
    //   makecall,
    //   sendtext,
    //   browse,
    //   networkstrength,
    //   ratenetwork,
    //   comment,
    // });
    // const result = await newSurvey.save();
    const result = pool.query(addSurvey, [
      residence,
      simtype,
      geopoliticalzone,
      networktype,
      makecall,
      sendtext,
      browse,
      networkstrength,
      ratenetwork,
      comment,
    ]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSurvey = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sentiment");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
  }
};
