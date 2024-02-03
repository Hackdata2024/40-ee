// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    emergency_contact_name: { type: String },
    emergency_contact_phone: { type: String },
    relationship_to_emergency_contact: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['senior', 'caregiver', 'admin'], required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
