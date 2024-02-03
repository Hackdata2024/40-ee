// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loggerMiddleware = require('./middleware/logger');
const routes = require('./routes'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(loggerMiddleware);

// app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
