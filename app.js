/* jshint esversion: 6 */
/* jshint esversion: 8 */
// eslint-disable-next-line linebreak-style

// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';

// Init an Express App.
const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.get('/', (req, res) => {
  // eslint-disable-next-line no-trailing-spaces
  res.status(200).json({ status: 'Server Run successfully' }); 
});
// Start Server here
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 8080!');
});
