/* jshint esversion: 6 */
/* jshint esversion: 8 */

const express = require("express");
const userController = express.Router();

 userController.get('/', (req, res) => {

     res.status(200).json ({
         status: 'user Controller API call sucessfully'
     });
 });

 module.exports = userController;