const express = require("express");
const { challenges, incidents, troubleshooting } = require("./data");

const app = express();
app.use(express.json());

// pick a random item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

app.post("/api/scenario", (req, res) => {
  const { technology, role, environment } = req.body; // Extracting user input

  // Check if all required fields are provided
  if (!technology || !role || !environment) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Generate a random scenario
  const generatedScenario = {
    challenge: getRandomItem(challenges),
    incident: getRandomItem(incidents),
    troubleshooting: getRandomItem(troubleshooting),
  };

  // Send back the structured JSON response
  res.json({
    inputs: {
      technology: technology,
      role: role,
      environment: environment,
    },
    scenario: generatedScenario,
  });
});

module.exports = app;
