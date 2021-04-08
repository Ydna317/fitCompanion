// require packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// creating port
const PORT = 3003;

// creating express variable
const app = express();

// app.use for logger, express and mongoose connects
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// getting routes
app.use(require("./routes/api.js"));
app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
    console.log(`Open up localhost ${PORT}!`);
  });