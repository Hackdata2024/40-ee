// server/routes/emergencyRoutes.js
const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');

router.get('/', emergencyController.getAllEmergencies);
router.get('/:emergencyId', emergencyController.getEmergencyById);
// Add more emergency routes as needed

module.exports = router;
