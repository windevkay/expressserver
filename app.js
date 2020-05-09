const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('In middleware');
  next();
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.send('Hello from Express');
});

const server = http.createServer(app);

server.listen(3000);
