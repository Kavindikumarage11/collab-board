// src/api/tasks.js

const API_URL = "/api/tasks";

export async function fetchTasks() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export async function createTask(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
}

export async function updateTask(taskId, updates) {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  return response.json();
}

export function filterTasks(tasks, search = "", memberId = "all") {
  const query = search.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch =
      !query || task.title.toLowerCase().includes(query);

    const matchesMember =
      memberId === "all" || task.assigneeId === memberId;

    return matchesSearch && matchesMember;
  });
}

export function groupTasksByStatus(tasks) {
  return {
    todo: tasks.filter((task) => task.status === "todo"),
    doing: tasks.filter((task) => task.status === "doing"),
    done: tasks.filter((task) => task.status === "done"),
  };
}
