import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaClock } from "react-icons/fa";
import axios from 'axios';

const TaskReminders = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [newTaskReminderTime, setNewTaskReminderTime] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://10.6.3.187:5000/api/tasks');
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    console.log("Hello");
    console.log(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskReminderTime);
    if (!newTaskTitle.trim()) return;

    const reminderDate = new Date();
    const [hours, minutes] = newTaskReminderTime.split(':');
    reminderDate.setHours(hours, minutes);

  
    try {
      const response = await axios.post('http://10.6.3.187:5000/api/tasks', {
        user_id: 1,
        task_id: 4,
        title: newTaskTitle,
        description: newTaskDescription,
        due_date: newTaskDueDate,
        reminder_time: reminderDate,
        completed: false,
      });

      const newTask = response.data;
      setTasks([...tasks, newTask]);

      setNewTaskTitle("");
      setNewTaskDescription("");
      setNewTaskDueDate("");
      setNewTaskReminderTime("");
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };


  const toggleTaskCompletion = async (id) => {
    try {
      await axios.patch(`http://10.6.3.187:5000/api/tasks/${id}`, {
        completed: !tasks.find((task) => task.task_id === id).completed,
      });

      setTasks(
        tasks.map((task) =>
          task.task_id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const removeTask = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://10.6.3.187:5000/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task.task_id !== id));
    } catch (error) {
      console.error('Error removing task:', error);
    }
  };

  const startEditing = (id) => {
    setEditingId(id);
    const task = tasks.find((task) => task.task_id === id);
    setEditTitle(task.title);
  };

  const handleEditChange = (e) => {
    setEditTitle(e.target.value);
  };

  const saveEdit = async (id) => {
    try {
      await axios.patch(`http://10.6.3.187:5000/api/tasks/${id}`, {
        title: editTitle,
      });

      setTasks(
        tasks.map((task) =>
          task.task_id === id ? { ...task, title: editTitle } : task
        )
      );
      setEditingId(null);
      setEditTitle("");
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };

  const calculateRemainingTime = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diff = due - now;

    if (diff <= 0) {
      return "Task is due";
    }

    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes remaining`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-center">Task Reminders</h2>
      <div>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add a new task title..."
            className="input text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <textarea
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Add a description..."
            className="input text-base border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows="2"
          ></textarea>
          <input
            type="date"
            value={newTaskDueDate}
            onChange={(e) => setNewTaskDueDate(e.target.value)}
            className="input border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="time"
            value={newTaskReminderTime}
            onChange={(e) => setNewTaskReminderTime(e.target.value)}
            className="input border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={addTask}
          className="btn bg-[#fe9e0d] hover:bg-[#d8900f] text-white w-full transition duration-200 ease-in-out"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.task_id}
            className={`bg-gray-100 rounded-md overflow-hidden shadow ${task.completed ? "opacity-75" : ""
              }`}
          >
            <div className="p-4 flex justify-between items-center">
              <div className="flex-1">
                {editingId === task.task_id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={handleEditChange}
                    className="input text-base w-full"
                  />
                ) : (
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.task_id)}
                      className="form-checkbox rounded text-blue-500 h-5 w-5"
                    />
                    <span
                      className={`text-lg ${task.completed
                        ? "text-gray-500 line-through"
                        : "text-gray-800"
                        }`}
                    >
                      {task.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {editingId === task.task_id ? (
                  <button
                    onClick={() => saveEdit(task.task_id)}
                    className="btn bg-blue-500 hover:bg-blue-700 text-white"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => startEditing(task.task_id)}
                      className="btn p-2 rounded-full bg-[#fe9e0d] hover:bg-[#d8900f] text-white flex items-center justify-center"
                    >
                      <FaEdit className="h-5 w-5" />{" "}
                      {/* Adjust size as needed */}
                    </button>
                    <button
                      onClick={() => {
                        console.log("A");
                        removeTask(task.task_id)}}
                      className="btn p-2 rounded-full bg-red-500 hover:bg-red-700 text-white flex items-center justify-center text-lg"
                    >
                      <FaTrashAlt className="h-5 w-5" />{" "}
                      {/* Adjust size as needed */}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="bg-gray-200 text-sm text-gray-700 p-4 flex items-center">
              <FaClock className="mr-2 text-[#fe9e0d]" />
              <span>{calculateRemainingTime(task.due_date)}</span>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No tasks added yet.</p>
      )}
    </div>
  );
};

export default TaskReminders;
