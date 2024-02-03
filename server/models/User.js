// server/models/User.js
const mongoose = require('mongoose');
const EmergencyContact = require('./EmergencyContact');

const userSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date, default: null },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    emergency_contact: [EmergencyContact],
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
