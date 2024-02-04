// server/controllers/userController.js
const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const userId = parseInt(req.params.userId);
    try {
        const user = await User.findOne({ user_id: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const { firstName, lastName, dateOfBirth, email, phoneNumber, emergencyContact, password } = req.body;
    try {
        const newUser = new User({
            firstName,
            lastName,
            dateOfBirth,
            email,
            phoneNumber,
            emergencyContact,
            password,
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Add more user controllers as needed

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    // Add more exported functions as needed
};
