import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import mockTasks from './data/mockTasks';
import BoardPage from './pages/BoardPage';
import TaskDetailPage from './pages/TaskDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddTaskForm from './components/AddTaskForm';
import Button from './components/Button';

// Main Layout Component for Board View
function MainBoardView({ tasks, onAddTask, searchTerm, setSearchTerm, memberFilter, setMemberFilter }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter tasks based on search query and member
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMember = memberFilter === 'all' || task.assignee === memberFilter;
    return matchesSearch && matchesMember;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wide">SyncBoard</span>
          <span className="text-xs bg-emerald-950 text-emerald-400 px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> 3 online
          </span>
        </div>

        <div className="flex gap-2 flex-1 max-w-md min-w-[220px]">
          <input
            type="text"
            placeholder="Search tasks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-600"
          />
          <select
            value={memberFilter}
            onChange={(e) => setMemberFilter(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none focus:border-blue-600 w-32"
          >
            <option value="all">All members</option>
            <option value="NK">NK</option>
            <option value="RS">RS</option>
            <option value="TP">TP</option>
            <option value="DL">DL</option>
          </select>
        </div>

        <Button onClick={() => setIsModalOpen(true)}>New task</Button>
      </header>

      {/* Board Page Integration */}
      <BoardPage tasks={filteredTasks} />

      {/* Footer Status Indicators */}
      <div className="mt-8 flex gap-6 text-xs text-gray-500">
        <span>🔌 WebSocket connected</span>
        <span>☁ Cached offline</span>
      </div>

      {/* Add Task Modal */}
      <AddTaskForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={onAddTask}
      />
    </div>
  );
}

// Root App Component with Routing
function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [memberFilter, setMemberFilter] = useState('all');

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainBoardView
              tasks={tasks}
              onAddTask={handleAddTask}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              memberFilter={memberFilter}
              setMemberFilter={setMemberFilter}
            />
          }
        />
        <Route path="/task/:taskId" element={<TaskDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;