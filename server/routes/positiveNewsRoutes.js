// server/routes/positiveNewsRoutes.js
const express = require('express');
const router = express.Router();

// const positiveNewsController = require('../controllers/positiveNewsController');

router.get('/', positiveNewsController.getAllPositiveNews);
router.get('/:newsId', positiveNewsController.getPositiveNewsById);
// Add more positive news routes as needed

module.exports = router;
