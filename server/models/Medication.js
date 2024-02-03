// server/models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true},
  remindersEnabled: { type: Boolean, default: true },
  lastTaken: { type: Date, default: null },
  endDate: { type: Date, default: null },
  intakeTimes: { type: [String], match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ , required: true },
  daysOfWeek: { type: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }],
    default: undefined,  
  },
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
