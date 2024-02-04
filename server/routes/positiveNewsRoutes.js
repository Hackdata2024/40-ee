// positiveNewsRoutes.js
const express = require('express');
const router = express.Router();
const PositiveNewsController = require('../controllers/positiveNewsController');

router.get('/', PositiveNewsController.getPositiveNews);

module.exports = router;
