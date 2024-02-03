const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const URI = 'mongodb+srv://somuyak:%40Somuya2004@cluster0.i2b8prd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.json({ status: 'connected' });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('aSillyZon');
    const collection = database.collection('List of silly products');

    app.get('/getProducts', async (req, res) => {
      const result = await collection.find({}).toArray();
      res.json(result);
    });

    // Start the server after connecting to MongoDB
    app.listen(port, () => {
      console.log(`🚀 Server running on PORT: ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

module.exports = app;
