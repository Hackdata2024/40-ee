// server/models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String, required: true},
  reminders_enabled: { type: Boolean, default: true },
  last_taken: { type: Date, default: null },
  end_date: { type: Date, default: null },
  intake_times: { type: [String], match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ , required: true },
  days_of_week: { type: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }],
    default: undefined,  
  },
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
