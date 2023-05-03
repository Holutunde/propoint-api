const surveyModel = require("../models/surveyModel");

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
    const newSurvey = new surveyModel({
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
    });
    const result = await newSurvey.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
