const express = require("express");
const router = express.Router();

// @route GET api/profile
// @desc profile route
// @access Public
router.get("/", (req, res) => {
  res.json({ msg: "Profile works" });
});

module.exports = router;
