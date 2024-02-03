// server/controllers/taskController.js
const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById = async (req, res) => {
    const taskId = parseInt(req.params.taskId);
    try {
        const task = await Task.findOne({ task_id: taskId });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add more task controllers as needed

module.exports = {
    getAllTasks,
    getTaskById,
    // Add more exported functions as needed
};
