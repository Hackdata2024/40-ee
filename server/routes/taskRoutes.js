// server/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/:taskId', taskController.getTaskById);
// Add more task routes as needed

module.exports = router;
