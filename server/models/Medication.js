// server/models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  medication_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true },
  name: { type: String, required: true },
  dosage: { type: String },
  frequency: { type: String },
  intake_times: { type: [Date] },
  reminder_enabled: { type: Boolean, default: false },
  last_taken: { type: Date },
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
