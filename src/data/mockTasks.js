const mockTasks = [
  // To do
  {
    id: 1,
    title: "Design the login screen",
    status: "todo",
    assignee: "NK",
    dueDate: "Fri",
    conflict: false,
  },
  {
    id: 2,
    title: "Write API contract doc",
    status: "todo",
    assignee: "RS",
    dueDate: "Mon",
    conflict: false,
  },
  {
    id: 3,
    title: "Set up Docker compose",
    status: "todo",
    assignee: "TP",
    dueDate: "Wed",
    conflict: false,
  },

  // Doing
  {
    id: 4,
    title: "Wire tasks to MongoDB",
    status: "doing",
    assignee: "DL",
    dueDate: "Today",
    conflict: true,
  },
  {
    id: 5,
    title: "Build AddTaskForm",
    status: "doing",
    assignee: "NK",
    dueDate: "Today",
    conflict: false,
  },

  // Done
  {
    id: 6,
    title: "Scaffold Vite project",
    status: "done",
    assignee: "RS",
    dueDate: "Mon",
    conflict: false,
  },
  {
    id: 7,
    title: "Add JWT login route",
    status: "done",
    assignee: "TP",
    dueDate: "Fri",
    conflict: false,
  },
];

export default mockTasks;
