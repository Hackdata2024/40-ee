// server/controllers/emergencyController.js
const Emergency = require('../models/EmergencyContact');

const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmergencyById = async (req, res) => {
  const emergencyId = parseInt(req.params.emergencyId);
  try {
    const emergency = await Emergency.findOne({ emergency_id: emergencyId });
    if (!emergency) {
      return res.status(404).json({ error: 'Emergency not found' });
    }
    res.json(emergency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more emergency controllers as needed

module.exports = {
  getAllEmergencies,
  getEmergencyById,
  // Add more exported functions as needed
};
