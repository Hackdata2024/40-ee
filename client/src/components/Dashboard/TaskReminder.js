// src/components/TaskReminder.js

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const TaskReminder = () => {
  // Dummy tasks for layout. Replace with actual tasks.
  const tasks = [
    { title: "Water the plants", done: false },
    { title: "Walk the dog", done: true },
    // Add more tasks...
  ];

  return (
    <div className="task-reminder">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span className={task.done ? "line-through" : ""}>
              {task.title}
            </span>
            <input type="checkbox" checked={task.done} onChange={() => {}} />
          </li>
        ))}
      </ul>
      <Link to="/task-reminders">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Manage Tasks
        </button>
      </Link>
    </div>
  );
};

export default TaskReminder;
