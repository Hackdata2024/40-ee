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
    const medicationId = req.params.medicationId;
    try {
        const medication = await Medication.findById(medicationId);
        if (!medication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.json(medication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addMedication = async (req, res) => {
    const { user_id, name, dosage, remindersEnabled, endDate, intakeTimes, daysOfWeek } = req.body;
    try {
        const newMedication = new Medication({
            user_id,
            name,
            dosage,
            remindersEnabled,
            endDate,
            intakeTimes,
            daysOfWeek,
        });
        const savedMedication = await newMedication.save();
        res.json(savedMedication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateMedication = async (req, res) => {
    const medicationId = req.params.medicationId;
    const { name, dosage, remindersEnabled, endDate, intakeTimes, daysOfWeek } = req.body;
    try {
        const updatedMedication = await Medication.findByIdAndUpdate(
            medicationId,
            {
                name,
                dosage,
                remindersEnabled,
                endDate,
                intakeTimes,
                daysOfWeek,
            },
            { new: true }
        );
        if (!updatedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.json(updatedMedication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteMedication = async (req, res) => {
    const medicationId = req.params.medicationId;
    try {
        const deletedMedication = await Medication.findByIdAndDelete(medicationId);
        if (!deletedMedication) {
            return res.status(404).json({ error: 'Medication not found' });
        }
        res.json(deletedMedication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMedications,
    getMedicationById,
    addMedication,
    updateMedication,
    deleteMedication,
    // Add more exported functions as needed
};
