/* jshint esversion: 6 */
/* jshint esversion: 8 */
// eslint-disable-next-line linebreak-style
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import all dependencies & middleware here
const userController = require ("./controller/user.controller.js");

// Init an Express App.
const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use('/', userController);

// Start Server here
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 8080!');
});

mongoose.connect("mongodb://localhost/test", { useUnifiedTopology: true, useNewUrlParser: true  })
.then(() => {
    console.log(`Connected to mongoDB at port 27017`);
 });