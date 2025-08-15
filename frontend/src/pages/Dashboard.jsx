import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/tasks", { title }, {
        headers: { "Content-Type": "application/json" },
      });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t._id === id);
    try {
      await axios.put(
        `http://localhost:5001/api/tasks/${id}`,
        { completed: !task.completed },
        { headers: { "Content-Type": "application/json" } }
      );
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="intro">
        <h1>Welcome to Task Tracker!</h1>
        <p>
          Keep your tasks organized and stay productive. Add, complete, or
          delete tasks easily.
        </p>
      </div>

      <form className="task-input-container" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="tasks-list">
        {tasks.length === 0 && (
          <p style={{ textAlign: "center" }}>No tasks yet! Add one above.</p>
        )}
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;