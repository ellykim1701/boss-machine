const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = app;

const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());

const apiRouter = require('./server/api');
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:

}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});