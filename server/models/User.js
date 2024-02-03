// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true},
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phoneNumber: { type: String, required: true},
    emergencyContact: [{
        name: { type: String , required: true},
        phone: { type: String , required: true},
        relationship: { type: String },
      }],
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
