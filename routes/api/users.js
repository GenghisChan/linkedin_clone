const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc users route
// @access Public
router.get("/", (req, res) => {
  res.json({ msg: "Users works" });
});

module.exports = router;
