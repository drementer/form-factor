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
    let data = fs.readFileSync(`${root}${folder}${infoFile}`, 'utf8');
    data = JSON.parse(data);
    let isActive = data.active;
    if (isActive) brands.push(data);
  });

  return res.json(brands);
});

router.post('/add-brand', (req, res) => {
  let data = req.body;
  let fileId = Date.now();
  let folderPath = './data/brands/' + fileId + '/';
  let fileName = 'info.json';
  let fullPath = folderPath + fileName;
  let isFileActive = true;

  data.id = fileId;
  data.active = isFileActive;
  data = JSON.stringify(data);

  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFile(fullPath, data, (err) => {
    if (err) throw err;
  });

  return res.json({ status: 'succes' });
});

module.exports = router;
