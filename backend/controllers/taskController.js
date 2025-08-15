import Task from "../models/Task.js";

// Get all tasks for user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};