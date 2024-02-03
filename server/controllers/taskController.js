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

const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.json(savedTask); // Returning the saved task directly
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateTask = async (req, res) => {
    const taskId = parseInt(req.params.taskId);
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { task_id: taskId },
            { $set: req.body },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const taskId = parseInt(req.params.taskId);
    try {
        const deletedTask = await Task.findOneAndDelete({ task_id: taskId });
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(deletedTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
