// server/index.js
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loggerMiddleware = require('./middleware/logger');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);


app.get('/', (req, res) => {
  res.send('Welcome to the Express.js API');
}
);

mongoose.connect(`mongodb+srv://am398:${process.env.PASSWORD}@cluster0.e8ghf1k.mongodb.net/mydb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
