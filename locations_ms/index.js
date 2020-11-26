const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Status OK');
});

const server = app.listen(3000, function() {});