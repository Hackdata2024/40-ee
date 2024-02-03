import React, { useState } from 'react';

const TaskReminders = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Task Reminders</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border rounded-md py-2 px-3 mr-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task..."
                />
                <button
                    onClick={addTask}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200 ease-in-out"
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={`flex items-center justify-between mb-2 p-2 ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <span
                            className={`flex-1 ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}
                            onClick={() => toggleTaskCompletion(task.id)}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => removeTask(task.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full text-sm"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && <p className="text-gray-500 text-center">No tasks added yet.</p>}
        </div>
    );
};

export default TaskReminders;
