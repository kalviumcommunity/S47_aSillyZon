const express = require('express');
const app = express();
const port = 3000; 
const mongoose = require('mongoose');
const URI = 'mongodb+srv://somuyak:%40Somuya2004@cluster0.i2b8prd.mongodb.net/?retryWrites=true&w=majority'


app.get('/', (req, res) => {
  mongoose.connect(URI)
  .then(()=>{
    res.json({status:'connected'})
  }).catch((err)=>{
    res.json({status: ' disconnected'})
  })
});

app.get('/ping', (req, res) => {
    res.send('pong');
  });

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: 3000`);
  });
}

module.exports = app;
