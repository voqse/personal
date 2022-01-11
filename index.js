import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello from Node.js app running on VPS!');
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
