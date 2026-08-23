import React, { useMemo, useState } from "react";

function BoardPage() {
  const [search, setSearch] = useState("");

  const [tasks] = useState([
    {
      id: 1,
      title: "Design the login screen",
      assignee: "NK",
      dueDate: "Fri",
      status: "To Do",
    },
    {
      id: 2,
      title: "Write API contract doc",
      assignee: "RS",
      dueDate: "Mon",
      status: "To Do",
    },
    {
      id: 3,
      title: "Set up Docker compose",
      assignee: "TP",
      dueDate: "Wed",
      status: "To Do",
    },
    {
      id: 4,
      title: "Wire tasks to MongoDB",
      assignee: "DL",
      dueDate: "Today",
      status: "Doing",
      warning: "Conflict detected",
    },
    {
      id: 5,
      title: "Build AddTaskForm",
      assignee: "NK",
      dueDate: "Today",
      status: "Doing",
    },
    {
      id: 6,
      title: "Scaffold Vite project",
      assignee: "RS",
      dueDate: "Mon",
      status: "Done",
    },
    {
      id: 7,
      title: "Add JWT login route",
      assignee: "TP",
      dueDate: "Fri",
      status: "Done",
      success: "WebSocket connected",
    },
    {
      id: 8,
      title: "Cache offline tasks",
      assignee: "DL",
      dueDate: "Today",
      status: "Done",
      success: "Cached offline",
    },
    {
      id: 9,
      title: "Create task filters",
      assignee: "NK",
      dueDate: "Thu",
      status: "Done",
    },
  ]);

  const filteredTasks = useMemo(() => {
    const searchText = search.toLowerCase().trim();
    if (!searchText) return tasks;

    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchText) ||
        task.assignee.toLowerCase().includes(searchText) ||
        task.status.toLowerCase().includes(searchText)
    );
  }, [search, tasks]);

  const todoTasks = filteredTasks.filter((task) => task.status === "To Do");
  const doingTasks = filteredTasks.filter((task) => task.status === "Doing");
  const doneTasks = filteredTasks.filter((task) => task.status === "Done");

  // Helper to generate consistent colors based on initials
  const getAvatarColor = (name) => {
    const colors = [
      "linear-gradient(135deg, #fca5a5, #ef4444)", // Red
      "linear-gradient(135deg, #93c5fd, #3b82f6)", // Blue
      "linear-gradient(135deg, #c4b5fd, #8b5cf6)", // Purple
      "linear-gradient(135deg, #fcd34d, #f59e0b)", // Yellow
      "linear-gradient(135deg, #6ee7b7, #10b981)", // Green
    ];
    const charCode = name.charCodeAt(0) || 0;
    return colors[charCode % colors.length];
  };

  const renderTaskCard = (task) => {
    return (
      <div className="task-card" key={task.id}>
        <div className="task-card-header">
          <div className="task-badges">
            <span className={`status-dot ${task.status.replace(/\s+/g, '-').toLowerCase()}`}></span>
            <span className="task-id">TASK-{task.id}</span>
          </div>
          <button className="task-menu">⋮</button>
        </div>

        <h3 className="task-title">{task.title}</h3>

        {(task.warning || task.success) && (
          <div className="task-alerts">
            {task.warning && <span className="alert warning">⚠️ {task.warning}</span>}
            {task.success && <span className="alert success">✨ {task.success}</span>}
          </div>
        )}

        <div className="task-footer">
          <div className="task-meta">
            <span className="due-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {task.dueDate}
            </span>
          </div>
          <div 
            className="avatar" 
            style={{ background: getAvatarColor(task.assignee) }}
            title={`Assigned to ${task.assignee}`}
          >
            {task.assignee}
          </div>
        </div>
      </div>
    );
  };

  const renderColumn = (title, columnTasks, icon) => {
    return (
      <section className="board-column" key={title}>
        <div className="column-header">
          <div className="column-title">
            <span className="column-icon">{icon}</span>
            <h2>{title}</h2>
            <span className="task-count">{columnTasks.length}</span>
          </div>
          <button className="add-quick-task">+</button>
        </div>

        <div className="column-tasks">
          {columnTasks.length > 0 ? (
            columnTasks.map(renderTaskCard)
          ) : (
            <div className="empty-column">
              <div className="empty-icon">☕</div>
              <p>Nothing here yet</p>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="board-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .board-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          color: #0f172a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 32px;
        }

        /* Navbar & Header */
        .board-header {
          max-width: 1400px;
          margin: 0 auto 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          padding: 16px 24px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          gap: 20px;
        }

        .brand-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-section h1 {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #4f46e5, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .online-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #0f172a;
          background: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .online-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Controls */
        .board-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .search-container {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }

        .search-box {
          width: 280px;
          padding: 10px 16px 10px 40px;
          border: 1px solid transparent;
          border-radius: 12px;
          outline: none;
          background: white;
          font-size: 14px;
          font-family: inherit;
          color: #334155;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          transition: all 0.2s ease;
        }

        .search-box:focus {
          border-color: #818cf8;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }

        .new-task-button {
          border: none;
          border-radius: 12px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #4f46e5, #4338ca);
          color: white;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .new-task-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
        }

        /* Columns */
        .board {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        .board-column {
          background: rgba(248, 250, 252, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid white;
          border-radius: 20px;
          padding: 20px;
          min-height: calc(100vh - 160px);
          display: flex;
          flex-direction: column;
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 0 4px;
        }

        .column-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .column-icon {
          font-size: 18px;
        }

        .column-title h2 {
          font-size: 16px;
          font-weight: 700;
          color: #334155;
        }

        .task-count {
          background: #e2e8f0;
          color: #475569;
          font-size: 12px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .add-quick-task {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 20px;
          cursor: pointer;
          border-radius: 8px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .add-quick-task:hover {
          background: #e2e8f0;
          color: #334155;
        }

        .column-tasks {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        /* Cards */
        .task-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
          cursor: grab;
          position: relative;
        }

        .task-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .task-card:active {
          cursor: grabbing;
        }

        .task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .task-badges {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .status-dot.to-do { background: #cbd5e1; }
        .status-dot.doing { background: #f59e0b; }
        .status-dot.done { background: #10b981; }

        .task-id {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.5px;
        }

        .task-menu {
          background: transparent;
          border: none;
          color: #cbd5e1;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.2s;
        }

        .task-menu:hover {
          color: #64748b;
        }

        .task-title {
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .task-alerts {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .alert {
          font-size: 11px;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
        }

        .alert.warning {
          background: #fffbeb;
          color: #d97706;
          border: 1px solid #fef3c7;
        }

        .alert.success {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #d1fae5;
        }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px dashed #e2e8f0;
        }

        .task-meta {
          display: flex;
          align-items: center;
        }

        .due-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }

        .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border: 2px solid white;
        }

        .empty-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 120px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px dashed #cbd5e1;
          border-radius: 16px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
        }

        .empty-icon {
          font-size: 24px;
          margin-bottom: 8px;
          opacity: 0.5;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .board {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .board-header {
            flex-direction: column;
            align-items: stretch;
            padding: 20px;
          }

          .board-actions {
            flex-direction: column;
            width: 100%;
          }

          .search-box {
            width: 100%;
          }

          .board {
            grid-template-columns: 1fr;
          }

          .board-page {
            padding: 16px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="board-header">
        <div className="brand-section">
          <h1>SyncBoard</h1>
          <div className="online-status">
            <span className="online-dot"></span>
            3 online
          </div>
        </div>

        <div className="board-actions">
          <div className="search-container">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              className="search-box"
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <button className="new-task-button" type="button">
            <span>+</span> New Task
          </button>
        </div>
      </header>

      {/* Three columns */}
      <main className="board">
        {renderColumn("To Do", todoTasks, "📌")}
        {renderColumn("Doing", doingTasks, "⚡")}
        {renderColumn("Done", doneTasks, "✅")}
      </main>
    </div>
  );
}

export default BoardPage;