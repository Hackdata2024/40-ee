// server/routes/medicationRoutes.js
const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

router.get('/', medicationController.getAllMedications);
router.get('/:medicationId', medicationController.getMedicationById);
// Add more medication routes as needed

module.exports = router;
