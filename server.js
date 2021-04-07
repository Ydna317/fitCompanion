// require packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// creating port
const PORT = 3003;
// creating express variable
const app = express();

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });