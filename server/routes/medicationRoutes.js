const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

router.get('/', medicationController.getAllMedications);
router.get('/:medicationId', medicationController.getMedicationById);
router.post('/', medicationController.addMedication);
router.put('/:medicationId', medicationController.updateMedication);
router.delete('/:medicationId', medicationController.deleteMedication);

module.exports = router;