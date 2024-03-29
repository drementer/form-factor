const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.json());

router.get('/get-brands', (req, res) => {
  let brands = [];
  let root = './data/brands/';
  let infoFile = '/info.json';
  let brandFolders = fs.readdirSync(root);

  brandFolders.forEach((folder) => {
    let fileContent = fs.readFileSync(`${root}${folder}${infoFile}`, 'utf8');
    brands.push(JSON.parse(fileContent));
  });

  res.json(brands);
});

router.get('/add-brand', (req, res) => {
  res.json('Naber');
});

module.exports = router;
