import { initialTasks } from '../models/Task.js';

export const getTasks = (req, res) => {
  try {
    res.status(200).json(initialTasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
  }
};