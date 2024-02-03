// server/routes/index.js
const express = require('express');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const medicationRoutes = require('./medicationRoutes');
const emergencyRoutes = require('./emergencyRoutes');
// const positiveNewsRoutes = require('./positiveNewsRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/medications', medicationRoutes);
router.use('/emergencies', emergencyRoutes);
// router.use('/positive-news', positiveNewsRoutes);

module.exports = router;
