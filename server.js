const express = require('express');
const cheesesRouter = require('./routes/cheesesRouter');

// create the server and setup routes
const app = express();
app.use(cheesesRouter);
app.get('/', (req, res) => res.send('Express Lambda Example Server'));

module.exports = app;