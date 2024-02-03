// server/models/User.js
const mongoose = require('mongoose');

const emergencyContactSchema = new mongoose.Schema({
    name: { type: String , required: true},
    phone: { type: String , required: true},
    relationship: { type: String },
  });

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true},
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phoneNumber: { type: String, required: true},
    emergencyContact: [emergencyContactSchema],
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
