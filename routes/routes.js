const express = require("express");
const router = express.Router();
const { updateFile } = require("../services/xlEdit");

router.post("/update", async (req, res) => {
  const { body } = req;
  try {
    console.log("Received request body:", body);
    await updateFile(body);
    res.send("File updated successfully");
  } catch (error) {
    console.error("Error updating file:", error);
    res.status(500).send("An error occurred while updating the file");
  }
});

module.exports = router;
