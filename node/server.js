const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3080;

const upload = require('./router/upload');
const brand = require('./router/brand');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/upload/', upload);
app.use('/api/brand/', brand);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Live on --> http://localhost:${port}`);
});
