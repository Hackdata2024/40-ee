// server/models/EmergencyContact.js
const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
  emergency_contact_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true },
  name: { type: String },
  phone: { type: String },
  relationship: { type: String },
});

const EmergencyContact = mongoose.model('EmergencyContact', emergencyContactSchema);

module.exports = EmergencyContact;
