// app.js

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const URI = 'mongodb+srv://somuyak:%40Somuya2004@cluster0.i2b8prd.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Express middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'connected' });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

// Use the routes defined in routes/products.js
app.use(require('./routes'));

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
