import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const tasks = [
  { id: 1, title: "Design the login screen", status: "todo", assignee: "NK", dueDate: "Fri" },
  { id: 2, title: "Write API contract doc", status: "todo", assignee: "RS", dueDate: "Mon" },
  { id: 3, title: "Set up Docker compose", status: "doing", assignee: "TP", dueDate: "Wed" },
  { id: 4, title: "Wire tasks to MongoDB", status: "doing", assignee: "DL", dueDate: "Today" },
  { id: 5, title: "Build AddTaskForm", status: "done", assignee: "NK", dueDate: "Today" }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});