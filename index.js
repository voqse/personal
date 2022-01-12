const express = require('express');

const server = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

server.use('/', express.static('dist'));

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
