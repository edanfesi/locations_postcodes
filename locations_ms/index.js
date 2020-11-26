const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Status OK');
});

app.listen(3000, () => {});
