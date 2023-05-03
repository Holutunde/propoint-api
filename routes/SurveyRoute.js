const express = require("express");
const router = express.Router();
const { createSurvey } = require("../controllers/SurveyController.js");

router.post("/", createSurvey);

module.exports = router;
