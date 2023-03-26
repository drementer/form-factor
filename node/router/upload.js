const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const multer = require('multer');

const uploadsPath = '../uploads/brands/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

app.use(bodyParser.json());

router.post('*', upload.any(), (req, res) => res.send(req.files));

module.exports = router;
