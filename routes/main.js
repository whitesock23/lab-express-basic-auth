const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

router.get("/main", (req, res) => {
    res.render("main", {layout: false});
  });

module.exports = router;