// require packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// creating port
var PORT = process.env.PORT || 3003;

// creating express variable
const app = express();

// app.use for logger, express and mongoose connects
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useFindAndModify: false,
  useNewUrlParser: true
  
});

// getting routes
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

app.listen(PORT, () => {
    console.log(`Open up localhost ${PORT}!`);
  });