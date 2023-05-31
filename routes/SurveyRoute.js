const express = require("express");
const router = express.Router();
const {
  createSurvey,
  getSurvey,
} = require("../controllers/SurveyController.js");

router.post("/", createSurvey);
router.get("/", getSurvey);

module.exports = router;
