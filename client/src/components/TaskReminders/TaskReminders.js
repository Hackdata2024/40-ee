import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaClock } from "react-icons/fa";
import axios from "axios";

const TaskReminders = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [newTaskReminderTime, setNewTaskReminderTime] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/api/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(), // Simulating task_id
      user_id: 1, // Static user_id, in a real app, this would come from user session
      title: newTaskTitle,
      description: newTaskDescription,
      due_date: newTaskDueDate,
      reminder_time: newTaskReminderTime,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setNewTaskDueDate("");
    setNewTaskReminderTime("");
  };

  const toggleTaskCompletion = (id) => {
    console.log("Toggling completion for task:", id);
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    console.log("Updated tasks:", updatedTasks);
    setTasks(updatedTasks);
  };

  const removeTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      // Log or handle the error if the request fails
      console.error("Error removing task:", error);
      // Optionally, display a message to the user indicating that the task could not be deleted
    }
  };

  const startEditing = (id) => {
    setEditingId(id);
    const task = tasks.find((task) => task.id === id);
    setEditTitle(task.title);
  };

  const handleEditChange = (e) => {
    setEditTitle(e.target.value);
  };

  const saveEdit = async (id) => {
    try {
      // Send a PUT request to the server
      const updatedTask = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {
          title: editTitle,
        }
      );

      // If the request is successful, update the task in the state
      setTasks(tasks.map((task) => (task.id === id ? updatedTask.data : task)));
    } catch (error) {
      // Handle the error
      console.error("Error updating task:", error);
    }

    setEditingId(null);
    setEditTitle("");
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
          className="btn bg-blue-500 hover:bg-blue-700 text-white w-full transition duration-200 ease-in-out"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`bg-white rounded-md overflow-hidden shadow-lg ${
              task.completed
                ? "border-green-500 border-2"
                : "border-gray-200 border-2"
            }`}
          >
            <div className="p-4 flex justify-between items-start">
              <div className="flex-1">
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={handleEditChange}
                    className="input text-base w-full"
                  />
                ) : (
                  <div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="form-checkbox rounded text-blue-500 h-5 w-5"
                      />
                      <span
                        className={`text-lg ${
                          task.completed
                            ? "text-gray-500 line-through"
                            : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                    {/* Display task description */}
                    <p className="text-sm text-gray-600 mt-2">
                      {task.description}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2">
                {editingId === task.id ? (
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="btn bg-blue-500 hover:bg-blue-700 text-white"
                  >
                    Save
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEditing(task.id)}
                      className="btn p-2 rounded-full bg-yellow-500 hover:bg-yellow-700 text-white flex items-center justify-center"
                    >
                      <FaEdit className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => removeTask(task.id)}
                      className="btn p-2 rounded-full bg-red-500 hover:bg-red-700 text-white flex items-center justify-center"
                    >
                      <FaTrashAlt className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-200 text-sm text-gray-700 p-4 flex items-center">
              <FaClock className="mr-2" />
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
