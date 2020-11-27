const express = require('express');

const { upload } = require('./config/multer');
const LocationsController = require('./controllers/LocationsController');

const router = express.Router();

router.post('/upload', upload.single('file'), LocationsController.upload);

module.exports = router;
