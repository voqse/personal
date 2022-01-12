const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Site is under construction...');
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
