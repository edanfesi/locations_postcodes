const express = require('express');

const routes = require('./src/routes');

const app = express();

app.get('/', (req, res) => {
  res.send('Status OK');
});

app.use('/api/locations-ms', routes);

app.listen(3000, () => {});
