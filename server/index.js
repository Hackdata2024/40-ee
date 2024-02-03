// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loggerMiddleware = require('./middleware/logger');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js API');
}
);

mongoose.connect('mongodb://localhost:27017/elderly_support_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
