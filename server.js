const express = require('express');
const app = express();
const port = 3000; 

app.get('/ping', (req, res) => {
    res.send('pong');
  });

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: 3000`);
  });
}

module.exports = app;
