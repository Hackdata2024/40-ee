// server/routes/index.js
const express = require('express');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const medicationRoutes = require('./medicationRoutes');
const positiveNewsRoutes = require('./positiveNewsRoutes');
// const emergencyRoutes = require('./emergencyRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/medications', medicationRoutes);
router.use('/positive-news', positiveNewsRoutes);
// router.use('/emergencies', emergencyRoutes);

module.exports = router;
