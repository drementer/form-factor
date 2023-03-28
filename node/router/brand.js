const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();

const root = './data/brands/';
const infoFile = 'info.json';

app.use(bodyParser.json());

router.get('/get-brands', (req, res) => {
  const brands = [];
  const brandFolders = fs.readdirSync(root, { withFileTypes: true });

  brandFolders.forEach((folder) => {
    const isFile = folder.isFile();
    let isActive = false;

    if (isFile) return;

    let folderName = folder.name;
    let data = fs.readFileSync(`${root}${folderName}/${infoFile}`, 'utf8');

    data = JSON.parse(data);
    isActive = data.active;

    if (isActive) brands.push(data);
  });

  return res.json(brands);
});

router.post('/add-brand', (req, res) => {
  const data = req.body;

  const fileId = Date.now();
  const folderPath = root + fileId + '/';
  const fullPath = folderPath + infoFile;

  let json = data;

  json.id = fileId;
  json.active = true;
  json = JSON.stringify(json);

  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFile(fullPath, json, (err) => {
    if (err) throw err;
  });

  return res.json({ status: 'succes', brandId: fileId });
});

module.exports = router;
