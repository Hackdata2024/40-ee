// server/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  due_date: { type: Date },
  reminder_time: { type: Date },
  completed: { type: Boolean, default: false },
  notes: { type: String },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
