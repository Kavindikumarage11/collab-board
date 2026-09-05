export const fetchTasks = async () => {
  try {
    const response = await fetch('/api/tasks');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
