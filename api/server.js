const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!');
  res.json(users);
});

app.get('/api/get-brands', (req, res) => {
  let brands = [];
  let root = './brands/';
  let infoFile = '/info.json';
  let brandFolders = fs.readdirSync(root);

  brandFolders.forEach((folder) => {
    let fileContent = fs.readFileSync(`${root}${folder}${infoFile}`, 'utf8');
    brands.push(JSON.parse(fileContent));
  });

  res.json(brands);
});

app.post('/api/user', (req, res) => {
  const data = req.body;
  users.push(data);
  res.json('user addedd');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the http://localhost:${port}`);
});
