import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskReminder = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://10.6.3.187:5000/api/tasks');
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-reminder">
      <div className="flex items-center justify-center h-full">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
      </div>
      <ul className="pl-4">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span className={` ${task.done ? "line-through" : ""}`}>
              {task.title} - Due Date:{" "}
              {new Date(task.due_date).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
              })}
            </span>
          </li>
        ))}
      </ul>
      <Link to="/task-reminders">
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: "#fe9e0d" }}
        >
          Manage Tasks
        </button>
      </Link>
    </div>
  );
};

export default TaskReminder;
