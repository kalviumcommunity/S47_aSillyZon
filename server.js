const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.use(express.json())
const URI = 'mongodb+srv://somuyak:%40Somuya2004@cluster0.i2b8prd.mongodb.net/?retryWrites=true&w=majority';
const ProductModel = require('./models/Products')

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use(express.json());

app.get('/getProducts', (req, res) => {
   ProductModel.find()
   .then(products => console.log(products))
   .catch(err => res.json(err))
})

app.get('/', (req, res) => {
  res.json({ status: 'connected' });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(require('./routes'));


app.listen(port, () => {
   console.log(`🚀 server running on PORT: ${port}`);
});


module.exports = app;
