const express = require("express");
const consign = require("consign");
require('dotenv').config()

const app = express();

consign({ verbose: false })
  .include("db.js")
  .then("models")
  .then("associations.js")
  .then("auth.js")
  .then("middlewares.js")
  .then("routes")
  .then("boot.js")
  .into(app);

module.exports = app;
