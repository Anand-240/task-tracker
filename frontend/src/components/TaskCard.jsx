// 2️⃣ TaskCard.jsx
import React from "react";

function TaskCard({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-card">
      <h4 className={`task-title ${task.completed ? "completed" : ""}`}>
        {task.title}
      </h4>
      <div>
        <button onClick={() => toggleComplete(task._id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;