// server/controllers/medicationController.js
const Medication = require('../models/Medication');

const getAllMedications = async (req, res) => {
    try {
        const medications = await Medication.find();
        res.json(medications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMedicationById = async (req, res) => {
    const medicationId = parseInt(req.params.medicationId);
    try {
        const medication = await Medication.findOne({ medication_id: medicationId });
        if (!medication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.json(medication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add more medication controllers as needed

module.exports = {
    getAllMedications,
    getMedicationById,
    // Add more exported functions as needed
};
