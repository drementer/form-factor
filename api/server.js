const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../www/dist')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!');
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const data = req.body;
  users.push(data);
  res.json('user addedd');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../www/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the http://localhost:${port}`);
});
